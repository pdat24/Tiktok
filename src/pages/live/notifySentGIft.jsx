/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import { useEffect, useRef } from "react";
import { Avatar, TextOverflow } from "../../components/GeneralComponent";

function NotifySentGift({ avatar, sender, giftName, giftImg, time }) {
    const wrapper = useRef();
    const appearStyle = keyframes`
        from { transform: translateX(-100%); }
        to { transform: translateX(0) ease-in-out; }
    `;
    useEffect(() => {
        setTimeout(() => {
            wrapper.current.style.opacity = 0;
            setTimeout(() => {
                window.dispatchEvent(new CustomEvent("removeGiftNotice", { detail: wrapper.current }));
            }, 200);
        }, 1000);
    }, []);
    return (
        <div
            ref={wrapper}
            className="flex gap-1 text-white mt-2 ml-4"
            css={css`
                animation: ${appearStyle} 100ms;
                transition: opacity 200ms ease-in-out;
            `}
        >
            <div className="flex gap-1 items-center">
                <Avatar wh="36px" src={avatar} />
                <div>
                    <TextOverflow
                        className="font-bold mb-1 text-sm"
                        css={css`
                            max-width: 150px;
                        `}
                    >
                        {sender}
                    </TextOverflow>
                    <div className="text-xs">{"Tặng " + giftName}</div>
                </div>
            </div>
            <div className="flex items-end font-bold italic gap-3">
                <img
                    css={css`
                        width: 48px;
                    `}
                    alt="git image"
                    src={giftImg}
                />
                <div>
                    <span className="mr-1 text-xl">x</span>
                    <span
                        css={css`
                            font-size: 28px;
                        `}
                    >
                        {time}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default NotifySentGift;
