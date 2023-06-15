// /** @jsxImportSource @emotion/react */
// import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { TitleDiv } from "../../../components/GeneralComponent";
import scss from "./activeVideoDiv.module.scss";

// styled component
const ControlButton = styled.i`
    width: 36px;
    height: 40px;
    margin-right: 8px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-size: 18px;
`;

function ControlAndTitle({ onClick, content, iconClass, className }) {
    const title = useRef();
    const handleShow = (target) => (target.style.display = "block");
    const handleHidden = (target) => (target.style.display = "none");
    return (
        <div className="relative">
            <TitleDiv ref={title} className={"-top-full hidden " + className || ""}>
                {content}
            </TitleDiv>
            <ControlButton
                onMouseEnter={() => handleShow(title.current)}
                onMouseLeave={() => handleHidden(title.current)}
                onClick={onClick}
                className={iconClass}
            ></ControlButton>
        </div>
    );
}

function ZoomScreen() {
    const [full, setFull] = useState(false);
    return !full ? (
        <ControlAndTitle
            className="-left-1/2"
            onClick={() => {
                document.getElementById("livePage/activeVideoContainer").classList.add(scss.expandVideo);
                setFull(true);
            }}
            iconClass="fa-solid fa-expand"
            content="Toàn màn hình"
        />
    ) : (
        <ControlAndTitle
            className="-left-1/2"
            onClick={() => {
                document.getElementById("livePage/activeVideoContainer").classList.remove(scss.expandVideo);
                setFull(false);
            }}
            iconClass="fa-solid fa-compress"
            content="Thu nhỏ"
        />
    );
}

function VideoControler({ className, ...attrs }) {
    const [playing, setPlaying] = useState(false);
    const [mute, setMute] = useState(false);
    const wrapper = useRef();
    useEffect(() => {
        if (playing) {
            wrapper.current.previousElementSibling.play();
        } else wrapper.current.previousElementSibling.pause();
        wrapper.current.previousElementSibling.onpause = () => setPlaying(false);
    }, [playing]);
    useEffect(() => {
        if (mute) {
            wrapper.current.previousElementSibling.muted = true;
        } else wrapper.current.previousElementSibling.muted = false;
    }, [mute]);
    return (
        <div {...attrs} ref={wrapper} className={"absolute w-full h-full text-white top-0 " + (className || "")}>
            <div className={clsx(scss.liveLabel, " top-4 right-4 absolute")}>LIVE</div>
            <div className={scss.controlsStyle}>
                {playing ? (
                    <ControlAndTitle
                        onClick={() => setPlaying(false)}
                        iconClass="fa-solid fa-pause"
                        content="Tạm dừng"
                    />
                ) : (
                    <ControlAndTitle onClick={() => setPlaying(true)} iconClass="fa-solid fa-play" content="Tiếp tục" />
                )}
                <div className="flex">
                    <ControlAndTitle
                        className="-left-1/2"
                        iconClass="fa-solid fa-mobile-screen-button fa-rotate-270"
                        content="Xoay ngang"
                    />
                    <ControlAndTitle className="-left-1/2" iconClass="fa-solid fa-photo-film" content="Ảnh trong ảnh" />
                    <ZoomScreen />
                    {mute ? (
                        <ControlAndTitle
                            onClick={() => setMute(false)}
                            className="-left-full"
                            iconClass="fa-solid fa-volume-xmark"
                            content="Bật tiếng"
                        />
                    ) : (
                        <ControlAndTitle
                            onClick={() => setMute(true)}
                            className="-left-full"
                            iconClass="fa-solid fa-volume-high"
                            content="Tắt tiếng"
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default VideoControler;
