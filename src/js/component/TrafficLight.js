import React, { useState } from "react";
import { Light } from "./Light";

export function TrafficLight() {
	const [redColor, setRedColor] = useState("rgb(153, 10, 10)");
	const [yellowColor, setYellowColor] = useState("rgb(226, 187, 14)");
	const [greenColor, setGreenColor] = useState("rgb(2, 97, 2)");

	function changeColor(colorP) {
		if (colorP === "rgb(153, 10, 10)") setRedColor("rgb(255, 5, 5)");
		if (colorP === "rgb(226, 187, 14)") setYellowColor("rgb(248, 252, 5)");
		if (colorP === "rgb(2, 97, 2)") setGreenColor("rgb(3, 250, 3)");
	}

	return (
		<div className="container d-flex justify-content-center mt-5">
			<div className="row mt-5 w-25 pt-4 pb-4 shadow bg-dark rounded">
				<div className="col-12 pl-4 pr-0">
					<div onClick={() => changeColor(redColor)}>
						<Light
							color={redColor}
							// changeColor={changeColor()}
							// onClick={() => changeColor()}
						/>
					</div>

					<div onClick={() => changeColor(yellowColor)}>
						<Light
							color={yellowColor}
							// onClick={() => changeColor()}
						/>
					</div>

					<div onClick={() => changeColor(greenColor)}>
						<Light
							color={greenColor}
							// changeColor={changeColor()}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
