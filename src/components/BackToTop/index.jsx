import Arrow from "../../assets/arrow.svg";

const BackToTop = () => {
    const handleToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    
	return (
		<div className="w-9 h-9 rounded-full bg-black absolute bottom-24 right-2 cursor-pointer hover:scale-110 ease-in-out duration-300 transition-all" onClick={handleToTop}>
			<div className="w-full h-full p-1 flex justify-center items-center">
				<img src={Arrow} className="w-full" alt="to top"/>
			</div>
		</div>
	);
};

export default BackToTop;
