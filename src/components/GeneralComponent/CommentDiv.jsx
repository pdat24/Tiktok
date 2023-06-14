import { Avatar } from ".";
import { Link } from "react-router-dom";

function CommentDiv({ channel, className, avatar, children, ...attrs }) {
    return (
        <div className={"flex " + className || ""} {...attrs}>
            <Link to={channel}>
                <Avatar wh="24px" src={avatar} />
            </Link>
            <div className="grow shrink auto">{children}</div>
        </div>
    );
}

export default CommentDiv;
