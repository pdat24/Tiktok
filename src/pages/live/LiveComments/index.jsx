/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState, useEffect, useRef } from "react";
import clsx from "clsx";
import scss from "./liveComments.module.scss";
import CommentComponent from "./CommentComponent";
import EnterCommentDiv from "./EnterCommentDiv";

function LiveComment({ className, ...attrs }) {
    useEffect(() => {
        const timeID = setInterval(() => {
            window.dispatchEvent(
                new CustomEvent("commentInLivePage", {
                    detail: { accountName: "@user_tiktok", msg: "Some new comment...❤️❤️❤️", delegate: true },
                })
            );
        }, 5000);
        return () => clearInterval(timeID);
    }, []);
    const [liveComments, setLiveComments] = useState([
        <CommentComponent key={"@cmtdefault"} accountName={"@user_tiktok"} msg={"Hello World"} />,
    ]);
    const handleCloseBox = () => {
        window.dispatchEvent(new CustomEvent("closedLiveBoxChat"));
        document.getElementById("liveChatBox").style.width = 0;
    };
    return (
        <div id="liveChatBox" className={clsx(scss.commentSide, className)} {...attrs}>
            <div className={scss.header}>
                <i
                    onClick={handleCloseBox}
                    className="fa-sharp fa-solid fa-arrow-right-from-bracket cursor-pointer"
                ></i>
                <h2 className="grow text-center">LIVE chat</h2>
            </div>
            <div className="h-full grow relative overflow-hidden">
                <div className="overflow-auto h-full pb-8" id="commentsScrollDiv">
                    <div className="pt-4">
                        <div
                            className="flex py-1 px-4"
                            css={css`
                                font-size: 13px;
                            `}
                        >
                            <i className={clsx(scss.tiktokIcon, "fa-brands fa-tiktok")}></i>
                            <div>
                                Chào mừng đến TikTok LIVE! Hãy tương tác với những người khác một cách vui vẻ. Chủ phòng
                                phải từ 18 tuổi trở lên để được phép LIVE, những người xem phải từ đủ 18 tuổi mới được
                                nạp và tặng quà. Vui lòng tuân thủ những quy tắc cộng đồng của chúng tôi.
                            </div>
                        </div>
                        <div>{liveComments}</div>
                    </div>
                </div>
                <div className="absolute bottom-0 w-full flex flex-col items-center">
                    <NotifyNumberMsg />
                    <NotifyUserComment />
                </div>
            </div>
            <EnterCommentDiv onAddComment={setLiveComments} />
        </div>
    );
}

function NotifyNumberMsg() {
    const [messNumner, setMessNumber] = useState(0);
    useEffect(() => {
        const handleEvent = () => {
            setMessNumber((prev) => prev + 1);
        };
        window.addEventListener("commentInLivePage", handleEvent);
        return () => window.removeEventListener("commentInLivePage", handleEvent);
    }, []);
    return (
        Boolean(messNumner) && (
            <div>
                <div
                    css={css`
                        border-radius: 16px;
                        text-align: center;
                        height: 30px;
                        line-height: 26px;
                        font-size: 13px;
                        width: auto;
                        padding: 2px 20px;
                        font-weight: 600;
                        box-shadow: rgba(0, 0, 0, 0.08) 0px 0px 2px 1px;
                        color: rgba(255, 255, 255, 0.75);
                        background-color: rgb(254, 44, 85);
                    `}
                >
                    {messNumner + " new messages"}
                </div>
            </div>
        )
    );
}

function NotifyUserComment() {
    const animationTarget = useRef();
    const [commentedUser, setCommentedUser] = useState("");
    useEffect(() => {
        const handlEvent = (e) => {
            animationTarget.current.style.animation = `${scss.swipeUp} 800ms linear`;
            setTimeout(() => {
                animationTarget.current.style.animation = "none";
            }, 800);
            setCommentedUser(e.detail.accountName);
        };
        window.addEventListener("commentInLivePage", handlEvent);
        return () => window.removeEventListener("commentInLivePage", handlEvent);
    }, []);
    return (
        <div
            css={css`
                height: 32px;
                background-color: #fff;
                padding: 4px 0;
                margin-top: 8px;
                width: 100%;
                font-size: 13px;
            `}
        >
            <div className="flex justify-center items-center w-full" ref={animationTarget}>
                {commentedUser && (
                    <>
                        <i
                            className="fa-regular fa-heart"
                            css={css`
                                margin-right: 8px;
                                padding: 6px;
                                background: #eee;
                                border-radius: 50%;
                            `}
                        ></i>
                        <span>
                            <span className="font-bold">{commentedUser}</span> <span>liked the LIVE</span>
                        </span>
                    </>
                )}
            </div>
        </div>
    );
}

export default LiveComment;
