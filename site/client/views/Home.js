import _ from "underscore";
import React from "react";
import ResumeContextProvider from "../context/ResumeContext";
import Experience from "./Experience";
import Education from "./Education";
import Achievements from "./Achievements";
import Intro from "./Intro";
import Current from "./Current";
import Intersts from "./Interests";

const name = "Grant Perry";

const Link = ({to, children}) => {
	return (
		<div>
			<a href={to}>
				{children}
			</a>
		</div>
	);
};

const SideBlock = ({name, img}) => (
	<div className="title">
		<h1>{name}</h1>
		<img src={img}
			className="profile-pic"/>

		<div className="contents">
			<Link to="/">Me</Link>
			<Link to="#what_i_do">What I do</Link>
			<Link to="#experience">Experience</Link>
			<Link to="#education">Education</Link>
			<Link to="#achievements">Achievements</Link>
			<Link to="#interests">Interestes</Link>
		</div>
	</div>
);


const Home = () => {
	return (
		<ResumeContextProvider>
			<div
				className="home-grid">
				<SideBlock
					name={name}
					img="https://i.imgur.com/er6DMT7.jpg"
				/>
				<div className="body">
					<Intro name={name}/>
					<Current/>
					<Experience/>
					<Education/>
					<Achievements/>
					<Intersts/>
					<div className="endblock"/>
				</div>
			</div>
		</ResumeContextProvider>
	);
};

export default Home;
