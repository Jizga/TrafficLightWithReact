import React, { useState, useEffect } from "react";
import { Light } from "./Light";

export function TrafficLight() {
	const [selectedColor, setSelectedColor] = useState("");

	const colors = {
		red: {
			light: "rgb(255, 5, 5)",
			color: "rgb(153, 10, 10)"
		},
		yellow: {
			light: "rgb(248, 252, 5)",
			color: "rgb(185, 127, 1)"
		},
		green: {
			light: "rgb(3, 250, 3)",
			color: "rgb(2, 97, 2)"
		}
	};

	const changeLigthedColor = e => {
		setSelectedColor(e.target.id);
	};

	const arrColor = Object.keys(colors);

	let light = arrColor.map((c, index) => {
		let data = colors[c];
		return (
			<Light
				key={index}
				id={c}
				color={data.color}
				lightColor={data.light}
				selected={selectedColor === c}
				changeLigthedColor={changeLigthedColor}
			/>
		);
	});

	return (
		<>
			<div className="d-flex justify-content-center">
				<div className="shadow bg-dark" id="trafficLightPoster"></div>
			</div>
			<div className="container d-flex justify-content-center">
				<div className="row pt-4 pb-4 shadow bg-dark rounded myTrafficLight">
					<div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
						{light}
					</div>
				</div>
			</div>
		</>
	);
}
