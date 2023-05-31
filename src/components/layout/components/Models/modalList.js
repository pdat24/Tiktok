import { LOGIN_MODAL, SIGNUP_MODAL, SCAN_QR_MODAL, USE_PHONE_NUMBER_MODAL } from "./modalNames";

import LoginModal from "./Login";
import SigupModal from "./Signup";
import QRScannerModal from "./ScanQRCode";
import UsePhoneNumberModal from "./PhoneNumber";

const ModalsList = [
    { name: LOGIN_MODAL, component: LoginModal },
    { name: SIGNUP_MODAL, component: SigupModal },
    { name: SCAN_QR_MODAL, component: QRScannerModal },
    { name: USE_PHONE_NUMBER_MODAL, component: UsePhoneNumberModal },
];

export default ModalsList;
