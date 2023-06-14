/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useRef } from "react";
import { Avatar, TextOverflow } from "../../components/GeneralComponent";
import scss from "./Live.module.scss";
import handleHover from "../../components/GeneralComponent/handleHover";

function ProposedVideo({ item }) {
    const layer = useRef();
    const layerContainer = useRef();
    useEffect(() => {
        handleHover({
            parent: layerContainer.current,
            target: layer.current,
            startTime: 100,
            endTime: 100,
            initialDisplay: "flex",
        });
    }, []);
    return (
        <div>
            <div
                ref={layerContainer}
                className="relative overflow-hidden rounded cursor-pointer"
                css={css`
                    min-height: 150px;
                    aspect-ratio: 16 / 9;
                `}
            >
                <div ref={layer} className={scss.layerVideoDiv}>
                    <i className="fa-solid fa-play text-2xl text-white"></i>
                </div>
                <img alt="image" src={item.image} className="m-auto h-full" />
                <img
                    alt="image"
                    src={item.image}
                    className="bg-cover absolute top-0 blur-2xl"
                    css={css`
                        z-index: -1;
                    `}
                />
                <div className="absolute flex justify-between items-end p-2 bottom-0 w-full">
                    <div className={scss.viewerWrapper}>
                        <span className="text-white text-xs">{item.viewer + " viewers"}</span>
                    </div>
                    <span className={scss.liveLabel}>LIVE</span>
                </div>
            </div>
            <div className="flex mt-2 items-center">
                <Avatar wh="32px" src={item.avatar} />
                <div className="ml-3">
                    <TextOverflow
                        className="text-gray font-bold"
                        css={css`
                            max-height: 44px;
                            font-size: 15px;
                        `}
                    >
                        {item.desc}
                    </TextOverflow>
                    <TextOverflow
                        className="color-gray text-sm font-medium"
                        css={css`
                            max-height: 44px;
                        `}
                    >
                        {item.accountName}
                    </TextOverflow>
                </div>
            </div>
        </div>
    );
}

export default ProposedVideo;
