/* eslint-disable react-refresh/only-export-components */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import handleShowCount from "./handelShowCount";
import { forwardRef } from "react";

function ClipButton({ count, icon, ...attrs }, ref) {
    const style = css`
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 14px;
        background-color: #eee;
        border-radius: 50%;
        font-size: 20px;
        transition: background-color 100ms, color 100ms;
    `;
    const textStyle = css`
        color: rgba(22, 24, 35, 0.75);
        font-size: 12px;
        line-height: 17px;
        font-weight: bold;
        text-align: center;
    `;
    const wrapper = css`
        display: flex;
        flex-direction: column;
        gap: 8px;
        cursor: pointer;
    `;
    return (
        <div ref={ref} {...attrs} css={wrapper}>
            <i css={style} className={icon}></i>
            <div css={textStyle}>{handleShowCount(count)}</div>
        </div>
    );
}

export default forwardRef(ClipButton);
