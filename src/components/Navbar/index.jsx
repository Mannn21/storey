import CartIcon from "./CartIcon";

const Navbar = ({handleOpenModal}) => {
	return (
		<header className="bg-indigo-600">
			<div className="px-10 py-4 max-h-28 w-screen">
				<div className="flex flex-row justify-between items-center">
					<h1 className="text-white text-3xl font-bold">Storey</h1>
                    <CartIcon handleOpenModal={handleOpenModal} />
				</div>
			</div>
		</header>
	);
};

export default Navbar;
