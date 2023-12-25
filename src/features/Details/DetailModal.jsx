import { useSelector, useDispatch } from "react-redux";
import Modal from "../../components/Modal";
import HalfStar from "../../assets/halfStar.svg";
import Star from "../../assets/star.svg";
import { removeProduct, selectProduct } from "./detailSlice";
import { removeModal } from "../../components/Modal/modalSlice";
import { addProduct } from "../Cart/cartSlice";

const DetailModal = () => {
	const dispatch = useDispatch();
	const product = useSelector(selectProduct);

	const rate = Math.floor(product.rating.rate);
	const decimal = product.rating.rate % 1;
	const Stars = () => {
		let starRate = [];
		for (let i = 0; i < rate; i++) {
			starRate.push(
				<img src={Star} alt="rating" className="w-6 h-6" key={i} />
			);
		}
		if (decimal >= 0.5) {
			starRate.push(
				<img
					src={HalfStar}
					alt="rating"
					className="w-7 h-7 -mt-[2px]"
					key={rate}
				/>
			);
		}

		return starRate;
	};

	const handleCloseDetail = () => {
		dispatch(removeModal());
		dispatch(removeProduct(product));
	};

	const handleAddCart = () => {
		dispatch(addProduct(product));
	};

	return (
		<Modal>
			<div className="flex flex-col md:flex-row justify-between items-center max-w-[800px] h-full ">
				<div className="w-[200px] h-auto md:w-[40%] md:h-[400px]">
					<img
						src={product.image}
						alt={product.title}
						className="w-full h-full object-contain hover:scale-105 duration-200 ease-in-out transition-all"
					/>
				</div>
				<div className="w-full md:w-[50%] md:h-full h-[400px] flex flex-col gap-3 overflow-auto">
					<div className="flex flex-col gap-3">
						<h2 className="text-center font-bold text-2xl md:text-3xl">
							{product.title}
						</h2>
						<div className="flex flex-row gap-4">
							<div className="flex flex-row gap-1">
								<Stars />
							</div>
						</div>
						<div className="text-indigo-700 text-3xl md:text-4xl">
							$ {product.price}
						</div>
					</div>
					<div>
						<p className="text-justify">{product.description}</p>
					</div>
					<div className="flex flex-row gap-5">
						<button
							type="button"
							className="flex justify-center items-center bg-red-600 rounded-lg text-white text-sm font-medium px-6 py-2 hover:bg-red-700 transition-all duration-300 ease-in-out"
							onClick={() => handleCloseDetail()}>
							Tutup
						</button>
						<button
							type="button"
							onClick={() => handleAddCart()}
							className="flex justify-center items-center bg-indigo-600 rounded-lg text-white text-sm font-medium px-6 py-2 hover:bg-indigo-700 transition-all duration-300 ease-in-out">
							Tambahkan Keranjang
						</button>
					</div>
				</div>
			</div>
		</Modal>
	);
};

export default DetailModal;
