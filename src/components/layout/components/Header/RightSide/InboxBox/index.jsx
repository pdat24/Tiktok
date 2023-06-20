/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { css } from "@emotion/react";

import scss from "../RightSide.module.scss";
import { Avatar, TitleDiv } from "../../../../../GeneralComponent";
import handleHover from "../../../../../GeneralComponent/handleHover.js";
import defaultAvatar from "../../../../../../assets/imgs/defaultAvatar.webp";

function ContentBox({ avatar, children, name }) {
    const Content = styled.p`
        color: #16182380;
        font-size: 12px;
    `;
    return (
        <div
            css={css`
                padding: 10px 16px;
                display: flex;
                transition: all 200ms linear 0s;
                &:hover {
                    background-color: rgba(0, 0, 0, 0.05);
                }
                cursor: pointer;
            `}
        >
            <Link to="/" className="shrink-0">
                <Avatar src={avatar} alt="avatar" wh="48px" />
            </Link>
            <div className="px-3 shrink">
                <Link to="/" className="font-bold text-sm hover:underline">
                    {name}
                </Link>
                <Content>{children}</Content>
            </div>
        </div>
    );
}

function InboxDiv() {
    const inboxIcon = useRef();
    const inboxLabel = useRef();
    const inboxBlock = useRef();
    useEffect(() => {
        let hidden = true;
        const showBox = () => {
            inboxBlock.current.classList.remove("hidden");
            hidden = false;
        };
        const hiddenBox = (e) => {
            if (!e?.defaultPrevented) {
                inboxBlock.current.classList.add("hidden");
                hidden = true;
            }
        };
        inboxIcon.current.onclick = (e) => {
            e.stopPropagation();
            if (hidden) showBox();
            else hiddenBox();
        };
        document.body.addEventListener("click", hiddenBox);
        inboxBlock.current.onclick = (e) => e.preventDefault();
        handleHover({ parent: inboxIcon.current, target: inboxLabel.current });
        return () => {
            document.body.removeEventListener("click", hiddenBox);
        };
    }, []);
    const label = css`
        font-size: 14px;
        margin-top: 8px;
        padding: 0 16px;
        font-weight: bold;
        color: rgba(22, 24, 35, 0.5);
    `;
    const filters = ["Tất cả hoạt động", "Thích", "Bình luận", "Lời nhắc và thẻ", "Người theo dõi"];
    const [activeFilter, setActiveFilter] = useState(0);
    return (
        <div className="relative">
            <i ref={inboxIcon} className="text-lg fa-regular fa-message cursor-pointer ml-4"></i>
            <TitleDiv
                ref={inboxLabel}
                css={css`
                    bottom: -50px;
                    left: -50%;
                    display: none;
                `}
            >
                Hộp thư
            </TitleDiv>
            <div className={clsx(scss.inboxDiv, "hidden")} ref={inboxBlock}>
                <div className="pt-6 pl-4">
                    <h3 className="font-bold text-3xl">Thông báo</h3>
                    <div className="flex flex-wrap mt-4">
                        {filters.map((elem, index) => (
                            <button
                                onClick={() => setActiveFilter(index)}
                                key={index}
                                className={clsx(scss.filterbtns, { "text-white bg-black": activeFilter === index })}
                            >
                                {elem}
                            </button>
                        ))}
                    </div>
                </div>
                <div>
                    <div>
                        <h4 css={label}>Tuần này</h4>
                        <div>
                            <ContentBox avatar={defaultAvatar} name="Thông báo hệ thống">
                                Series: Hãy khám phá Tuyển tập &quot;Chúc bé ngủ ngon&quot; của MoliDiscovery ngay!
                            </ContentBox>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h4 css={label}>Trước đây</h4>
                            <div>
                                <ContentBox avatar={defaultAvatar} name="Loa.ea505">
                                    Follows you. 2022-7-31
                                </ContentBox>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InboxDiv;
