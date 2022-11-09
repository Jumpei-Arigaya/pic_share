import { Share } from "@mui/icons-material";
import { createContext, Dispatch, SetStateAction, useState } from "react";
import Profile from "../components/organisms/Profile";

type Props = {
    children: React.ReactNode,
}

export type ModalContextType = {
    modalState: boolean | null,
    setModalState: Dispatch<SetStateAction<boolean | null>>,
}

export const ModalContext = createContext<ModalContextType>({} as ModalContextType);


