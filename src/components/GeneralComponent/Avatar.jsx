import styled from "@emotion/styled";

function Avatar({ wh, ...attrs }) {
    const Component = styled.img`
        border-radius: 50%;
        width: ${wh};
        height: ${wh};
    `;
    return <Component {...attrs} />;
}

export default Avatar;
