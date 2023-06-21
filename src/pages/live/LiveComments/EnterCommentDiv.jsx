/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { setAccountName } from "../../../components/GlobalStore/rootSlide";
import { useSelector, useDispatch } from "react-redux";
import scss from "./liveComments.module.scss";
import { useEffect, useRef, useState } from "react";
import CommentComponent from "./CommentComponent";
import { TitleDiv } from "../../../components/GeneralComponent";
import handleHover from "../../../components/GeneralComponent/handleHover";

function EnterCommentDiv({ onAddComment }) {
    useEffect(() => {
        window.addEventListener("commentInLivePage", (e) => {
            if (e.detail.delegate)
                onAddComment((prevComments) => {
                    prevComments.push(
                        <CommentComponent
                            key={`@cmt${prevComments.length}`}
                            msg={e.detail.msg}
                            accountName={e.detail.accountName}
                        />
                    );
                    return [...prevComments];
                });
            document.getElementById("commentsScrollDiv").scrollTop =
                document.getElementById("commentsScrollDiv").scrollHeight;
        });
        handleHover({ parent: emojiIcon.current, target: emojiTitle.current });
    }, []);
    const accountName = useSelector((states) => states.root.accountName);
    const dispatch = useDispatch();
    const inpWrapper = useRef();
    const [comment, setComment] = useState("");
    const handleChangeInput = (e) => {
        e.target.style.height = "fit-content";
        e.target.style.height = e.target.scrollHeight + "px";
        setComment(e.target.value);
    };
    const handleAddComment = () => {
        if (accountName.default) {
            var newName = prompt("Please enter your account name: ");
            newName && dispatch(setAccountName({ name: newName, default: false }));
        }
        if (newName || !accountName.default) {
            const accName = accountName.default || newName ? newName : accountName.name;
            onAddComment((prevComments) => {
                prevComments.push(
                    <CommentComponent key={`@cmt${prevComments.length}`} msg={comment} accountName={accName} />
                );
                setComment("");
                return [...prevComments];
            });
            window.dispatchEvent(
                new CustomEvent("commentInLivePage", {
                    detail: { accountName: accName, msg: comment },
                })
            );
        }
    };
    const handleAddCmtByEnter = (e) => {
        if (e.key === "Enter") {
            e.target.value.length !== 0 && handleAddComment();
            e.preventDefault();
        }
    };
    const emojiIcon = useRef();
    const emojiTitle = useRef();
    return (
        <div>
            <div className={scss.bottom}>
                <div
                    ref={inpWrapper}
                    className="grow rounded-lg px-2 flex items-center"
                    css={css`
                        background-color: #eee;
                    `}
                >
                    <textarea
                        css={css`
                            min-height: 40px;
                        `}
                        onKeyDown={handleAddCmtByEnter}
                        value={comment}
                        onFocus={() => {
                            inpWrapper.current.style.margin = "-1px";
                            inpWrapper.current.style.border = "1px solid #bbb";
                        }}
                        onBlur={() => {
                            inpWrapper.current.style.margin = 0;
                            inpWrapper.current.style.border = "none";
                        }}
                        onChange={handleChangeInput}
                        type="text"
                        className={scss.inputComment}
                        placeholder="Say something nice"
                    ></textarea>
                    <div className="relative">
                        <i
                            ref={emojiIcon}
                            className="fa-regular fa-face-smile p-2 text-xl select-none cursor-pointer rounded-lg hover:bg-gray-300"
                            css={css`
                                width: 32px;
                                height: 32px;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                transition: background 200ms;
                            `}
                        ></i>
                        <TitleDiv
                            ref={emojiTitle}
                            css={css`
                                top: -130%;
                            `}
                            className="hidden -left-3/4"
                        >
                            Add emojis
                        </TitleDiv>
                    </div>
                </div>
                <i
                    onClick={handleAddComment}
                    className="fa-sharp fa-solid fa-paper-plane p-1 ml-1 cursor-pointer"
                    style={
                        comment
                            ? { color: "var(--primary-color)", cursor: "pointer" }
                            : { color: "lightgray", cursor: "not-allowed" }
                    }
                ></i>
            </div>
        </div>
    );
}

export default EnterCommentDiv;
