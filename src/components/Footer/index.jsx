import { sosmedDatas } from "../../utils/sosmedDatas";

const Footer = () => {
	return (
		<footer className="bg-indigo-900 sticky bottom-0">
			<div className="w-full sm:h-[80px] h-full px-14 py-3">
				<div className="w-full h-full flex flex-col gap-3 justify-between items-center sm:flex-row">
					<span className="text-md font-medium tracking-wider text-white">
						Created By Aimanurrofi@2023
					</span>
					<div className="flex flex-row gap-3">
						{sosmedDatas.map(sosmed => {
							return (
								<a
									href={sosmed.link}
									key={sosmed.id}
                                    target="_blank"
                                    rel="noreferrer"
									className="w-8 h-8 border-2 p-1 rounded-full border-gray-400 hover:scale-110 transition-all ease-in-out duration-200">
									<img
										src={sosmed.image}
										alt={sosmed.title}
										className="w-full h-full"
									/>
								</a>
							);
						})}
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
