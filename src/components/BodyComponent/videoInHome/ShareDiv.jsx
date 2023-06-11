/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";
import ClipButton from "../ClipButton";

function ShareDiv({ count }) {
    const Expand = () => {
        const [hidden, setHidden] = useState(true);
        useEffect(() => {
            window.addEventListener("closeShareDiv", () => {
                setTimeout(() => {
                    setHidden(true);
                }, 200);
            });
        }, []);
        return hidden ? (
            <LiShare
                onClick={() => setHidden(!hidden)}
                css={css`
                    height: 20px;
                `}
                className="flex gap-4 items-center justify-center"
            >
                <span className="fa-solid fa-chevron-down"></span>
            </LiShare>
        ) : (
            <LiShare className="flex gap-4 items-center">
                <IconInShare bg="#00bed4" className="fa-solid fa-envelope"></IconInShare>
                <span className="text-sm">Chia sẻ với Email</span>
            </LiShare>
        );
    };
    const shareButton = useRef();
    const ulContainer = useRef();
    const LiShare = styled.li`
        padding: 11px 16px;
        margin: 0 3px 0 4px;
        cursor: pointer;
        transition: background-color 80ms linear, opacity 200ms linear;
        &:hover {
            background-color: #f5f5f5;
        }
    `;
    const UlShareDiv = styled.ul`
        display: none;
        opacity: 0;
        max-height: 448px;
        position: absolute;
        width: 280px;
        transform: translateY(-100%);
        transition: opacity 200ms linear;
        background: #fff;
        box-shadow: 0 0 16px #ccc;
        padding: 8px 0;
        border-radius: 8px;
    `;
    const IconInShare = styled.i`
        padding: 8px;
        border-radius: 50%;
        background: ${({ bg }) => (bg ? bg : "var(--primary-color)")};
        color: #fff;
        font-size: 13px;
        width: 28px;
        height: 28px;
        display: flex;
        justify-content: center;
    `;
    useEffect(() => {
        let timeID = null;
        shareButton.current.onmouseenter = () => {
            clearTimeout(timeID);
            ulContainer.current.style.display = "block";
            timeID = setTimeout(() => {
                ulContainer.current.style.opacity = "1";
            }, 10);
        };
        shareButton.current.onmouseleave = () => {
            clearTimeout(timeID);
            timeID = setTimeout(() => {
                ulContainer.current.style.opacity = "0";
                setTimeout(() => {
                    ulContainer.current.style.display = "none";
                }, 200);
                window.dispatchEvent(new CustomEvent("closeShareDiv"));
            }, 400);
        };
    }, []);
    return (
        <div ref={shareButton}>
            <UlShareDiv ref={ulContainer}>
                <LiShare className="flex gap-4 items-center">
                    <IconInShare bg="#555" className="fa-solid fa-code"></IconInShare>
                    <span className="text-sm">Nhúng</span>
                </LiShare>
                <LiShare className="flex gap-4 items-center">
                    <IconInShare className="fa-sharp fa-solid fa-paper-plane"></IconInShare>
                    <span className="text-sm">Gửi đến bạn bè</span>
                </LiShare>
                <LiShare className="flex gap-4 items-center">
                    <IconInShare className="fa-solid fa-link"></IconInShare>
                    <span className="text-sm">Sao chép liên kết</span>
                </LiShare>
                <Expand />
            </UlShareDiv>
            <ClipButton count={count} icon="fa-solid fa-share" />
        </div>
    );
}

export default ShareDiv;
