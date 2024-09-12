import React, { useRef, useState } from "react"
import ModalClose from "./ModalClose"
import videos from '../data/videos.json';
import { useTranslation } from "react-i18next";

interface Video {
    title: Record<'hu' | 'en' | 'ro', string>;
    description: Record<'hu' | 'en' | 'ro', string[]>;
    characters: Record<'hu' | 'en' | 'ro', string[][]>;
    src: string;
    cover: string;
}

const Movies:React.FC<{ closeModal: () => void }> = ({ closeModal }) => {
    const [selected, setSelected] = useState<null| Video>(null);
    const [isStrech, setIsStrech] = useState(false);
    const video = useRef<HTMLVideoElement>(null);
    const { i18n } = useTranslation()

    const videoList = videos as Video[];

    const handleClose = () => {
        closeModal()
    }

    const handleStrech = () => {
        setIsStrech(() => {
            return !isStrech
        })
    }

    const handleSelect = (key: number) => {
        if(!video.current?.paused) video.current?.pause()
        if (video.current) video.current.currentTime = 0
        setSelected(videoList[key])
    }

    // useEffect(() => {
    //     setSelected(videoList[0])
    // },[videoList])

    return (
        <div className="relative h-full flex flex-col">
            <div className="flex items-center justify-center relative">

                <h2 className="uppercase text-[80px] text-fuscous-grayd leading-none">Filmek</h2>

                <ModalClose closeModal={handleClose} />

            </div>

            <div className="relative flex-1">

                <div className="flex flex-col h-full pt-10 pb-20">
                    
                    {selected && <div className="flex-1 relative">                                

                        <div className="absolute top-0 left-0 w-full h-full flex gap-x-14 items-start">
                            <div className={isStrech ? 'hidden' : 'w-1/5'}>
                                <h1 className="text-fuscous-grayd text-2xl">{selected?.title[i18n.resolvedLanguage as 'hu' | 'en' | 'ro']}</h1>

                                {selected?.characters && selected?.characters[i18n.resolvedLanguage as 'hu' | 'en' | 'ro'].map((item, itemIndex) => (
                                    <div key={itemIndex} className="mt-4">
                                        {item.map((character, index) => (
                                            <p className="text-fuscous-grayd text-2xl" key={index}>{character}</p>
                                        ))}
                                    </div>
                                ))}
                            </div>
                            
                            <div className="h-full mx-auto relative">
                                <video ref={video} className="w-auto h-full mx-auto" src={selected?.src} autoPlay playsInline controls >
                                    <track
                                        label="English"
                                        kind="subtitles"
                                        srcLang="en"
                                        src={selected?.src ? `movies/srt/${selected.src.split('/').pop()!.split('.')[0]}_eng.vtt` : ''} />
                                    <track
                                        label="Romanian"
                                        kind="subtitles"
                                        srcLang="ro"
                                        src={selected?.src ? `movies/srt/${selected.src.split('/').pop()!.split('.')[0]}_ro.vtt` : ''} />
                                </video>

                                <svg onClick={handleStrech} className="absolute top-6 right-6" width="80" height="81" viewBox="0 0 80 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.7" d="M13.299 72.5078L13.285 72.4948L45.62 72.5098C47.085 72.5128 48.268 74.2098 48.266 76.2998C48.261 78.3908 47.071 80.0838 45.606 80.0808L12.9611 80.0177L10.2581 80.1567L5.54895 80.1517C2.62595 80.1487 0.258963 77.7758 0.261963 74.8528L0.276001 61.7318L0.249023 59.5458L0.365967 34.7268C0.373967 33.2618 2.07294 32.0828 4.16394 32.0928C6.25494 32.1028 7.94501 33.2977 7.93701 34.7627L7.78296 67.3177L44.5179 30.5338L66.8101 8.2417L66.824 8.25476L34.489 8.23877C33.024 8.23577 31.841 6.53873 31.843 4.44873C31.848 2.35773 33.0381 0.664701 34.5031 0.668701L67.1479 0.731812L69.851 0.591797L74.5601 0.596802C77.4831 0.600802 79.85 2.97275 79.847 5.89575L79.833 19.0167L79.86 21.2028L79.743 46.0217C79.735 47.4867 78.0359 48.6658 75.9449 48.6558C73.8539 48.6458 72.164 47.4507 72.172 45.9857L72.326 13.3397V13.4308L49.998 35.7598L13.299 72.5078Z" fill="#54554A"/>
                                </svg>

                            </div>
                            
                            <div className={isStrech ? 'hidden' : 'w-1/5'}>
                                {selected?.description && selected?.description[i18n.resolvedLanguage as  'hu' | 'en' | 'ro'].map((item) => {
                                    return <p className="text-fuscous-grayd text-2xl" key={item}>{item}</p>
                                })}
                                {/* <h1 className="text-fuscous-grayd text-2xl"></h1> */}
                            </div>
                        </div>
                        
                    </div>}

                    <div className={isStrech ? 'hidden' : 'mt-auto'}>
                        <div className="grid grid-cols-6 flex-wrap gap-x-8 gap-y-6 mt-6">
                            {videoList.map((video, i) => (
                                <div key={i}>
                                    <img src={video.cover} 
                                        className="w-full h-[156px] object-cover cursor-pointer" 
                                        alt="" 
                                        loading="lazy"
                                        onClick={() => handleSelect(i)}
                                        /> 
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Movies