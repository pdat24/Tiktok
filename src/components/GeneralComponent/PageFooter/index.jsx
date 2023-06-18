/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { feedBackPageData } from "../../GlobalVar";
import logo from "../../../assets/imgs/blackLogo.png";
import { memo } from "react";
import scss from "./PageFooter.module.scss";

function PageFooter({ className, ...attrs }) {
    const keys = ["Company", "Programs", "Support", "Legal"];
    return (
        <div className={className} {...attrs}>
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
    );
}

export default memo(PageFooter);
