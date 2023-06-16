/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

import { filterInExplorePage } from "../../components/GlobalVar";
import { FilterCategoryBtn } from "../../components/GeneralComponent";
import scss from "./explore.module.scss";

function CategoryButtons() {
    const [active, setActive] = useState(0);
    return (
        <>
            {filterInExplorePage.map((item, index) => (
                <FilterCategoryBtn
                    onClick={() => setActive(index)}
                    className={clsx("mr-3 box-border", { "border border-solid border-black": active === index })}
                    key={index}
                >
                    {item.icon}
                    <span className="text-base font-bold ml-2">{item.content}</span>
                </FilterCategoryBtn>
            ))}
        </>
    );
}

function FilterBar() {
    const filterDivWrapper = useRef();
    useEffect(() => {
        const handler = () => {
            if (container.scrollTop > 84) {
                filterDivWrapper.current.style.top = "-24px";
            } else filterDivWrapper.current.style.top = "60px";
        };
        const container = document.getElementById("explorePageContainer");
        container.addEventListener("scroll", handler);
        return () => {
            container.removeEventListener("scroll", handler);
        };
    }, []);
    const itemsWrapper = useRef();
    const moveBackBtn = useRef();
    const moveNextBtn = useRef();
    const layerUnderBack = useRef();
    const layerUnderNext = useRef();
    const handleMove = ({ type }) => {
        const targetWidth = parseFloat(window.getComputedStyle(itemsWrapper.current).width);
        const parentWidth = parseFloat(window.getComputedStyle(itemsWrapper.current.parentElement).width);
        const increaseLeft = targetWidth * (20 / 100);
        //
        itemsWrapper.current.style.left =
            parseFloat(window.getComputedStyle(itemsWrapper.current).left) +
            (type === "back" ? increaseLeft : -increaseLeft) +
            "px";
        if (type === "back") {
            if (
                Math.abs(parseFloat(window.getComputedStyle(itemsWrapper.current).left)) + increaseLeft + parentWidth <=
                targetWidth
            ) {
                itemsWrapper.current.style.left = "0px";
                layerUnderBack.current.style.display = "none";
            } else
                itemsWrapper.current.style.left =
                    parseFloat(window.getComputedStyle(itemsWrapper.current).left) + increaseLeft + "px";
        } else if (type === "next") {
            if (
                Math.abs(parseFloat(window.getComputedStyle(itemsWrapper.current).left)) + increaseLeft + parentWidth >=
                targetWidth
            ) {
                itemsWrapper.current.style.left = -(targetWidth - parentWidth) + "px";
                layerUnderNext.current.style.display = "none";
            } else
                itemsWrapper.current.style.left =
                    parseFloat(window.getComputedStyle(itemsWrapper.current).left) - increaseLeft + "px";
        }
        setTimeout(() => {
            const targetLeft = parseFloat(window.getComputedStyle(itemsWrapper.current).left);
            layerUnderBack.current.style.display = moveBackBtn.current.style.display =
                Math.floor(targetLeft) >= 0 ? "none" : "initial";
            layerUnderNext.current.style.display = moveNextBtn.current.style.display =
                Math.floor(parentWidth) - Math.floor(targetWidth + targetLeft) < 0 ? "initial" : "none";
            Math.floor(parentWidth) - Math.floor(targetWidth + targetLeft) < 0 ? "initial" : "none";
        }, 250);
    };
    const LayerUnderMoveBtns = styled.div`
        position: absolute;
        top: 0px;
        width: 80px;
        height: 40px;
        background: linear-gradient(${({ side }) => side}, rgb(255, 255, 255) 0.09%, rgba(255, 255, 255, 0) 100.83%);
    `;
    return (
        <div ref={filterDivWrapper} className={clsx(scss.categoryDivWrapper, "bg-white z-10")}>
            <div
                ref={itemsWrapper}
                className="flex relative left-0 w-fit"
                css={css`
                    transition: left 200ms linear;
                    padding: 28px 0 16px;
                `}
            >
                <CategoryButtons />
            </div>
            <div className="absolute left-0 top-7">
                <button
                    ref={moveBackBtn}
                    className={clsx("left-1 top-1 hidden", scss.moveSlideButton)}
                    onClick={() => handleMove({ type: "back" })}
                >
                    &lt;
                </button>
                <LayerUnderMoveBtns ref={layerUnderBack} side="to right" className="left-0 hidden" />
            </div>
            <div className="absolute right-0 top-7">
                <button
                    ref={moveNextBtn}
                    className={clsx("right-1 top-1", scss.moveSlideButton)}
                    onClick={() => handleMove({ type: "next" })}
                >
                    &gt;
                </button>
                <LayerUnderMoveBtns ref={layerUnderNext} side="to left" className="right-0" />
            </div>
        </div>
    );
}

export default FilterBar;
