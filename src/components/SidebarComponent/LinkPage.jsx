/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { NavLink } from "react-router-dom";

function LinkPage({ children, url }) {
    const style = css`
        padding: 8px;
        text-decoration: none;
        color: #161823;
        font-size: 18px;
        font-weight: 700;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 8px;
        border-radius: 4px;
        transition: background ease-in-out 200ms;
        &:hover {
            background-color: #16182308;
        }
    `;
    return (
        <NavLink
            style={({ isActive }) =>
                isActive
                    ? {
                          color: "var(--primary-color)",
                          backgroundColor: "#16182308",
                      }
                    : {}
            }
            css={style}
            to={url}
        >
            {children}
        </NavLink>
    );
}

export default LinkPage;
