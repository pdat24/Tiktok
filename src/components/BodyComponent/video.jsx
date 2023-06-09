/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ClipButton } from "../../components/BodyComponent";
import { useEffect, useRef } from "react";
import styled from "@emotion/styled";

function Video({ src, className }) {
    const videoWrapper = useRef();
    const videoDOM = useRef();
    const playBtn = useRef();
    const muteBtn = useRef();
    const play_ = () => {
        videoDOM.current.play();
        playBtn.current.classList.replace("fa-play", "fa-pause");
    };
    const pause_ = () => {
        videoDOM.current.pause();
        playBtn.current.classList.replace("fa-pause", "fa-play");
    };
    const mute_ = () => {
        videoDOM.current.muted = true;
        muteBtn.current.classList.replace("fa-volume-high", "fa-volume-xmark");
    };
    const unmute_ = () => {
        videoDOM.current.muted = false;
        muteBtn.current.classList.replace("fa-volume-xmark", "fa-volume-high");
    };
    useEffect(() => {
        muteBtn.current.onclick = (e) => {
            videoDOM.current.muted ? unmute_() : mute_();
            e.stopPropagation();
        };
        playBtn.current.onclick = () => {
            videoDOM.current.paused ? play_() : pause_();
        };
        videoWrapper.current.onmouseenter = () => {
            playBtn.current.style.opacity = 1;
            playBtn.current.style.visibility = "visible";
        };
        videoWrapper.current.onmouseleave = () => {
            playBtn.current.style.opacity = 0;
            setTimeout(() => {
                playBtn.current.style.visibility = "hidden";
            }, 200);
        };
    }, []);
    const controlBTnStyle = css`
        font-size: 20px;
        color: #fff;
        padding: 6px;
        cursor: pointer;
        transition: opacity 200ms linear;
    `;
    const LiShare = styled.li`
        padding: 11px 16px;
        cursor: pointer;
        transition: background-color 80ms linear;
        &:hover {
            background-color: #6a6d7a08;
        }
    `;
    const UlShareDiv = styled.ul`
        position: absolute;
        width: 260px;
        transform: translateY(-100%);
        background: #fff;
        box-shadow: 0 0 16px #ccc;
        padding: 8px 0;
        border-radius: 8px;
    `;
    const IconInShare = styled.i`
        padding: 8px;
        border-radius: 50%;
        background: var(--primary-color);
        color: #fff;
        font-size: 13px;
        width: 28px;
        height: 28px;
        display: flex;
        justify-content: center;
    `;
    return (
        <div {...className}>
            <div className={"flex w-fit mx-auto"}>
                <div ref={videoWrapper} className="mr-5 relative cursor-pointer">
                    <video onPause={pause_} ref={videoDOM} width="256px" src={src} className="rounded-xl"></video>
                    <div className="absolute bottom-0 flex w-full pb-5 px-3 justify-between">
                        <i ref={playBtn} css={controlBTnStyle} className="fa-solid fa-play invisible"></i>
                        <i ref={muteBtn} css={controlBTnStyle} className="fa-solid fa-volume-high"></i>
                    </div>
                </div>
                <div className="flex flex-col gap-2.5 self-end">
                    <ClipButton count={1923410} className="fa-solid fa-heart" />
                    <ClipButton count={1191} className="fa-solid fa-comment-dots" />
                    <ClipButton count={2078} className="fa-solid fa-bookmark" />
                    <div>
                        <UlShareDiv>
                            <LiShare className="flex gap-4 items-center">
                                <IconInShare className="fa-solid fa-code"></IconInShare>
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
                            <LiShare
                                css={css`
                                    height: 20px;
                                `}
                                className="flex gap-4 items-center justify-center"
                            >
                                <span className="fa-solid fa-chevron-down"></span>
                            </LiShare>
                        </UlShareDiv>
                        <ClipButton count={234} className="fa-solid fa-share" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Video;
