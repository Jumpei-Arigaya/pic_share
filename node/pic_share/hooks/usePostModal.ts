import { ModalContext } from './../providers/ModalProvider';
import { useContext } from 'react';

export const usePostModal = () => {

    const { modalState, setModalState } = useContext(ModalContext);

    const modalOpen = () => {
        setModalState(true);
    }

    const modalClose = () => {
        setModalState(false);
    }

    return { modalState, modalOpen, modalClose }
}
