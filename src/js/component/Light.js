import React from "react";
import PropTypes from "prop-types";

export function Light(props) {
	return (
		<div
			className="p-5 w-50 rounded-circle mt-2 ml-5 mb-2"
			style={{ backgroundColor: props.color }}></div>
	);
}

Light.propTypes = {
	color: PropTypes.string
};
