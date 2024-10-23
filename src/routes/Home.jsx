import React from 'react';
import logoIcon from '../img/icon-longchat.svg';
import { FaHouse } from 'react-icons/fa6';
import { BsFillChatLeftFill } from 'react-icons/bs';

const Sidebar = () => {
	// const [isOpen, setIsOpen] = useState(false);

	// const toggleSidebar = () => {
	// 	setIsOpen(!isOpen);
	// };

	return (
		<div className="flex">
			<div
				className={
					'flex flex-col h-screen bg-green-900 text-white transition-all duration-300'
				}
			>
				<img className="p-5" src={logoIcon} alt="icone longchat" />
				<nav className="mt-5 mx-2">
					<ul className="flex flex-col gap-2">
						<li className="flex flex-col items-center text-lg py-3 hover:bg-green-800 rounded-lg transition-all duration-300">
							<FaHouse />
						</li>
						<li className="flex flex-col items-center text-lg py-3 hover:bg-green-800 rounded-lg transition-all duration-300">
							<BsFillChatLeftFill />
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default Sidebar;

// import React, { useState } from 'react';

// const Sidebar = () => {
// 	const [isOpen, setIsOpen] = useState(false);

// 	const toggleSidebar = () => {
// 		setIsOpen(!isOpen);
// 	};

// 	return (
// 		<div className="flex">
// 			<div
// 				className={`${
// 					isOpen ? 'w-64' : 'w-20'
// 				} h-screen bg-green-900 text-white transition-all duration-300`}
// 			>
// 				<button
// 					onClick={toggleSidebar}
// 					className="p-4 focus:outline-none hover:bg-gray-700"
// 				>
// 					{isOpen ? 'Close' : 'Open'}
// 				</button>
// 				<nav className="mt-10">
// 					<ul>
// 						<li className="p-4 hover:bg-gray-700 cursor-pointer">Item 1</li>
// 						<li className="p-4 hover:bg-gray-700 cursor-pointer">Item 2</li>
// 						<li className="p-4 hover:bg-gray-700 cursor-pointer">Item 3</li>
// 						<li className="p-4 hover:bg-gray-700 cursor-pointer">Item 4</li>
// 					</ul>
// 				</nav>
// 			</div>

// 			{/* Conteúdo Principal */}
// 			<div className="flex-1 p-10 bg-gray-100">
// 				<h1 className="text-2xl">Conteúdo Principal</h1>
// 				<p>Adicione o conteúdo da sua aplicação aqui.</p>
// 			</div>
// 		</div>
// 	);
// };

// export default Sidebar;
