import LoginScren from './routes/LoginScren';
import { Outlet } from 'react-router';

function App() {
	return (
		<div className="flex items-center justify-center  h-screen w-full bg-backgoround-1">
			<LoginScren />
			{/* To-Do: Isso aqui serve para poder mander uma estrutura (essa parte eh que vai ser carregada a rota e todo o resto se mantem)  */}
			{/* <Outlet /> */}
		</div>
	);
}
export default App;
