/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

import { Avatar, BlueTags, ScrollToTopBtn } from "../../components/GeneralComponent";
import handleScrollTop from "../../components/GeneralComponent/handleScrollTop";
import playWhenEnter from "../../components/GeneralComponent/playWhenEnter";
import scss from "./explore.module.scss";
import { videoTiktoks } from "../../components/GlobalVar";
import handleShowCount from "../../components/BodyComponent/handelShowCount";
import { Link } from "react-router-dom";
import FilterBar from "./FilterBar";

function ExplorePage() {
    const wrapper = useRef();
    const scrollBtn = useRef();
    const LikeDiv = ({ count }) => {
        const [liked, setLiked] = useState(false);
        return (
            <div className={clsx(scss.likeDiv, { "color-primary": liked })} onClick={() => setLiked(!liked)}>
                <i className={`fa-${liked ? "solid" : "regular"} fa-heart mr-1`}></i>
                <span>{handleShowCount(count)}</span>
            </div>
        );
    };
    const VideoDiv = ({ element }) => {
        const videoBlock = useRef();
        const videoBlockParent = useRef();
        useEffect(() => {
            videoBlock.current.muted = true;
            playWhenEnter({ parent: videoBlockParent.current, video: videoBlock.current });
        }, []);
        return (
            <Link ref={videoBlockParent} to="/" className="relative">
                <video loading="lazy" ref={videoBlock} className={scss.videoStyle} src={element.video}></video>
                <div
                    className="absolute text-white font-bold bottom-0"
                    css={css`
                        font-family: sans-serif;
                        padding: 67px 12px 12px;
                    `}
                >
                    <i className="fa-solid fa-play"></i>&nbsp;
                    <span>{handleShowCount(element.view)}</span>
                </div>
            </Link>
        );
    };
    useEffect(() => {
        handleScrollTop({ target: wrapper.current, trigger: scrollBtn.current });
    }, []);
    return (
        <div
            ref={wrapper}
            id="explorePageContainer"
            className="pt-24 px-12 pb-8 bg-white scroll-smooth"
            css={css`
                height: calc(100vh - 60px);
                overflow-y: auto;
            `}
        >
            <FilterBar />
            <div className={scss.videoContainer}>
                {videoTiktoks.map((elem, videoIndex) => (
                    <div key={videoIndex}>
                        <VideoDiv element={elem} />
                        <div className="pt-1 pb-2 text-sm">
                            <h4 className="overflow-hidden mt-1 text-ellipsis font-medium">
                                {elem.desc}
                                <span className="ml-1">
                                    {elem.tags.map((tagName, tagIndex) => (
                                        <BlueTags size="14px" className="mr-1" to="/" key={"@" + tagIndex}>
                                            {tagName}
                                        </BlueTags>
                                    ))}
                                </span>
                            </h4>
                            <div className="flex justify-between mt-2">
                                <div className="flex items-center">
                                    <Avatar src={elem.avatar} alt="avatar" wh="24px" />
                                    <Link to="/" className="text-sm mx-1 hover:underline font-bold">
                                        {elem.accountName}
                                    </Link>
                                </div>
                                <LikeDiv count={elem.like} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <ScrollToTopBtn ref={scrollBtn} onClick={() => (wrapper.current.scrollTop = 0)} />
        </div>
    );
}

export default ExplorePage;
