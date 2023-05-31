import styled from "@emotion/styled";

const Dialog = styled.div`
    border-radius: 10px;
    background-color: #fff;
    position: relative;
    transition: transform 0.3s, opacity 0.3s;
    overflow: hidden;
    display: none;
    transform: translateY(-52px);
    opacity: 0;
    max-height: 540px;
    height: 90%;
    min-width: 400px;
`;

export default Dialog;
