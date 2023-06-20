/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ClipButton } from "..";
import { useEffect, useRef, useState } from "react";
import ShareDiv from "./ShareDiv";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import { setActiveVideo } from "../../GlobalStore/activeVideoSlice";
import { useNavigate } from "react-router-dom";

function LikeButton({ like }) {
    const [liked, setLiked] = useState(false);
    const like_ = useRef(like);
    return (
        <ClipButton
            onClick={() => {
                !liked ? like_.current++ : like_.current--;
                setLiked(!liked);
            }}
            count={like_.current}
            icon={clsx({ "color-primary": liked }, "fa-solid fa-heart")}
        />
    );
}

let sound = true;

function Video({ channel, autoPlay, src, className, like, share, comment, save, ...attrs }) {
    const navigate = useNavigate();
    const updateStore = useDispatch();
    const videoWrapper = useRef();
    const videoDOM = useRef();
    const playBtn = useRef();
    const muteBtn = useRef();
    const timeID = useRef();
    const play_ = () => {
        videoDOM.current?.play();
        playBtn.current?.classList.replace("fa-play", "fa-pause");
    };
    const pause_ = () => {
        videoDOM.current?.pause();
        playBtn.current?.classList.replace("fa-pause", "fa-play");
    };
    const mute_ = () => {
        sound = videoDOM.current.muted = true;
        muteBtn.current.classList.replace("fa-volume-high", "fa-volume-xmark");
    };
    const unmute_ = () => {
        sound = videoDOM.current.muted = false;
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
        document.addEventListener("visibilitychange", () => pause_());
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        timeID.current = setTimeout(() => {
                            videoDOM.current.play();
                            videoDOM.current.muted = sound;
                            sound
                                ? muteBtn.current.classList.replace("fa-volume-high", "fa-volume-xmark")
                                : muteBtn.current.classList.replace("fa-volume-xmark", "fa-volume-high");
                        }, 600);
                    } else {
                        clearTimeout(timeID.current);
                        if (videoDOM.current) {
                            videoDOM.current.currentTime = 0;
                            videoDOM.current.pause();
                        }
                    }
                });
            },
            {
                root: null,
                threshold: 0.5,
                rootMargin: "0px",
            }
        );
        observer.observe(videoDOM.current);
    }, []);
    const controlBTnStyle = css`
        font-size: 20px;
        color: #fff;
        padding: 6px;
        cursor: pointer;
        transition: opacity 200ms linear;
    `;
    const handleOpenFullVideo = () => {
        updateStore(
            setActiveVideo({
                video: src,
                channel: {
                    avatar: channel.avatar,
                    userName: channel.accountName,
                    nickName: channel.userName,
                    desc: channel.desc,
                },
                tags: channel.tags,
                time: "1d",
                footerNote: channel.footerNote,
                like,
                comment,
                bookmark: save,
            })
        );
        setTimeout(() => {
            navigate("/video");
        }, 100);
    };
    return (
        <div className={className} {...attrs}>
            <div className="flex w-fit mx-auto h-full justify-center">
                <div ref={videoWrapper} className="mr-5 relative cursor-pointer">
                    <video
                        autoPlay={autoPlay}
                        muted="muted"
                        onPlay={play_}
                        onEnded={play_}
                        loading="lazy"
                        onPause={pause_}
                        ref={videoDOM}
                        src={src}
                        className="rounded-lg h-full w-full homevideoDOM"
                    ></video>
                    <div className="absolute bottom-0 flex w-full pb-5 px-3 justify-between">
                        <i ref={playBtn} css={controlBTnStyle} className="fa-solid fa-play invisible"></i>
                        <i ref={muteBtn} css={controlBTnStyle} className="fa-solid fa-volume-xmark"></i>
                    </div>
                </div>
                <div className="flex flex-col gap-2.5 self-end">
                    <LikeButton like={like || 0} />
                    <ClipButton onClick={handleOpenFullVideo} count={comment || 0} icon="fa-solid fa-comment-dots" />
                    <a download={true} href={src}>
                        <ClipButton count={save || 0} icon="fa-solid fa-bookmark" />
                    </a>
                    <ShareDiv count={share || 0} />
                </div>
            </div>
        </div>
    );
}

export default Video;
