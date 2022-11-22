import { createContext, Dispatch, SetStateAction, useState } from "react";

type Props = {
    children: React.ReactNode;
}

export type LoginUserContextType = {
    id: number | null;
    setId: Dispatch<SetStateAction<number | null>>;
}

export const LoginUserContext = createContext<LoginUserContextType>({} as LoginUserContextType);
export const LoginUserProvider = ({ children }: Props) => {
    const [id, setId] = useState<number | null>(null)

    return (
        <LoginUserContext.Provider value={{ id, setId }}>
            {children}
        </LoginUserContext.Provider>
    )
}