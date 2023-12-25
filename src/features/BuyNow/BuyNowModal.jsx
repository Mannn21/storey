import { useDispatch, useSelector } from "react-redux";
import Modal from "../../components/Modal";
import {
	selectProduct,
	buyProduct,
	removeProduct,
	deleteProduct,
} from "./buyNowSlice";
import EmptyProduct from "../../components/EmptyProduct";
import { removeModal } from "../../components/Modal/modalSlice";

const ModalEmptyData = () => {
	const dispatch = useDispatch()
	const closeModal = () => {
		dispatch(removeModal())
	}
	
	return (
		<div className="flex flex-col justify-center items-center gap-8">
			<EmptyProduct />
			<button
				type="button"
				className="flex justify-center items-center bg-red-600 rounded-lg text-white text-sm font-medium px-6 py-2 hover:bg-red-700 transition-all duration-300 ease-in-out"
				onClick={closeModal}>
				Tutup
			</button>
		</div>
	);
};

const ModalWithData = ({ product }) => {
	const dispatch = useDispatch();
	const handleCheckout = () => {
		const phoneNumber = "6283895681322";
		const message = encodeURI(
			`Halo, saya ingin membeli barang sebanyak ${product.quantity} item dengan total harga $${product.totalPrice}`
		);

		const URI = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;

		window.open(URI, "_blank");
	};
	const handleAddProduct = product => {
		dispatch(buyProduct(product));
	};

	const handleRemoveProduct = product => {
		dispatch(removeProduct(product));
	};

	const handleDeleteProduct = product => {
		dispatch(deleteProduct(product));
	};

	const closeModal = () => {
		dispatch(removeModal())
	}
	
	return (
		<div className="flex flex-col gap-3 p-4 w-[690px] md:w-auto">
			<div className="max-h-[400px] w-full overflow-auto">
				<table className="border-spacing-y-6 border-separate">
					<thead>
						<tr>
							<th className="px-4"></th>
							<th className="px-4 font-bold">Nama Barang</th>
							<th className="px-4 font-bold">Harga</th>
							<th className="px-4 font-bold text-center">Jumlah</th>
							<th className="px-4 font-bold">Total Harga</th>
							<th className="px-4"></th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td className="w-[80px] h-[90px] object-contain">
								<img
									src={product.image}
									alt={product.title}
									className="w-full h-full"
								/>
							</td>
							<td className="px-2 w-[200px]">
								<h1 className="text-ms font-medium">
									{product.title.length > 20
										? `${product.title.slice(0, 20)}...`
										: product.title}
								</h1>
							</td>
							<td className="px-2">
								<span>${product.price}</span>
							</td>
							<td className="px-2">
								<button
									type="button"
									onClick={() => handleRemoveProduct(product)}
									className="bg-indigo-600 text-white text-2xl px-2 cursor-pointer hover:bg-indigo-700">
									-
								</button>
								<span className="px-6">{product.quantity}</span>
								<button
									type="button"
									onClick={() => handleAddProduct(product)}
									className="bg-indigo-600 text-white text-2xl px-2 cursor-pointer hover:bg-indigo-700">
									+
								</button>
							</td>
							<td className="px-2">
								<span>${product.totalPrice.toFixed(2)}</span>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div className="flex flex-row justify-between items-center">
				<button
					type="button"
					className="flex justify-center items-center bg-red-600 rounded-lg text-white text-sm font-medium px-6 py-2 hover:bg-red-700 transition-all duration-300 ease-in-out"
					onClick={() => {
						handleDeleteProduct();
						closeModal();
					}}>
					Tutup
				</button>
				<button
					type="button"
					onClick={handleCheckout}
					className="flex justify-center items-center bg-green-600 rounded-lg text-white text-sm font-medium px-6 py-2 hover:bg-green-700 transition-all duration-300 ease-in-out">
					Checkout WhatsApp
				</button>
			</div>
		</div>
	);
};

const BuyNowModal = () => {
	const product = useSelector(selectProduct);

	return (
		<Modal>
			{product == null ? (
				<ModalEmptyData />
			) : (
				<ModalWithData product={product} />
			)}
		</Modal>
	);
};

export default BuyNowModal;
