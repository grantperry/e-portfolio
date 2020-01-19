import _ from "underscore";
import React, { useState, useEffect } from "react";

export const P1 = () => {
	return (
		<p>
			<h2>Linux Kernel Modules</h2>
			A primary objective of the summer internship was for me to learn how to write functional and safe Linux Kernel Modules to interface with payload subsystems and their interfaces. <b>Due to IP and confidentiality clauses in my contract, I am unable to expose any code, or specific implementaition details from this project, that have not already been published by the CSIRO or our partners.</b>
			<p>
				I have written a driver for the ArduCam payload. This involved taking code written by a previous intern and determining how to make the payload work on the CubeSat Processor. To achieve this, I had to establish the systems that interface with the ArduCam and advise my colleagues to make changes to the hardware configurations. Edits to the Linux kernel were made to correctly configure the i2c and SPI busses (as these are how the ArduCam communicates with a processor). The software/driver written is functioning on the test hardware and is able to capture images to non-volatle storage.
			</p>
			<p>
				I am writing a driver for the main mission payload (A Short Wave InfraRed (SWIR) Camera). The majority of my time has been dedicated to this task, designing and implementing sub-systems that have different, but quite cruicial tasks in the big picture. The last week has resolved most of the work on the sub-systems into a working system. Streams of images are captured to non-volatile storage, but there is some refinement to be done to ensure this process happens smoothly.
			</p>
			<p>
				A lot of general use testing is required as part of developing the software/drivers I have worked on. The majority of testing will be done during the official testing period, after I have completed the internship.
			</p>
			<p>
				This experience has developed my skills in writing C code, developing Linux Kernel Modules and working with hardware and hardware engineers. I have enjoyed working in a team where information is freely exchanged and my input is valued and is used constructively.
			</p>
			<p>
				In the future I am keen to develop my skills in hardware development, design, manufacture as an extension of my skills in driver development.
			</p>
			<p className="caption">
				<img
					src="https://www.researchgate.net/profile/Tom_Neubert2/publication/332210246/figure/fig7/AS:744014353530880@1554398253226/Block-diagram-of-the-AtmoCube-A1-payload-electronics-for-details-see-Neubert-et-al-20.png"
					style={{width: "100%", height: "auto"}}/>
			Block diagram of a similar Main Mission Module and it's payloads. It shows the complex relationship between the SoC (Processor) and payloads (the left two peripherals). My project deals with the communications implied by the arrows in this diagram.
			</p>
		</p>
	);
};

export const P2 = () => {
	return (
		<p>
			<h2>Understanding the payload subsystems and their interfaces</h2>
			To develop the software for my project, I need a sound global understanding of the Main Mission Module, payloads and their interactions with one another.
			<p>
				I learn from my colleagues how their payloads operate in a strong team environment. There is lots of active discussion and physical demonstration of the various payloads by their respective developers. Intially my steep learning curve required a lot of 1 on 1 time with my colleagues, but this has developed to more spontaneous discussion of design decisions as a team.
			</p>
			<p>
				I have had access to extensive documentation, including payload specifications, the various interfaces, environment setup, design briefs and project mangement documentation. This documentation brings the required context to my work, and allows me to build my knowledge from sound foundations. In the course of my work, I have made changes to the already available documentation, made available by the project's Confluence Wiki.
			</p>
			<p>
				An objective that arises from my general comprehension of the payload sub-systems and their interfaces is development of a process for reconfiguring the Main Mission Module (MMM) FPGA during flight. The idea behind this is that the CubeSat will likely need to be supplied with new hardware/software drivers while in flight. This is quite risky, as we have no physical connection to the MMM, which poses the risk of loosing control if the reconfiguration fails. As a result of this experience, my skills in documentation, trouble shooting and Electronic Systems have expanded both in depth and breadth.
			</p>
			<p>
				My experience in gaining knowledge of payload systems and their interfaces has been novel, and I've developed a new appreciation for the role of adequate and accurate documentation in engineering. I believe this will improve my future performance as a Software or Electronics Engineer.
			</p>
		</p>
	);
};

export const P3 = () => {
	return (
		<p>
			<h2>Developing an overarching knowledge of the activites and operations supported by CASS, ATNF, SPT and ATCA</h2>
			<p style={{width: "min-content"}}>
				<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/CSIRO_ScienceImage_3881_Five_Antennas_at_Narrabri_-_restoration1.jpg/1280px-CSIRO_ScienceImage_3881_Five_Antennas_at_Narrabri_-_restoration1.jpg"
				style={{width: "40em", height: "auto"}}/>
				<div className="caption">
					The Australian Telescope Compact Array (ATCA), Paul Wild Observatory, Narrabri, Central North NSW. This image shows five of the six 22m radio telescopes arranged in a short baseline configuration on the East-West rail. The telescopes can be moved along a rail to change the "baseline" between them.
				</div>
			</p>
			<p>
				My internship at the CSIRO is sponsored by the Astronomy and Space Science (CASS) division. My project is a technological extension of the science of astronomy. All interns of CASS participate in a week long field trip to the Paul Wild Observatory in Narrabri, Central North NSW. The purpose of the trip is to plan and execute astronomic experiments using the Australian Compact Telescope Array (ACTA).
			</p>
			<p>
				My team's project while useing the ACTA was preliminary experimental work developing a baseline of the ACTA's capabilites of tracking fast transiting radio sources in space. We gathered requirements from the engineers (from the Australian Telescopes National Facility, ATNF), formulated a project plan, and found some possible candidates for observation. The project was to try to establish the limits of the ATCA tracking fast trainsiting radio sources, and if at all possible, extend them.
			</p>
			<p>
				We were allocated a 4 hour block of telescope time (an immense privilege). We refined the targets and wrote up a schedule file to be submitted to the ATCA control system. Our project was out of the scope of the available capabilites of the ATCA and required significant manual confiration and tuning while our observations occured.
			</p>
			<p>
				This project depended quite heavily on my knowledge of physics, telecomunications, electronics and orbital mechanics. I was in a team with engineers and astronomers and I found having my diverse knowledge of both electronic engineering and astronomy made it easy to communicate, understand data that was provided and collected, and solve logistical problems. It was nice to make a valuable contribution to the team's effort.
			</p>
			<p>
				My colleagues who work on my floor are part of the Signal Processing Techologies (SPT) group. They design the computation that turns the radio signals we receive on dishes to digital quantized data. In my work I have gained some understanding of SPT group's involvment in the ATNF and the world. I work with pioneers in radio telescope receivers and signal processors, who have manufactured key pieces of infrastructure for international projects such as the <a href="https://en.wikipedia.org/wiki/Arecibo_Observatory">Arecibo Observatory</a>.
			</p>
			<p>
				This opportunity has strengthened my enthusiasm for learning more about radio astronomy and aeronautical/space technology. I have particularly enjoyed seeing my existing knowledge and experience placed in this context and I look forward to continuing in the industry.
			</p>
			<p>
				I have developed a deep respect for radio astronomy and the scientists and engineers who enable us to view the universe that is beyond our sight.
			</p>
		</p>
	);
};

const Part = ({title, article, updatePart}) => {
	const ud = () => {
		updatePart(article);
		setTimeout(() => {
			document.getElementById("expose").scrollIntoView();
		}, 100);
	}
	return (
		<div className="part"
			onClick={ud}>
			<h4>{title}</h4>
			<a onClick={() => ud}>Read More</a>
		</div>
	);
};

const Expose = ({part, updatePart}) => {
	return (
		<div className="expose">
			<Part title="Linux Kernel Modules"
				article={1}
				part={part}
				updatePart={updatePart}
			/>
			<Part title="Understanding the payload subsystems and their interfaces"
				article={2}
				part={part}
				updatePart={updatePart}
			/>
			<Part title="Developing an overarching knowledge of the activites and operations supported by CASS, ATNF, SPT and ATCA"
				article={3}
				part={part}
				updatePart={updatePart}
			/>
		</div>
	);
};

const EPortfolio = () => {
	const [part, updatePart] = useState(0);

	let renderedPart = <></>;

	switch (part) {
	case 1:
		renderedPart = (<P1/>);
		break;
	case 2:
		renderedPart = (<P2/>);
		break;
	case 3:
		renderedPart = (<P3/>);
		break;
	default:
		renderedPart = <></>;
	}

	const close = () => {
		updatePart(0);
		setTimeout(() => {
			document.getElementById("e-portfolio").scrollIntoView();
		}, 100);
	}

	return (
		<>
		<div className="e-portfolio"
			id="e-portfolio">
			<div className="content">
				<h2>E-Portfolio</h2>
				<div className="split">
					<div className="left">
						<p>
							I am currently a summer intern at CSIRO Astronomy and Space Science, Marsfield. During my internship I will be developing software and kernel drivers to interface with CubeSat payloads and the CubeSat processor onboard the CSIRO's first in-house satellite project, CSIROSat-1.
						</p>
						<Expose part={part}
							updatePart={updatePart} />
					</div>
					<div style={{width: "min-content"}}>
						<img src="https://www.csiro.au/~/media/Astronomy/Images/CubeSat/CSIROsat-1-render.png?mw=957&hash=1B10235BD588A00F2D4D812118BF50ABC7C72610"
							style={{width: "25em", height: "auto"}}/>
						<p className="caption">
							A render of CSIROSat-1 orbiting over Australia. CSIROSat-1 will be used to observe Australia in the Short Wave InfraRed (SWIR) bands. A significant part of my internship is dedicated to this project.
						</p>
					</div>
				</div>
			</div>
		</div>
		{
			part != 0 && <div className="portfolio-expose"
				id="expose">
				<div className="content">
					{renderedPart}
					<a onClick={() => close}>Return to E-Portfolio directory</a>
				</div>
			</div>
		}
		</>
	);
};

export default EPortfolio;