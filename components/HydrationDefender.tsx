/**
 * @file HydrationDefender.tsx
 * @description 防御性hydration处理组件 - 处理浏览器扩展导致的DOM差异
 * @module components
 * @author YYC
 * @version 1.0.0
 * @created 2024-08-23
 */
'use client';

import { useEffect } from 'react';

interface HydrationDefenderProps {
  /** 超时时间（毫秒），超过此时间强制重新渲染 */
  timeout?: number;
}

/**
 * @description 防御性hydration处理组件
 * 用于解决浏览器扩展修改DOM导致的React hydration不匹配问题
 */
export const HydrationDefender: React.FC<HydrationDefenderProps> = ({
  timeout = 5000,
}) => {
  useEffect(() => {
    // 检查浏览器是否支持requestIdleCallback
    const scheduler = window.requestIdleCallback || 
      ((cb) => setTimeout(cb, 100));
    
    // 定义一个函数来处理浏览器扩展导致的DOM差异
    const handleBrowserExtensionModifications = () => {
      // 在hydration完成后，检测并清理可能由浏览器扩展添加的属性
      const body = document.querySelector('body');
      if (body) {
        // 记录所有可能由浏览器扩展添加的属性
        const extensionAttributes = [
          'data-liner-extension-version',
          'data-adblocker',
          'data-browser-extension',
          'data-extension-id',
        ];
        
        // 清理这些属性
        extensionAttributes.forEach(attr => {
          if (body.hasAttribute(attr)) {
            console.log(`检测并移除浏览器扩展属性: ${attr}`);
            body.removeAttribute(attr);
          }
        });
      }
    };
    
    // 在浏览器空闲时执行清理
    scheduler(handleBrowserExtensionModifications);
    
    // 设置超时保护，确保即使在资源紧张的情况下也能执行清理
    const timeoutId = setTimeout(handleBrowserExtensionModifications, timeout);
    
    return () => clearTimeout(timeoutId);
  }, [timeout]);
  
  return null;
};

export default HydrationDefender;