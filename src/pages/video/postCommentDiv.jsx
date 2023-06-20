/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import clsx from "clsx";
import { useState, useRef } from "react";
import scss from "./videoFull.module.scss";

function PostCommentDiv() {
    const postWrapper = useRef();
    const [text, setText] = useState("");
    return (
        <div className={scss.postDiv}>
            <div ref={postWrapper} className={scss.inputWrapper}>
                <input
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
                <div>
                    <i className={scss.postDivIcon + " text-xl"}>@</i>
                    <i className={scss.postDivIcon + " text-lg fa-regular fa-face-smile"}></i>
                </div>
            </div>
            <button
                className={clsx({ "color-primary": text.length !== 0 })}
                css={css`
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
