import React, { createContext, useState, useContext, ReactNode } from 'react';

const VideoContext = createContext<null | HTMLVideoElement>(null);

export const VideoProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
    const [videoRef, setVideoRef] = useState<HTMLVideoElement>();


    const startVideo = () => {
        if (videoRef) {
            videoRef.play();
        }
    };

    return (
        <VideoContext.Provider value={{ setVideoRef, startVideo } as any}>
            {children}
        </VideoContext.Provider>
    );
};

export const useVideoContext = () => useContext(VideoContext) as any;