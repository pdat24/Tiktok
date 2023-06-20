/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { LinkPage, SidebarTitle, Tag, Block } from "../../../SidebarComponent";
import scss from "./Sidebar.module.scss";
import ChannelDiv from "./ChannelDiv";
import handleOpen from "../../../ModalComponent/handleOpen";
import { tags } from "../../../GlobalVar";

function SideBar() {
    const footer = [
        ["Giới thiệu", "Bảng tin", "Liên hệ", "Sự nghiệp", "ByteDance"],
        ["TikTok for Good", "Quảng cáo", "Developers", "Minh bạch", "TikTok Rewards", "TikTok Embeds"],
        ["Trợ giúp", "An toàn", "Điều khoản", "Quyền riêng tư", "Cổng thông tin Tác giả", "Hướng dẫn Cộng đồng"],
        ["Thêm"],
    ];
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
    const pin = css`
        font-weight: 600;
        font-size: 12px;
        line-height: 17px;
        display: inline-block;
        margin-right: 9px;
        margin-top: 5px;
    `;
    return (
        <div className={scss.wrapper} id="sidebarWrapper">
            <div
                id="sidebarScrollDiv"
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
                                        <span className="sideBarTextLinkPage">{elem.text}</span>
                                    </LinkPage>
                                </li>
                            );
                        })}
                    </ul>
                </Block>
                <Block
                    className="sideBarLoginDiv"
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
                <Block className="pt-4 pb-1 sideBarExplore">
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
                    className="sideBarFooter"
                    css={css`
                        color: rgba(22, 24, 35, 0.5);
                        padding: 16px 0 16px 8px;
                    `}
                >
                    {footer.map((group, groupIndex) => {
                        return (
                            <div className="mb-2" key={groupIndex}>
                                {group.map((elem, elemIndex) => {
                                    return (
                                        <a key={elemIndex} className="hover:underline" href="/" css={pin}>
                                            {elem}
                                        </a>
                                    );
                                })}
                            </div>
                        );
                    })}
                    <span css={pin}>© 2023 TikTok</span>
                </div>
            </div>
        </div>
    );
}

export default SideBar;
