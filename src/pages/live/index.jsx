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
    return (
        <>
            <div className="pt-1.5 pb-1">
                <div className="flex gap-3">
                    <button className={clsx(scss.forwardButton, "left-0 hover:bg-slate-100")}>
                        <i className="fa-solid fa-chevron-left"></i>
                    </button>
                    <div className="grow shrink basis-auto overflow-hidden">
                        <div className="relative flex pt-1.5 pb-1">
                            {giftsInLivePage.map((gift, index) => (
                                <GiftDiv onClick={() => handleSendGift(gift)} key={index} gift={gift} />
                            ))}
                        </div>
                    </div>
                    <button className={clsx(scss.forwardButton, "right-0 hover:bg-slate-100")}>
                        <i className="fa-solid fa-chevron-right"></i>
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
