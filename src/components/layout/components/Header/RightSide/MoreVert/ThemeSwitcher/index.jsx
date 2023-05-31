/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
/** @jsxImportSource @emotion/react */
import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import clsx from "clsx";
import { css } from "@emotion/react";

import scss from "./SwitchModeBtn.module.scss";
import { setTheme } from "../../../../../../GlobalStore/rootSlide";

function ModeButton({ on }) {
    const updateTheme = useDispatch();
    const slide = useRef();
    const checkbox = useRef();
    useEffect(() => {
        slide.current.style.transform = `translateX(${on ? "100%" : "0"})`;
        checkbox.current.checked = on;
    }, [on]);
    return (
        <label
            onMouseDown={(e) => {
                e.stopPropagation();
                updateTheme(setTheme());
            }}
            css={
                on
                    ? css`
                          background-color: rgba(108, 241, 31);
                      `
                    : css`
                          background-color: rgba(22, 24, 35, 0.16);
                      `
            }
            className={clsx(scss["switch"])}
        >
            <input type="checkbox" ref={checkbox} />
            <div ref={slide} className={scss["slide"]}></div>
        </label>
    );
}

// mode switcher
function ThemeSwitcher() {
    const theme = useSelector((state) => state.root.theme);
    const updateTheme = useDispatch();
    return (
        <li
            className={clsx(scss["more-vert-items"], "flex", "items-center", "justify-between", "cursor-pointer")}
            onClick={() => updateTheme(setTheme())}
        >
            <div className={clsx(scss["more-vert-icon"], "flex", "gap-2")}>
                <span className="material-symbols-outlined">{theme ? "light_mode" : "dark_mode"}</span>
                <span>{theme ? "Chế độ sáng" : "Chế độ tối"}</span>
            </div>
            <ModeButton on={theme} />
        </li>
    );
}

export default ThemeSwitcher;
