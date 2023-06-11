/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import scss from "./Live.module.scss";
import { Avatar, GeneralButton, TextOverflow } from "../../components/GeneralComponent";
import handelShowCount from "../../components/BodyComponent/handelShowCount";
import handleHover from "../../components/GeneralComponent/handleHover";
import { Introduce } from "../../components/SidebarComponent";
import { useEffect, useRef } from "react";
import clsx from "clsx";

function EllipsisButton({ ...attrs }) {
    const parent = useRef();
    const target = useRef();
    useEffect(() => {
        handleHover({ parent: parent.current, target: target.current, startTime: 10, endTime: 400 });
    }, []);
    return (
        <div ref={parent} className="relative">
            <GeneralButton {...attrs}>
                <i className="fa-sharp fa-solid fa-ellipsis"></i>
            </GeneralButton>
            <ul className={clsx(scss.ellipsisBtn, "hidden")} ref={target}>
                <li>
                    <Link
                        to="/"
                        className="transition-colors flex whitespace-nowrap font-bold py-3 px-4 items-center gap-3 hover:bg-gray-100"
                    >
                        <i className="fa-regular fa-flag"></i>
                        <span>Báo cáo</span>
                    </Link>
                </li>
                <li>
                    <Link
                        to="/"
                        className="transition-colors flex whitespace-nowrap font-bold py-3 px-4 items-center gap-3 hover:bg-gray-100"
                    >
                        <i className="fa-regular fa-message"></i>
                        <span>Cài đặt xếp hạng</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

function ActiveVideoDiv({ object }) {
    const generalBtnStyle = {
        w: "34px",
        h: "34px",
        bg: "#fff",
        color: "#333",
        className: "mr-1 border-slate-200 border-solid border",
    };

    return (
        <div>
            <div className={scss.videoHeader}>
                <div className="flex items-center">
                    <div className="avatarDivInLivePage">
                        <Link to="/">
                            <Avatar className="mx-3" wh="41px" src={object.avatar} />
                        </Link>
                        <Introduce
                            startTime={10}
                            css={css`
                                display: none;
                                position: absolute;
                            `}
                            triggerClassName={"avatarDivInLivePage"}
                            name={object.accountName}
                            desc={object.userName}
                            follower={244424}
                            like={721931}
                        >
                            <Avatar wh="41px" src={object.avatar} />
                            <GeneralButton className="hover:brightness">Follow</GeneralButton>
                        </Introduce>
                    </div>
                    <div>
                        <Link to="/" className="flex gap-1">
                            <TextOverflow className="font-bold hover:underline">{object.accountName}</TextOverflow>
                            <TextOverflow className="text-sm text-slate-500">{object.userName}</TextOverflow>
                        </Link>
                        <div>
                            <span className="text-gray-400 font-bold text-sm mr-3">{object.desc}</span>
                            <span className="text-sm">
                                <i className="fa-solid fa-users mr-1"></i>
                                <span className="text-xs font-bold">{handelShowCount(object.viewer)}</span>
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
                </div>
            </div>
            <video></video>
        </div>
    );
}

export default ActiveVideoDiv;
