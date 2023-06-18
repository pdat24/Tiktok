/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import clsx from "clsx";
import scss from "./setting.module.scss";
import styled from "@emotion/styled";
import { ToggleButton } from "../../components/GeneralComponent";
import { useState } from "react";

// styled component
const Title = styled.h2`
    font-size: 22px;
    font-weight: bold;
    margin: 0 8px 20px;
`;
const SubTitle = styled.h3`
    font-size: 18px;
    line-height: 24px;
    color: rgba(22, 24, 35, 1);
    margin: 0 16px 12px;
    margin-left: 16px;
`;
const WrapperContent = styled.div`
    padding-bottom: 16px;
    border-bottom: 1px solid #eee;
`;
const BlockContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 16px;
    font-size: 15px;
`;
const Parapraph = styled.div`
    font-size: 12px;
    color: #777;
    margin-right: 64px;
`;

function Setting() {
    const NavBar = () => {
        const [active, setActive] = useState("@1");
        return (
            <div className={clsx(scss.side, scss.leftSide)}>
                <div
                    id="@1"
                    className={clsx(scss.index, { "color-primary": active === "@1" })}
                    onClick={() => {
                        setActive("@1");
                        document.getElementById("content1").scrollIntoView();
                    }}
                >
                    <i className="fa-regular fa-user"></i>
                    <span>Manage account</span>
                </div>
                <div
                    id="@2"
                    className={clsx(scss.index, { "color-primary": active === "@2" })}
                    onClick={() => {
                        setActive("@2");
                        document.getElementById("content2").scrollIntoView();
                    }}
                >
                    <i className="fa-solid fa-lock"></i>
                    <span>Privacy</span>
                </div>
                <div
                    id="@3"
                    className={clsx(scss.index, { "color-primary": active === "@3" })}
                    onClick={() => {
                        setActive("@3");
                        document.getElementById("content3").scrollIntoView();
                    }}
                >
                    <i className="fa-regular fa-bell"></i>
                    <span>Push notifications</span>
                </div>
                <div
                    id="@4"
                    className={clsx(scss.index, { "color-primary": active === "@4" })}
                    onClick={() => {
                        setActive("@4");
                        document.getElementById("content4").scrollIntoView();
                    }}
                >
                    <i className="fa-solid fa-store"></i>
                    <span>Business account</span>
                </div>
            </div>
        );
    };
    return (
        <div
            css={css`
                margin-top: 60px;
                background-color: #eee;
                height: calc(100vh - 60px);
                position: relative;
            `}
        >
            <div className={scss.wrapper}>
                <div className="mt-4 flex gap-4">
                    <NavBar />
                    <div className={scss.rightSideParent}>
                        <div className={clsx(scss.side, scss.rightSide)}>
                            <WrapperContent>
                                <Title id="content1">Manage account</Title>
                                <SubTitle>Account control</SubTitle>
                                <BlockContent>
                                    <div className="text-base">Delete account</div>
                                    <div className="color-primary cursor-pointer">Delete</div>
                                </BlockContent>
                            </WrapperContent>
                            <div className="mt-8">
                                <Title id="content2">Privacy</Title>
                                <div>
                                    <SubTitle className="font-bold">Discoverability</SubTitle>
                                    <WrapperContent>
                                        <BlockContent>
                                            <div>
                                                <div className="flex justify-between">
                                                    Private account
                                                    <ToggleButton />
                                                </div>
                                                <Parapraph>
                                                    With a private account, only users you approve can follow you and
                                                    watch your videos. Your existing followers won&apos;t be affected.
                                                </Parapraph>
                                            </div>
                                        </BlockContent>
                                    </WrapperContent>
                                    <WrapperContent>
                                        <BlockContent>
                                            <div className="mt-4 text-base">Blocked accounts</div>
                                            <span className="text-xs fa-solid fa-chevron-right"></span>
                                        </BlockContent>
                                    </WrapperContent>
                                    <WrapperContent className="mt-4">
                                        <SubTitle className="font-bold">Data</SubTitle>
                                        <BlockContent>
                                            <div>
                                                <div>Download your data</div>
                                                <Parapraph>Get a copy of your TikTok data</Parapraph>
                                            </div>
                                            <span className="text-xs fa-solid fa-chevron-right"></span>
                                        </BlockContent>
                                    </WrapperContent>
                                </div>
                            </div>
                            <div className="mt-8">
                                <Title id="content3">Push notifications</Title>
                                <div>
                                    <WrapperContent className="mt-4">
                                        <SubTitle>Desktop notifications</SubTitle>
                                        <BlockContent
                                            css={css`
                                                display: block;
                                            `}
                                        >
                                            <div>
                                                <div className="flex justify-between">
                                                    <div>Allow in browser</div>
                                                    <ToggleButton />
                                                </div>
                                                <Parapraph>
                                                    Stay on top of notifications for likes, comments, the latest videos,
                                                    and more on desktop. You can turn them off anytime.
                                                </Parapraph>
                                            </div>
                                        </BlockContent>
                                    </WrapperContent>
                                    <WrapperContent className="mt-4">
                                        <BlockContent className="mb-4">
                                            <div>
                                                <div className="text-base font-bold">Your preferences</div>
                                                <Parapraph>
                                                    Your preferences will be synced automatically to the TikTok app.
                                                </Parapraph>
                                            </div>
                                        </BlockContent>
                                        <BlockContent>
                                            <div>
                                                <div>Allow in browser</div>
                                                <Parapraph>
                                                    Stay on top of notifications for likes, comments, the latest videos,
                                                    and more on desktop. You can turn them off anytime.
                                                </Parapraph>
                                            </div>
                                            <span className="text-xs fa-solid fa-chevron-right"></span>
                                        </BlockContent>
                                    </WrapperContent>
                                    <div></div>
                                </div>
                            </div>
                            <div className="mt-8 mb-4">
                                <Title id="content4">Business account</Title>
                                <WrapperContent className="mt-4">
                                    <div className="flex justify-between">
                                        <SubTitle>Business account</SubTitle>
                                        <ToggleButton />
                                    </div>
                                    <BlockContent>
                                        <div>
                                            <Parapraph>
                                                Access marketing tools & exclusive features through your business
                                                account to better connect with viewers
                                            </Parapraph>
                                        </div>
                                    </BlockContent>
                                </WrapperContent>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className={scss.backArrow}>
                <i onClick={() => history.back()} className={"fa-solid fa-arrow-left"}></i>
            </button>
        </div>
    );
}

export default Setting;
