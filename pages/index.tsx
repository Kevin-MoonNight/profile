import type { NextPage } from 'next';
import Head from 'next/head';
import Profile from '../components/profile';

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>鄭政文的個人網站</title>
				<meta name="description" content="" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Profile />

		</div>
	)
};

export default Home;
