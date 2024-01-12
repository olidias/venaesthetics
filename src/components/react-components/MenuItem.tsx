import React from "react";
export default function MenuItem({ lang, defaultLang, menuOpen, toggleMenu, href, linkText}){

    return (
        <div className={`md:mx-auto hover:bg-primary-darker ${menuOpen ? 'h-10 my-2 mx-auto flex self-center' : 'my-auto'}`}>
            <a onClick={toggleMenu}
                className="p-5 flex self-center text-center"
                href={href}>{linkText}</a>
        </div>
    )
}