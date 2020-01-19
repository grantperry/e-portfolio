import _ from "underscore";
import React, { useContext } from "react";
import { ResumeContext } from "../context/ResumeContext";

const Experience = () => {
	const {experiences} = useContext(ResumeContext);

	const exp = _.map(experiences, (e) => {
		const {
			position,
			organisation,
			comment,
			startDate,
			endDate,
		} = e;

		return <div key={e.position}
			className="item">
			<h3>{position} | {organisation} </h3>
			<span>{(startDate || new Date()).toLocaleDateString("en-AU")} - {(endDate || new Date()).toLocaleDateString("en-AU")}</span>
			{
				_.map(
					(comment || "" )
						.split("\n"), (line) => (
						<p key={line}>
							{line}
						</p>
					)
				)
			}
		</div>;
	});

	return (
		<div className="experiences">
			<div id="experience"
				className="content">
				<h2>Experience</h2>
				{exp}
			</div>
		</div>
	);
};

export default Experience;