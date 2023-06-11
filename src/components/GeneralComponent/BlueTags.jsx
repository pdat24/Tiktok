/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";

function BlueTags({ family, size, children, ...attrs }) {
    const componentStyle = css`
        display: inline-block;
        color: #2b5db9;
        font-family: ${family ? family : "sans-serif"};
        font-weight: bold;
        font-size: ${size ? size : "16px"};
        &:hover {
            text-decoration: underline;
        }
    `;
    return (
        <Link css={componentStyle} {...attrs}>
            {children}
        </Link>
    );
}

export default BlueTags;
