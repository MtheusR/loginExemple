import logoLongchat from './img/logo-longchat.svg';

function LoginScren() {
	return (
		<>
			<div className="flex gap-12 items-center">
				<div className="px-16 py-20 bg-green-800 rounded-2xl">
					<img src={logoLongchat} alt="logo longchat" />
				</div>
				<div>
					<form action="">
						<p>Usuário</p>
						<InptCustom tipo="email" />
						<p>Senha</p>
						<InptCustom tipo="password" />
					</form>
					<button className="bg-green-800 text-white py-3 rounded-md min-w-[315px]">
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
			className="pl-2 py-3 rounded-md min-w-[315px] mb-6 mt-2"
			placeholder={textPlaceholder}
			type={tipo}
		/>
	);
}

export default LoginScren;
