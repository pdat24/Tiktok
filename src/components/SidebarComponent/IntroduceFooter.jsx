import styled from "@emotion/styled";

function IntroduceFooter({ children, ...attrs }) {
    const Component = styled.div`
        font-size: 12px;
        line-height: 20px;
        padding-top: 16px;
        margin-top: 16px;
        border-top: 1px solid #1618231f;
    `;
    return <Component {...attrs}>{children}</Component>;
}

export default IntroduceFooter;
