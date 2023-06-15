/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import VideoHeader from "./VideoHeader";
import VideoController from "./VideoController";
import NotifySentGift from "../notifySentGIft";
import { useEffect, useRef, useState } from "react";

function ActiveVideoDiv({ object }) {
    const giftsWrapper = useRef();
    const key = useRef(0);
    const [gifts, setGifts] = useState([]);
    useEffect(() => {
        window.addEventListener("sentAGift", (e) => {
            setGifts((prev) => {
                prev.push(
                    <NotifySentGift
                        key={key.current++}
                        avatar={e.detail.avatar}
                        giftImg={e.detail.image}
                        giftName={e.detail.name}
                        time={e.detail.time}
                        sender={e.detail.sender}
                    />
                );
                return [...prev];
            });
        });
    }, []);
    useEffect(() => {
        const handleEvent = (e) => {
            giftsWrapper.current.removeChild(e.detail);
        };
        window.addEventListener("removeGiftNotice", handleEvent);
        return () => window.removeEventListener("removeGiftNotice", handleEvent);
    }, []);
    return (
        <div>
            <VideoHeader target={object} />
            <div
                id="livePage/activeVideoContainer"
                className="bg-black relative"
                css={css`
                    min-height: 300px;
                    aspect-ratio: 16 /9;
                `}
            >
                <div ref={giftsWrapper} className="absolute h-full overflow-hidden w-full">
                    {gifts}
                </div>
                <video className="m-auto h-full" src={object.video}></video>
                <VideoController />
            </div>
        </div>
    );
}

export default ActiveVideoDiv;
