import { useSelector, useDispatch } from "react-redux";
import {
	selectAllCartDatas,
	selectTotalPrice,
	selectTotalQuantity,
	addProduct,
	deleteProduct,
	removeProduct,
} from "./cartSlice";
import Modal from "../../components/Modal";
import EmptyProduct from "../../components/EmptyProduct";
import { removeModal } from "../../components/Modal/modalSlice";
import Swal from "sweetalert2";

const ModalEmptyData = () => {
	const dispatch = useDispatch();

	const closeModal = () => {
		dispatch(removeModal());
	};

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

const ModalWithData = ({ cartDatas }) => {
	const dispatch = useDispatch();
	const totalPrice = useSelector(selectTotalPrice);
	const totalQuantity = useSelector(selectTotalQuantity);
	const handleCheckout = () => {
		if (cartDatas.length < 1) return;

		const phoneNumber = "6283895681322";
		const message = encodeURI(
			`Halo, saya ingin membeli barang sebanyak ${totalQuantity} item dengan total harga $${totalPrice}`
		);

		const URI = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;

		window.open(URI, "_blank");
	};

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

	const handleAddProduct = product => {
		dispatch(addProduct(product));
		Toast.fire({
			icon: "success",
			title: "Berhasil menambahkan jumlah produk!",
		});
	};

	const handleRemoveProduct = product => {
		dispatch(removeProduct(product));
		Toast.fire({
			icon: "success",
			title: "Berhasil mengurangi jumlah produk!",
		});
	};

	const handleDeleteProduct = product => {
		dispatch(deleteProduct(product));
		Toast.fire({
			icon: "success",
			title: "Berhasil menghapus produk!",
		});
	};

	const closeModal = () => {
		dispatch(removeModal());
	};

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
						{cartDatas.map(product => {
							return (
								<tr key={product.id}>
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
									<td className="px-2">
										<button
											type="button"
											onClick={() => handleDeleteProduct(product)}
											className="bg-red-600 text-white text-2xl px-3 pb-1 cursor-pointer hover:bg-red-700">
											x
										</button>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
			<div className="flex flex-row justify-between items-center">
				<button
					type="button"
					className="flex justify-center items-center bg-red-600 rounded-lg text-white text-sm font-medium px-6 py-2 hover:bg-red-700 transition-all duration-300 ease-in-out"
					onClick={closeModal}>
					Tutup
				</button>
				<button
					type="button"
					className="flex justify-center items-center bg-green-600 rounded-lg text-white text-sm font-medium px-6 py-2 hover:bg-green-700 transition-all duration-300 ease-in-out"
					onClick={handleCheckout}>
					Checkout WhatsApp
				</button>
			</div>
		</div>
	);
};

const CartModal = () => {
	const cartDatas = useSelector(selectAllCartDatas);

	return (
		<Modal>
			{cartDatas.length < 1 ? (
				<ModalEmptyData />
			) : (
				<ModalWithData cartDatas={cartDatas} />
			)}
		</Modal>
	);
};

export default CartModal;
