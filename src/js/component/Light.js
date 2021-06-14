import React from "react";
import PropTypes from "prop-types";

export function Light(props) {
	return (
		<div
			id={props.id}
			className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 p-5 rounded-circle mt-2 light"
			style={{
				backgroundColor: props.selected ? props.lightColor : props.color
			}}
			onClick={props.changeLigthedColor}></div>
	);
}

Light.propTypes = {
	color: PropTypes.string,
	selected: PropTypes.bool,
	lightColor: PropTypes.string,
	id: PropTypes.string,
	changeLigthedColor: PropTypes.func
};
