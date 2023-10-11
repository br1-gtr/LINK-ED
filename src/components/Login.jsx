import { useState } from 'react';

export const Login = () => {
	const [user, setUser] = useState('');
	const [password, setPassword] = useState('');

	const handlerSubmit = (evt) => {
		evt.preventDefault();
		alert(user + ' ' + password);
		console.log(user, password);
	};

	return (
		<div>
			<form onSubmit={handlerSubmit}>
				<input
					type="text"
					name="usuario"
					placeholder="Usuario"
					onChange={(e) => {
						console.log(e.target.value);
						setUser(e.target.value);
					}}
				/>
				<input
					type="text"
					name="contraseña"
					placeholder="Contraseña"
					onChange={(e) => {
						console.log(e);
						setPassword(e.target.value);
					}}
				/>
				<button>Ingresar</button>
			</form>
		</div>
	);
};
