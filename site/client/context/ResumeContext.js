import React, { useState, createContext } from "react";
import experience from "../data/experience";
import edu from "../data/education";
import ach from "../data/achievements";
import skil from "../data/skills";
import int from "../data/interests";

export const ResumeContext = createContext();

const ResumeContextProvider = ({ children }) => {
	const [experiences, updateExperiences] = useState(experience);
	const [education, updateEducation] = useState(edu);
	const [achievements, updateAchievements] = useState(ach);
	const [skills, updateSkills] = useState(skil);
	const [interests, updateInterests] = useState(int);

	return (
		<ResumeContext.Provider value={{
			experiences, updateExperiences,
			education, updateEducation,
			achievements, updateAchievements,
			skills, updateSkills,
			interests, updateInterests,
		}}>
			{children}
		</ResumeContext.Provider>
	);
};

export default ResumeContextProvider;
