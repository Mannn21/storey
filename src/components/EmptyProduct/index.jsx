import EmptyBox from "../../assets/empty.svg";

const EmptyProduct = () => {
	return (
		<div className="h-full w-full flex flex-col gap-1 justify-center items-center">
			<div className="w-full h-[200px]">
				<img src={EmptyBox} alt="empty" className="w-full h-full" />
			</div>
			<h1 className="text-md font-medium">Product tidak ditemukan</h1>
		</div>
	);
};

export default EmptyProduct;
