/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ChannelName, TickIcon } from "../GeneralComponent";
import { forwardRef } from "react";

function Channel({ img, name, desc, url }, ref) {
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
    const intro = css`
        font-size: 12px;
        color: #161823bf;
        font-weight: 400;
    `;
    return (
        <a href={url} css={wrapperStyle} ref={ref}>
            <div css={imgWrapperStyle}>
                <img src={img} alt="Tiktok channel image" />
            </div>
            <div className="flex flex-col">
                <div className="flex items-center">
                    <ChannelName fs="14px" maxW="145px">
                        {name}
                    </ChannelName>
                    <div className="ml-1">{TickIcon}</div>
                </div>
                <Text css={intro}>{desc}</Text>
            </div>
        </a>
    );
}

export default forwardRef(Channel);
