import { useRef } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import { BsFillCalendarWeekFill, BsYoutube, BsBusFront } from 'react-icons/bs';
import { SiGooglemaps, SiWaze } from 'react-icons/si';
import '../style/NavFooter.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
export const NavFooter = () => {
	const iconoDim = 26;

	const calendarioRef = useRef([]);

	const calendarHandler = () => {
		calendarioRef.current.classList.toggle('calendario_display-controlador');
		//console.log(calendarioRef.current);
	};

	return (
		<div className="nav-footer_contenedor">
			<a
				href="https://www.startpage.com/es/"
				target="_blank"
				className="nav-footer_btn"
			>
				<BiSearchAlt2 size={iconoDim} className="nav-footer_icon" />
			</a>
			<a
				href="http://maps.google.com.ar/"
				target="_blank"
				className="nav-footer_btn"
			>
				<SiGooglemaps size={iconoDim} className="nav-footer_icon" />
			</a>
			<a
				href="https://www.waze.com/es/live-map/"
				target="_blank"
				className="nav-footer_btn"
			>
				<SiWaze size={iconoDim} className="nav-footer_icon" />
			</a>
			<a
				href="https://www.moovitapp.com/"
				target="_blank"
				className="nav-footer_btn"
			>
				<BsBusFront size={iconoDim} className="nav-footer_icon" />
			</a>
			<a
				href="http://www.youtube.com/"
				target="_blank"
				className="nav-footer_btn"
			>
				<BsYoutube size={iconoDim} className="nav-footer_icon" />
			</a>
			<button className="nav-footer_btn" onClick={calendarHandler}>
				<BsFillCalendarWeekFill size={iconoDim} className="nav-footer_icon" />
			</button>
			<div className="calendario_contenedor" ref={calendarioRef}>
				<Calendar className="calendario" />
			</div>
		</div>
	);
};
