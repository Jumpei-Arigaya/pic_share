import { createContext, Dispatch, SetStateAction, useState } from "react";


type LoginUserContextType = {
    id: number | null;
    setId: Dispatch<SetStateAction<number | null>>;
}

export const LoginUserContext = createContext<LoginUserContextType>({} as LoginUserContextType);