/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import blackLogo from "../../assets/imgs/tiktok.png";
import SearchBar from "../../components/layout/components/Header/SearchBar";
import scss from "./videoFull.module.scss";
import clsx from "clsx";
import { Avatar, VideoDurationBar } from "../../components/GeneralComponent";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

const convertToMin = (time) => {
    const floorTime = Math.floor(time);
    let min = Math.floor(floorTime / 60);
    let sec = floorTime % 60;
    if (min < 10) min = "0" + min;
    if (sec < 10) sec = "0" + sec;
    return `${min}:${sec}`;
};

function VideoSide() {
    const videDOM = useRef();
    const playBtn = useRef();
    const muteBtn = useRef();
    const playBtnCenter = useRef();
    const data = useSelector((s) => s.activeVideo);
    let playing = true;
    let muted = true;
    const timeID = useRef();
    const pause_ = () => {
        clearInterval(timeID.current);
        playBtn.current.classList.replace("fa-pause", "fa-play");
        videDOM.current.pause();
        playing = false;
        playBtnCenter.current.style.display = "flex";
    };
    const play_ = () => {
        clearInterval(timeID.current);
        timeID.current = setInterval(() => {
            document.getElementById("runningTime").innerText = convertToMin(videDOM?.current.currentTime);
        }, 500);
        playBtn.current.classList.replace("fa-play", "fa-pause");
        videDOM.current.play();
        playing = true;
        playBtnCenter.current.style.display = "none";
    };
    const unmute_ = () => {
        muteBtn.current.classList.replace("fa-volume-xmark", "fa-volume-high");
        videDOM.current.muted = false;
        muted = false;
    };
    const mute_ = () => {
        muteBtn.current.classList.replace("fa-volume-high", "fa-volume-xmark");
        videDOM.current.muted = true;
        muted = true;
    };
    useEffect(() => {
        playBtn.current.onclick = () => {
            if (!playing) play_();
            else pause_();
        };
        muteBtn.current.onclick = () => {
            if (!muted) mute_();
            else unmute_();
        };
        videDOM.current.onloadeddata = () => {
            document.getElementById("totalTime").innerText = convertToMin(videDOM.current.duration);
            play_();
            mute_();
        };
        document.addEventListener("visibilitychange", pause_);
        return () => {
            document.removeEventListener("visibilitychange", pause_);
            clearInterval(timeID.current);
        };
    }, []);
    const handleNotUpdate = () => alert("Tính hiện chưa cập nhật");
    return (
        <div className={scss.leftSide}>
            <div className="relative h-full w-full m-auto">
                <video
                    muted="mute"
                    onEnded={play_}
                    id="video/videoDOM"
                    ref={videDOM}
                    src={data.video}
                    className="h-full m-auto"
                ></video>
                <div className="flex justify-center w-full top-4 absolute">
                    <SearchBar
                        className={scss.searchBar}
                        placeholder="Search related content"
                        css={css`
                            width: calc(100% - 225px);
                            max-width: calc(56.25vh - 32px);
                        `}
                    />
                </div>
            </div>
            <div className="absolute top-0">
                <div className="pt-4 px-5 flex">
                    <div className="flex items-center gap-6 w-fit">
                        <i
                            onClick={() => history.back()}
                            className={scss.closeBtn + " fa-solid fa-xmark"}
                            role="button"
                        ></i>
                        <Avatar className="cursor-unset" src={blackLogo} wh="40px" />
                    </div>
                </div>
            </div>
            <div ref={playBtnCenter} className={scss.playBtnCenter + " hidden"}>
                <i className={"fa-solid fa-play text-6xl text-white"}></i>
            </div>
            <div className={scss.videoNavigator}>
                <i onClick={handleNotUpdate} className={clsx(scss.iconNavigator, "fa-solid fa-chevron-up")}></i>
                <i onClick={handleNotUpdate} className={clsx(scss.iconNavigator, "fa-solid fa-chevron-down")}></i>
            </div>
            <div className="absolute bottom-0 w-full">
                <VideoDurationBar className="-top-1/2" targetID={"video/videoDOM"} />
                <div className="pb-4 px-6 flex justify-between text-white text-lg">
                    <div className="flex gap-3 items-center">
                        <i ref={playBtn} role="button" className={clsx(scss.controlButton, "fa-solid fa-pause")}></i>
                        <div className="text-sm">
                            <span id="runningTime">{convertToMin(0)}</span>
                            <span>&nbsp;/&nbsp;</span>
                            <span id="totalTime">{convertToMin(0)}</span>
                        </div>
                    </div>
                    <div className="flex gap-6">
                        <i
                            ref={muteBtn}
                            role="button"
                            className={clsx(scss.controlButton, "fa-solid fa-volume-xmark text-lg")}
                        ></i>
                        <i
                            onClick={handleNotUpdate}
                            role="button"
                            className={clsx(scss.controlButton, "fa-solid fa-ellipsis text-xl")}
                        ></i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VideoSide;
