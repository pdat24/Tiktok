/* eslint-disable react-refresh/only-export-components */
import styled from "@emotion/styled";
import { forwardRef } from "react";

function TitleDiv({ className, children, ...attrs }, ref) {
    const Component = styled.h3`
        border-radius: 8px;
        background-color: #71717a;
        color: #fff;
        z-index: 1000;
        position: absolute;
        padding: 8px 12px;
        font-size: 14px;
        white-space: nowrap;
    `;
    return (
        <Component ref={ref} className={className} {...attrs}>
            {children}
        </Component>
    );
}

export default forwardRef(TitleDiv);
