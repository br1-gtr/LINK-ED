import './App.css';
import { useEffect, useState } from 'react';
import { DATOS_EXCEL } from './DATOS_EXCEL/DATOS_EXCEL.js';
import { Login } from './components/Login';
import { Header } from './components/Header';
import { Seccion } from './components/Seccion';
import { NavFooter } from './components/NavFooter';

function App() {
	const [cat, setCat] = useState([]);
	const filtrarCategorias = (datos) => {
		//arr categorias total
		let catAux = [];
		datos.forEach((e) => {
			catAux = [...catAux, e.categoria];
		});
		//arr de categorias unicas
		let categoriasFiltradas = [];
		catAux.forEach((e) => {
			if (!categoriasFiltradas.includes(e)) {
				categoriasFiltradas.push(e);
			}
		});
		setCat(categoriasFiltradas);
	};

	useEffect(() => {
		filtrarCategorias(DATOS_EXCEL);
	}, []);

	return (
		<div className="app">
			<Header />
			<div className="contenedor">
				{cat.map((categoria) => {
					return <Seccion categoria={categoria} dataEnlaces={DATOS_EXCEL} />;
				})}
			</div>
			<NavFooter />
			{
				//<Login />
			}
		</div>
	);
}
export default App;
