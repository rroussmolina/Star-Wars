import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Navbar, NavbarBrand, Image, DropdownButton, Dropdown, Nav } from "react-bootstrap";

export const NavbarMenu = () => {
	const { store, actions } = useContext(Context);
	return (
		<Navbar>
			<Navbar.Brand>
				<Link to="/">
					<Image
						src="https://w7.pngwing.com/pngs/270/91/png-transparent-yoda-star-wars-logo-star-wars-logo-text-logo-war.png"
						// width="60"
						height="60"
						alt="Star Wars"
					/>
				</Link>
			</Navbar.Brand>

			<DropdownButton id="dropdown-basic-button" title={`Favorites ${store.favorites.length}`}>
				{store.favorites.map((item, index) => {
					return (
						<Dropdown.Item id="item-favorites" key={index} href="#/action-1">
							{item}{" "}
							<span onClick={() => actions.deleteFavorites(index)}>
								<i className="fas fa-trash-alt float-right" />
							</span>
						</Dropdown.Item>
					);
				})}
			</DropdownButton>
		</Navbar>
	);
};
