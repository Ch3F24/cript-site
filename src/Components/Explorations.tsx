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
                    </div>
                }

            </div>
        </div>
    )
}

export default Explorations