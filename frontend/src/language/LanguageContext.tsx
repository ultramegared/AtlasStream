/**
 * ===============================================================
 * Author: ultramegared
 * Project: AtlasStream
 * File: LanguageContext.tsx
 * Module: Frontend
 * Language: TypeScript React
 * Description:
 * Global language provider.
 * ===============================================================
 */

import {

    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState

} from "react";

type Language =

    "en" |
    "es";

interface LanguageContextType {

    language: Language;

    setLanguage: (

        language: Language

    ) => void;

}

const LanguageContext = createContext<LanguageContextType>(

    {} as LanguageContextType

);

interface Props {

    children: ReactNode;

}

function detectLanguage(): Language {

    const savedLanguage = localStorage.getItem(

        "language"

    ) as Language | null;

    if (

        savedLanguage

    ) {

        return savedLanguage;

    }

    const browserLanguage =

        navigator.language.toLowerCase();

    if (

        browserLanguage.startsWith("es")

    ) {

        return "es";

    }

    return "en";

}

export function LanguageProvider({

    children

}: Props) {

    const [

        language,

        setLanguageState

    ] = useState<Language>(

        detectLanguage()

    );

    function setLanguage(

        newLanguage: Language

    ) {

        setLanguageState(

            newLanguage

        );

        localStorage.setItem(

            "language",

            newLanguage

        );

    }

    useEffect(

        () => {

            document.documentElement.lang =

                language;

        },

        [

            language

        ]

    );

    return (

        <LanguageContext.Provider

            value={{

                language,

                setLanguage

            }}

        >

            {

                children

            }

        </LanguageContext.Provider>

    );

}

export function useLanguage() {

    return useContext(

        LanguageContext

    );

}