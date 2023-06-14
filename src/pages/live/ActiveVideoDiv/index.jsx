/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import VideoHeader from "./VideoHeader";
import VideoControler from "./VideoControler";

function ActiveVideoDiv({ object }) {
    return (
        <div>
            <VideoHeader target={object} />
            <div
                className="bg-black relative"
                css={css`
                    min-height: 300px;
                    aspect-ratio: 16 /9;
                `}
            >
                <video className="m-auto h-full" src={object.video}></video>
                <VideoControler />
            </div>
        </div>
    );
}

export default ActiveVideoDiv;
