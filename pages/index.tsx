import type { NextPage } from 'next';
import Awards from '../components/awards';
import Education from '../components/education';
import Profile from '../components/profile';
import Skills from '../components/skills';
import WorkExperiences from '../components/work-experiences';

const Home: NextPage = () => {
	return (
		<div>
			<Profile />
			
			<Education />
			
			<WorkExperiences />
			
			<Awards />

			<Skills />
		</div>
	)
};

export default Home;
