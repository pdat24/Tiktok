import styled from "@emotion/styled";

function NameChannel({ children, ...rest }) {
    const Name = styled.h2`
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        max-width: ${({ maxW }) => maxW};
        font-size: ${({ fs }) => fs};
        font-weight: 600;
        color: ${({ color }) => (color ? color : "#161823")};
        font-family: IBM;
    `;
    return <Name {...rest}>{children}</Name>;
}

export default NameChannel;
