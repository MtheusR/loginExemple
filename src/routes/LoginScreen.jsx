import React from 'react';
import logoLongchat from '../img/logo-longchat.svg';
import { useNavigate } from 'react-router-dom';

function InputLoginCustom({ tipo, value, setValor, authStatus, setAuth }) {
	let textPlaceholder = tipo == 'email' ? 'seu@email.com' : '********';

	return (
		<input
			className={`block pl-2 py-3 rounded-md min-w-[315px] mb-6 mt-2 focus:outline-1 focus:outline-green-900 ${authStatus ? '' : 'border-solid border-2 border-red-500 bg-red-50'}`}
			placeholder={textPlaceholder}
			type={tipo}
			value={value}
			onChange={(evento) => {
				setValor(evento.target.value);
				setAuth(true);
			}}
			required
		/>
	);
}

function LoginScreen() {
	const navigate = useNavigate();

	const [email, setEmail] = React.useState('');
	const [senha, setSenha] = React.useState('');
	const [auth, setAuth] = React.useState(true);

	const verificarAutenticacao = (emailAuth, senhaAuth) =>
		emailAuth === 'admin@admin.com' && senhaAuth === '123';

	const handleSubmit = (e) => {
		e.preventDefault();
		if (verificarAutenticacao(email, senha)) {
			navigate('/home');
			setAuth(true);
		} else {
			setAuth(false);
		}
	};

	return (
		<>
			<div className="flex items-center justify-center  h-screen w-full bg-backgoround-1">
				<div className="flex flex-wrap items-center justify-center gap-12">
					<div className="px-16 py-24 bg-green-800 rounded-2xl">
						<img src={logoLongchat} alt="logo longchat" />
					</div>
					<div>
						<form action="#" method="POST" onSubmit={handleSubmit}>
							<label htmlFor="email" className="block">
								Email
							</label>
							<InputLoginCustom
								tipo="email"
								value={email}
								setValor={setEmail}
								authStatus={auth}
								setAuth={setAuth}
							/>
							<label htmlFor="password" className="block">
								Senha
							</label>
							<InputLoginCustom
								tipo="password"
								value={senha}
								setValor={setSenha}
								authStatus={auth}
								setAuth={setAuth}
							/>
							<p
								className={`text-red-600 text-sm mb-6 ${auth ? 'hidden' : ''}`}
							>
								Email ou Senha incorreto, tente novamente!
							</p>

							<button
								type="submit"
								className="bg-green-800 text-white py-3 rounded-md min-w-[315px] font-medium focus:outline-none focus:bg-green-700 hover:bg-green-700"
							>
								Login
							</button>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}

export default LoginScreen;
