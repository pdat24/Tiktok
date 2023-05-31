/* eslint-disable react-hooks/exhaustive-deps */
/** @jsxImportSource @emotion/react */
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
// import { css } from "@emotion/react";

import { LOGIN_MODAL, SIGNUP_MODAL, SCAN_QR_MODAL, USE_PHONE_NUMBER_MODAL } from "./modalNames";
import { setTitle } from "../../../GlobalStore/rootSlide";
import ModalsList from "./modalList";
import { Container, Dialog, ButtonClose, Content } from "../../../ModalComponent";
import handleClose from "../../../ModalComponent/handleClose";

function Modals() {
    const container = useRef();
    const updateTitle = useDispatch();
    const [activeModal, setActiveModal] = useState(LOGIN_MODAL);
    useEffect(() => {
        if (
            (activeModal === LOGIN_MODAL || activeModal === SCAN_QR_MODAL || activeModal === USE_PHONE_NUMBER_MODAL) &&
            window.getComputedStyle(container.current).display !== "none"
        )
            updateTitle(setTitle("Đăng nhập | TikTok"));
        else if (activeModal === SIGNUP_MODAL) updateTitle(setTitle("Đăng ký | TikTok"));
    }, [activeModal]);
    return (
        <Container ref={container} id="loginModel">
            <Dialog id="loginDialog">
                <Content>
                    {/** header */}
                    <div className="border-0 pt-12">
                        <ButtonClose
                            className="top-6 right-6"
                            id="loginCloser"
                            onClick={() => {
                                updateTitle(setTitle("TikTok | Make Your Day"));
                                handleClose({
                                    container: document.getElementById("loginModel"),
                                    dialog: document.getElementById("loginDialog"),
                                });
                            }}
                            size="16px"
                            wh="30px"
                            pad="10px 12px"
                        ></ButtonClose>
                    </div>
                    {/** body */}
                    {ModalsList.reduce((init, elem) => {
                        if (elem.name === activeModal) {
                            const ActiveModal = elem.component;
                            return <ActiveModal onModal={setActiveModal} />;
                        } else return init;
                    }, <></>)}
                </Content>
            </Dialog>
        </Container>
    );
}

export default Modals;
