import { Button, Modal } from "flowbite-react";
import { useEffect, useState } from "react";

interface AccountCreatedProps {
    show: boolean;
    handleOpenModal: () => void
}

export function AccountCreatedModal(props: AccountCreatedProps) {

    const { handleOpenModal, show } = props
    const [openModal, setOpenModal] = useState(false);

    
    useEffect(() => {
        setOpenModal(show)
    },[show])

    return (
        <>
            <Modal show={openModal} size="md" onClose={() => {handleOpenModal(); setOpenModal(false)}} popup>
                <Modal.Header />
                <Modal.Body>
                    <div className="text-center">
                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                            Votre compte a bien été créé.
                        </h3>
                        <div className="flex justify-center gap-4">
                            <Button color="success" onClick={() => {handleOpenModal(); setOpenModal(false)}}>
                                {"Ok"}
                            </Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}
