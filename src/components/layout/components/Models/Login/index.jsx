/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Title, Footer, PLatform, PlatformsList, ModelBody } from "../../../../ModalComponent";
import { platforms, QRCODE, PERSONAL_INFO } from "../../../../GlobalVar";
import { SIGNUP_MODAL, SCAN_QR_MODAL, USE_PHONE_NUMBER_MODAL } from "../modalNames";

function LoginModal({ onModal }) {
    const handleClickLogin = (name) => {
        switch (name) {
            case QRCODE:
                onModal(SCAN_QR_MODAL);
                break;
            case PERSONAL_INFO:
                onModal(USE_PHONE_NUMBER_MODAL);
                break;
            default:
                break;
        }
    };
    return (
        <>
            <ModelBody
                css={css`
                    padding-bottom: 112px;
                `}
            >
                <Title>Đăng nhập vào TikTok</Title>
                <PlatformsList>
                    {platforms.map((platform, index) => {
                        return (
                            <PLatform name={platform.name} icon={platform.icon} onClick={handleClickLogin} key={index}>
                                {(() => {
                                    if (platform.thirdParty) {
                                        return `Tiếp tục với ${platform.name}`;
                                    } else if (platform.name === PERSONAL_INFO) {
                                        return "Số điện thoại / Email / TikTok ID";
                                    } else if (platform.name === QRCODE) {
                                        return "Sử dụng mã QR";
                                    }
                                })()}
                            </PLatform>
                        );
                    })}
                </PlatformsList>
            </ModelBody>
            <Footer onChangeModal={() => onModal(SIGNUP_MODAL)} ques="Bạn không có tài khoản?" linkText="Đăng ký" />
        </>
    );
}

export default LoginModal;
