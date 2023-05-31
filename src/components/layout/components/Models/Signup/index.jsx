/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import clsx from "clsx";

import scss from "./Signup.module.scss";
import { Title, Footer, PLatform, PlatformsList, ModelBody } from "../../../../ModalComponent";
import { platforms } from "../../../../GlobalVar";
import { LOGIN_MODAL } from "../modalNames";
import { FACEBOOK, GOOGLE, LINE, TWITTER, KAKAOTALK, PERSONAL_INFO } from "../../../../GlobalVar";

function SigupModal({ onModal }) {
    const [validPlatforms, setValidPlatforms] = useState([PERSONAL_INFO, FACEBOOK, GOOGLE]);
    const handleClickDropdown = (e) => {
        setValidPlatforms([PERSONAL_INFO, FACEBOOK, GOOGLE, TWITTER, LINE, KAKAOTALK]);
        e.target.style.display = "none";
    };
    const policyStyle = css`
        position: absolute;
        bottom: 64px;
        font-size: 12px;
        width: 100%;
        background-color: #fff;
        display: flex;
        justify-content: center;
    `;
    return (
        <>
            <ModelBody
                css={css`
                    padding-bottom: 180px;
                `}
            >
                <Title>Đăng ký TikTok</Title>
                <PlatformsList>
                    {platforms.map((platform, index) => {
                        if (validPlatforms.includes(platform.name)) {
                            return (
                                <PLatform icon={platform.icon} name={platform.name} key={index}>
                                    {(() => {
                                        if (platform.thirdParty) {
                                            return `Tiếp tục với ${platform.name}`;
                                        } else if (platform.name === PERSONAL_INFO) {
                                            return "Sử dụng số điện thoại hoặc email";
                                        }
                                    })()}
                                </PLatform>
                            );
                        } else return null;
                    })}
                    <div className="flex justify-center" onClick={handleClickDropdown}>
                        <i className={clsx(scss["dropDown"], "fa-solid fa-chevron-down")}></i>
                    </div>
                </PlatformsList>
            </ModelBody>
            <div css={policyStyle}>
                <p className={scss["signupPolicy"]}>
                    Bằng cách tiếp tục, bạn đồng ý với{" "}
                    <a className={clsx(scss["text-policy-color"], "hover:underline")} href="/">
                        Điều khoản Sử dụng
                    </a>{" "}
                    của TikTok và xác nhận rằng bạn đã đọc hiểu{" "}
                    <a className={clsx(scss["text-policy-color"], "hover:underline")} href="/">
                        Chính sách Quyền riêng tư
                    </a>{" "}
                    của TikTok.
                </p>
            </div>
            <Footer onChangeModal={() => onModal(LOGIN_MODAL)} ques="Bạn đã có tài khoản?" linkText="Đăng nhập" />
        </>
    );
}

export default SigupModal;
