/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import clsx from "clsx";
import scss from "./Live.module.scss";
import { videoInLivePage, giftsInLivePage, tiktokCoinIcon } from "../../components/GlobalVar";
import LiveComment from "./LiveComments";
import ActiveVideoDiv from "./ActiveVideoDiv";
import ProposedVideo from "./proposedVideo";
import GiftDiv from "./giftDiv";
import { useRef, useState } from "react";
import defaultAvatar from "../../assets/imgs/defaultAvatar.webp";
import { useSelector } from "react-redux";

function GiftAndCoinDiv() {
    const giftBlock = useRef();
    const btnUp = useRef();
    const btnDown = useRef();
    const [totalCoin, setTotalCoin] = useState(0);
    const sender = useSelector((states) => states.root.accountName.name);
    const amountSentGift = useRef({
        "Hạc giấy": 0,
        "Hoa hồng": 0,
        Tiktok: 0,
        "Pháo tiệc": 0,
        "Bao tay": 0,
        "Nước hoa": 0,
        "Bướm xanh": 0,
        "Thả tim": 0,
        "Thiên nga": 0,
    });
    const handleSendGift = (gift) => {
        setTotalCoin((prev) => prev + gift.coin);
        window.dispatchEvent(
            new CustomEvent("sentAGift", {
                detail: {
                    avatar: defaultAvatar,
                    name: gift.name,
                    image: gift.img,
                    time: ++amountSentGift.current[gift.name],
                    sender,
                },
            })
        );
    };
    const handleSwipeUp = () => {
        const style = window.getComputedStyle(giftBlock.current);
        giftBlock.current.style.top = parseFloat(style.top) + 100 + "px";
        setTimeout(() => {
            if (parseFloat(style.top) === 0) btnUp.current.style.visibility = "hidden";
            btnDown.current.style.visibility = "visible";
        }, 210);
    };
    const handlePullDown = () => {
        const style = window.getComputedStyle(giftBlock.current);
        giftBlock.current.style.top = parseFloat(style.top) - 100 + "px";
        setTimeout(() => {
            if (parseFloat(style.top) == 100 - parseFloat(style.height)) btnDown.current.style.visibility = "hidden";
            btnUp.current.style.visibility = "visible";
        }, 210);
    };
    return (
        <>
            <div className="pt-1.5 pb-1">
                <div className="flex">
                    <button
                        ref={btnUp}
                        onClick={handleSwipeUp}
                        className={clsx(scss.forwardButton, "right-0 hover:bg-slate-100 invisible")}
                    >
                        <i className="fa-solid fa-chevron-up"></i>
                    </button>
                    <div className={scss.giftItemsWrapper}>
                        <div ref={giftBlock} className={scss.giftBlock}>
                            {giftsInLivePage.map((gift, index) => (
                                <GiftDiv
                                    css={css`
                                        height: 100px;
                                    `}
                                    onClick={() => handleSendGift(gift)}
                                    key={index}
                                    gift={gift}
                                />
                            ))}
                        </div>
                    </div>
                    <button
                        ref={btnDown}
                        onClick={handlePullDown}
                        className={clsx(scss.forwardButton, "left-0 hover:bg-slate-100")}
                    >
                        <i className="fa-solid fa-chevron-down"></i>
                    </button>
                </div>
            </div>
            <div className="mx-6 flex py-4 border-t border-t-solid border-t-slate-200">
                <h2 className="font-bold text-sm">Coin tích lũy: {totalCoin}</h2>
                {tiktokCoinIcon}
            </div>
        </>
    );
}

function LivePage() {
    const proposeChannels = [];
    return (
        <div className={clsx(scss.mainSide, "relative flex")}>
            <div className={scss.leftSideContainer}>
                <div className="overflow-auto">
                    <div>
                        {videoInLivePage.map((item, index) => {
                            if (item.active) {
                                return <ActiveVideoDiv key={index} object={item} />;
                            } else {
                                proposeChannels.push(<ProposedVideo key={index} item={item} />);
                            }
                        })}
                    </div>
                    <GiftAndCoinDiv />
                    <hr />
                    <div className="mx-6">
                        <h2
                            css={css`
                                margin: 24px 0 16px;
                                font-weight: bold;
                                font-family: "IBM Plex Sans";
                                font-size: 20px;
                            `}
                        >
                            LIVE videos đề xuất
                        </h2>
                        <div className={scss.proposeChannelsDiv}>{proposeChannels}</div>
                    </div>
                </div>
            </div>
            <LiveComment />
        </div>
    );
}

export default LivePage;
