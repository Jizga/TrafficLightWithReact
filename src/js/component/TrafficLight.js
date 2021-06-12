import React from "react";
import { Light } from "./Light";

export function TrafficLight() {
	return (
		<div className="container d-flex justify-content-center mt-5">
			<div className="row mt-5 w-25 pt-4 pb-4 shadow bg-dark rounded">
				<div className="col-12 pl-4 pr-0">
					{/* RED */}
					<Light color={"red"} />
					{/* YELLOW */}
					<Light color={"yellow"} />
					{/* GREEN */}
					<Light color={"green"} />
				</div>
			</div>
		</div>
	);
}
