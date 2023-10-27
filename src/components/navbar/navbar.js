import { useRef } from "react";
import { FaBars,  FaTimes } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faDragon,  } from '@fortawesome/free-solid-svg-icons'


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
				<a href="#fasilities">Facilities</a>
				<a href="#info">Info</a>
				<a href="#footer">About</a>
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

