/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";

function Channel({ img, name, desc, url }) {
    const tickIcon = (
        <svg
            fontSize="14px"
            viewBox="0 0 48 48"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
        >
            <g clipPath="url(#Icon_Color-Verified_Badge_svg__a)">
                <circle cx="24" cy="24" r="24" fill="#20D5EC"></circle>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M37.12 15.88a3 3 0 0 1 0 4.24l-13.5 13.5a3 3 0 0 1-4.24 0l-8.5-8.5a3 3 0 1 1 4.24-4.24l6.38 6.38 11.38-11.38a3 3 0 0 1 4.24 0Z"
                    fill="#fff"
                ></path>
            </g>
            <defs>
                <clipPath id="Icon_Color-Verified_Badge_svg__a">
                    <path fill="#fff" d="M0 0h48v48H0z"></path>
                </clipPath>
            </defs>
        </svg>
    );
    const Text = styled.span`
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        max-width: 145px;
    `;
    const wrapperStyle = css`
        display: flex;
        align-items: center;
        padding: 8px;
        border-radius: 4px;
        transition: background 200ms ease-in-out 0s;
        gap: 12px;
        height: 48px;
        &:hover {
            background-color: #16182308;
        }
    `;
    const imgWrapperStyle = css`
        width: 32px;
        height: 32px;
        border-radius: 50%;
        overflow: hidden;
    `;
    const titleStyle = css`
        font-size: 14px;
        font-weight: 600;
        color: #161823;
        font-family: IBM;
    `;
    const intro = css`
        font-size: 12px;
        color: #161823bf;
        font-weight: 400;
    `;
    return (
        <a href={url} css={wrapperStyle}>
            <div css={imgWrapperStyle}>
                <img src={img} alt="Tiktok channel image" />
            </div>
            <div className="flex flex-col">
                <div className="flex items-center">
                    <Text css={titleStyle}>{name}</Text>
                    <div className="ml-1">{tickIcon}</div>
                </div>
                <Text css={intro}>{desc}</Text>
            </div>
        </a>
    );
}

export default Channel;
