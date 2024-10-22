import { useState } from "react"
import { useTranslation } from "react-i18next";
import ModalClose from "./ModalClose";
import explorationData from '../data/exploration.json';
interface Data {
    src: string;
    // title: Record<string, string>;
    description: Record<string, string[]>;
}

const images: Data[] = explorationData
const descriptions: Record<string, string> = {
    'hu': 'A Szövérdi-Bethlen kripta feltárása, 2021 február<br/>Fotók: Maros Megyei Múzeum', 
    'ro': 'Excavarea criptei Szövérdi-Bethlen, februarie 2021<br/>Foto: Muzeul Județean Mureș', 
    'en': 'Excavation of the Szövérdi-Bethlen Crypt, February 2021<br/>Foto: Mureș County Museum' 
}

const Explorations:React.FC<{ closeModal: () => void }> = ({ closeModal }) => {
    const [selected, setSelected] = useState<null | Data>(null);
    const { i18n } = useTranslation()
    
    const handleSelect = (image: Data) => {
        setSelected(image)
    }

    const handleClose = () => {
        if (selected) {
            setSelected(null)
        } else {

            closeModal()
        }
    }

    const isLastImage = (): boolean => {
        return selected ? images.indexOf(selected) === images.length - 1 : false;
    }
    
    const isFirstImage = (): boolean => {
        return selected ? images.indexOf(selected) === 0 : false;
    }

    const handlePrevImage = () => {
        if (selected) {
            isFirstImage() ? setSelected(images[images.length - 1]) : setSelected(images[images.indexOf(selected) - 1])
        }
    }

    const handleNextImage = () => {
        if (selected) {
            isLastImage() ? setSelected(images[0]) : setSelected(images[images.indexOf(selected) + 1])
        }
    }
    return (
        <div className="relative h-full">
            <div className="flex items-center justify-center relative">

                <h2 className="uppercase text-[80px] text-fuscous-grayd leading-none">Feltárás</h2>

                <ModalClose closeModal={handleClose} />

            </div>

            <div className="relative">

                <div className="grid grid-cols-6 flex-wrap gap-x-8 gap-y-6 mt-12">
                    {images.map((image,i) => (
                        <div key={i}>
                            <img src={image.src} 
                                className="w-full h-[156px] object-cover cursor-pointer" 
                                alt="" 
                                loading="lazy"
                                onClick={() => handleSelect(image)}  /> 
                        </div>
                    ))}
                </div>

                {selected &&
                    <div className="absolute top-0 left-0 w-full h-full z-10 bg-black">

                        <div className="absolute top-1/2 -left-[94px] -translate-y-1/2 cursor-pointer" onClick={handlePrevImage}>
                            <svg width="84" height="110" viewBox="0 0 84 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.460938 54.8696C0.469938 109.364 55.1479 109.67 55.1479 109.67H83.6609V0.182617H55.1479C55.1479 0.182617 0.452938 0.375629 0.460938 54.8696Z" fill="#363722"/>
                            </svg>
                        </div>

                        <div className="flex flex-col h-full">
                            <div className="flex-1 relative">
                                <div className="absolute top-0 left-0 w-full h-full">
                                    <img className="h-full mx-auto" src={selected.src} loading="lazy" />
                                </div>
                            </div>

                            <div className="w-10/12 mx-auto">
                                <div className="text-fuscous-grayd text-2xl mt-8 space-y-6 text-center">
                                    {/* {selected.description[i18n.resolvedLanguage as 'hu' | 'en' | 'ro'].map((item, index) => (
                                        <p key={index}>{item}</p>
                                    ))} */}
                                    <p dangerouslySetInnerHTML={{__html: descriptions[i18n.resolvedLanguage as 'hu' | 'en' | 'ro']}}></p>
                                </div>
                            </div>
                        </div>

                        <div className="absolute top-1/2 -right-[94px] -translate-y-1/2 cursor-pointer" onClick={handleNextImage}>
                            <svg width="84" height="110" viewBox="0 0 84 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M83.941 55.1018C83.932 0.607807 29.254 0.301758 29.254 0.301758H0.740967V109.789H29.254C29.254 109.789 83.95 109.596 83.941 55.1018Z" fill="#363722"/>
                            </svg>
                        </div>
                    </div>
                }

            </div>
        </div>
    )
}

export default Explorations