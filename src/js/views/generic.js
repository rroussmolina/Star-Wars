import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext";

import { Container, Card, Col, Row, Button } from "react-bootstrap";

import "../../styles/demo.scss";

export const Generic = () => {
	let { value } = useParams();

	console.log(value);
	const { store, actions } = useContext(Context);
	console.log(store);
	useEffect(() => {
		actions.getAllData(value);
	}, []);
	return (
		<Container>
			<Row>
				<Col>
					{store[value] && store[value].length > 0 ? (
						store[value].map((
							element,
							index //console.log("elemento: ", element)
						) => <h1 key={index}>{value == "films" ? element.properties.title : element.name}</h1>)
					) : (
						<h1>Loading...</h1>
					)}
				</Col>
			</Row>
		</Container>
	);
};
