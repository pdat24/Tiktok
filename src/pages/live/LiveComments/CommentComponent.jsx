/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { CommentDiv, TextOverflow } from "../../../components/GeneralComponent";
import defaultAvatar from "../../../assets/imgs/defaultAvatar.webp";

function CommentComponent({ accountName, msg, avatar }) {
    const ellipsisIcon = useRef();
    const commentDivWrapper = useRef();
    return (
        <div
            ref={commentDivWrapper}
            className="relative hover:bg-gray-100 transition-colors"
            onMouseEnter={() => (ellipsisIcon.current.style.visibility = "visible")}
            onMouseLeave={() => (ellipsisIcon.current.style.visibility = "hidden")}
        >
            <CommentDiv className="px-4 py-1 items-center gap-2" avatar={avatar || defaultAvatar}>
                <Link to="/" className="inline-block w-fit">
                    <TextOverflow
                        css={css`
                            max-width: 150px;
                        `}
                        className="text-sm color-gray font-bold hover:underline w-fit"
                    >
                        {accountName}
                    </TextOverflow>
                </Link>
                <h4 className="text-xs">{msg}</h4>
            </CommentDiv>
            <div ref={ellipsisIcon} className="absolute h-full right-4 top-0 flex items-center invisible opacity-70">
                <i className="fa-solid fa-ellipsis right 0 cursor-pointer"></i>
            </div>
        </div>
    );
}

export default CommentComponent;
