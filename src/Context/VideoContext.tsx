import React, { createContext, useState, useContext } from 'react';

const VideoContext = createContext<null | HTMLVideoElement>(null);

export const VideoProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
    const [videoRef, setVideoRef] = useState<HTMLVideoElement>();
    const [isPaused, setIsPaused] = useState(true);

    const startVideo = () => {
        if (videoRef) {
            videoRef.play();
            setIsPaused(false);

            videoRef.addEventListener('ended', () => {
                videoRef.currentTime = 0;
                setIsPaused(true);
            });
        }
    };

    const isPlaying = () => {
        return !videoRef?.paused
    }

    return (
        <VideoContext.Provider value={{ setVideoRef, startVideo, isPlaying, isPaused } as any}>
            {children}
        </VideoContext.Provider>
    );
};

export const useVideoContext = () => useContext(VideoContext) as any;