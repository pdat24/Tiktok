/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import clsx from "clsx";

import { Title, Footer, ModelBody } from "../../../../ModalComponent";
import { SIGNUP_MODAL } from "../modalNames";
import QRCode from "../../../../../assets/imgs/QRCode.png";
import scss from "./ScanQRCode.module.scss";
import BackButton from "../BackButton";

function QRScannerModal({ onModal }) {
    return (
        <>
            <BackButton onModal={onModal} />
            <ModelBody
                css={css`
                    padding-bottom: 112px;
                `}
            >
                <div className="p-0 overflow-auto">
                    <Title className="mb-8 text-4xl">Đăng nhập bằng mã QR</Title>
                    <div className={clsx(scss["container"], "mx-12")}>
                        <img src={QRCode} alt="QRCode" />
                    </div>
                </div>
                <div className="flex justify-center">
                    <ol className={scss["instruction"]}>
                        <li>Quét bằng máy ảnh trên thiết bị di động của bạn</li>
                        <li>Xác nhận đăng nhập hoặc đăng ký</li>
                    </ol>
                </div>
            </ModelBody>
            <Footer onChangeModal={() => onModal(SIGNUP_MODAL)} ques="Bạn không có tài khoản?" linkText="Đăng ký" />
        </>
    );
}

export default QRScannerModal;
