import { useRef } from "react";
import scss from "./SearchBar.module.scss";

function SearchBar() {
    let focused = false;
    let entered = false;
    const searchBar = useRef();
    const handleToggleBorder = (action) => {
        if (action.type === "focus") focused = true;
        else if (action.type === "enter") entered = true;
        else if (action.type === "blur") focused = false;
        else entered = false;

        if (action.type === "focus" || action.type === "enter") {
            searchBar.current.className = scss["search-bar-hover"];
        } else {
            if (!focused && !entered) {
                searchBar.current.className = scss["search-bar"];
            }
        }
    };
    return (
        <div id={scss["header__center"]}>
            <div ref={searchBar} className={scss["search-bar"]}>
                <input
                    className={scss["search-input"]}
                    placeholder="Tìm kiếm"
                    onFocus={() => handleToggleBorder({ type: "focus" })}
                    onBlur={() => handleToggleBorder({ type: "blur" })}
                    onMouseEnter={() => handleToggleBorder({ type: "enter" })}
                    onMouseLeave={() => handleToggleBorder({ type: "mouseLeave" })}
                />
                <span className={scss["spanner"]}></span>
                <button className={scss["search-btn"]}>
                    <span className="material-symbols-outlined">search</span>
                </button>
            </div>
        </div>
    );
}

export default SearchBar;
