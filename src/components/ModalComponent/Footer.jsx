/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";

function Footer({ ques, linkText, onChangeModal }) {
    const style = css`
        height: 64px;
        display: flex;                                                                                               flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        bottom: 0;
        background-color: #fff;
        width: 100%;
        border-top: 1px solid #ddd;
        font-size: 15px;
    `;
    return (
        <div css={style}>
            <p className="fs-4 py-3">
                {ques} &nbsp;
                <Link
                    className="color-primary text-decoration-none fw-bold hover:underline"
                    to={undefined}
                    onClick={onChangeModal}
                >
                    {linkText}
                </Link>
            </p>
        </div>
    );
}

export default Footer;
