"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useRef,
  type ReactNode,
} from "react";

type SoundContextType = {
  isMuted: boolean;
  toggleMute: () => void;
  volume: number;
  setVolume: (volume: number) => void;
  playSound: (type: string) => void;
  openSoundSettings: () => void;
  soundStatus: { loaded: string[]; failed: string[]; loading: string[] };
  reloadSounds: () => void;
  isAudioSupported: boolean;
};

// 默认上下文值
const defaultContext: SoundContextType = {
  isMuted: false,
  toggleMute: () => {},
  volume: 0.5,
  setVolume: () => {},
  playSound: () => {},
  openSoundSettings: () => {},
  soundStatus: { loaded: [], failed: [], loading: [] },
  reloadSounds: () => {},
  isAudioSupported: false,
};

const SoundContext = createContext<SoundContextType>(defaultContext);

// 音效频率映射（每种音效使用不同频率）
const soundFrequencies: Record<string, number> = {
  click: 880,
  expand: 660,
  close: 440,
  hover: 1100,
  success: 1320,
  error: 220,
  notification: 550,
  startup: 770,
  shutdown: 330,
  toggle: 990,
  slide: 660,
  gear: 440,
};

export function SoundProvider({ children }: { children: ReactNode }) {
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolumeState] = useState(0.5);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [isAudioSupported, setIsAudioSupported] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);

  // 检测客户端环境和音频支持
  useEffect(() => {
    setIsClient(true);
    try {
      const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
      audioCtxRef.current = ctx;
      setIsAudioSupported(true);
    } catch {
      setIsAudioSupported(false);
    }
  }, []);

  // 从本地存储加载音效设置
  useEffect(() => {
    if (!isClient) return;
    try {
      const saved = localStorage.getItem("nexus-sound-settings");
      if (saved) {
        const s = JSON.parse(saved);
        setIsMuted(s.isMuted ?? false);
        setVolumeState(s.volume ?? 0.5);
      }
    } catch {
      // 静默失败
    }
  }, [isClient]);

  // 保存音效设置
  const saveSettings = useCallback(() => {
    if (!isClient) return;
    try {
      localStorage.setItem(
        "nexus-sound-settings",
        JSON.stringify({ isMuted, volume }),
      );
    } catch {
      // 静默失败
    }
  }, [isClient, isMuted, volume]);

  useEffect(() => {
    saveSettings();
  }, [isMuted, volume, saveSettings]);

  // 使用 Web Audio API 生成音效
  const playBeep = useCallback(
    (freq: number) => {
      const ctx = audioCtxRef.current;
      if (!ctx || isMuted) return;

      try {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, ctx.currentTime);
        gain.gain.setValueAtTime(0, ctx.currentTime);
        gain.gain.linearRampToValueAtTime(
          volume * 0.15,
          ctx.currentTime + 0.01,
        );
        gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.12);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.12);
      } catch {
        // 静默失败
      }
    },
    [isMuted, volume],
  );

  const toggleMute = useCallback(() => {
    setIsMuted((prev) => !prev);
  }, []);

  const setVolume = useCallback((newVolume: number) => {
    setVolumeState(newVolume);
  }, []);

  // 播放音效
  const playSound = useCallback(
    (type: string) => {
      const freq = soundFrequencies[type] || 660;
      playBeep(freq);
    },
    [playBeep],
  );

  const openSoundSettings = useCallback(() => {
    setIsSettingsOpen(true);
    playBeep(soundFrequencies.click);
  }, [playBeep]);

  const reloadSounds = useCallback(() => {
    playBeep(soundFrequencies.click);
  }, [playBeep]);

  // 简化版设置模态框
  const SoundSettingsModal = ({ onClose }: { onClose: () => void }) => (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-[#1F2127] border border-[#25272E] rounded-lg w-full max-w-md p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold">音效设置</h3>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#25272E]"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span>启用音效</span>
            <button
              onClick={toggleMute}
              className={`relative w-12 h-6 rounded-full transition-colors ${!isMuted ? "bg-[#FF6B3C]" : "bg-[#25272E]"}`}
            >
              <span className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${!isMuted ? "translate-x-7" : "translate-x-1"}`} />
            </button>
          </div>
          <div>
            <p className="mb-2">音量</p>
            <input type="range" min="0" max="1" step="0.01" value={volume} onChange={(e) => setVolume(Number(e.target.value))} className="w-full" />
          </div>
          <div className="mt-4 p-3 bg-[#25272E]/50 rounded-md text-sm">
            <p className="mb-2">音效系统状态:</p>
            <p>音频支持: {isAudioSupported ? "可用 (Web Audio API)" : "不可用"}</p>
          </div>
          <button onClick={reloadSounds} className="w-full py-2 bg-[#FF6B3C] text-black rounded-md">
            测试音效
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <SoundContext.Provider
      value={{
        isMuted,
        toggleMute,
        volume,
        setVolume,
        playSound,
        openSoundSettings,
        soundStatus: { loaded: [], failed: [], loading: [] },
        reloadSounds,
        isAudioSupported,
      }}
    >
      {children}
      {isSettingsOpen && isClient && (
        <SoundSettingsModal onClose={() => { setIsSettingsOpen(false); playBeep(soundFrequencies.click); }} />
      )}
    </SoundContext.Provider>
  );
}

export function useSound() {
  return useContext(SoundContext);
}
