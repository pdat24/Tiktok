import styled from "@emotion/styled";
import scss from "./upload.module.scss";
import { Avatar, GeneralButton } from "../../components/GeneralComponent";
import { useEffect, useRef, useState } from "react";
import defaultAvatar from "../../assets/imgs/defaultAvatar.webp";
import { setUploadVideo } from "../../components/GlobalStore/uploadVideoSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const FormLabel = styled.div`
    font-weight: 600;
    line-height: 24px;
    font-size: 15px;
    width: 120px;
    margin-right: 24px;
`;

const Notice = styled.div`
    font-size: 12px;
    color: rgba(22, 24, 35, 0.75);
    line-height: 18px;
    max-width: 460px;
    overflow: hidden;
    margin-top: 8px;
    width: 360px;
`;

const ContentBlock = styled.div`
    padding: 16px 0px;
    display: flex;
    border-bottom: 0.5px solid rgba(22, 24, 35, 0.12);
`;

function CollectDataForm({ video }) {
    const navigate = useNavigate();
    const [uName, setUName] = useState("");
    const [nickName, setNickName] = useState("");
    const [desc, setDesc] = useState("");
    const [tempAvatar, setTempAvatar] = useState(defaultAvatar);
    const fileInput = useRef();
    const main = useRef();
    const layerWrapper = useRef();
    const dispatch = useDispatch();
    useEffect(() => {
        const handler = (e) => {
            if (e.target.files.length) {
                URL.revokeObjectURL(tempAvatar);
                setTempAvatar(URL.createObjectURL(e.target.files[0]));
            }
        };
        fileInput.current.addEventListener("input", handler);
        return () => fileInput.current?.removeEventListener("input", handler);
    }, []);
    const handleTypeUN = (e) => setUName(e.target.value);
    const handleTypeRN = (e) => setNickName(e.target.value);
    const handleTypeDesc = (e) => {
        if (desc.length < 80) setDesc(e.target.value);
    };
    const handleSave = () => {
        if (uName.length != 0 && !uName.includes(" ") && nickName.replace(" ", "").length != 0) {
            dispatch(
                setUploadVideo({
                    video,
                    avatar: tempAvatar,
                    accountName: uName,
                    userName: nickName,
                    tags: ["#tiktokvn", "#xuhuong", "#gcent", "#iing"],
                    desc,
                    bgMusic: "Nhạc nền - original sound",
                    footerNote: "Booking: trucmayofficial@gmail.com Mua nước hoa ghé giỏ hàng phía dưới nha 👇",
                })
            );
            setTimeout(() => {
                navigate("/");
            }, 500);
        } else {
            alert("Invalid information! PLease specially read my notice and try again");
        }
    };
    const handleCloseForm = () => {
        main.current.style.scale = 0;
        layerWrapper.current.style.opacity = 0;
        setTimeout(() => {
            layerWrapper.current.style.display = "none";
        }, 200);
    };
    return (
        <div id="formLayer" ref={layerWrapper} className="fullLayer flex items-center justify-center">
            <div id="formDialog" ref={main} className={scss.dialog}>
                <div className={scss.formHeader}>
                    <div>Update profile</div>
                    <i onClick={handleCloseForm} className={"fa-solid fa-xmark " + scss.closeBtn}></i>
                </div>
                <div className="py-2 px-6">
                    <ContentBlock>
                        <FormLabel>Profile photo</FormLabel>
                        <div className="flex justify-center w-6/12">
                            <input accept="image/*" ref={fileInput} type="file" className="w-0" />
                            <div
                                onClick={() => fileInput.current.click()}
                                className="relative"
                                style={{ borderRadius: "50%", backgroundColor: "#1618230f" }}
                                role="button"
                            >
                                <Avatar alt="avatar" wh="92px" src={tempAvatar} />
                                <i className={"fa-solid fa-pen-to-square " + scss.editIcon}></i>
                            </div>
                        </div>
                    </ContentBlock>
                    <ContentBlock>
                        <FormLabel>Username</FormLabel>
                        <div>
                            <input
                                value={uName}
                                onChange={handleTypeUN}
                                className={scss.entryInput}
                                placeholder="Username"
                                type="text"
                            />
                            <Notice>Username can&apos;t empty or contain space</Notice>
                        </div>
                    </ContentBlock>
                    <ContentBlock>
                        <FormLabel>Name</FormLabel>
                        <div>
                            <input
                                value={nickName}
                                onChange={handleTypeRN}
                                className={scss.entryInput}
                                placeholder="Name"
                                type="text"
                            />
                            <Notice>Your nickname can&apos;t empty</Notice>
                        </div>
                    </ContentBlock>
                    <ContentBlock style={{ border: "none" }}>
                        <FormLabel>Description</FormLabel>
                        <div>
                            <textarea
                                value={desc}
                                onChange={handleTypeDesc}
                                className={scss.textareaInput}
                                placeholder="Description"
                            ></textarea>
                            <Notice>{desc.length}/80</Notice>
                        </div>
                    </ContentBlock>
                </div>
                <div className={scss.formFooter}>
                    <GeneralButton
                        onClick={handleCloseForm}
                        bg="#fff"
                        fw="400"
                        color="#333"
                        className="border border-solid border-gray-300 hover:bg-gray-100"
                        w="96px"
                    >
                        Cancel
                    </GeneralButton>
                    <GeneralButton onClick={handleSave} fw="400" w="96px" className="hover:brightness">
                        Save
                    </GeneralButton>
                </div>
            </div>
        </div>
    );
}

export default CollectDataForm;
