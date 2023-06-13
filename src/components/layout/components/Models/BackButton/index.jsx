/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { LOGIN_MODAL } from "../modalNames";

function BackButton({ onModal }) {
    const style = css`
        position: absolute;
        font-size: 18px;
        cursor: pointer;
        padding: 0 6px;
        top: 16px;
        left: 16px;
    `;
    return (
        <div onClick={() => onModal(LOGIN_MODAL)} css={style}>
            <i className="fa-solid fa-chevron-left"></i>
        </div>
    );
}

export default BackButton;
