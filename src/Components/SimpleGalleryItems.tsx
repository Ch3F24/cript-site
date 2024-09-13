interface ImageProps {
    title: Record<string, string>;
    description: {
        'hu': string[],
        'en': string[]
    };
    src: string;
    cover: string;
    images?: string[];
    is_video: boolean;
}

const SimpleGalleryItems: React.FC<{isVideo?: boolean, selected: ImageProps}> = ({ isVideo = false, selected }) => {

    return (
        <>
            {isVideo || selected?.is_video ?
                <video src={selected?.src} className="w-auto h-full mx-auto object-cover" loop autoPlay muted playsInline disablePictureInPicture></video>
                :
                <img src={selected?.src} className="w-auto h-full mx-auto object-cover" />
            }
        </>
    )
}

export default SimpleGalleryItems