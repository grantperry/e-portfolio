import _ from "underscore";
import { withRouter } from "react-router-dom";
import React, { useEffect, useContext } from "react";
import ResumeContextProvider, { ResumeContext } from "../context/ResumeContext";
import { __RouterContext } from "react-router";

const Education = () => {
	const {education} = useContext(ResumeContext);

	const edu = _.map(education, (e) => {
		const {
			award,
			institution,
			startDate,
			endDate,
		} = e;

		return <div key={e.award}
			className="item">
			<h3>{award} | {institution} </h3>
			<span>{(startDate || new Date()).toLocaleDateString("en-AU")} - {(endDate || new Date()).toLocaleDateString("en-AU")}</span>
		</div>;
	});

	return (
		<div id="education"
			className="content educations">
			<h2>Education</h2>
			{edu}
		</div>
	);
};

export default Education;
