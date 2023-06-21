/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useRef } from "react";
function VideoDurationBar({ targetID, className, ...attrs }) {
    const runningBar = useRef();
    const wrapper = useRef();
    const timeID = useRef();
    const style = css`
        position: absolute;
        width: 100%;
        background-color: rgba(255, 255, 255, 0.34);
        height: 4px;
    `;
    useEffect(() => {
        const video = document.getElementById(targetID);
        const handler = () => {
            const totalTime = video.duration;
            video.onplay = () => {
                clearInterval(timeID.current);
                timeID.current = setInterval(() => {
                    if (runningBar.current)
                        runningBar.current.style.width =
                            (video.currentTime / totalTime) *
                                parseFloat(window.getComputedStyle(wrapper.current).width) +
                            "px";
                }, 200);
            };
            video.onpause = () => clearInterval(timeID.current);
        };
        video.addEventListener("loadeddata", handler);
        return () => video?.removeEventListener("loadeddata", handler);
    }, []);
    return (
        <div ref={wrapper} css={style} className={className} {...attrs}>
            <div className="h-full bg-white" ref={runningBar}></div>
        </div>
    );
}

export default VideoDurationBar;
