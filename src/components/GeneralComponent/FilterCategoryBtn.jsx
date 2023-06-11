import styled from "@emotion/styled";

function FilterCategoryBtn({ children, ...attrs }) {
    const ButtonComponent = styled.button`
        display: flex;
        align-items: center;
        height: 40px;
        white-space: nowrap;
        background-color: #1618230f;
        border-radius: 8px;
        font-size: 18px;
        color: #161823;
        cursor: pointer;
        padding: 0px 11px;
        &:hover {
            background-color: #e1e1e1;
        }
    `;
    return <ButtonComponent {...attrs}>{children}</ButtonComponent>;
}

export default FilterCategoryBtn;
