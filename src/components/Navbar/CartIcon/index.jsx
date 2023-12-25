import Cart from "../../../assets/cart.svg";
import { useSelector, useDispatch } from "react-redux";
import { selectAllCartDatas } from "../../../features/Cart/cartSlice";
import { setModal } from "../../Modal/modalSlice";

const CartIcon = () => {
	const dispatch = useDispatch();
	const cartDatas = useSelector(selectAllCartDatas);

	const handleOpenModal = () => {
		dispatch(setModal("cart"));
	};

	return (
		<div className="bg-indigo-700 rounded-full hover:bg-indigo-800">
			<button
				type="button"
				className="relative px-3 py-3 w-12 h-12 transition-all"
				onClick={handleOpenModal}>
				<img src={Cart} alt="cart" />

				{cartDatas.length >= 1 ? (
					<div className="absolute w-5 h-5 flex justify-center items-center bg-red-600 rounded-full top-0 right-0">
						<span className="text-sm text-white">{cartDatas.length}</span>
					</div>
				) : null}
			</button>
		</div>
	);
};

export default CartIcon;
