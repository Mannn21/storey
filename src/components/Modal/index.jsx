import { createPortal } from "react-dom";

const portalElement = document.getElementById("modal");

const BackdropOverlay = () => {
	return (
		<div className="fixed top-0 left-0 w-full h-screen z-20 bg-black bg-opacity-75"></div>
	);
};

const ModalOverlay = ({ children }) => {
	return (
		<div className="fixed top-0 left-0 w-full h-screen flex items-center justify-center z-30">
			<div className="bg-white p-4 rounded-lg shadow-lg text-gray-900 mx-2 overflow-auto">
				{children}
			</div>
		</div>
	);
};

const Modal = ({ children }) => {
	return (
		<>
			{createPortal(<BackdropOverlay />, portalElement)}
			{createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement)}
		</>
	);
};

export default Modal;
