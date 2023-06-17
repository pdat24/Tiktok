/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import clsx from "clsx";

import { GeneralButton, Avatar, BlueTags, ScrollToTopBtn } from "../../components/GeneralComponent";
import handleScrollTop from "../../components/GeneralComponent/handleScrollTop";
import { Introduce, IntroduceFooter } from "../../components/SidebarComponent";
import { Video } from "../../components/BodyComponent";
import { videoTiktoks } from "../../components/GlobalVar";
import scss from "./home.module.scss";
import { useEffect, useRef } from "react";

function AvatarDiv({ channel }) {
    return (
        <div className="h-fit mr-3 relative avatarDivInHome">
            <Link to="/">
                <Avatar src={channel.avatar} alt="avatar" wh="56px" className="max-w-fit" />
            </Link>
            <Introduce
                css={css`
                    display: none;
                    position: absolute;
                `}
                triggerClassName={"avatarDivInHome"}
                name={channel.accountName}
                desc={channel.userName}
                follower={24424}
                like={71931}
                footer="true"
            >
                <Avatar src={channel.avatar} wh="48px" alt="avatar" />
                <GeneralButton w="100px" h="36px" className={scss.followBtn} bg="#fff" color="var(--primary-color)">
                    Follow
                </GeneralButton>
                <IntroduceFooter>{channel.footerNote}</IntroduceFooter>
            </Introduce>
        </div>
    );
}

function HomePage() {
    const wrapper = useRef();
    const scrollButton = useRef();
    useEffect(() => {
        handleScrollTop({ target: wrapper.current, trigger: scrollButton.current });
    }, []);
    return (
        <div
            ref={wrapper}
            css={css`
                height: calc(100vh - 60px);
            `}
            className="overflow-auto scroll-smooth"
        >
            <div className={scss.wrapperStyle}>
                {videoTiktoks.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className="py-5 flex border-b-slate-200 border-b border-b-solid h-full"
                            css={css`
                                height: calc(100vh - 60px);
                            `}
                        >
                            <AvatarDiv channel={item} />
                            <div className="header flex flex-col relative">
                                {/* Header */}
                                <div className="mr-28">
                                    <Link to="/" className="underline-none flex items-center gap-1 w-fit">
                                        <h3 className="font-bold hover:underline">{item.accountName}</h3>
                                        <h4 className="text-sm leading-7 font-medium">{item.userName}</h4>
                                    </Link>
                                    <p>
                                        <span className="text-sm mr-1 font-medium">{item.desc}</span>
                                        <span className="break-words">
                                            {item.tags.map((elem, index) => (
                                                <BlueTags className="mr-1" to="/" key={index}>
                                                    {elem}
                                                </BlueTags>
                                            ))}
                                        </span>
                                    </p>
                                    {item.location ? <p>{item.location}</p> : null}
                                    <Link to="/" className="mt-1 mb-4 text-sm hover:underline block w-fit font-medium">
                                        <i className="fa-solid fa-music mr-2 text-xs"></i>
                                        <span>{item.bgMusic}</span>
                                    </Link>
                                    <GeneralButton
                                        className={clsx("absolute top-0 right-0 mt-1.5", scss.followBtn)}
                                        w="fit-content"
                                        h="fit-content"
                                        bg="#fff"
                                        color="var(--primary-color)"
                                    >
                                        Follow
                                    </GeneralButton>
                                </div>
                                <Video
                                    autoPlay={index === 0}
                                    className="overflow-hidden"
                                    src={item.video}
                                    like={item.like}
                                    share={item.share}
                                    save={item.save}
                                    comment={item.comment}
                                />
                            </div>
                        </div>
                    );
                })}
                <ScrollToTopBtn onClick={() => (wrapper.current.scrollTop = 0)} ref={scrollButton} />
            </div>
        </div>
    );
}

export default HomePage;
