import logoLongchat from '../img/logo-longchat.svg';
import { useNavigate } from 'react-router-dom';

function LoginScren() {
	const navigate = useNavigate(); // Hook para navegação

	const handleClick = () => {
		navigate('/home'); // Navega para a rota '/'
	};
	return (
		<>
			<div className="flex flex-wrap items-center justify-center gap-12">
				<div className="px-16 py-20 bg-green-800 rounded-2xl">
					<img src={logoLongchat} alt="logo longchat" />
				</div>
				<div>
					<form action="#" method="POST">
						<label for="email" class="block">
							Usuário
						</label>
						<InptCustom tipo="email" />
						<label for="password" class="block">
							Senha
						</label>
						<InptCustom tipo="password" />
					</form>
					<button
						onClick={handleClick}
						className="bg-green-800 text-white py-3 rounded-md min-w-[315px] font-medium focus:outline-none hover:bg-green-700"
					>
						Login
					</button>
				</div>
			</div>
		</>
	);
}

function InptCustom({ tipo }) {
	let textPlaceholder = tipo == 'email' ? 'seu@email.com' : '********';

	return (
		<input
			className="block pl-2 py-3 rounded-md min-w-[315px] mb-6 mt-2 focus:outline-1 focus:outline-green-900"
			placeholder={textPlaceholder}
			type={tipo}
		/>
	);
}

export default LoginScren;
