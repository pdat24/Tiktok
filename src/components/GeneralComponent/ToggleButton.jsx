/** @jsxImportSource @emotion/react */
import { useEffect, useRef } from "react";
import { css } from "@emotion/react";

function ToggleButton({ onClick }) {
    const slide = useRef();
    const checkbox = useRef();
    const wrapper = useRef();
    const wrapperStyle = css`
        height: 24px;
        width: 44px;
        background-color: rgba(22, 24, 35, 0.16);
        border-radius: 24px;
        display: flex;
        align-items: center;
        cursor: pointer;
        padding: 1.6px;
        transition: background-color 240ms;
    `;
    const slideStyle = css`
        width: 20px;
        height: 90%;
        background-color: #fff;
        border-radius: 24px;
        transition: transform 240ms ease-in-out;
    `;
    useEffect(() => {
        checkbox.current.onchange = (e) => {
            if (e.target.checked) {
                wrapper.current.style.backgroundColor = "rgba(108, 241, 31)";
                slide.current.style.transform = "translateX(100%)";
            } else {
                wrapper.current.style.backgroundColor = "rgba(22, 24, 35, 0.16)";
                slide.current.style.transform = "translateX(0)";
            }
        };
    }, []);
    return (
        <label ref={wrapper} css={wrapperStyle} onClick={onClick}>
            <input className="h-0 w-0" type="checkbox" ref={checkbox} />
            <div ref={slide} css={slideStyle}></div>
        </label>
    );
}

export default ToggleButton;
