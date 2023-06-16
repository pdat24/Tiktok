/** @jsxImportSource */
import { css } from "@emotion/react";
import Header from "../components/Header";

function OnlyHeader({ children }) {
    return (
        <div id="main">
            <Header
                innerCss={css`
                    max-width: 1150px;
                    margin: auto;
                `}
            />
            <div className="contents">{children}</div>
        </div>
    );
}

export default OnlyHeader;
