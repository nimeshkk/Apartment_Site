import { useRef } from "react";
import { FaBars, FaBuilding, FaDragon, FaDrawPolygon, FaHome, FaHorse, FaPhoenixFramework, FaReact, FaTimes } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChessKnight, faDragon, faHouse } from '@fortawesome/free-solid-svg-icons'


function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		
		<div className="navbar">
			<div className="logo"><FontAwesomeIcon icon={faDragon} /></div>
			<nav ref={navRef}>
				<a href="/#">Home</a>
				<a href="/#">Facilities</a>
				<a href="/#">Info</a>
				<a href="/#">About</a>
				<div
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</div>
				
			</nav>
			<div
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</div>
		</div>
	);
}

export default Navbar;

