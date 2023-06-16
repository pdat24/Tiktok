/* eslint-disable react-refresh/only-export-components */
import styled from "@emotion/styled";
import { forwardRef } from "react";
function ScrollToTopBtn({ onClick, ...attrs }, ref) {
    const Component = styled.button`
        background-color: var(--primary-color);
        color: #fff;
        display: flex;
        flex-direction: column;
        padding: 8px;
        border-radius: 50%;
        position: fixed;
        align-items: center;
        right: 20px;
        bottom: -32px;
        transition: bottom 400ms ease-in-out;
        height: 32px;
        width: 32px;
        z-index: 100;
    `;
    return (
        <Component onClick={onClick} ref={ref} {...attrs} className="hover:brightness">
            <i className="fa-solid fa-arrow-up"></i>
        </Component>
    );
}

export default forwardRef(ScrollToTopBtn);
