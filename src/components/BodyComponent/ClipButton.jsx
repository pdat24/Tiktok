/* eslint-disable react-refresh/only-export-components */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import handleShowCount from "./handelShowCount";
import { forwardRef } from "react";

function ClipButton({ className, count }, ref) {
    const style = css`
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 14px;
        background-color: #eee;
        border-radius: 50%;
        font-size: 20px;
        color: #333;
    `;
    const textStyle = css`
        color: rgba(22, 24, 35, 0.75);
        font-size: 12px;
        line-height: 17px;
        font-weight: bold;
        text-align: center;
    `;
    return (
        <div ref={ref} className="flex flex-col gap-2 cursor-pointer">
            <i css={style} className={className}></i>
            <div css={textStyle}>{handleShowCount(count)}</div>
        </div>
    );
}

export default forwardRef(ClipButton);
