
const Modal: React.FC<{ isOpen: boolean, closeModal: () => void }> = ({ isOpen, closeModal }) => {
    
    if (!isOpen) return null;

    return (
        
        <div className="absolute top-0 left-0 w-full h-full z-10 px-20"> 
            <div className="bg-black h-full w-full py-12 px-24 border-8 border-fuscous-grayd rounded-xl">

                <div className="flex items-center justify-center relative">

                    <div className="absolute top-0 left-0 cursor-pointer h-full flex items-center">
                        <svg width="110" height="66" viewBox="0 0 110 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.5" d="M12.3082 29.5713H103.346C106.669 29.5713 109.364 31.2664 109.364 33.3574C109.364 35.4484 106.669 37.1423 103.346 37.1423H12.5392V37.1234L35.3932 59.9984C36.4272 61.0364 36.0632 63.0733 34.5832 64.5483C33.1022 66.0243 31.0622 66.3792 30.0292 65.3412L6.99018 42.2133L4.98017 40.4003L1.65418 37.0673C-0.41082 34.9983 -0.407832 31.6464 1.66117 29.5814L10.9492 20.3133L12.4752 18.7493L30.1082 1.28229C31.1492 0.252286 33.1852 0.620284 34.6562 2.10528C36.1282 3.59028 36.4772 5.63031 35.4362 6.66131L12.2432 29.6363L12.3082 29.5713Z" fill="#54554A"/>
                        </svg>
                    </div>

                    <h2 className="uppercase text-[80px] text-fuscous-grayd">Leletek</h2>


                </div>
            </div>
            
        </div>
    )
}

export default Modal