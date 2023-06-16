/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { feedBackOften, feedBackSelection, feedBackPageData } from "../../components/GlobalVar";
import scss from "./feedBack.module.scss";
import appstore from "../../assets/imgs/appStore.png";
import amazon from "../../assets/imgs/amazon.png";
import chplay from "../../assets/imgs/chplay.png";
import microsoft from "../../assets/imgs/microsoft.png";
import QRLetter from "../../assets/imgs/QRLetter.png";
import logo from "../../assets/imgs/blackLogo.png";

function Selection({ children }) {
    return (
        <div
            className="py-4 relative cursor-pointer rounded hover:bg-gray-100 pl-2"
            onClick={() => alert("Tính năng hiện chưa cập nhật!")}
        >
            {children[0]}
            <div className="h-full flex items-center absolute right-3 top-0">{children[1]}</div>
        </div>
    );
}

const PlatformImage = styled.img`
    width: 170px;
    height: 50px;
    border-radius: 8px;
    border: 2px solid #999;
`;

function Feedback() {
    const keys = ["Company", "Programs", "Support", "Legal"];
    return (
        <div className={scss.wrapper}>
            <div className={scss.bodyWrapper}>
                <div className="pt-12 mb-6">
                    <h1
                        className="mb-2 font-bold"
                        css={css`
                            font-size: 32px;
                        `}
                    >
                        Feedback And Help
                    </h1>
                    <h3 className="color-gray">SELECT A TOPIC</h3>
                </div>
                <div className="flex justify-between mb-6">
                    <div className="flex-auto">
                        <div>
                            <h4 className="font-bold mb-1">Suggestion</h4>
                            <div>
                                {feedBackSelection.map((content, index) => (
                                    <Selection key={index}>
                                        <span>{content}</span>
                                        <i className="fa-solid fa-chevron-right text-xs"></i>
                                    </Selection>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className={scss.rightWrapper}>
                        <h3 className="mb-6 text-2xl font-bold">Frequently Asked Questions</h3>
                        <div className="pl-2">
                            {feedBackOften.map((content, index) => (
                                <Selection key={index}>
                                    <span>{content}</span>
                                    <i className="fa-solid fa-chevron-down text-xs"></i>
                                </Selection>
                            ))}
                        </div>
                    </div>
                </div>
                <hr />
                <a href="/feedBack" className="mt-7 pl-2 font-bold block">
                    Report a problem
                </a>
            </div>
            <div className="bg-black pb-8">
                <div className="pt-7 pb-12 border-b border-b-solid border-b-gray-500">
                    <h2 className="text-white text-center font-bold text-2xl mb-3">Download now</h2>
                    <div className={scss.platformWrapper}>
                        <PlatformImage alt="playforms" src={QRLetter} />
                        <PlatformImage alt="playforms" src={microsoft} />
                        <PlatformImage alt="playforms" src={appstore} />
                        <PlatformImage alt="playforms" src={amazon} />
                        <PlatformImage alt="playforms" src={chplay} />
                    </div>
                </div>
                <div className={scss.footerInfo}>
                    <img src={logo} alt="logo" className={scss.footerLogo} />
                    {keys.map((items, index) => (
                        <div
                            key={index}
                            className="w-full"
                            css={css`
                                max-width: 240px;
                            `}
                        >
                            <h3 className={scss.categoryHeader}>{items}</h3>
                            <div className={scss.category}>
                                {feedBackPageData[items].map((item, test) => (
                                    <a href="/" className="w-fit block py-1 hover:underline" key={test}>
                                        {item}
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <div className={scss.endDiv}>
                    <div className="text-white border border-solid border-white px-2 py-1">
                        <select
                            className="bg-inherit text-sm"
                            css={css`
                                background-color: inherit;
                                font-size: 14px;
                                min-width: 120px;
                                outline: none;
                            `}
                        >
                            <option className="text-black">English</option>
                            <option className="text-black">Tiếng Việt</option>
                            <option className="text-black">Chinese</option>
                            <option className="text-black">Spanish</option>
                            <option className="text-black">French</option>
                            <option className="text-black">Korean</option>
                        </select>
                    </div>
                    <div
                        css={css`
                            color: #aaa;
                        `}
                    >
                        © 2023 TikTok
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Feedback;
