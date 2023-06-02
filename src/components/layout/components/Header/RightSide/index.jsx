/* eslint-disable react/no-unknown-property */
/** @jsxImportSource @emotion/react */
import clsx from "clsx";
import { Link } from "react-router-dom";
import { css } from "@emotion/react";
import { useDispatch } from "react-redux";

import scss from "./RightSide.module.scss";
import MoreVert from "./MoreVert";
import handleOpen from "../../../../ModalComponent/handleOpen";
import { setTitle } from "../../../../GlobalStore/rootSlide";
import { GeneralButton } from "../../../../GeneralComponent";

// main
function RightSide() {
    const updateTitle = useDispatch(setTitle("Đăng nhập | TikTok"));
    return (
        <div className={"flex items-flex"}>
            {/** Upload button */}
            <Link
                to="/upload"
                className={clsx(
                    scss["upload-btn"],
                    scss["header__right-btn"],
                    "border",
                    "gap-1",
                    "rounded",
                    "bg-white"
                )}
            >
                <span
                    css={css`
                        font-size: 22px;
                    `}
                >
                    +
                </span>
                &nbsp;
                <span>Tải lên</span>
            </Link>
            {/** Log in button */}
            <GeneralButton
                className="ml-4"
                onClick={() => {
                    updateTitle(setTitle("Đăng nhập | TikTok"));
                    handleOpen({
                        container: document.getElementById("loginModel"),
                        dialog: document.getElementById("loginDialog"),
                    });
                }}
            >
                <span className={clsx("mx-2", "font-bold")}>Đăng nhập</span>
            </GeneralButton>
            <MoreVert />
        </div>
    );
}

export default RightSide;
