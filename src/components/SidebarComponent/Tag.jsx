/** @jsxImportSource @emotion/react */
import { Link } from "react-router-dom";
import { css } from "@emotion/react";

function Tag({ children, url, music }) {
    const wrapperStyle = css`
        display: flex;
        border-radius: 24px;
        max-width: 100%;
        width: fit-content;
        border: 1px solid #ddd;
        align-items: center;
        gap: 6px;
        padding: 3px 10px;
        margin-right: 8px;
        margin-bottom: 12px;
        &:hover {
            background-color: #16182308;
        }
    `;
    const textStyle = css`
        font-size: 14px;
        font-weight: 400;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        color: rgba(22, 24, 35, 0.75);
    `;
    const hashtagStyle = css`
        height: 16px;
        width: 16px;
        text-align: center;
        font-size: 14px;
    `;
    return (
        <div className="w-fit max-w-full pr-2">
            <Link css={wrapperStyle} to={url}>
                <i css={hashtagStyle} className={"fa-solid " + (music ? "fa-music" : "fa-hashtag")}></i>
                <span css={textStyle}>{children}</span>
            </Link>
        </div>
    );
}

export default Tag;
