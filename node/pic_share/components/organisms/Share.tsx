import React, { useState } from "react";
import Modal from "react-modal";
import { usePostModal } from "../../hooks/usePostModal";

type Props = {
    modalIsOpen: boolean;
    setIsOpen: (args: boolean) => void;
}

Modal.setAppElement('body')

export default function App() {

    const { postModalState, modalOpen, modalClose } = usePostModal();
    console.log(postModalState);

    return (
        <div className="App">
            <Modal style={modalStyle}>
                <button>Close Modal</button>
                vemwvaeopivmawueiompvwp
            </Modal>
        </div>
    );
}
const modalStyle = {
    overlay: {
        position: "fixed",
        top: 0,
        left: 0,
        backgroundColor: "rgba(0,0,0,0.85)"
    },
    content: {
        position: "absolute",
        top: "5rem",
        left: "5rem",
        right: "5rem",
        bottom: "5rem",
        backgroundColor: "paleturquoise",
        borderRadius: "1rem",
        padding: "1.5rem"
    }
};