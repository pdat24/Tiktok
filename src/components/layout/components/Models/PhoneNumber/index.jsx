/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import clsx from "clsx";

import { Title, Footer, ModelBody } from "../../../../ModalComponent";
import { SIGNUP_MODAL } from "../modalNames";
import scss from "./PhoneNumber.module.scss";
import BackButton from "../BackButton";

function UsePhoneNumberModal({ onModal }) {
    return (
        <>
            <BackButton onModal={onModal} />
            <ModelBody
                css={css`
                    padding-bottom: 112px;
                    padding-right: 6px;
                `}
            >
                <Title className="mb-8 text-4xl">Đăng nhập</Title>
                {/** render here */}
                <div className={clsx(scss["container"], "mx-12")}>
                    <div className="flex justify-between">
                        <span className={scss["header"]}>Điện thoại</span>
                        <a className={clsx(scss["link"], "hover:underline", "text-xs")} href="/">
                            Đăng nhập bằng email hoặc TikTok ID
                        </a>
                    </div>
                    <div className={scss["mainForm"]}>
                        <div className={scss["enterInfo"]}>
                            <select name="country" id={scss["country-phone"]}>
                                <option>VN +84</option>
                                <option>US +1</option>
                                <option>DZ +234</option>
                                <option>AL +126</option>
                            </select>
                            <div className={scss["spanner"]}></div>
                            <input placeholder="Số điện thoại" className={scss["inputText"]} />
                        </div>
                        <p className={scss["inforWhenType"]}></p>
                        <div className={scss["enterInfo"]}>
                            <input
                                className={clsx(scss["inputText"], scss["inpCode"])}
                                placeholder="Nhập mã gồm 6 chữ số"
                            />
                            <button className={clsx(scss["disableSendCode"])}>Gửi mã</button>
                        </div>
                        <a className={clsx(scss["link"], "hover:underline", "text-xs")} href="/">
                            Đăng nhập với Mật khẩu
                        </a>
                    </div>
                    <button className={clsx(scss["submitBtn"])}>Đăng nhập</button>
                </div>
            </ModelBody>
            <Footer onChangeModal={() => onModal(SIGNUP_MODAL)} ques="Bạn không có tài khoản?" linkText="Đăng ký" />
        </>
    );
}

export default UsePhoneNumberModal;
