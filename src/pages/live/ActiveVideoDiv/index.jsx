/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import VideoHeader from "./VideoHeader";
import VideoControler from "./VideoControler";

function ActiveVideoDiv({ object }) {
    return (
        <div>
            <VideoHeader target={object} />
            <div className="bg-black relative">
                <video
                    css={css`
                        max-height: 442px;
                        min-height: 300px;
                        margin: 0 auto;
                    `}
                    src={object.video}
                ></video>
                <VideoControler />
            </div>
        </div>
    );
}

export default ActiveVideoDiv;
