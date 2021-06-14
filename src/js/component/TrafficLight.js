import React, { useState } from "react";
import { Light } from "./Light";

export function TrafficLight() {
	const [redColor, setRedColor] = useState("rgb(153, 10, 10)");
	const [yellowColor, setYellowColor] = useState(" rgb(185, 127, 1)");
	const [greenColor, setGreenColor] = useState("rgb(2, 97, 2)");

	function changeColor(colorP) {
		//Red
		if (colorP === "rgb(153, 10, 10)") {
			setRedColor("rgb(255, 5, 5)");
			setYellowColor(" rgb(185, 127, 1)");
			setGreenColor("rgb(2, 97, 2)");
		}
		//Yellow
		if (colorP === " rgb(185, 127, 1)") {
			setYellowColor("rgb(248, 252, 5)");
			setRedColor("rgb(153, 10, 10)");
			setGreenColor("rgb(2, 97, 2)");
		}
		//Green
		if (colorP === "rgb(2, 97, 2)") {
			setGreenColor("rgb(3, 250, 3)");
			setYellowColor(" rgb(185, 127, 1)");
			setRedColor("rgb(153, 10, 10)");
		}
	}

	return (
		<>
			<div className="d-flex justify-content-center">
				<div className="shadow bg-dark" id="trafficLightPoster"></div>
			</div>
			<div className="container d-flex justify-content-center">
				<div className="row pt-4 pb-4 shadow bg-dark rounded myTrafficLight">
					<div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
						<Light color={redColor} changeColor={changeColor} />

						<Light color={yellowColor} changeColor={changeColor} />

						<Light color={greenColor} changeColor={changeColor} />
					</div>
				</div>
			</div>
		</>
	);
}
