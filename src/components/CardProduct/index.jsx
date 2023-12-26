import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import Cart from "../../assets/cartForCard.svg";
import Star from "../../assets/star.svg";
import { getProduct } from "../../features/Details/detailSlice";
import { setModal } from "../Modal/modalSlice";
import Swal from "sweetalert2";

const CardProduct = ({ product, add, buyNow }) => {
	const dispatch = useDispatch();

	const Toast = Swal.mixin({
		toast: true,
		position: "top-end",
		showConfirmButton: false,
		timer: 2000,
		timerProgressBar: true,
		didOpen: toast => {
			toast.onmouseenter = Swal.stopTimer;
			toast.onmouseleave = Swal.resumeTimer;
		},
	});

	const handleDetail = () => {
		dispatch(getProduct(product));
		dispatch(setModal("detail"));
	};

	const handleBuyNow = () => {
		buyNow();
		dispatch(setModal("buy"));
	};

	const handleCart = () => {
		add();
		Toast.fire({
			icon: "success",
			title: "Berhasil menambahkan keranjang!",
		});
	};

	return (
		<div className="group flex flex-col gap-2 w-full h-full rounded-lg shadow-lg bg-white p-2 cursor-pointer hover:scale-105np transition-all ease-in-out duration-500">
			<div className="w-full flex flex-row justify-end items-center">
				<span className="font-sm text-black px-2 py-1 rounded-lg">
					{product.category}
				</span>
			</div>
			<div className="relative w-[80%] h-[200px] mx-auto overflow-hidden">
				<img
					src={product.image}
					onClick={handleDetail}
					alt={product.title}
					className="w-full h-full object-contain group-hover:scale-110 transition-all ease-in-out duration-500"
				/>
			</div>
			<div className="flex flex-col gap-3 w-full">
				<div className="flex justify-center items-center h-14 text-center">
					<h3 className="text-md font-bold">
						{product.title.length > 22
							? `${product.title.substring(0, 20)}...`
							: product.title}
					</h3>
				</div>
				<div className="flex flex-row justify-between items-center">
					<div className="flex flex-row gap-2 items-center">
						<div className="w-4 h-4">
							<img src={Star} alt="rate" className="w-full h-full" />
						</div>
						<h3>{product.rating.rate}</h3>
					</div>
					<h3>${product.price}</h3>
				</div>
			</div>
			<div className="flex flex-row gap-2 h-9">
				<div className="w-[85%] h-full">
					<button
						type="button"
						onClick={handleBuyNow}
						className="w-full h-full flex items-center justify-center text-white bg-indigo-600 rounded-md py-2 hover:bg-indigo-700 ease-in-out transition-all duration-200">
						BUY NOW
					</button>
				</div>
				<div className="flex flex-row w-[15%] h-full justify-end items-center gap-1">
					<button
						type="button"
						onClick={handleCart}
						className="flex justify-center items-center bg-gray-300 w-full h-full rounded-md p-1 hover:bg-gray-400 ease-in-out transition-all duration-200">
						<img src={Cart} alt="cart" className="w-[90%] h-full md:w-full" />
					</button>
				</div>
			</div>
		</div>
	);
};

CardProduct.propTypes = {
	product: PropTypes.any.isRequired,
};

export default CardProduct;
