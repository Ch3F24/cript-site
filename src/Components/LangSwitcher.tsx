import { useTranslation } from 'react-i18next';
import EnFlag from '/en_flag.png';
import HuFlag from '/hu_flag.png';
import RoFlag from '/ro_flag.png';

const lngs = {
  en: { 
    nativeName: 'English',
    flag: EnFlag
  },
  hu: { 
    nativeName: 'Hungarian',
    flag: HuFlag
  },
  ro: { 
    nativeName: 'Romanian',
    flag: RoFlag
  },
};

const LanguageSwitcher = () => {

    const { i18n } = useTranslation();

    return (
        <div className='flex items-center space-x-8 justify-end mr-64 z-20 relative'>
            {(Object.keys(lngs) as Array<keyof typeof lngs>).map((lng) => (
                <button key={lng} 
                        style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} 
                        type="submit" 
                        onClick={() => i18n.changeLanguage(lng)}
                        className='p-0 rounded-none focus:outline-none hover:outline-none'>
                  <img src={lngs[lng].flag} alt={lngs[lng].nativeName}  className='h-6 lg:h-[50px]'/>
                </button>
              ))}
        </div>
    )
}

export default LanguageSwitcher;