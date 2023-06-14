import styled from "@emotion/styled";

function TitleDiv({ className, children, ...attrs }) {
    const Component = styled.h3`
        border-radius: 12px;
        background-color: rgba(0, 0, 0, 0.8);
        color: #fff;
        font-weight: bold;
        z-index: 1000;
        position: absolute;
    `;
    return (
        <Component className={className} {...attrs}>
            {children}
        </Component>
    );
}

export default TitleDiv;
