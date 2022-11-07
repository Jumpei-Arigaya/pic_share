import { useRecoilState } from 'recoil';
import { atom } from "recoil";

export const modalState = atom({
    key: "modalState",
    default: false,
})

export const usePostModal = () => {

    const [postModalState, setModalState] = useRecoilState(modalState);

    const modalOpen = () => {
        setModalState(true);
    }

    const modalClose = () => {
        setModalState(false);
    }

    return { postModalState, modalOpen, modalClose }
}
