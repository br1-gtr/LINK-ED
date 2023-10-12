import { useState } from 'react';
import { client } from '../supabase/client';
export const Login = () => {
	const [user, setUser] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = async (evt) => {
		evt.preventDefault();

		try {
			const testLog = await client.auth.signInWithPassword({
				user,
				password,
			});
			//alert(user + ' ' + password);
			console.log(testLog);
		} catch (error) {
			console.log('kehhhh');
			console.error(error);
		}
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="usuario"
					placeholder="Usuario"
					onChange={(e) => {
						//console.log(e.target.value);
						setUser(e.target.value);
					}}
				/>
				<input
					type="text"
					name="contraseña"
					placeholder="Contraseña"
					onChange={(e) => {
						//console.log(e);
						setPassword(e.target.value);
					}}
				/>
				<button>Ingresar</button>
			</form>
		</div>
	);
};
