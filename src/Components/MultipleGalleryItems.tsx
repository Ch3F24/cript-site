import { useEffect, useState } from "react";

const MultipleGalleryItems: React.FC<{isVideo?: boolean, images: string[], isStrech: boolean}> = ({ isVideo = false, images, isStrech }) => {

    const [selected, setSelected] = useState<string>('');
    
    const isLastImage = (): boolean => {
        return images.indexOf(selected) === images.length - 1;
    }
    
    const isFirstImage = (): boolean => {
        return images.indexOf(selected) === 0;
    }

    useEffect(() => {
        setSelected(images[0])
    },[images])

    const handlePrevImage = () => {
        !isFirstImage() && setSelected(images[images.indexOf(selected) - 1])
    }

    const handleNextImage = () => {
        !isLastImage() && setSelected(images[images.indexOf(selected) + 1])
    }
    return (
        <>
            {images.length > 0 && isStrech &&
                <div className="absolute top-1/2 -left-[100px] -translate-y-1/2 cursor-pointer" onClick={handlePrevImage}>
                    <svg width="84" height="110" viewBox="0 0 84 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.460938 54.8696C0.469938 109.364 55.1479 109.67 55.1479 109.67H83.6609V0.182617H55.1479C55.1479 0.182617 0.452938 0.375629 0.460938 54.8696Z" fill="#363722"/>
                    </svg>
                </div>
            }

            {isVideo || isVideo ?
                <video src={selected} className="w-auto h-full mx-auto select-none object-cover" loop autoPlay muted playsInline disablePictureInPicture></video>
                :
                <img src={selected} className="w-auto h-full mx-auto select-none object-cover" />
            }

            {images.length > 0 && isStrech &&
                <div className="absolute top-1/2 -right-[100px] -translate-y-1/2 cursor-pointer" onClick={handleNextImage}>
                    <svg width="84" height="110" viewBox="0 0 84 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M83.941 55.1018C83.932 0.607807 29.254 0.301758 29.254 0.301758H0.740967V109.789H29.254C29.254 109.789 83.95 109.596 83.941 55.1018Z" fill="#363722"/>
                    </svg>
                </div>
            }
        </>
    )
}

export default MultipleGalleryItems