/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import clsx from "clsx";
import { useState, useRef, useEffect } from "react";
import scss from "./videoFull.module.scss";
import { TitleDiv } from "../../components/GeneralComponent";
import handleHover from "../../components/GeneralComponent/handleHover";

function PostCommentDiv() {
    const postWrapper = useRef();
    const tagIcon = useRef();
    const tagTitle = useRef();
    const emojiIcon = useRef();
    const emojiTitle = useRef();
    const [text, setText] = useState("");
    const handlePost = () => {
        setText("");
        if (text.replace(" ", "").length !== 0)
            window.dispatchEvent(new CustomEvent("postedCommentInVideoPage", { detail: text }));
    };
    useEffect(() => {
        handleHover({ parent: emojiIcon.current, target: emojiTitle.current });
        handleHover({ parent: tagIcon.current, target: tagTitle.current });
    }, []);
    return (
        <div className={scss.postDiv}>
            <div ref={postWrapper} className={scss.inputWrapper}>
                <input
                    onKeyDown={(e) => (e.key === "Enter" ? handlePost() : null)}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    onFocus={() => {
                        postWrapper.current.style.border = "1px solid rgba(22, 24, 35, 0.12)";
                        postWrapper.current.style.margin = "-1px";
                    }}
                    onBlur={() => {
                        postWrapper.current.style.border = "none";
                        postWrapper.current.style.margin = "0";
                    }}
                    className="outline-0 grow text-sm"
                    css={css`
                        background: none;
                        caret-color: var(--primary-color);
                    `}
                    placeholder="Thêm bình luận"
                />
                <div className="flex">
                    <div className="relative">
                        <i className={scss.postDivIcon + " text-xl"} ref={tagIcon}>
                            @
                        </i>
                        <TitleDiv ref={tagTitle} className="-top-full hidden -left-3/4">
                            Tag other user
                        </TitleDiv>
                    </div>
                    <div className="relative">
                        <i ref={emojiIcon} className={scss.postDivIcon + " text-lg fa-regular fa-face-smile"}></i>
                        <TitleDiv ref={emojiTitle} className="-top-full hidden -left-3/4">
                            Add emojis
                        </TitleDiv>
                    </div>
                </div>
            </div>
            <button
                onClick={handlePost}
                className={clsx({ "color-primary cursor-pointer": text.length !== 0 })}
                css={css`
                    cursor: not-allowed !important;
                    color: rgba(22, 24, 35, 0.34);
                    font-weight: 600;
                    cursor: default;
                    flex: 0 0 48px;
                    font-size: 14px;
                    line-height: 39px;
                    text-align: right;
                    margin-right: 4px;
                `}
            >
                Đăng
            </button>
        </div>
    );
}

export default PostCommentDiv;
