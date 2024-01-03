import { useState, useRef, useEffect, Fragment } from "react";
import { defaultLang, languages } from "../data/ui";
import { getLangFromUrl, useTranslations } from "../data/utils";
import React from "react";
import LanguagePicker from "./LanguagePicker";

export default function Menu({ url }) {
        
    const lang = getLangFromUrl(url);
    const t = useTranslations(lang);
    
    const [menuOpen, setMenuOpen] = useState(false);
    function toggleMenu() {
        setIsComponentVisible(true);
        setMenuOpen(!menuOpen);
    }

    const [isComponentVisible, setIsComponentVisible] = useState(true);
    const ref = useRef(null);

    const handleHideDropdown = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
            setIsComponentVisible(false);
            setMenuOpen(false);
        }
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setIsComponentVisible(false);
            setMenuOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("keydown", handleHideDropdown, true);
        document.addEventListener("click", handleClickOutside, true);
        return () => {
            document.removeEventListener("keydown", handleHideDropdown, true);
            document.removeEventListener("click", handleClickOutside, true);
        };
    });

    return (
        <Fragment>
            <div className={`md:flex md:opacity-100 ${menuOpen ? 'flex-col absolute right-0 left-0 h-48 top-16 bg-primary-dark' : 'hidden relative'}`}>
                <div className={`mx-11 ${menuOpen ? 'h-10 hover:bg-blend-darken mb-4  mt-6' : 'my-auto'}`}>
                    <a onClick={toggleMenu}
                        href={lang === defaultLang
                            ? "#competences"
                            : `/${lang}/#competences`}>{t("links.competences")}</a>
                </div>
                <div className={`mx-11 ${menuOpen ? 'h-10 hover:bg-blend-darken my-4' : 'my-auto'}`}>
                    <a onClick={toggleMenu}
                        href={lang === defaultLang
                            ? "#references"
                            : `/${lang}/#references`}>{t("links.references")}</a>
                </div>
                <div className={`mx-11 ${menuOpen ? 'h-10 hover:bg-blend-darken my-4' : 'my-auto'}`}>
                    <a onClick={toggleMenu}
                        href={lang === defaultLang
                            ? "#contact"
                            : `/${lang}/#contact`}>{t("links.contact")}</a>
                </div>
            </div>
            <div className='md:hidden flex self-center hover:cursor-pointer ml-auto mr-2 mt-1' onClick={toggleMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h14M5 12h14M5 7h14" /></svg>
            </div>
            <div className="my-auto">
                <LanguagePicker url={url} />
            </div>
        </Fragment>
    )
}