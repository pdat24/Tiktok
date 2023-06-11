/* eslint-disable react-hooks/exhaustive-deps */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChannelName, TickIcon } from "../../GeneralComponent";
import handleShowCount from "../../BodyComponent/handelShowCount";
import scss from "./introduce.module.scss";
import clsx from "clsx";
import handleHover from "../../GeneralComponent/handleHover";

function Introduce({
    startTime,
    endTime,
    triggerClassName,
    name,
    desc,
    follower,
    like,
    hidden,
    coordinate,
    children,
    className,
    ...attrs
}) {
    const targetComponent = useRef();
    useEffect(() => {
        setTimeout(() => {
            if (triggerClassName) {
                handleHover({
                    parent: targetComponent.current.closest("." + triggerClassName),
                    target: targetComponent.current,
                    startTime: startTime || 800,
                    endTime: endTime || 400,
                });
            }
        }, 800);
    }, []);
    return !hidden ? (
        <div
            ref={targetComponent}
            {...attrs}
            className={clsx(scss.wrapperStyle, className)}
            style={{ top: coordinate + "px" }}
        >
            <div className="flex justify-between mb-3 items-center">
                {children[0]}
                {children[1]}
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
                        <span className={scss.followCount}>{handleShowCount(follower)}</span>
                        <span className={scss.follwText}>Follower</span>
                    </span>
                    <span className="mr-3">
                        <span className={scss.followCount}>{handleShowCount(like)}</span>
                        <span className={scss.follwText}>Thích</span>
                    </span>
                </p>
            </div>
            {children[2]}
        </div>
    ) : (
        <></>
    );
}

export default Introduce;
