import React, { useState, useEffect, useContext } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { element } from "prop-types";
import { Context } from "../store/appContext";
import { Container, Card, Col, Row, Image, Button } from "react-bootstrap";
import "../../styles/demo.scss";
import genericImage from "../../img/starwars2.png";

export const Generic = () => {
	let { value } = useParams();
	const history = useHistory();
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getAllData(value);
	}, []);

	const goBack = () => {
		history.goBack();
	};

	return (
		<Container>
			<Row>
				{store[value] && store[value].length > 0 ? (
					store[value].map((element, index) => (
						<Col key={index}>
							<br />
							<Card style={{ width: "18rem" }}>
								<Image src={genericImage} rounded className="card-img-top" />
								<Card.Body>
									<Card.Title>
										{value == "films" ? element.properties.title : element.name}
									</Card.Title>
									<Link to={`/details/${value}/${element.uid}`}>
										<Button variant="primary">Go to details</Button>
									</Link>
									<Button
										variant="warning"
										onClick={() => {
											actions.setFavorites(
												value == "films" ? element.properties.title : element.name
											);
										}}>
										<i className="fa fa-heart" />
									</Button>
								</Card.Body>
							</Card>
							{value == "films" ? element.properties.title : element.name}
						</Col>
					))
				) : (
					<h1>Loading...</h1>
				)}
			</Row>
			<br />
			<Link to="/">
				<Button variant="primary">Back to home</Button>
			</Link>
		</Container>
	);
};
