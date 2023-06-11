/** @jsxImportSource @emotion/react */
import { useRef, useState } from "react";

import { LOGIN_MODAL } from "./modalNames";
import ModalsList from "./modalList";
import { Container, Dialog, ButtonClose, Content } from "../../../ModalComponent";
import handleClose from "../../../ModalComponent/handleClose";

function Modals() {
    const container = useRef();
    const [activeModal, setActiveModal] = useState(LOGIN_MODAL);
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
