/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import clsx from "clsx";

import { GeneralButton, Avatar, BlueTags } from "../../components/GeneralComponent";
import { Introduce, IntroduceFooter } from "../../components/SidebarComponent";
import { Video } from "../../components/BodyComponent";
import { videoTiktoks } from "../../components/GlobalVar";
import scss from "./home.module.scss";

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
    return (
        <div
            className={scss.wrapperStyle}
            css={css`
                height: calc(100vh - 60px);
            `}
        >
            {videoTiktoks.map((item, index) => {
                return (
                    <div key={index} className="py-5 flex border-b-slate-200 border-b border-b-solid h-full">
                        <AvatarDiv channel={item} />
                        <div className="header flex flex-col relative">
                            {/* Header */}
                            <div className="mr-28">
                                <Link to="/" className="underline-none flex items-center gap-1 w-fit">
                                    <h3 className="font-bold hover:underline">{item.accountName}</h3>
                                    <h4 className="text-sm leading-7">{item.userName}</h4>
                                </Link>
                                <p>
                                    <span className="text-sm mr-1">{item.desc}</span>
                                    <span className="break-words">
                                        {item.tags.map((elem, index) => (
                                            <BlueTags className="mr-1" to="/" key={index}>
                                                {elem}
                                            </BlueTags>
                                        ))}
                                    </span>
                                </p>
                                {item.location ? <p>{item.location}</p> : null}
                                <Link to="/" className="mt-1 mb-4 text-sm hover:underline block w-fit">
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
        </div>
    );
}

export default HomePage;
