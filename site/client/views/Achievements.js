import _ from "underscore";
import React, { useContext } from "react";
import PropTypes from "prop-types";
import { ResumeContext } from "../context/ResumeContext";

const Achievement = ({name, achievements: sub, isSub = false}) => {
	return <div
		className="item">
		{
			!isSub ?
				<h3>{name}</h3> :
				<p>- {name}</p>
		}
		{/* {sub ? <Achievement achievements={sub}/> : <></>} */}
		{sub && sub.length > 0 &&
			_.map(sub, (ach) => <Achievement key={ach.name}
				isSub={true}
				{...ach}/>)
		}
	</div>;
};

const Achievements = ({achievements}) => {
	const achi = (achievements != undefined) ? achievements : useContext(ResumeContext).achievements;

	return (
		<div className="achievements">
			<div id="achievements"
				className="content">
				<h2>Achievements</h2>
				{
					_.map(achi, (ach) => <Achievement key={ach.name}
						{...ach}/>)
				}
			</div>
		</div>
	);
};

Achievements.propTypes = {
	achievements: PropTypes.array,
};

export default Achievements;
