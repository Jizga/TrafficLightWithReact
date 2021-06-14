import React from "react";
import PropTypes from "prop-types";

export function Light(props) {
	return (
		<div
			id="light"
			className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 p-5 rounded-circle mt-2"
			style={{ backgroundColor: props.color }}
			onClick={() => props.changeColor(props.color)}></div>
	);
}

Light.propTypes = {
	color: PropTypes.string,
	changeColor: PropTypes.func
};
