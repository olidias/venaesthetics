import { useState, useRef, useEffect, Fragment } from "react";
import { defaultLang } from "../../data/ui";
import { getLangFromUrl, useTranslations } from "../../data/utils";
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
                    <a onClick={toggleMenu} className={`mx-11 h-full self-center flex items-center hover:bg-primary-darker hover:cursor-pointer ${menuOpen ? 'h-10  mb-4  mt-6' : 'my-auto'}`}
                        href={lang === defaultLang
                            ? "#competences"
                            : `/${lang}/#competences`}>{t("links.competences")}</a>
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
            <div className='md:hidden flex self-center hover:cursor-pointer ml-auto mr-2 mt-1' >
                <svg xmlns="http://www.w3.org/2000/svg" onClick={toggleMenu} width="30" height="30" viewBox="0 0 30 30"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 17h14M5 12h14M5 7h14" /></svg>
            </div>
            <div className="my-auto">
                <LanguagePicker url={url} />
            </div>
        </Fragment>
    )
}