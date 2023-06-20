import styled from "@emotion/styled";

function Avatar({ wh, ...attrs }) {
    const Component = styled.img`
        border-radius: 50%;
        width: ${wh};
        height: ${wh};
    `;
    const Wrapper = styled.div`
        border-radius: 50%;
        width: ${wh};
        height: ${wh};
        background-color: rgba(22, 24, 35, 0.06);
    `;
    return (
        <Wrapper>
            <Component {...attrs} />
        </Wrapper>
    );
}

export default Avatar;
