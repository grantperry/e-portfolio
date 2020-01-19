import _ from "underscore";
import React, {useContext} from "react";
import PropTypes from "prop-types";
import { ResumeContext } from "../context/ResumeContext";
import ReactMarkdown from "react-markdown";

const Skill = ({name, imgs, blurb}) => {
	return (
		<div className="skill">
			<div className="logos">
				{imgs.length == 0 && <div className="empty-img"/>}
				{_.map(imgs, (img) => <img key={img} src={img}/>)}
			</div>
			<h4>{name}</h4>
			<div className="content">
				<ReactMarkdown source={blurb}/>
			</div>
		</div>
	);
};

Skill.propTypes = {
	name: PropTypes.string.isRequired,
	imgs: PropTypes.array.isRequired,
	blurb: PropTypes.string.isRequired,
};

const Current = () => {
	const {skills} = useContext(ResumeContext);

	return (
		<div className="current">
			<div id="what_i_do"
				className="content">
				<h2>What I do</h2>
				<p className="blurb">
					My passion is integrating science with technology.
					I am a graduating BSc Electronics student with a keen interest in systems programming. I am currently writing hardware drivers and software for embedded applications in the aerospace and cube-sat industries during a summer internship at CASS, CSIRO Marsfield.
				</p>
				<div className="skills">
					{
						_.map(skills, (skill) => <Skill
							key={skill.name}
							{...skill}
						/>)
					}
				</div>
			</div>
		</div>
	);
};

Current.propTypes = {
};

export default Current;
