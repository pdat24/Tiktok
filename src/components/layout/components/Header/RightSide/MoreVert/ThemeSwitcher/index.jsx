/** @jsxImportSource @emotion/react */
import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import clsx from "clsx";
import { css } from "@emotion/react";

import scss from "./SwitchModeBtn.module.scss";
import { setTheme } from "../../../../../../GlobalStore/rootSlide";

function ModeButton() {
    const theme = useSelector((state) => state.root.theme);
    const updateTheme = useDispatch();
    const slide = useRef();
    const checkbox = useRef();
    useEffect(() => {
        slide.current.style.transform = `translateX(${theme ? "100%" : "0"})`;
        checkbox.current.checked = theme;
    }, [theme]);
    return (
        <label
            onMouseDown={(e) => {
                e.stopPropagation();
                updateTheme(setTheme());
            }}
            css={css`
                ${theme ? "background-color: rgba(108, 241, 31)" : "background-color: rgba(22, 24, 35, 0.16)"}
            `}
            className={clsx(scss["switch"], "mr-4")}
        >
            <input type="checkbox" ref={checkbox} />
            <div ref={slide} className={scss["slide"]}></div>
        </label>
    );
}

// mode switcher
function ThemeSwitcher() {
    const updateTheme = useDispatch();
    return (
        <li
            className={clsx(scss["more-vert-items"], "flex items-center justify-between cursor-pointer font-bold")}
            onClick={() => updateTheme(setTheme())}
        >
            <div className={clsx(scss["more-vert-icon"], "flex gap-2 w-fit")}>
                <span className="material-symbols-outlined">dark_mode</span>
                <span>Chế độ tối</span>
            </div>
            <ModeButton />
        </li>
    );
}

export default ThemeSwitcher;
