import styled from "@emotion/styled";

function GeneralButton({ children, ...args }) {
    const Button = styled.button`
        font-family: sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
        padding: 0 4px;
        border-radius: 4px;
        background-color: ${({ bg }) => bg || "var(--primary-color)"};
        color: ${({ color }) => color || "#fff"};
        width: ${({ w }) => w || "110px"};
        height: ${({ h }) => h || "36px"};
    `;
    return <Button {...args}>{children}</Button>;
}

export default GeneralButton;
