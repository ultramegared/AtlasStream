/**
 * ===============================================================
 * Author: ultramegared
 * Project: AtlasStream
 * File: useTranslation.ts
 * Module: Frontend
 * Language: TypeScript
 * Description:
 * Translation hook.
 * ===============================================================
 */

import { useLanguage } from "./LanguageContext";

import en from "../translations/en";
import es from "../translations/es";

export function useTranslation() {

    const {

        language

    } = useLanguage();

    const translations = language === "es"

        ? es

        : en;

    return {

        t: translations,

        language

    };

}