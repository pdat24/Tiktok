/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

import scss from "./MoreVert.module.scss";
import { LangPickerOpenner, LanguagesPicker } from "./Language";
import ThemeSwitcher from "./ThemeSwitcher";
import handleOpen from "../../../../../ModalComponent/handleOpen";

// a list that'll be displayed when move over more vert
function MoreVertMenu({ showLangs, onShowLangs }) {
    // show or hide langs picker
    const handleToggleLang = () => onShowLangs(!showLangs);
    const NormalMenu = () => {
        return (
            <div>
                {/** language options */}
                <LangPickerOpenner onToggleLang={handleToggleLang} />
                {/** move on feedback page */}
                <li className={clsx(scss["more-vert-items"], "font-bold")}>
                    <div className={scss["more-vert-icon"]}>
                        <span className="material-symbols-outlined">help</span>
                        <span>Phản hồi và trợ giúp</span>
                    </div>
                </li>
                {/** trigger shortcut modal */}
                <li
                    className={clsx(scss["more-vert-items"], "font-bold")}
                    onClick={() =>
                        handleOpen({
                            container: document.getElementById("shortcutModel"),
                            dialog: document.getElementById("shortcutDialog"),
                        })
                    }
                >
                    <div className={scss["more-vert-icon"]}>
                        <span className="material-symbols-outlined">keyboard</span>
                        <span className="whitespace-nowrap">Phím tắt trên bàn phím</span>
                    </div>
                </li>
                {/** theme switcher */}
                <ThemeSwitcher />
            </div>
        );
    };
    return (
        <ul className={scss["more-vert-list"]}>
            {showLangs ? <LanguagesPicker onHide={handleToggleLang} /> : <NormalMenu />}
        </ul>
    );
}

// More vert
function MoreVert() {
    const [showLang, setShowLang] = useState(false);
    const menu = useRef();
    const timerid = useRef();
    const shortcutDialog = useRef();
    useEffect(() => {
        shortcutDialog.current = document.getElementById("shortcutDialog");
        const shortcutCloser = document.getElementById("shortcutCloser");
        shortcutCloser.onclick = () => handleToggleMenu({ type: LEAVE_MENU });
    }, []);
    // actions
    const ENTER_MORE_VERT = "enterMoreVert";
    const LEAVE_MORE_VERT = "leaveMoreVert";
    const ENTER_MENU = "enterMenu";
    const LEAVE_MENU = "leaveMenu";
    const enter = {
        moreVert: false,
        menu: false,
    };
    // show menu
    const show = () => {
        if (enter.moreVert || enter.menu) {
            clearTimeout(timerid.current);
            menu.current.style.opacity = 1;
            menu.current.style.display = "block";
        }
    };
    // hide menu
    const hide = () => {
        clearTimeout(timerid.current);
        timerid.current = setTimeout(() => {
            if (!enter.moreVert && !enter.menu && window.getComputedStyle(shortcutDialog.current).display === "none") {
                menu.current.style.opacity = 0;
                setTimeout(() => {
                    menu.current.style.display = "none";
                    setShowLang(false);
                }, 320);
            }
        }, 680);
    };
    // show or hide menu depend on action
    const handleToggleMenu = (action) => {
        switch (action.type) {
            case ENTER_MORE_VERT:
                enter.moreVert = true;
                show();
                break;
            case ENTER_MENU:
                enter.menu = true;
                show();
                break;
            case LEAVE_MORE_VERT:
                enter.moreVert = false;
                hide();
                break;
            case LEAVE_MENU:
                enter.menu = false;
                hide();
                break;
            default:
                throw new Error("Invalid action.");
        }
    };
    return (
        <div className={clsx(scss["more-vert"], "self-end")}>
            {/** more vert symbol */}
            <span
                onMouseEnter={() => handleToggleMenu({ type: ENTER_MORE_VERT })}
                onMouseLeave={() => handleToggleMenu({ type: LEAVE_MORE_VERT })}
                className={clsx("material-symbols-outlined", "cursor-pointer")}
            >
                more_vert
            </span>
            {/** menu on */}
            <div
                className={scss["menu-container"]}
                onMouseEnter={() => handleToggleMenu({ type: ENTER_MENU })}
                onMouseLeave={() => handleToggleMenu({ type: LEAVE_MENU })}
                ref={menu}
            >
                <MoreVertMenu showLangs={showLang} onShowLangs={setShowLang} />
            </div>
        </div>
    );
}

export default MoreVert;
