/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import scss from "../Live.module.scss";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

// style
const controlsStyle = css`
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 100%);
    position: absolute;
    bottom: 0;
    padding: 0 6px;
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

// styled component
const ControlButton = styled.i`
    width: 36px;
    height: 40px;
    margin-right: 4px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

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
            <div css={controlsStyle}>
                <div>
                    {playing ? (
                        <ControlButton onClick={() => setPlaying(false)} className="fa-solid fa-pause"></ControlButton>
                    ) : (
                        <ControlButton onClick={() => setPlaying(true)} className="fa-solid fa-play"></ControlButton>
                    )}
                </div>
                <div>
                    <ControlButton className="fa-solid fa-mobile-screen-button fa-rotate-270"></ControlButton>
                    <ControlButton className="fa-solid fa-photo-film"></ControlButton>
                    <ControlButton className="fa-solid fa-expand"></ControlButton>
                    {mute ? (
                        <ControlButton
                            onClick={() => setMute(false)}
                            className="fa-solid fa-volume-xmark"
                        ></ControlButton>
                    ) : (
                        <ControlButton
                            onClick={() => setMute(true)}
                            className="fa-solid fa-volume-high"
                        ></ControlButton>
                    )}
                </div>
            </div>
        </div>
    );
}

export default VideoControler;
