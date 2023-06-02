/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { GeneralButton, ChannelName, TickIcon } from "../GeneralComponent";
import { Link } from "react-router-dom";

function Introduce({ img, name, desc, follower, like, hidden, className, coordinate }) {
    // console.log(coordinate);
    const wrapperStyle = css`
        width: 320px;
        box-sizing: border-box;
        padding: 20px;
        background: #fff;
        box-shadow: rgba(0, 0, 0, 0.3) 0px 4px 16px;
        border-radius: 8px;
        display: inline-block;
        z-index: 99;
    `;
    const followCount = css`
        font-weight: 700;
        margin-right: 6px;
        font-size: 17px;
        line-height: 20px;
        display: inline-block;
    `;
    const follwText = css`
        color: rgba(22, 24, 35, 0.75);
        font-size: 17px;
        line-height: 20px;
        display: inline-block;
    `;
    const imgStyle = css`
        width: 32px;
        border-radius: 50%;
        height: 32px;
    `;
    return !hidden ? (
        <div className={className} css={wrapperStyle} style={{ top: coordinate + "px" }}>
            <div className="flex justify-between mb-3">
                <img css={imgStyle} src={img} alt="image" />
                <GeneralButton>Follow</GeneralButton>
            </div>
            <div>
                <div>
                    <ChannelName className="flex items-center gap-1" fs="16px" maxW="240px">
                        <Link to="/">{name}</Link>
                        {TickIcon}
                    </ChannelName>
                    <p
                        css={css`
                            font-size: 14px;
                            font-family: IBM;
                        `}
                    >
                        <Link to="/">{desc}</Link>
                    </p>
                </div>
                <p className="mt-2">
                    <span className="mr-3">
                        <span css={followCount}>{follower + "M"}</span>
                        <span css={follwText}>Follwer</span>
                    </span>
                    <span className="mr-3">
                        <span css={followCount}>{like + "M"}</span>
                        <span css={follwText}>Thích</span>
                    </span>
                </p>
            </div>
        </div>
    ) : (
        <></>
    );
}

export default Introduce;
