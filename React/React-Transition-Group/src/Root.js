import { useRef } from "react";
import { NavLink, Outlet, useLocation } from "react-router";
import { SwitchTransition, CSSTransition } from "react-transition-group";
export default function Root() {

	const location = useLocation();
	const nodeRef = useRef();
	return (
		<>
			<div className="layout">
				<nav className="navbar">
					<NavLink
						to="/"
						className={({ isActive }) => isActive ? "link-active" : ""}>
						Home
					</NavLink>
					<NavLink
						to="/AboutUs"
						className={({ isActive }) => isActive ? "link-active" : ""}>
						AboutUs
					</NavLink>
					<NavLink
						to="/Product"
						className={({ isActive }) => isActive ? "link-active" : ""}>
						Product
					</NavLink>
				</nav>
			</div>

			<SwitchTransition>
				<CSSTransition
					key={location.key}
					nodeRef={nodeRef}
					className="page-fade"
					timeout={2000}
					unmountOnExit
					mountOnEnter
				>
					<div ref={nodeRef}><Outlet /></div>
					
				</CSSTransition>
			</SwitchTransition>
		</>
	);
};