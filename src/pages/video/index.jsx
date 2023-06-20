/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Avatar, BlueTags, CommentDiv, GeneralButton, TextOverflow } from "../../components/GeneralComponent";
import { Introduce, IntroduceFooter } from "../../components/SidebarComponent";
import scss from "./videoFull.module.scss";
import clsx from "clsx";
import handleShowCount from "../../components/BodyComponent/handelShowCount";
import { Link } from "react-router-dom";
import PostCommentDiv from "./postCommentDiv";
import VideoSide from "./videoSide";
import ChatBox from "./chatBox";
import { useSelector } from "react-redux";

const InteractButton = ({ icon, count }) => {
    return (
        <div className="flex gap-2 items-center cursor-pointer">
            <i className={clsx(icon, scss.interactBtn)}></i>
            <span className="text-xs">{count ? handleShowCount(count) : 0}</span>
        </div>
    );
};

const ShareBtnDiv = () => {
    return (
        <div className="flex gap-2">
            <ShareButton bg="#666" icon="fa-solid fa-code"></ShareButton>
            <ShareButton bg="var(--primary-color)" icon="fa-solid fa-paper-plane"></ShareButton>
            <i
                role="button"
                css={css`
                    font-size: 25px;
                    color: blue;
                `}
                className="flex justify-center items-center fa-brands fa-facebook"
            ></i>
            <ShareButton bg="rgb(37, 211, 102)" icon="fa-brands fa-whatsapp"></ShareButton>
            <ShareButton bg="rgb(29, 161, 242)" icon="fa-brands fa-twitter"></ShareButton>
            <ShareButton color="#333" icon="fa-solid fa-share"></ShareButton>
        </div>
    );
};

function ShareButton({ icon, bg, color }) {
    const style = css`
        width: 25px;
        height: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        background: ${bg};
        color: ${color || "#fff"};
        font-size: 14px;
        cursor: pointer;
    `;
    return <i css={style} className={icon}></i>;
}

function VideoFullPage() {
    const data = useSelector((s) => s.activeVideo);
    return (
        <div className="flex">
            <VideoSide />
            <div className={scss.rightSide}>
                <div>
                    <div className="px-8">
                        <CommentDiv
                            className="profileDiv relative"
                            whAvatar="40px"
                            avatar={data.channel.avatar}
                            css={css`
                                padding-top: 22px;
                                margin-bottom: 15px;
                            `}
                        >
                            <Introduce
                                css={css`
                                    display: none;
                                    position: absolute;
                                    left: 0;
                                    top: 100%;
                                `}
                                triggerClassName={"profileDiv"}
                                name={data.channel.userName}
                                desc={data.channel.desc}
                                follower={24424}
                                like={data.like}
                                footer="true"
                            >
                                <Avatar src={data.channel.avatar} wh="48px" alt="avatar" />
                                <GeneralButton
                                    color="var(--primary-color)"
                                    bg="#fff"
                                    css={css`
                                        border: 1px solid var(--primary-color);
                                        &:hover {
                                            background-color: #fe2c550f;
                                        }
                                    `}
                                >
                                    Follow
                                </GeneralButton>
                                <IntroduceFooter>{data.footerNote}</IntroduceFooter>
                            </Introduce>
                            <div className="flex justify-center">
                                <div className="ml-3 grow shrink">
                                    <Link to="/" className="font-bold hover:underline">
                                        {data.channel.userName}
                                    </Link>
                                    <div className="text-sm">{data.channel.nickName}</div>
                                </div>
                                <GeneralButton
                                    color="var(--primary-color)"
                                    bg="#fff"
                                    css={css`
                                        border: 1px solid var(--primary-color);
                                        &:hover {
                                            background-color: #fe2c550f;
                                        }
                                    `}
                                >
                                    Follow
                                </GeneralButton>
                            </div>
                        </CommentDiv>
                    </div>
                    <div className="px-8">
                        <div>
                            <div>
                                <span>{data.channel.desc}</span>
                                {data.tags.map((elem, index) => (
                                    <BlueTags key={index}>&nbsp;{elem}</BlueTags>
                                ))}
                            </div>
                            <div className="mb-4 mt-3 font-bold text-sm">
                                <i className="fa-solid fa-music mr-2 text-xs"></i>
                                <span>Love You So - The King Khan & BBQ Show</span>
                            </div>
                        </div>
                        <div className="py-4">
                            <div className="flex justify-between items-center">
                                <div className="pt-3 pb-4 flex gap-4 shrink">
                                    <InteractButton count={data.like} icon="fa-solid fa-heart" />
                                    <InteractButton count={data.comment} icon="fa-solid fa-comment-dots" />
                                    <InteractButton count={data.bookmark} icon="fa-solid fa-bookmark" />
                                </div>
                                <ShareBtnDiv />
                            </div>
                            <div className={scss.copyLinkDiv}>
                                <TextOverflow
                                    css={css`
                                        flex: 1 1 auto;
                                        padding: 7px 0px 5px 12px;
                                        background-color: rgba(22, 24, 35, 0.06);
                                        white-space: nowrap;
                                        font-size: 12px;
                                    `}
                                >
                                    https://www.tiktok.com/@sammy.becool/video/7237807460629761285?is_from_webapp=1&sender_device=pc&web_id=7244316496415131141
                                </TextOverflow>
                                <button
                                    css={css`
                                        white-space: nowrap;
                                        padding: 7px 16px;
                                        background-color: rgba(22, 24, 35, 0.06);
                                        font-weight: bold;
                                        &:hover {
                                            background-color: rgba(22, 24, 35, 0.02);
                                        }
                                    `}
                                >
                                    Copy link
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <ChatBox />
                <PostCommentDiv />
            </div>
        </div>
    );
}

export default VideoFullPage;
