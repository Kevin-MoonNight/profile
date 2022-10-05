import type { NextPage } from 'next';
import Awards from '../components/Awards';
import Education from '../components/Education';
import Profile from '../components/profile';
import Skills from '../components/skills';

const Home: NextPage = () => {
	return (
		<div>
			<Profile />
			
			<Education />
			
			<Awards />

			<Skills />
		</div>
	)
};

export default Home;
