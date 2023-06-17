/** @jsxImportSource @emotion/react */
import clsx from "clsx";
import { Link } from "react-router-dom";
import { css } from "@emotion/react";

import scss from "./RightSide.module.scss";
import MoreVert from "./MoreVert";
import handleOpen from "../../../../ModalComponent/handleOpen";
import { GeneralButton } from "../../../../GeneralComponent";
import InboxDiv from "./InboxBox";

// main
function RightSide() {
    return (
        <div className={"flex items-center"}>
            {/** Upload button */}
            <Link
                to="/upload"
                className={clsx(scss["upload-btn"], scss["header__right-btn"], "gap-1", "rounded", "border")}
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
                className="ml-4 hover:brightness"
                onClick={() => {
                    handleOpen({
                        container: document.getElementById("loginModel"),
                        dialog: document.getElementById("loginDialog"),
                    });
                }}
            >
                <span className={clsx("mx-2", "font-bold")}>Đăng nhập</span>
            </GeneralButton>
            <InboxDiv />
            <MoreVert />
        </div>
    );
}

export default RightSide;
