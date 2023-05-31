import styled from "@emotion/styled";

const Container = styled.div`
    position: fixed;
    top: 0;
    display: none;
    opacity: 0;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
    background-color: #00000080;
    transition: opacity 0.3s;
    z-index: 100;
`;

export default Container;
