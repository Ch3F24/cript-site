import { useState } from "react"
import { useTranslation } from "react-i18next";
import ModalClose from "./ModalClose";
interface Image {
    src: string;
    title: Record<string, string>;
    description: Record<string, string[]>;
}

const img: Image = 
    {
        'src': 'https://images.pexels.com/photos/27855229/pexels-photo-27855229/free-photo-of-a-woman-in-a-skirt-leaning-against-a-wall.jpeg',
        'title' : {
            'hu' : 'title',
            'en' : 'title',
        },
        'description' : {
            'en' : [
                'ENGyűrű I1600 körül Irany, türkiz kő berakással  Ivésett Ibelsejében levélforma Ielirat: nincs',
                'Női köves gyűrű. A sínrésze gazdagon díszített reszeléssel,és véséssel kialakítva. A fejrészén,a foglalat körül reszeléssel,fűrészeléssel,vagy véséssel kialakított csíkozás. Középen Tokos,és karmos foglalat egyben található. Valószínűleg türkiz kő van belefoglalva. A fejrész belseje szintén vésett ,ornamentikus mintát alkalmazva.'
            ],
            'hu' : [
                'Gyűrű I1600 körül Irany, türkiz kő berakással  Ivésett Ibelsejében levélforma Ielirat: nincs',
                'Női köves gyűrű. A sínrésze gazdagon díszített reszeléssel,és véséssel kialakítva. A fejrészén,a foglalat körül reszeléssel,fűrészeléssel,vagy véséssel kialakított csíkozás. Középen Tokos,és karmos foglalat egyben található. Valószínűleg türkiz kő van belefoglalva. A fejrész belseje szintén vésett ,ornamentikus mintát alkalmazva.'
            ],
        },
    }

const Explorations:React.FC<{ closeModal: () => void }> = ({ closeModal }) => {
    const [selected, setSelected] = useState<null | typeof img>(null);
    const { i18n } = useTranslation()
    const handleSelect = () => {
        setSelected(img)
    }

    const handleClose = () => {
        if (selected) {
            setSelected(null)
        } else {

            closeModal()
        }
    }
    return (
        <div className="relative">
            <div className="flex items-center justify-center relative">

                <h2 className="uppercase text-[80px] text-fuscous-grayd leading-none">Leletek</h2>

                <ModalClose closeModal={handleClose} />

            </div>

            <div className="relative">

                <div className="grid grid-cols-6 flex-wrap gap-x-8 gap-y-6 mt-12">
                    {Array.from({ length: 30 }).map((_, i) => (
                        <div>
                            <img src="https://images.pexels.com/photos/27855229/pexels-photo-27855229/free-photo-of-a-woman-in-a-skirt-leaning-against-a-wall.jpeg" 
                                className="w-full h-[156px] object-cover cursor-pointer" 
                                alt="" 
                                loading="lazy"
                                onClick={() => handleSelect()}  /> 
                        </div>
                    ))}
                </div>

                {selected &&
                    <div className="absolute top-0 left-0 w-full h-full z-10 bg-black pb-8">
                        <div className="flex flex-col h-full">
                            <div className="flex-1 relative">
                                <div className="absolute top-0 left-0 w-full h-full">
                                    <img className="max-h-[622px] h-full mx-auto" src={selected.src} alt={selected.title[i18n.resolvedLanguage as keyof typeof Image]} loading="lazy" />
                                </div>
                            </div>

                            <div>
                                <div className="text-fuscous-grayd text-2xl mt-8 space-y-6">
                                    {selected.description[i18n.resolvedLanguage as keyof typeof Image].map((item, index) => (
                                        <p key={index}>{item}</p>
                                    ))}
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