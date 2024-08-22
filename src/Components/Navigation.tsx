import exploration from "../../public/svg/exploration.svg"
import movies from "../../public/svg/movies.svg"
import stories from "../../public/svg/stories.svg"
import findings from "../../public/svg/findings.svg"
import favor_items from "../../public/svg/favor_items.svg"
import Modal from "./Modal"
import { useState } from "react"
import LanguageSwitcher from "./LangSwitcher"
import { useTranslation } from "react-i18next"

const Navigation = () => {

    const { t } = useTranslation()

    const [isOpen, setIsOpen] = useState(false)
    
    const closeModal = () => {
        setIsOpen(false)
    }

    const openModal = () => {
        setIsOpen(true)
    }


    return (
        <div className="h-full relative">
            
            <LanguageSwitcher />

            <Modal isOpen={isOpen} closeModal={closeModal}>

            </Modal>

            <div className="py-32 px-52 h-full flex">

                <div className="flex flex-col justify-between h-full">

                    <div onClick={openModal}>
                        <img src={exploration} alt="exploration" className="cursor-pointer" />
                        <h2 className="text-fuscous-grayd text-6xl uppercase text-center -mt-16">{t("navigation.exploration")}</h2>
                    </div>

                    <div>
                        <img src={movies} alt="movies" className="cursor-pointer" />
                        <h2 className="text-fuscous-grayd text-6xl uppercase text-center -mt-16">{t("navigation.movies")}</h2>
                    </div>

                </div>

                <div className="mx-auto items-center flex">
                    <div>
                        <h2 className="text-fuscous-grayd text-6xl uppercase text-center -mb-16">{t("navigation.stories")}</h2>
                        <img src={stories} alt="stories" className="cursor-pointer" />
                    </div>
                </div>

                <div className="flex flex-col justify-between h-full">
                    <div>
                        <img src={findings} alt="findings" className="cursor-pointer" />
                        <h2 className="text-fuscous-grayd text-6xl uppercase text-center -mt-16">{t("navigation.findings")}</h2>
                    </div>

                    <div>
                        <img src={favor_items} alt="favor_items" className="cursor-pointer" />
                        <h2 className="text-fuscous-grayd text-6xl uppercase text-center -mt-16">{t("navigation.favor_items")}</h2>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Navigation