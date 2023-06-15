/* eslint-disable react-refresh/only-export-components */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Introduce } from "../../../components/SidebarComponent";
import handelShowCount from "../../../components/BodyComponent/handelShowCount";
import { Link } from "react-router-dom";
import { Avatar, GeneralButton, TextOverflow } from "../../../components/GeneralComponent";
import handleHover from "../../../components/GeneralComponent/handleHover";
import { memo, useEffect, useRef } from "react";
import clsx from "clsx";
import scss from "../Live.module.scss";

function EllipsisButton({ ...attrs }) {
    const parent = useRef();
    const target = useRef();
    useEffect(() => {
        handleHover({ parent: parent.current, target: target.current, startTime: 10, endTime: 400 });
    }, []);
    const linkStyle =
        "transition-colors flex whitespace-nowrap font-bold py-3 px-4 items-center gap-3 hover:bg-gray-100";
    return (
        <div ref={parent} className="relative">
            <GeneralButton {...attrs}>
                <i className="fa-sharp fa-solid fa-ellipsis"></i>
            </GeneralButton>
            <ul className={clsx(scss.ellipsisBtn, "hidden z-10")} ref={target}>
                <li>
                    <Link to="/" className={linkStyle}>
                        <i className="fa-regular fa-flag"></i>
                        <span>Báo cáo</span>
                    </Link>
                </li>
                <li>
                    <Link to="/" className={linkStyle}>
                        <i className="fa-regular fa-message"></i>
                        <span>Cài đặt xếp hạng</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

function VideoHeader({ target }) {
    const openBoxChatIcon = useRef();
    useEffect(() => {
        window.addEventListener("closedLiveBoxChat", () => {
            openBoxChatIcon.current.style.display = "inline-flex";
        });
    }, []);
    const generalBtnStyle = {
        w: "34px",
        h: "34px",
        bg: "#fff",
        color: "#333",
        className: "mr-1 border-slate-200 border-solid border",
    };
    const handleOpenBox = (e) => {
        e.target.style.display = "none";
        document.getElementById("liveChatBox").style.width = "400px";
    };
    return (
        <div className={scss.videoHeader}>
            <div className="flex items-center">
                <div className="avatarDivInLivePage">
                    <Link to="/">
                        <Avatar alt="avatar" className="mx-3" wh="41px" src={target.avatar} />
                    </Link>
                    <Introduce
                        startTime={10}
                        css={css`
                            display: none;
                            position: absolute;
                        `}
                        triggerClassName={"avatarDivInLivePage"}
                        name={target.accountName}
                        desc={target.userName}
                        follower={244424}
                        like={721931}
                    >
                        <Avatar alt="avatar" wh="41px" src={target.avatar} />
                        <GeneralButton className="hover:brightness">Follow</GeneralButton>
                    </Introduce>
                </div>
                <div>
                    <Link to="/" className="flex gap-1">
                        <TextOverflow className="font-bold hover:underline">{target.accountName}</TextOverflow>
                        <TextOverflow className="text-sm text-slate-500">{target.userName}</TextOverflow>
                    </Link>
                    <div>
                        <span className="text-gray-400 font-bold text-sm mr-3">{target.desc}</span>
                        <span className="text-sm">
                            <i className="fa-solid fa-users mr-1"></i>
                            <span className="text-xs font-bold">{handelShowCount(target.viewer)}</span>
                        </span>
                    </div>
                </div>
            </div>
            <div className="flex">
                <GeneralButton {...generalBtnStyle}>
                    <i className="fa-solid fa-share"></i>
                </GeneralButton>
                <EllipsisButton {...generalBtnStyle} />
                <GeneralButton h="34px" w="95px" className="hover:brightness">
                    Follow
                </GeneralButton>
                <i
                    ref={openBoxChatIcon}
                    css={css`
                        width: 34px;
                        height: 34px;
                        display: none;
                        align-items: center;
                        justify-content: center;
                        margin-left: 16px;
                        cursor: pointer;
                    `}
                    className="fa-sharp fa-solid fa-arrow-right-from-bracket fa-rotate-180"
                    onClick={handleOpenBox}
                ></i>
            </div>
        </div>
    );
}

export default memo(VideoHeader);
