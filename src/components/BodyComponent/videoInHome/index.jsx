/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ClipButton } from "..";
import { useEffect, useRef } from "react";
import ShareDiv from "./ShareDiv";

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
    return (
        <div {...className}>
            <div className={"flex w-fit mx-auto"}>
                <div ref={videoWrapper} className="mr-5 relative cursor-pointer">
                    <video onPause={pause_} ref={videoDOM} width="256px" src={src} className="rounded-lg"></video>
                    <div className="absolute bottom-0 flex w-full pb-5 px-3 justify-between">
                        <i ref={playBtn} css={controlBTnStyle} className="fa-solid fa-play invisible"></i>
                        <i ref={muteBtn} css={controlBTnStyle} className="fa-solid fa-volume-high"></i>
                    </div>
                </div>
                <div className="flex flex-col gap-2.5 self-end">
                    <ClipButton count={1923410} className="fa-solid fa-heart" />
                    <ClipButton count={1191} className="fa-solid fa-comment-dots" />
                    <ClipButton count={2078} className="fa-solid fa-bookmark" />
                    <ShareDiv />
                </div>
            </div>
        </div>
    );
}

export default Video;
