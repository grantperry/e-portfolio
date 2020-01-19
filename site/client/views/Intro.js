import _ from "underscore";
import PropTypes from "prop-types";
import React from "react";

const Intro = ({name}) => {

	return (
		<div className="intro">
			<h1>{name}</h1>
			<span>Summer Intern at Astronomy and Space Science (CASS), CSIRO</span>
			<p>
				I will complete my BSc majoring in Electronics in February 2020.
				In my elective stream I pursued my interests in digital systems, linear electronics and programming.
			</p>
		</div>
	);
};

Intro.propTypes = {
	name: PropTypes.string.isRequired,
};

export default Intro;
