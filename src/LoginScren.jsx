import logoLongchat from './img/logo-longchat.svg';

function LoginScren() {
	return (
		<>
			<div className="flex gap-12 items-center">
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
					<button className="bg-green-800 text-white py-3 rounded-md min-w-[315px] font-medium focus:outline-none hover:bg-green-700">
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
			className="block pl-2 py-3 rounded-md min-w-[315px] mb-6 mt-2 border  focus:outline-1 focus:outline-green-900"
			placeholder={textPlaceholder}
			type={tipo}
		/>
	);
}

export default LoginScren;
