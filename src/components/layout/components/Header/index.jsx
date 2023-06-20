/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import RightSide from "./RightSide";
import scss from "./Header.module.scss";
import logo from "../../../../assets/imgs/whiteLogo.png";
import SearchBar from "./SearchBar";
import ShortcutModel from "../ShortcutModel";
import Models from "../Models";

function Header({ innerCls, innerCss, className, ...attrs }) {
    return (
        <>
            <header className={className} {...attrs} id={scss["header"]}>
                <div className={innerCls || ""} css={innerCss || ""} id={scss["header__wrapper"]}>
                    <div id={scss["header__left"]}>
                        <a
                            href="/"
                            css={css`
                                width: 40%;
                            `}
                        >
                            <img className="w-full shrink" src={logo} alt="logo" />
                        </a>
                    </div>
                    <SearchBar />
                    <RightSide />
                </div>
            </header>
            <ShortcutModel />
            <Models />
        </>
    );
}

export default Header;
