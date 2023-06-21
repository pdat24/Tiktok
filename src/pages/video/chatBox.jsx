/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import scss from "./videoFull.module.scss";
import { Link } from "react-router-dom";
import { CommentDiv } from "../../components/GeneralComponent";
import defaultAvatar from "../../assets/imgs/defaultAvatar.webp";
import { useEffect, useRef, useState } from "react";

const Comment = ({ user, children }) => {
    const [tim, setTim] = useState(0);
    return (
        <CommentDiv className="profileDiv relative mb-6" whAvatar="40px" avatar={defaultAvatar}>
            <div className="flex justify-center">
                <div className="ml-3 grow shrink">
                    <div className="flex justify-between items-center">
                        <div>
                            <Link to="/" className="font-bold hover:underline">
                                {user || "user_tiktok"}
                            </Link>
                            <div className="text-sm">{children}</div>
                            <div
                                className="flex justify-between"
                                css={css`
                                    color: #16182380;
                                    font-size: 13px;
                                    margin-top: 8px;
                                `}
                            >
                                <div>
                                    {(() => {
                                        const time = new Date(Date.now());
                                        return `${time.getMonth() + 1}-${time.getDate()}`;
                                    })()}
                                </div>
                                <div className="cursor-pointer">reply</div>
                            </div>
                        </div>
                        <div
                            className="flex flex-col items-center gap-1"
                            css={css`
                                color: #16182380;
                            `}
                        >
                            <i
                                onClick={(e) => {
                                    if (e.target.classList.contains("fa-regular")) {
                                        e.target.classList.replace("fa-regular", "fa-solid");
                                        e.target.style.color = "var(--primary-color)";
                                        setTim(tim + 1);
                                    } else if (e.target.classList.contains("fa-solid")) {
                                        e.target.classList.replace("fa-solid", "fa-regular");
                                        e.target.style.color = "#16182380";
                                        setTim(tim - 1);
                                    }
                                }}
                                className="fa-regular fa-heart cursor-pointer"
                            ></i>
                            <div className="text-xs font-bold">{tim}</div>
                        </div>
                    </div>
                </div>
            </div>
        </CommentDiv>
    );
};

function ChatBox() {
    const [cmtList, setCmtList] = useState([]);
    const commentKey = useRef(0);
    useEffect(() => {
        const handler = (e) => {
            setCmtList((prev) => {
                prev.push(<Comment key={commentKey.current++}>{e.detail}</Comment>);
                return [...prev];
            });
        };
        window.addEventListener("postedCommentInVideoPage", handler);
        return () => window.removeEventListener("postedCommentInVideoPage", handler);
    }, []);
    return (
        <div className="grow overflow-y-scroll">
            <div className={scss.chatBox}>
                <Comment>Hello world!</Comment>
                {cmtList}
            </div>
        </div>
    );
}

export default ChatBox;
