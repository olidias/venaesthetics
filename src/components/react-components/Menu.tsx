import { useState, useRef, useEffect, Fragment } from "react";
import { defaultLang } from "../../data/ui";
import { getLangFromUrl, useTranslations } from "../../data/utils";
import React from "react";
import LanguagePicker from "./LanguagePicker";
import MenuItem from "./MenuItem";

export default function Menu({ url }) {

    const lang = getLangFromUrl(url);
    const t = useTranslations(lang);

    const [menuOpen, setMenuOpen] = useState(false);
    function toggleMenu() {
        setMenuOpen(!menuOpen);
    }

    const ref = useRef(null);

    const handleHideDropdown = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
            setMenuOpen(false);
        }
    };

    const handleClickOutside = (event: MouseEvent) => {
        setMenuOpen(false);
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
            <div className={`md:flex md:gap-2 bg-black lg:gap-5 ${menuOpen ? 'flex flex-col absolute items-center justify-center bg-light right-0 left-0 top-0 pt-16' : 'hidden relative'}`}>
                <MenuItem
                    defaultLang={defaultLang}
                    lang={lang}
                    href={lang === defaultLang
                        ? "/#competences"
                        : `/${lang}/#competences`}
                    linkText={t("links.competences")}
                    menuOpen={menuOpen}
                />
                <MenuItem
                    defaultLang={defaultLang}
                    lang={lang}
                    href={lang === defaultLang
                        ? "/#references"
                        : `/${lang}/#references`}
                    linkText={t("links.references")}
                    menuOpen={menuOpen}
                />
                <MenuItem
                    defaultLang={defaultLang}
                    lang={lang}
                    href={`/${lang}/articles`}
                    linkText={t("links.articles")}
                    menuOpen={menuOpen}
                />
                <MenuItem
                    defaultLang={defaultLang}
                    lang={lang}
                    href={lang === defaultLang
                        ? "/#contact"
                        : `/${lang}/#contact`}
                    linkText={t("links.contact")}
                    menuOpen={menuOpen}
                />
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