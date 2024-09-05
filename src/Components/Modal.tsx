
const Modal: React.FC<{ isOpen: boolean, closeModal: () => void, children: React.ReactNode }> = ({ isOpen, closeModal, children }) => {
    
    if (!isOpen) return null;

    return (
        
        <div className="absolute top-0 left-0 w-full h-full z-10 px-20 pt-14"> 
            <div className="bg-black h-full w-full pt-6 px-24 border-8 border-fuscous-grayd rounded-xl">

                <div className="h-full">
                    {children}
                </div>
            </div>
            
        </div>
    )
}

export default Modal