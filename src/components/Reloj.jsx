import { useState, useEffect, useRef } from 'react';
import '../style/Header.css';
export const Reloj = ({ estadoScroll }) => {
	const [time, setTime] = useState();
	const timeRef = useRef([]);
	//const timeTest = '9:45';
	useEffect(() => {
		setInterval(() => {
			const datosTiempo = new Date();
			const datosHora = datosTiempo.toLocaleTimeString().substring(0, 5);
			//console.log(datosTiempo.toLocaleTimeString());
			setTime(datosHora);
		}, 1000);
	}, []);
	return (
		<div className="reloj" ref={timeRef}>
			<div style={{ fontSize: estadoScroll ? 16 : 20 }}>
				{time ? (time.length < 5 ? `0${time}` : time) : ''}
			</div>
		</div>
	);
};
