import type { NextPage } from 'next';
import { useEffect, useRef, useState } from 'react';
import Awards from '../components/awards';
import Education from '../components/education';
import Navigation, { navigations } from '../components/navigation';
import Profile from '../components/profile';
import Projects from '../components/projects';
import ScrollToTop from '../components/scroll-to-top';
import Skills from '../components/skills';
import WorkExperiences from '../components/work-experiences';

const Home: NextPage = () => {
	const [watching, setWatching] = useState("profile");
	const home = useRef(null);

	useEffect(() => {
		if (home.current) {
			let observe = new IntersectionObserver((entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setWatching(entry.target.id);
					}
				});
			}, { threshold: 0.5 });

			navigations.forEach((item) => {
				var nav = document.getElementById(item.id);
				observe.observe(nav as HTMLElement);
			});
		}
	}, []);

	return (
		<div ref={home}>
			<div className="">
				<Navigation watching={watching} />
			</div>
			
			<ScrollToTop />

			<section id="profile">
				<Profile />
			</section>
			<section id="education">
				<Education />
			</section>
			<section id="work experiences">
				<WorkExperiences />
			</section>
			<section id="awards">
				<Awards />
			</section>
			<section id="skills">
				<Skills />
			</section>
			<section id="projects">
				<Projects />
			</section>
		</div>
	)
};

export default Home;
