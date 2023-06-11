/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function TextOverflow({ children, ...attrs }) {
    const style = css`
        overflow: hidden;
        text-overflow: ellipsis;
    `;
    return (
        <h3 {...attrs} css={style}>
            {children}
        </h3>
    );
}

export default TextOverflow;
