/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import clsx from "clsx";
import { GeneralButton } from "../../components/GeneralComponent";
import scss from "./Live.module.scss";

function GiftDiv({ gift, className, ...attrs }) {
    const [showSendBtn, setShowSendBtn] = useState(false);
    return (
        <div
            {...attrs}
            className={clsx(scss.giftDiv, className)}
            onMouseEnter={() => setShowSendBtn(true)}
            onMouseLeave={() => setShowSendBtn(false)}
        >
            <img
                css={css`
                    width: 48px;
                    height: 48px;
                    margin: 0 auto;
                `}
                src={gift.img}
            />
            <div className="relative">
                <div className={clsx("text-xs text-center mt-2", { invisible: showSendBtn })}>
                    <div className="font-bold">{gift.name}</div>
                    <div>{gift.coin + (gift.coin === 1 ? " coin" : " coins")}</div>
                </div>
                <div
                    className={clsx("flex justify-center items-center absolute top-0 h-full w-full", {
                        invisible: !showSendBtn,
                    })}
                >
                    <GeneralButton w="80px" h="24px" className="text-sm hover:brightness font-medium">
                        Gửi
                    </GeneralButton>
                </div>
            </div>
        </div>
    );
}

export default GiftDiv;
