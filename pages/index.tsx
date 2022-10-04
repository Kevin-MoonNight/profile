import type { NextPage } from 'next';
import Head from 'next/head';
import Awards from '../components/Awards';
import Profile from '../components/profile';
import Skills from '../components/skills';

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>鄭政文的個人網站</title>
				<meta name="description" content="" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Profile />
			
			<Awards />

			<Skills />
		</div>
	)
};

export default Home;
