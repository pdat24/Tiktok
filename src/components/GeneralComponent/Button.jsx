import styled from "@emotion/styled";

function GeneralButton({ children, ...args }) {
    const Button = styled.button`
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 4px;
        border-radius: 4px;
        background-color: ${({ bg }) => (!bg ? "var(--primary-color)" : bg)};
        color: ${({ color }) => (!color ? "#fff" : color)};
        width: ${({ w }) => (w ? w : "110px")};
        height: ${({ h }) => (h ? h : "36px")};
        &:hover {
            filter: hue-rotate(24deg);
        }
    `;
    return <Button {...args}>{children}</Button>;
}

export default GeneralButton;
