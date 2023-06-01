/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { LinkPage, SidebarTitle, Tag, Block } from "../../../SidebarComponent";
import scss from "./Sidebar.module.scss";
import ChannelDiv from "./ChannelDiv";
import handleOpen from "../../../ModalComponent/handleOpen";
import { tags, info } from "../../../GlobalVar";

function SideBar() {
    const links = [
        { url: "/", text: "Dành cho bạn", icon: "fa-house" },
        { url: "/following", text: "Đang Follow", icon: "fa-user-group" },
        { url: "/explore", text: "Khám phá", icon: "fa-compass" },
        { url: "/live", text: "Live", icon: "fa-video" },
    ];
    const Icon = styled.i`
        height: 32px;
        width: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
    `;
    return (
        <div className={scss.wrapper}>
            <div
                css={css`
                    padding: 20px 0 25px 8px;
                `}
            >
                <Block>
                    <ul className="mb-2">
                        {links.map((elem, index) => {
                            return (
                                <li key={index}>
                                    <LinkPage url={elem.url}>
                                        <Icon className={"fa-solid " + elem.icon}></Icon>
                                        <span>{elem.text}</span>
                                    </LinkPage>
                                </li>
                            );
                        })}
                    </ul>
                </Block>
                <Block
                    css={css`
                        padding: 20px 8px 24px;
                    `}
                >
                    <p
                        css={css`
                            color: rgba(22, 24, 35, 0.5);
                            text-align: justify;
                            line-height: 22px;
                        `}
                    >
                        Đăng nhập để follow các tác giả, thích video và xem bình luận.
                    </p>
                    <button
                        onClick={() => {
                            handleOpen({
                                container: document.getElementById("loginModel"),
                                dialog: document.getElementById("loginDialog"),
                            });
                        }}
                        className={scss.buttonLogin}
                    >
                        Đăng nhập
                    </button>
                </Block>
                <ChannelDiv />
                <Block className="pt-4 pb-1">
                    <SidebarTitle className="pb-3">Khám phá</SidebarTitle>
                    <ul>
                        {tags.map((elem, index) => (
                            <li key={index}>
                                <Tag music={elem.music} url={elem.url}>
                                    {elem.text}
                                </Tag>
                            </li>
                        ))}
                    </ul>
                </Block>
                <div
                    css={css`
                        display: flex;
                        flex-wrap: wrap;
                        color: rgba(22, 24, 35, 0.5);
                        padding-top: 16px;
                        padding-bottom: 16px;
                    `}
                >
                    {info.map((elem, index) => {
                        return (
                            <a
                                href="/"
                                css={css`
                                    font-weight: 600;
                                    font-size: 12px;
                                    line-height: 17px;
                                    display: inline-block;
                                    margin-right: 6px;
                                    margin-top: 5px;
                                `}
                                key={index}
                            >
                                {elem}
                            </a>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default SideBar;
