/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const ButtonCloseStyle = styled.span`
    position: absolute;
    display: flex;
    background-color: #eee;
    border-radius: 50%;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    font-size: ${({ size }) => size};
    width: ${({ wh }) => wh};
    height: ${({ wh }) => wh};
    padding: ${({ pad }) => pad};
`;

function ButtonClose({ onClick, ...attrs }) {
    return (
        <ButtonCloseStyle {...attrs} onClick={onClick}>
            <i
                className="fa-regular fa-x"
                css={css`
                    line-height: initial;
                `}
            ></i>
        </ButtonCloseStyle>
    );
}

export default ButtonClose;
