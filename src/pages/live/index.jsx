/** @jsxImportSource */
// import { css } from "@emotion/react";
import clsx from "clsx";
import scss from "./Live.module.scss";
import { videoInLivePage } from "../../components/GlobalVar";
import ActiveVideoDiv from "./ActiveVideoDiv";

function LivePage() {
    const proposeChannels = [];
    return (
        <div className={clsx(scss.mainSide, "relative flex")}>
            <div className="grow">
                <div>
                    {videoInLivePage.map((item, index) => {
                        if (item.active) {
                            return <ActiveVideoDiv key={index} object={item} />;
                        } else {
                            proposeChannels.push(<div></div>);
                        }
                    })}
                    <div>
                        <div>
                            
                        </div>
                    </div>
                    <div></div>
                    <div>{proposeChannels}</div>
                </div>
            </div>
            <div className={clsx(scss.commentSide)}>
                <div></div>
                <div></div>
                <div></div>
                <div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    );
}

export default LivePage;
