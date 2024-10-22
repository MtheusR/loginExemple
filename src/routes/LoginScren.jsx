import logoLongchat from '../img/logo-longchat.svg';
import { useNavigate } from 'react-router-dom';

function LoginScren() {
	const navigate = useNavigate(); // Hook para navegação

	const handleSubmit = () => {
		navigate('/home'); // Navega para a rota '/'
	};
	return (
		<>
			<div className="flex flex-wrap items-center justify-center gap-12">
				<div className="px-16 py-24 bg-green-800 rounded-2xl">
					<img src={logoLongchat} alt="logo longchat" />
				</div>
				<div>
					<form action="#" method="POST" onSubmit={handleSubmit}>
						<label for="email" class="block">
							Email
						</label>
						<InputLoginCustom tipo="email" />
						<label for="password" class="block">
							Senha
						</label>
						<InputLoginCustom tipo="password" />
						{/* <p className="text-red-600 text-sm mb-6">
							Email e Senha incorreto, tente novamente!
						</p> */}
						<button
							type="submit"
							className="bg-green-800 text-white py-3 rounded-md min-w-[315px] font-medium focus:outline-none hover:bg-green-700"
						>
							Login
						</button>
					</form>
				</div>
			</div>
		</>
	);
}

function InputLoginCustom({ tipo }) {
	let textPlaceholder = tipo == 'email' ? 'seu@email.com' : '********';

	return (
		<input
			className="block pl-2 py-3 rounded-md min-w-[315px] mb-6 mt-2 focus:outline-1 focus:outline-green-900"
			placeholder={textPlaceholder}
			type={tipo}
			required
		/>
	);
}

export default LoginScren;
