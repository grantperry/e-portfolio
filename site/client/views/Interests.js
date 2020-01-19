import _ from "underscore";
import React, {useContext} from "react";
import PropTypes from "prop-types";
import { ResumeContext } from "../context/ResumeContext";
import ReactMarkdown from "react-markdown";


const Interest = ({name, blurb}) => {
	return (
		<div className="skill">
			<h4>{name}</h4>
			<div className="content">
				<ReactMarkdown source={blurb}/>
			</div>
		</div>
	);
};

Interest.propTypes = {
	name: PropTypes.string.isRequired,
	blurb: PropTypes.string.isRequired,
};

const Interests = () => {
	const {interests} = useContext(ResumeContext);

	return (
		<div className="current">
			<div id="interests"
				className="content">
				<h2>Interests</h2>
				<div className="interests">
					{
						_.map(interests, (interest) => <Interest
							key={interest.name}
							{...interest}
						/>)
					}
				</div>
			</div>
		</div>
	);
};

Interests.propTypes = {
};

export default Interests;
