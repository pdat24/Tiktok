/* eslint-disable react-refresh/only-export-components */
import channelImage from "../../assets/imgs/tiktokChannel.jpeg";
import channel1 from "../../assets/imgs/channel1.jpeg";
import channel2 from "../../assets/imgs/channel2.jpeg";
import channel3 from "../../assets/imgs/channel3.jpeg";
import channel4 from "../../assets/imgs/channel4.jpeg";
import avatar from "../../assets/imgs/avatar.jpeg";
import video1 from "../../assets/video.mp4";
import girlImage from "../../assets/imgs/beautyGirl.jpg";

const QRCODE = "QR";
const PERSONAL_INFO = "Personal Information";
const FACEBOOK = "Facebook";
const GOOGLE = "Google";
const LINE = "Line";
const INSTAGRAM = "Instagram";
const TWITTER = "Twitter";
const KAKAOTALK = "KakaoTalk";
const APPLE = "Apple";

const platforms = [
    {
        name: QRCODE,
        icon: <i className="fa-solid fa-qrcode"></i>,
    },
    {
        name: PERSONAL_INFO,
        icon: <i className="fa-regular fa-user"></i>,
    },
    {
        thirdParty: true,
        name: FACEBOOK,
        icon: (
            <svg
                width="1em"
                data-e2e=""
                height="1em"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M24 47C36.7025 47 47 36.7025 47 24C47 11.2975 36.7025 1 24 1C11.2975 1 1 11.2975 1 24C1 36.7025 11.2975 47 24 47Z"
                    fill="white"
                ></path>
                <path
                    d="M24 1C11.2964 1 1 11.2964 1 24C1 35.4775 9.40298 44.9804 20.3846 46.7205L20.3936 30.6629H14.5151V24.009H20.3936C20.3936 24.009 20.3665 20.2223 20.3936 18.5363C20.4206 16.8503 20.7542 15.2274 21.6288 13.7487C22.9722 11.4586 25.0639 10.3407 27.6335 10.0251C29.7432 9.76362 31.826 10.0521 33.9087 10.3407C34.0529 10.3587 34.125 10.3767 34.2693 10.4038C34.2693 10.4038 34.2783 10.6472 34.2693 10.8005C34.2603 12.4053 34.2693 16.0839 34.2693 16.0839C33.2685 16.0659 31.6096 15.9667 30.5096 16.138C28.6884 16.4175 27.6425 17.5806 27.6064 19.4108C27.5704 20.8354 27.5884 24.009 27.5884 24.009H33.9988L32.962 30.6629H27.5974V46.7205C38.597 44.9984 47.009 35.4775 47.009 24C47 11.2964 36.7036 1 24 1Z"
                    fill="#0075FA"
                ></path>
            </svg>
        ),
    },
    {
        thirdParty: true,
        name: GOOGLE,
        icon: (
            <svg
                width="1em"
                data-e2e=""
                height="1em"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M43 24.4313C43 23.084 42.8767 21.7885 42.6475 20.5449H24.3877V27.8945H34.8219C34.3724 30.2695 33.0065 32.2818 30.9532 33.6291V38.3964H37.2189C40.885 35.0886 43 30.2177 43 24.4313Z"
                    fill="#4285F4"
                ></path>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M24.3872 43.001C29.6219 43.001 34.0107 41.2996 37.2184 38.3978L30.9527 33.6305C29.2165 34.7705 26.9958 35.4441 24.3872 35.4441C19.3375 35.4441 15.0633 32.1018 13.5388 27.6108H7.06152V32.5337C10.2517 38.7433 16.8082 43.001 24.3872 43.001Z"
                    fill="#34A853"
                ></path>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.5395 27.6094C13.1516 26.4695 12.9313 25.2517 12.9313 23.9994C12.9313 22.7472 13.1516 21.5295 13.5395 20.3894V15.4668H7.06217C5.74911 18.0318 5 20.9336 5 23.9994C5 27.0654 5.74911 29.9673 7.06217 32.5323L13.5395 27.6094Z"
                    fill="#FBBC04"
                ></path>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M24.3872 12.5568C27.2336 12.5568 29.7894 13.5155 31.7987 15.3982L37.3595 9.94866C34.0018 6.88281 29.6131 5 24.3872 5C16.8082 5 10.2517 9.25777 7.06152 15.4674L13.5388 20.39C15.0633 15.8991 19.3375 12.5568 24.3872 12.5568Z"
                    fill="#EA4335"
                ></path>
            </svg>
        ),
    },
    {
        thirdParty: true,
        name: TWITTER,
        icon: (
            <svg
                width="1em"
                data-e2e=""
                height="1em"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M43.8044 6.79902C42.5841 7.62363 39.7822 8.82191 38.4004 8.82191V8.82437C36.8226 7.08554 34.6013 6 32.1377 6C27.353 6 23.4731 10.093 23.4731 15.1387C23.4731 15.8398 23.5501 16.5236 23.6925 17.1793H23.6911C17.2007 16.9996 10.1022 13.5678 5.82893 7.69403C3.2016 12.4916 5.4752 17.8272 8.45673 19.7713C7.43613 19.8526 5.55733 19.6473 4.673 18.737C4.61373 21.9212 6.06507 26.1403 11.3571 27.6709C10.3379 28.2494 8.53373 28.0834 7.74926 27.9604C8.0246 30.6484 11.5927 34.1625 15.4945 34.1625C14.1039 35.8594 8.8716 38.9374 3 37.9582C6.98767 40.5177 11.6352 42 16.5543 42C30.5333 42 41.3894 30.0482 40.8051 15.3041C40.8028 15.2879 40.8028 15.2716 40.8014 15.2539C40.8028 15.216 40.8051 15.1781 40.8051 15.1387C40.8051 15.0929 40.8014 15.0496 40.8 15.0053C42.0726 14.0871 43.7801 12.463 45 10.3254C44.2925 10.7365 42.1701 11.5596 40.1952 11.7639C41.4627 11.0422 43.3405 8.67865 43.8044 6.79902Z"
                    fill="#1DA1F2"
                ></path>
            </svg>
        ),
    },
    {
        thirdParty: true,
        name: LINE,
        icon: (
            <svg
                width="1em"
                data-e2e=""
                height="1em"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M24 47.001C36.7026 47.001 47 36.7035 47 24.001C47 11.2984 36.7026 1.00098 24 1.00098C11.2975 1.00098 1 11.2984 1 24.001C1 36.7035 11.2975 47.001 24 47.001Z"
                    fill="#00B900"
                ></path>
                <path
                    d="M40.0001 22.4324C40.0001 15.2729 32.8228 9.44822 23.9999 9.44822C15.1782 9.44822 8 15.2729 8 22.4324C8 28.8509 13.6922 34.2263 21.3811 35.2427C21.9022 35.355 22.6114 35.5863 22.7908 36.0316C22.9522 36.4362 22.8963 37.0699 22.8423 37.4784C22.8423 37.4784 22.6546 38.6075 22.6141 38.848C22.5445 39.2525 22.2927 40.43 23.9999 39.7105C25.7078 38.9909 33.2145 34.2848 36.5713 30.421H36.5707C38.8895 27.8783 40.0001 25.2978 40.0001 22.4324Z"
                    fill="white"
                ></path>
                <path
                    d="M20.7494 18.9727H19.6271C19.4551 18.9727 19.3152 19.1123 19.3152 19.2837V26.2556C19.3152 26.4273 19.4551 26.5666 19.6271 26.5666H20.7494C20.9215 26.5666 21.0611 26.4273 21.0611 26.2556V19.2837C21.0611 19.1123 20.9215 18.9727 20.7494 18.9727Z"
                    fill="#00B900"
                ></path>
                <path
                    d="M28.4738 18.9727H27.3515C27.1794 18.9727 27.0399 19.1123 27.0399 19.2837V23.4257L23.845 19.1111C23.8377 19.1 23.8294 19.0896 23.8208 19.0795L23.8187 19.0776C23.8125 19.0706 23.8064 19.0644 23.7999 19.0583C23.7981 19.0565 23.7963 19.0549 23.7941 19.0531C23.7889 19.0482 23.7834 19.0436 23.7776 19.0393C23.7751 19.0368 23.7723 19.035 23.7696 19.0328C23.7641 19.0292 23.7588 19.0252 23.7533 19.0218C23.7503 19.0197 23.7472 19.0178 23.7438 19.0163C23.7383 19.0129 23.7328 19.0095 23.7272 19.0068C23.7239 19.0052 23.7208 19.0034 23.7174 19.0022C23.7116 18.9994 23.7058 18.9967 23.6996 18.9945C23.696 18.9933 23.6929 18.9921 23.6895 18.9908C23.6834 18.9887 23.6773 18.9865 23.6708 18.985C23.6674 18.9838 23.6638 18.9832 23.6601 18.9819C23.6539 18.9807 23.6481 18.9792 23.6423 18.9779C23.638 18.9773 23.6334 18.9767 23.6291 18.9764C23.6236 18.9752 23.6181 18.9749 23.6125 18.9743C23.6073 18.9737 23.6021 18.9737 23.5966 18.9733C23.5926 18.9733 23.5895 18.9727 23.5855 18.9727H22.4635C22.2915 18.9727 22.1516 19.1123 22.1516 19.2837V26.2556C22.1516 26.4273 22.2915 26.5666 22.4635 26.5666H23.5855C23.7579 26.5666 23.8975 26.4273 23.8975 26.2556V22.1148L27.0963 26.435C27.1184 26.4663 27.1457 26.4917 27.1754 26.512C27.1764 26.5126 27.1776 26.5135 27.1785 26.5144C27.1849 26.5184 27.1914 26.5224 27.1978 26.5261C27.2009 26.5279 27.2037 26.5292 27.2067 26.5307C27.2113 26.5335 27.2165 26.5359 27.2214 26.5381C27.2267 26.5402 27.2313 26.5424 27.2368 26.5445C27.2398 26.5457 27.2429 26.547 27.246 26.5479C27.2533 26.5506 27.2601 26.5528 27.2671 26.5549C27.2687 26.5549 27.2702 26.5555 27.2717 26.5559C27.2972 26.5626 27.3239 26.5666 27.3515 26.5666H28.4738C28.6462 26.5666 28.7854 26.4273 28.7854 26.2556V19.2837C28.7854 19.1123 28.6462 18.9727 28.4738 18.9727Z"
                    fill="#00B900"
                ></path>
                <path
                    d="M18.0433 24.821H14.9939V19.2843C14.9939 19.1123 14.8543 18.9727 14.6825 18.9727H13.5599C13.3879 18.9727 13.2483 19.1123 13.2483 19.2843V26.2549V26.2555C13.2483 26.3393 13.2817 26.415 13.3354 26.4709C13.3366 26.4724 13.3379 26.4739 13.3397 26.4755C13.3412 26.477 13.3428 26.4782 13.3443 26.4798C13.4004 26.5337 13.4759 26.5669 13.5596 26.5669H13.5599H18.0433C18.2154 26.5669 18.3543 26.427 18.3543 26.2549V25.1326C18.3543 24.9606 18.2154 24.821 18.0433 24.821Z"
                    fill="#00B900"
                ></path>
                <path
                    d="M34.6715 20.7186C34.8435 20.7186 34.9825 20.5793 34.9825 20.4069V19.2846C34.9825 19.1126 34.8435 18.9727 34.6715 18.9727H30.1881H30.1875C30.1034 18.9727 30.0277 19.0064 29.9715 19.0607C29.9703 19.062 29.9688 19.0629 29.9679 19.0641C29.966 19.0659 29.9645 19.0678 29.963 19.0696C29.9096 19.1254 29.8765 19.2009 29.8765 19.2843V19.2846V26.2552V26.2555C29.8765 26.3393 29.9099 26.415 29.9636 26.4709C29.9648 26.4724 29.9663 26.4742 29.9679 26.4755C29.9691 26.477 29.9709 26.4785 29.9725 26.4798C30.0283 26.5334 30.1041 26.5669 30.1875 26.5669H30.1881H34.6715C34.8435 26.5669 34.9825 26.427 34.9825 26.2552V25.1326C34.9825 24.9609 34.8435 24.821 34.6715 24.821H31.6223V23.6426H34.6715C34.8435 23.6426 34.9825 23.503 34.9825 23.3309V22.2086C34.9825 22.0366 34.8435 21.8967 34.6715 21.8967H31.6223V20.7186H34.6715Z"
                    fill="#00B900"
                ></path>
            </svg>
        ),
    },
    {
        thirdParty: true,
        name: KAKAOTALK,
        icon: (
            <svg
                width="1em"
                data-e2e=""
                height="1em"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M24 47.001C36.7026 47.001 47 36.7035 47 24.001C47 11.2984 36.7026 1.00098 24 1.00098C11.2975 1.00098 1 11.2984 1 24.001C1 36.7035 11.2975 47.001 24 47.001Z"
                    fill="#FBE300"
                ></path>
                <path
                    d="M24.0825 10C15.6421 10 8.7998 15.3949 8.7998 22.0498C8.7998 26.3524 11.6603 30.1276 15.9633 32.2594C15.7292 33.0668 14.459 37.4532 14.4084 37.7978C14.4084 37.7978 14.378 38.0567 14.5457 38.1555C14.7133 38.2542 14.9105 38.1775 14.9105 38.1775C15.3914 38.1104 20.4862 34.5316 21.3681 33.9101C22.249 34.0349 23.1562 34.0997 24.0825 34.0997C32.523 34.0997 39.3652 28.7049 39.3652 22.0498C39.3652 15.3949 32.523 10 24.0825 10Z"
                    fill="black"
                ></path>
                <path
                    d="M15.6327 26.2563C15.1464 26.2563 14.751 25.8786 14.751 25.4143V20.1763H13.3752C12.8981 20.1763 12.51 19.7889 12.51 19.3129C12.51 18.837 12.8982 18.4496 13.3752 18.4496H17.8901C18.3673 18.4496 18.7554 18.837 18.7554 19.3129C18.7554 19.7889 18.3671 20.1763 17.8901 20.1763H16.5144V25.4143C16.5144 25.8786 16.1189 26.2563 15.6327 26.2563ZM23.364 26.2448C22.9963 26.2448 22.715 26.0955 22.6303 25.8554L22.1937 24.7124L19.5051 24.7123L19.0682 25.856C18.9837 26.0957 18.7026 26.2448 18.3349 26.2448C18.1415 26.245 17.9504 26.2035 17.7745 26.1232C17.5314 26.011 17.2978 25.7027 17.5655 24.8711L19.6745 19.32C19.8231 18.8978 20.2744 18.4628 20.8486 18.4498C21.4245 18.4627 21.8758 18.8978 22.0247 19.3209L24.1328 24.8695C24.4011 25.703 24.1675 26.0115 23.9244 26.1233C23.7485 26.2035 23.5573 26.245 23.364 26.2448C23.364 26.2448 23.3638 26.2448 23.364 26.2448ZM21.73 23.1507L20.8494 20.6489L19.9687 23.1507H21.73ZM25.5518 26.1277C25.0858 26.1277 24.7068 25.765 24.7068 25.3195V19.3313C24.7068 18.8451 25.1106 18.4496 25.6069 18.4496C26.1031 18.4496 26.5069 18.8451 26.5069 19.3313V24.5113H28.3805C28.8465 24.5113 29.2255 24.8739 29.2255 25.3195C29.2255 25.765 28.8465 26.1277 28.3805 26.1277H25.5518ZM30.4502 26.2448C29.9639 26.2448 29.5685 25.8494 29.5685 25.3631V19.3313C29.5685 18.8451 29.9639 18.4496 30.4502 18.4496C30.9364 18.4496 31.3319 18.8451 31.3319 19.3313V21.2264L33.7918 18.7664C33.9183 18.6399 34.0921 18.5703 34.2808 18.5703C34.501 18.5703 34.722 18.6652 34.8876 18.8307C35.042 18.985 35.1342 19.1835 35.1468 19.3896C35.1596 19.5976 35.0904 19.7882 34.9522 19.9265L32.943 21.9354L35.1133 24.8106C35.1834 24.9028 35.2344 25.0081 35.2635 25.1202C35.2925 25.2323 35.299 25.3491 35.2826 25.4638C35.2669 25.5785 35.2285 25.689 35.1698 25.7888C35.1111 25.8886 35.0331 25.9758 34.9405 26.0453C34.788 26.1612 34.6017 26.2237 34.4101 26.2232C34.2735 26.2239 34.1387 26.1925 34.0164 26.1316C33.894 26.0708 33.7877 25.9821 33.7058 25.8728L31.6381 23.133L31.3321 23.439V25.3627C31.3319 25.5965 31.2389 25.8207 31.0735 25.9861C30.9082 26.1515 30.684 26.2445 30.4502 26.2448Z"
                    fill="#FFE812"
                ></path>
            </svg>
        ),
    },
    {
        thirdParty: true,
        name: APPLE,
        icon: <i className="fa-brands fa-apple"></i>,
    },
    {
        thirdParty: true,
        name: INSTAGRAM,
        icon: (
            <svg
                width="1em"
                data-e2e=""
                height="1em"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M24 46C36.1503 46 46 36.1503 46 24C46 11.8497 36.1503 2 24 2C11.8497 2 2 11.8497 2 24C2 36.1503 11.8497 46 24 46Z"
                    fill="url(#InstagramCircleColor_paint0_radial)"
                ></path>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M24 46C36.1503 46 46 36.1503 46 24C46 11.8497 36.1503 2 24 2C11.8497 2 2 11.8497 2 24C2 36.1503 11.8497 46 24 46Z"
                    fill="url(#InstagramCircleColor_paint1_radial)"
                ></path>
                <path
                    d="M12.2689 29.0393L12.2683 29.0257L12.2674 29.0121C12.2581 28.8681 12.2467 28.7257 12.2361 28.5942L12.2357 28.5899C12.2259 28.4679 12.2168 28.3551 12.2093 28.2443V19.8627C12.21 19.8592 12.2108 19.8558 12.2115 19.8523C12.2258 19.7843 12.2503 19.6567 12.2525 19.5033C12.2783 18.5107 12.3298 17.6235 12.5372 16.7855C13.0067 14.9166 14.0499 13.622 15.7951 12.8635C16.7343 12.4582 17.7702 12.3191 18.9552 12.2691C19.2441 12.2596 19.5271 12.2332 19.7741 12.2093H28.1373C28.1408 12.21 28.1442 12.2108 28.1477 12.2115C28.2157 12.2258 28.3433 12.2503 28.4967 12.2525C29.4893 12.2783 30.3765 12.3298 31.2145 12.5372C33.0835 13.0068 34.3781 14.05 35.1366 15.7954C35.5419 16.7345 35.6809 17.7702 35.7309 18.9552C35.7404 19.244 35.7668 19.5271 35.7907 19.7741V28.1373C35.79 28.1408 35.7892 28.1442 35.7885 28.1477C35.7742 28.2157 35.7497 28.3433 35.7475 28.4967C35.7217 29.4894 35.6701 30.3768 35.4627 31.2149C34.9931 33.0836 33.9499 34.3781 32.2048 35.1366C31.2656 35.5418 30.2298 35.6809 29.0448 35.7309C28.756 35.7404 28.4729 35.7668 28.2259 35.7907H19.8627C19.8592 35.79 19.8558 35.7892 19.8523 35.7885C19.7843 35.7742 19.6567 35.7497 19.5033 35.7475C18.5106 35.7217 17.6232 35.6701 16.7851 35.4627C14.9165 34.9931 13.622 33.95 12.8635 32.205C12.4575 31.2643 12.3187 30.2267 12.2689 29.0393Z"
                    stroke="white"
                    strokeWidth="2.4186"
                ></path>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M24 28.207C26.3015 28.207 28.2068 26.327 28.2068 24.0508C28.2068 21.7071 26.3437 19.8017 24.0421 19.7933C21.69 19.7933 19.7931 21.6649 19.7931 23.9917C19.7931 26.3186 21.6731 28.207 24 28.207ZM30.5 24.0084C30.5 27.6083 27.583 30.5084 23.9831 30.5C20.4001 30.4916 17.5 27.583 17.5 23.9916C17.5 20.3917 20.417 17.4916 24.0169 17.5C27.5999 17.5084 30.5 20.417 30.5 24.0084Z"
                    fill="white"
                ></path>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M30.4921 15.3327C31.2981 15.3327 31.9446 15.9712 31.9446 16.7692C31.9446 17.5672 31.2981 18.2216 30.5001 18.2216C29.7101 18.2216 29.0557 17.5672 29.0557 16.7692C29.0636 15.9791 29.7101 15.3327 30.4921 15.3327Z"
                    fill="white"
                ></path>
                <defs>
                    <radialGradient
                        id="InstagramCircleColor_paint0_radial"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(13.6876 49.3889) rotate(-90) scale(43.6073 40.5582)"
                    >
                        <stop stopColor="#FFDD55"></stop>
                        <stop offset="0.1" stopColor="#FFDD55"></stop>
                        <stop offset="0.5" stopColor="#FF543E"></stop>
                        <stop offset="1" stopColor="#C837AB"></stop>
                    </radialGradient>
                    <radialGradient
                        id="InstagramCircleColor_paint1_radial"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(-5.37023 5.16969) rotate(78.6806) scale(19.4926 80.3494)"
                    >
                        <stop stopColor="#3771C8"></stop>
                        <stop offset="0.128" stopColor="#3771C8"></stop>
                        <stop offset="1" stopColor="#6600FF" stopOpacity="0"></stop>
                    </radialGradient>
                </defs>
            </svg>
        ),
    },
];

const langs = [
    "Tiếng Việt",
    "English",
    "French",
    "Spanish",
    "German",
    "Chinese",
    "Japanese",
    "Malaysian",
    "Indonesia",
    "Korean",
];

const channels = [
    {
        id: "@1",
        name: "theanh28entertainment",
        desc: "Theanh28 Entertainment",
        url: "/",
        img: channelImage,
    },
    {
        id: "@2",
        name: "hoaa.hanassii",
        desc: "Đào Lê Phương Hoa",
        url: "/",
        img: channel1,
    },
    {
        id: "@3",
        name: "cciinnn",
        desc: "CiiN",
        url: "/",
        img: channel2,
    },
    {
        id: "@4",
        name: "vtv24news",
        desc: "VTV24",
        url: "/",
        img: channel3,
    },
    {
        id: "@5",
        name: "vienvibi_899",
        desc: "Viên Vibi",
        url: "/",
        img: channel4,
    },
];

const tags = [
    { url: "/", text: "suthatla" },
    { url: "/", text: "mackedoi" },
    { url: "/", text: "sansangthaydoi" },
    { url: "/", text: "Yêu Đơn Phương Là Gì (MEE Remix) - Mee Media & h0n & BHMedia", music: true },
    { url: "/", text: "Anh Yêu Vội Thế (Mee Remix) - LaLa Trần, Mee Media", music: true },
    { url: "/", text: "Thiên Thần Tình Yêu - RICKY STAR ạnd T.R.I", music: true },
    { url: "/", text: "7749hieuung" },
    { url: "/", text: "genzlife" },
    { url: "/", text: "Vui Lắm Nha (TikTok Remix 1) - Hương Ly & Jombie", music: true },
    { url: "/", text: "Em hát Ai Nghe - Cukak & H2K & BHMedia", music: true },
];

const info = [
    "Giới thiệu",
    "Bảng tin",
    "Liên hệ",
    "Sự nghiệp",
    "ByteDance",
    "TikTok for Good",
    "Quảng cáo",
    "Developers",
    "Minh bạch",
    "TikTok Rewards",
    "TikTok Embeds",
    "Trợ giúp",
    "An toàn",
    "Điều khoản",
    "Quyền riêng tư",
    "Cổng thông tin",
    "Tác giả",
    "Hướng dẫn Cộng đồng",
    "Thêm",
];

const videoTiktoks = [
    {
        avatar: avatar,
        video: video1,
        accountName: "ndp_2002ndp_2002",
        userName: "Angel Girls",
        desc: "Có công mài sắt có ngày có em😋",
        tags: ["#tiktokvn", "#xuhuong", "#gcent", "#iing"],
        bgMusic: "Nhạc nền - original sound",
        like: 1923824,
        comment: 28312,
        save: 124984,
        share: 765,
        view: 3698126,
        location: null,
        footerNote: "Booking: trucmayofficial@gmail.com Mua nước hoa ghé giỏ hàng phía dưới nha 👇",
    },
    {
        avatar: avatar,
        video: video1,
        accountName: "ndp_2002ndp_2002",
        userName: "Angel Girls",
        desc: "Có công mài sắt có ngày có em😋",
        tags: ["#tiktokvn", "#xuhuong", "#gcent", "#iing"],
        bgMusic: "Nhạc nền - original sound",
        like: 1923824,
        comment: 28312,
        save: 124984,
        share: 765,
        view: 3698126,
        location: null,
        footerNote: "Booking: trucmayofficial@gmail.com Mua nước hoa ghé giỏ hàng phía dưới nha 👇",
    },
    {
        avatar: avatar,
        video: video1,
        accountName: "ndp_2002ndp_2002",
        userName: "Angel Girls",
        desc: "Có công mài sắt có ngày có em😋",
        tags: ["#tiktokvn", "#xuhuong", "#gcent", "#iing"],
        bgMusic: "Nhạc nền - original sound",
        like: 1923824,
        comment: 28312,
        save: 124984,
        share: 765,
        view: 3698126,
        location: null,
        footerNote: "Booking: trucmayofficial@gmail.com Mua nước hoa ghé giỏ hàng phía dưới nha 👇",
    },
    {
        avatar: avatar,
        video: video1,
        accountName: "ndp_2002ndp_2002",
        userName: "Angel Girls",
        desc: "Có công mài sắt có ngày có em😋",
        tags: ["#tiktokvn", "#xuhuong", "#gcent", "#iing"],
        bgMusic: "Nhạc nền - original sound",
        like: 1923824,
        comment: 28312,
        save: 124984,
        share: 765,
        view: 3698126,
        location: null,
        footerNote: "Booking: trucmayofficial@gmail.com Mua nước hoa ghé giỏ hàng phía dưới nha 👇",
    },
    {
        avatar: avatar,
        video: video1,
        accountName: "ndp_2002ndp_2002",
        userName: "Angel Girls",
        desc: "Có công mài sắt có ngày có em😋",
        tags: ["#tiktokvn", "#xuhuong", "#gcent", "#iing"],
        bgMusic: "Nhạc nền - original sound",
        like: 1923824,
        comment: 28312,
        save: 124984,
        share: 765,
        view: 3698126,
        location: null,
        footerNote: "Booking: trucmayofficial@gmail.com Mua nước hoa ghé giỏ hàng phía dưới nha 👇",
    },
    {
        avatar: avatar,
        video: video1,
        accountName: "ndp_2002ndp_2002",
        userName: "Angel Girls",
        desc: "Có công mài sắt có ngày có em😋",
        tags: ["#tiktokvn", "#xuhuong", "#gcent", "#iing"],
        bgMusic: "Nhạc nền - original sound",
        like: 1923824,
        comment: 28312,
        save: 124984,
        share: 765,
        view: 3698126,
        location: null,
        footerNote: "Booking: trucmayofficial@gmail.com Mua nước hoa ghé giỏ hàng phía dưới nha 👇",
    },
    {
        avatar: avatar,
        video: video1,
        accountName: "ndp_2002ndp_2002",
        userName: "Angel Girls",
        desc: "Có công mài sắt có ngày có em😋",
        tags: ["#tiktokvn", "#xuhuong", "#gcent", "#iing"],
        bgMusic: "Nhạc nền - original sound",
        like: 1923824,
        comment: 28312,
        save: 124984,
        share: 765,
        view: 3698126,
        location: null,
        footerNote: "Booking: trucmayofficial@gmail.com Mua nước hoa ghé giỏ hàng phía dưới nha 👇",
    },
    {
        avatar: avatar,
        video: video1,
        accountName: "ndp_2002ndp_2002",
        userName: "Angel Girls",
        desc: "Có công mài sắt có ngày có em😋",
        tags: ["#tiktokvn", "#xuhuong", "#gcent", "#iing"],
        bgMusic: "Nhạc nền - original sound",
        like: 1923824,
        comment: 28312,
        save: 124984,
        share: 765,
        view: 3698126,
        location: null,
        footerNote: "Booking: trucmayofficial@gmail.com Mua nước hoa ghé giỏ hàng phía dưới nha 👇",
    },
    {
        avatar: avatar,
        video: video1,
        accountName: "ndp_2002ndp_2002",
        userName: "Angel Girls",
        desc: "Có công mài sắt có ngày có em😋",
        tags: ["#tiktokvn", "#xuhuong", "#gcent", "#iing"],
        bgMusic: "Nhạc nền - original sound",
        like: 1923824,
        comment: 28312,
        save: 124984,
        share: 765,
        view: 3698126,
        location: null,
        footerNote: "Booking: trucmayofficial@gmail.com Mua nước hoa ghé giỏ hàng phía dưới nha 👇",
    },
];

const videoInFollowingPage = [
    {
        accountName: "theanh28entertainment",
        userName: "Theanh28 Entertainment",
        avatar: channelImage,
        video: video1,
    },
    {
        accountName: "hoaa.hanassii",
        userName: "Đào Lê Phương Hoa",
        avatar: channel1,
        video: video1,
    },
    {
        accountName: "cciinnn",
        userName: "CiiN",
        avatar: channel2,
        video: video1,
    },
    {
        accountName: "vtv24news",
        userName: "VTV24",
        avatar: channel3,
        video: video1,
    },
    {
        accountName: "vienvibi_899",
        userName: "Viên Vibi",
        avatar: channel4,
        video: video1,
    },
    {
        accountName: "ndp_2002ndp_2002",
        userName: "Angel Girls",
        avatar: avatar,
        video: video1,
    },
    {
        accountName: "ndp_2002ndp_2002",
        userName: "Angel Girls",
        avatar: avatar,
        video: video1,
    },
    {
        accountName: "ndp_2002ndp_2002",
        userName: "Angel Girls",
        avatar: avatar,
        video: video1,
    },
    {
        accountName: "ndp_2002ndp_2002",
        userName: "Angel Girls",
        avatar: avatar,
        video: video1,
    },
    {
        accountName: "ndp_2002ndp_2002",
        userName: "Angel Girls",
        avatar: avatar,
        video: video1,
    },
    {
        accountName: "ndp_2002ndp_2002",
        userName: "Angel Girls",
        avatar: avatar,
        video: video1,
    },
    {
        accountName: "ndp_2002ndp_2002",
        userName: "Angel Girls",
        avatar: avatar,
        video: video1,
    },
    {
        accountName: "ndp_2002ndp_2002",
        userName: "Angel Girls",
        avatar: avatar,
        video: video1,
    },
    {
        accountName: "ndp_2002ndp_2002",
        userName: "Angel Girls",
        avatar: avatar,
        video: video1,
    },
    {
        accountName: "ndp_2002ndp_2002",
        userName: "Angel Girls",
        avatar: avatar,
        video: video1,
    },
    {
        accountName: "ndp_2002ndp_2002",
        userName: "Angel Girls",
        avatar: avatar,
        video: video1,
    },
    {
        accountName: "ndp_2002ndp_2002",
        userName: "Angel Girls",
        avatar: avatar,
        video: video1,
    },
];

const filterInExplorePage = [
    {
        icon: <i className="fa-solid fa-microphone"></i>,
        content: "Khiêu vũ và Nhạc",
    },
    {
        icon: <i className="fa-solid fa-volleyball"></i>,
        content: "Thể Thao",
    },
    {
        icon: <i className="fa-solid fa-palette"></i>,
        content: "Phim/TV/Trường quay",
    },
    {
        icon: <i className="fa-solid fa-film"></i>,
        content: "Hài kịch và Kịch",
    },
    {
        icon: <i className="fa-solid fa-car"></i>,
        content: "Xe hơi",
    },
    {
        icon: <i className="fa-solid fa-shirt"></i>,
        content: "Thời trang",
    },
    {
        icon: <i className="fa-solid fa-mug-saucer"></i>,
        content: "Phong cách sống",
    },
    {
        icon: <i className="fa-solid fa-tree"></i>,
        content: "Thú cưng và thiên nhiên",
    },
    {
        icon: <i className="fa-solid fa-users"></i>,
        content: "Xã hội",
    },
    {
        icon: <i className="fa-solid fa-earth-americas"></i>,
        content: "Giàu thông tin",
    },
];

const videoInLivePage = [
    {
        accountName: "ndp_2002ndp_2002",
        userName: "Angel Girls",
        desc: "Tặng quà + miễn ship sale",
        avatar: avatar,
        video: video1,
        viewer: 25107,
        like: 1628471,
        follower: 562749,
        image: girlImage,
        active: true,
    },
    {
        accountName: "ndp_2002ndp_2002",
        userName: "Angel Girls",
        desc: "Tặng quà + miễn ship sale",
        avatar: avatar,
        video: video1,
        viewer: 2517,
        like: 1628471,
        follower: 562749,
        image: girlImage,
        active: false,
    },
    {
        accountName: "ndp_2002ndp_2002",
        userName: "Angel Girls",
        desc: "Tặng quà + miễn ship sale",
        avatar: avatar,
        video: video1,
        viewer: 2517,
        like: 1628471,
        follower: 562749,
        image: girlImage,
        active: false,
    },
    {
        accountName: "ndp_2002ndp_2002",
        userName: "Angel Girls",
        desc: "Tặng quà + miễn ship sale",
        avatar: avatar,
        video: video1,
        viewer: 2517,
        like: 1628471,
        follower: 562749,
        image: girlImage,
        active: false,
    },
    {
        accountName: "ndp_2002ndp_2002",
        userName: "Angel Girls",
        desc: "Tặng quà + miễn ship sale",
        avatar: avatar,
        video: video1,
        viewer: 2517,
        like: 1628471,
        follower: 562749,
        image: girlImage,
        active: false,
    },
    {
        accountName: "ndp_2002ndp_2002",
        userName: "Angel Girls",
        desc: "Tặng quà + miễn ship sale",
        avatar: avatar,
        video: video1,
        viewer: 2517,
        like: 1628471,
        follower: 562749,
        image: girlImage,
        active: false,
    },
    {
        accountName: "ndp_2002ndp_2002",
        userName: "Angel Girls",
        desc: "Tặng quà + miễn ship sale",
        avatar: avatar,
        video: video1,
        viewer: 2517,
        like: 1628471,
        follower: 562749,
        image: girlImage,
        active: false,
    },
    {
        accountName: "ndp_2002ndp_2002",
        userName: "Angel Girls",
        desc: "Tặng quà + miễn ship sale",
        avatar: avatar,
        video: video1,
        viewer: 2517,
        like: 1628471,
        follower: 562749,
        image: girlImage,
        active: false,
    },
    {
        accountName: "ndp_2002ndp_2002",
        userName: "Angel Girls",
        desc: "Tặng quà + miễn ship sale",
        avatar: avatar,
        video: video1,
        viewer: 2517,
        like: 1628471,
        follower: 562749,
        image: girlImage,
        active: false,
    },
    {
        accountName: "ndp_2002ndp_2002",
        userName: "Angel Girls",
        desc: "Tặng quà + miễn ship sale",
        avatar: avatar,
        video: video1,
        viewer: 2517,
        like: 1628471,
        follower: 562749,
        image: girlImage,
        active: false,
    },
    {
        accountName: "ndp_2002ndp_2002",
        userName: "Angel Girls",
        desc: "Tặng quà + miễn ship sale",
        avatar: avatar,
        video: video1,
        viewer: 2517,
        like: 1628471,
        follower: 562749,
        image: girlImage,
        active: false,
    },
];

export {
    platforms,
    langs,
    FACEBOOK,
    GOOGLE,
    LINE,
    KAKAOTALK,
    INSTAGRAM,
    APPLE,
    TWITTER,
    QRCODE,
    PERSONAL_INFO,
    channels,
    tags,
    info,
    videoTiktoks,
    videoInFollowingPage,
    filterInExplorePage,
    videoInLivePage,
};
