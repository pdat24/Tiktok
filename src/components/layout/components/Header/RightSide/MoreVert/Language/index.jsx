/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useSelector, useDispatch } from "react-redux";
import clsx from "clsx";

import { langs } from "../../../../../../GlobalVar";
import { setLanguage } from "../../../../../../GlobalStore/rootSlide";
import scss from "../MoreVert.module.scss";

// language menu
function LanguagesPicker({ onHide }) {
    // global state
    const language = useSelector((state) => state.root.language);
    const updateLang = useDispatch();
    return (
        <>
            {/** header */}
            <li
                className={clsx(
                    "border-bottom",
                    scss["cursor-default"],
                    "flex",
                    "py-2",
                    "border-b",
                    "border-slate-200"
                )}
            >
                <i className={"fa-solid fa-chevron-left mx-3 py-1.5 px-2 cursor-pointer"} onClick={onHide}></i>
                <h3 className={clsx(scss["langs-header"], "font-bold", "self-end")}>Ngôn ngữ</h3>
            </li>
            {/** render avaiable languages */}
            <ul className={scss["langs-picker"]}>
                {langs.map((elem, index) => {
                    return (
                        <li
                            css={css`
                                padding: 10px 8px 10px 16px;
                            `}
                            onClick={() => updateLang(setLanguage(elem))}
                            key={index}
                            className={clsx(scss["more-vert-items"], {
                                [scss["active-lang"]]: language === elem ? true : false,
                            })}
                        >
                            {elem}
                        </li>
                    );
                })}
            </ul>
        </>
    );
}

function LangPickerOpenner({ onToggleLang }) {
    const language = useSelector((state) => state.root.language);
    return (
        <li className={clsx(scss["more-vert-items"], "font-bold")} onClick={onToggleLang}>
            <div className={scss["more-vert-icon"]}>
                <span className="material-symbols-outlined">explicit</span>
                <span>{language}</span>
            </div>
        </li>
    );
}

export { LangPickerOpenner, LanguagesPicker };
