import { Share } from "@mui/icons-material";
import { createContext, Dispatch, SetStateAction, useState } from "react";
import Profile from "../components/organisms/Profile";

export type ModalContextType = {
    modalState: boolean | null,
    setModalState: Dispatch<SetStateAction<boolean | null>>,
    scrollability: string | null,
    setScrollability: Dispatch<SetStateAction<string | null>>,
}

export const ModalContext = createContext<ModalContextType>({} as ModalContextType);


