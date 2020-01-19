import _ from "underscore";
import React from "react";
import ResumeContextProvider from "../context/ResumeContext";
import Experience from "./Experience";
import Education from "./Education";
import Achievements from "./Achievements";
import Intro from "./Intro";
import Current from "./Current";
import Interests from "./Interests";
import EPortfolio from "./EPortfolio";

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
			<Link to="#e-portfolio">E-Portfolio</Link>
			<Link to="#what_i_do">What I do</Link>
			<Link to="#experience">Experience</Link>
			<Link to="#education">Education</Link>
			<Link to="#achievements">Achievements</Link>
			<Link to="#interests">Interests</Link>
			<Link to="#references">References</Link>
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
					<EPortfolio/>
					<Current/>
					<Experience/>
					<Education/>
					<Achievements/>
					<Interests/>
					<div className="endblock"
						id="references">
						<h2>References</h2>
						<ol>
							<li>
								T. Neubert, "Block Diagram of the Atmo Cube," [Online]. Available: https://www.researchgate.net/profile/Tom_Neubert2/publication/332210246/figure/fig7/AS:744014353530880@1554398253226/Block-diagram-of-the-AtmoCube-A1-payload-electronics-for-details-see-Neubert-et-al-20.png.
							</li>
							<li>
								C. John Masterson, "Five Antennas at Narrabri," [Online]. Available: https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/CSIRO_ScienceImage_3881_Five_Antennas_at_Narrabri_-_restoration1.jpg/1280px-CSIRO_ScienceImage_3881_Five_Antennas_at_Narrabri_-_restoration1.jpg.
							</li>
							<li>
								CASS, CSIRO, "CSIROSat-1 render," [Online]. Available: https://www.csiro.au/~/media/Astronomy/Images/CubeSat/CSIROsat-1-render.png?mw=957&hash=1B10235BD588A00F2D4D812118BF50ABC7C72610.
							</li>
						</ol>
					</div>
				</div>
			</div>
		</ResumeContextProvider>
	);
};

export default Home;
