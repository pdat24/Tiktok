/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import RightSide from "./RightSide";
import scss from "./Header.module.scss";
import logo from "../../../../assets/imgs/logo.png";
import SearchBar from "./SearchBar";
import ShortcutModel from "../ShortcutModel";
import Models from "../Models";

function Header() {
    return (
        <>
            <header id={scss["header"]}>
                <div id={scss["header__wrapper"]}>
                    <div id={scss["header__left"]}>
                        <a
                            href="/"
                            css={css`
                                width: 40%;
                            `}
                        >
                            <img className="w-full" src={logo} alt="logo" />
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
