import { createContext, Dispatch, SetStateAction } from "react"

export type LoadingContextType = {
    isLoading: boolean | null,
    setIsLoading: Dispatch<SetStateAction<boolean | null>>,
}

export const LoadingContext = createContext<LoadingContextType>({} as LoadingContextType);