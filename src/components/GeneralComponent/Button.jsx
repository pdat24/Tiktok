import styled from "@emotion/styled";

function GeneralButton({ fw, bg, w, h, color, children, className, ...args }) {
    const Button = styled.button`
        font-family: sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: ${fw || "bold"};
        padding: 0 4px;
        border-radius: 4px;
        background-color: ${bg || "var(--primary-color)"};
        color: ${color || "#fff"};
        width: ${w || "110px"};
        height: ${h || "36px"};
    `;
    return (
        <Button className={className} {...args}>
            {children}
        </Button>
    );
}

export default GeneralButton;
