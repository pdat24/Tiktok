/** @jsxImportSource @emotion/react */
import clsx from "clsx";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { useRef } from "react";

import { Container, Dialog, ButtonClose, Content } from "../../../ModalComponent/";
import handleClose from "../../../ModalComponent/handleClose";

// keyboard shortcut modal
function ShortcutModel() {
    const container = useRef();
    const dialog = useRef();
    const ShortcutIcon = styled.i`
        padding: 4px;
        border: 2px solid;
        border-radius: 4px;
        width: 24px;
        height: 24px;
    `;
    const ListItem = styled.li`
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 14px;
        border-bottom: 1px solid rgba(22, 24, 35, 0.12);
    `;
    const shortcuts = [
        {
            text: "Quay về video trước",
            icon: <ShortcutIcon className={clsx("fa-solid", "fa-arrow-up")} />,
        },
        {
            text: "Đi đến video tiếp theo",
            icon: <ShortcutIcon className={clsx("fa-solid", "fa-arrow-down")} />,
        },
        {
            text: "Thích video",
            icon: <ShortcutIcon className={clsx("fa-sharp", "fa-solid fa-l")} />,
        },
        {
            text: "Tắt tiếng / bật tiếng video",
            icon: <ShortcutIcon className={clsx("fa-sharp", "fa-solid fa-m")} />,
        },
    ];
    return (
        <Container id="shortcutModel" ref={container}>
            <Dialog
                id="shortcutDialog"
                ref={dialog}
                css={css`
                    height: fit-content;
                `}
            >
                <Content pad="40px 32px 32px">
                    {/** header */}
                    <div className="pt-0">
                        <h1 className="text-2xl font-bold text-center">Phím tắt trên bàn phím</h1>
                        <ButtonClose
                            className="top-4 right-4"
                            id="shortcutCloser"
                            onClick={() => handleClose({ container: container.current, dialog: dialog.current })}
                            size="12px"
                            wh="25px"
                            pad="6px 8px"
                        ></ButtonClose>
                    </div>
                    {/** body */}
                    <div
                        className="p-0 mt-4"
                        css={css`
                            border-top: 1px solid rgba(22, 24, 35, 0.12);
                        `}
                    >
                        {/** item */}
                        <ul className="list-none p-0">
                            {shortcuts.map((elem, index) => {
                                return (
                                    <ListItem key={index}>
                                        <span>{elem.text}</span>
                                        {elem.icon}
                                    </ListItem>
                                );
                            })}
                        </ul>
                    </div>
                </Content>
            </Dialog>
        </Container>
    );
}

export default ShortcutModel;
