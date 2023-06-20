/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useRef, useState } from "react";
import { GeneralButton, PageFooter } from "../../components/GeneralComponent";
import scss from "./upload.module.scss";
import styled from "@emotion/styled";
import CollectDataForm from "./collectDataForm";

const Content = styled.div`
    margin-bottom: 6px;
    text-align: center;
`;

function UploadPage() {
    const fileInput = useRef();
    const [showForm, setShowForm] = useState(false);
    const newVideo = useRef();
    const handleChooseFile = (e) => {
        if (e.target.files.length) {
            newVideo.current = URL.createObjectURL(e.target.files[0]);
            setShowForm(true);
        }
    };
    return (
        <div
            css={css`
                background-color: #eee;
            `}
        >
            <div className="mt-60px bg-inherit">
                <div className={scss.uploadDivStyle}>
                    <div
                        className="px-12 py-16 rounded-lg bg-white"
                        css={css`
                            box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 8px;
                        `}
                    >
                        <div role="button" className={scss.mainStyle} onClick={() => fileInput.current.click()}>
                            <input
                                onChange={handleChooseFile}
                                onClick={(e) => (e.target.value = null)}
                                ref={fileInput}
                                type="file"
                                className="w-0"
                                accept="video/*"
                            />
                            <i
                                css={css`
                                    font-size: 32px;
                                    color: #aaa;
                                `}
                                className="fa-solid fa-cloud-arrow-up"
                            ></i>
                            <div className={scss.color1}>
                                <h2 className="text-center mt-6 font-bold text-lg">Select video to upload</h2>
                                <Content>Or drag and drop a file</Content>
                                <Content>Long videos can be split into multiple parts to get more exposure</Content>
                            </div>
                            <div className={scss.color2 + " mt-6"}>
                                <Content>MP4 or WebM</Content>
                                <Content>720x1280 resolution or higher</Content>
                                <Content>Up to 30 minutes</Content>
                                <Content>Less than 2 GB</Content>
                            </div>
                            <GeneralButton className="mt-8 hover:brightness" w="400px" h="36px">
                                Select file
                            </GeneralButton>
                        </div>
                    </div>
                </div>
                <PageFooter className="pb-8 bg-black border-t border-t-solid border-t-gray-100" />
            </div>
            {showForm && <CollectDataForm video={newVideo.current} onShowForm={setShowForm} />}
        </div>
    );
}

export default UploadPage;
