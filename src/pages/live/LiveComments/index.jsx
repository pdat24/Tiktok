/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import scss from "./liveComments.module.scss";
import clsx from "clsx";
import { useRef, useState } from "react";

function Footer() {
    const inpWrapper = useRef();
    const [comment, setComment] = useState("");
    const handleChangeInput = (e) => {
        e.target.style.height = "fit-content";
        e.target.style.height = e.target.scrollHeight + "px";
        setComment(e.target.value);
    };
    return (
        <div className={scss.bottom}>
            <div
                ref={inpWrapper}
                className="grow rounded-lg px-2 flex items-center"
                css={css`
                    background-color: #eee;
                `}
            >
                <textarea
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
                    placeholder="Add comment..."
                ></textarea>
                <i
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
            </div>
            <i
                className="fa-sharp fa-solid fa-paper-plane p-1 ml-1 cursor-pointer"
                style={
                    comment
                        ? { color: "var(--primary-color)", cursor: "pointer" }
                        : { color: "lightgray", cursor: "not-allowed" }
                }
            ></i>
        </div>
    );
}

function LiveComment({ className, ...attrs }) {
    return (
        <div className={clsx(scss.commentSide, className)} {...attrs}>
            <div className={scss.header}>
                <i className="fa-sharp fa-solid fa-arrow-right-from-bracket cursor-pointer"></i>
                <h2 className="grow text-center">LIVE chat</h2>
            </div>
            <div className="pt-4 grow shrink">
                <div
                    className="flex py-1 px-4"
                    css={css`
                        font-size: 13px;
                    `}
                >
                    <i className={clsx(scss.tiktokIcon, "fa-brands fa-tiktok")}></i>
                    <div>
                        Chào mừng đến TikTok LIVE! Hãy tương tác với những người khác một cách vui vẻ. Chủ phòng phải từ
                        18 tuổi trở lên để được phép LIVE, những người xem phải từ đủ 18 tuổi mới được nạp và tặng quà.
                        Vui lòng tuân thủ những quy tắc cộng đồng của chúng tôi.
                    </div>
                </div>
                <div></div>
            </div>
            <Footer />
        </div>
    );
}

export default LiveComment;
