import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { deleteEvent } from "../../../services/api/Events";

interface DeleteEventModalProps {
    updateEventsList(): void;
    eventId: number
}

export default function DeleteEventModal(props: DeleteEventModalProps) {
    const [openModal, setOpenModal] = useState(false);
    const {eventId, updateEventsList} = props

    const deleteEventClick = async (id: number):Promise<void> => {
        await deleteEvent(id)
        setOpenModal(false)
        updateEventsList()
    }

    return (
        <>
            <Button color="failure" onClick={() => setOpenModal(true)}>Supprimer</Button>
            <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
                <Modal.Header />
                <Modal.Body>
                    <div className="text-center">
                        <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                            Êtes-vous sûr de vouloir supprimer cet évènement ?
                        </h3>
                        <div className="flex justify-center gap-4">
                            <Button color="failure" onClick={() => deleteEventClick(eventId)}>
                                Oui, supprimer l'évènement
                            </Button>
                            <Button color="gray" onClick={() => setOpenModal(false)}>
                                Non, annuler
                            </Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}
