import exploration from "../../public/svg/exploration.svg"
import movies from "../../public/svg/movies.svg"
import stories from "../../public/svg/stories.svg"
import findings from "../../public/svg/findings.svg"
import favor_items from "../../public/svg/favor_items.svg"
import Modal from "./Modal"
import { useState } from "react"
import LanguageSwitcher from "./LangSwitcher"
import { useTranslation } from "react-i18next"
import { useVideoContext } from '../Context/VideoContext';
import Explorations from "./Explorations"
import Movies from "./Movies"
import Gallery from "./Gallery"
import findingData from '../data/findings.json'; 
import favorItems from '../data/favor_items.json';

type contentType = 'exploration' | 'movies' | 'stories' | 'findings' | 'favor_items'


const Navigation = () => {
    const { startVideo, isPlaying } = useVideoContext();
    const [content, setContent] = useState<null | JSX.Element>(null);

    const { t } = useTranslation()

    const [isOpen, setIsOpen] = useState(false)
    
    const closeModal = () => {
        setIsOpen(false)
    }

    const openModal = (type: contentType) => {
        if (type === 'exploration') {
            setContent(<Explorations closeModal={closeModal} />)
            setIsOpen(true)
        } else if (type === 'movies') {
            if (!isPlaying()) {
                setContent(<Movies closeModal={closeModal} />)
                setIsOpen(true)
            }
        } else if (type === 'findings') {
            setContent(<Gallery closeModal={closeModal} images={findingData} title="Leletek" isVideo={true} />)
            setIsOpen(true)
        } else if (type === 'favor_items') { 
            setContent(<Gallery closeModal={closeModal} images={favorItems} title="Kegytárgyak" />)
            setIsOpen(true)
        }        
    }


    return (
        <div className="h-full relative">
            
            <LanguageSwitcher />

            <Modal isOpen={isOpen}>
                { content }
            </Modal>

            <div className="py-32 px-52 h-full flex">

                <div className="flex flex-col justify-between h-full">

                    <div onClick={() => openModal('exploration')}>
                        <img src={exploration} alt="exploration" className="cursor-pointer" />
                        <h2 className="text-fuscous-grayd text-6xl uppercase text-center -mt-16">{t("navigation.exploration")}</h2>
                    </div>

                    <div onClick={() => openModal('movies')}>
                        <img src={movies} alt="movies" className="cursor-pointer" />
                        <h2 className="text-fuscous-grayd text-6xl uppercase text-center -mt-16">{t("navigation.movies")}</h2>
                    </div>

                </div>

                <div className="mx-auto items-center flex">
                    <div onClick={startVideo}>
                        <h2 className="text-fuscous-grayd text-6xl uppercase text-center -mb-16">{t("navigation.stories")}</h2>
                        <img src={stories} alt="stories" className="cursor-pointer" />
                    </div>
                </div>

                <div className="flex flex-col justify-between h-full">
                    <div onClick={() => openModal('findings')}>
                        <img src={findings} alt="findings" className="cursor-pointer" />
                        <h2 className="text-fuscous-grayd text-6xl uppercase text-center -mt-16">{t("navigation.findings")}</h2>
                    </div>

                    <div onClick={() => openModal('favor_items')}>
                        <img src={favor_items} alt="favor_items" className="cursor-pointer" />
                        <h2 className="text-fuscous-grayd text-6xl uppercase text-center -mt-16">{t("navigation.favor_items")}</h2>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Navigation