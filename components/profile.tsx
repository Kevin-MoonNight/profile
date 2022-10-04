import Container from "./container";
import Image from 'next/image';
import headShotPic from '../public/images/headshot.jpg';

const name = "Cheng Cheng-Wen";

const email = "k0937477331@gmail.com";

const description = 
    "I'm Kevin, I've been studying programming since I was in high school," +
    "and I've participated some programming competitions and gotten some good results," +
    "now I'm working in lab.";

const Profile = () => {
    return (
        <Container className="flex items-center justify-center">
            <div className="grid max-w-4xl grid-cols-12">
                <div className="col-span-12 lg:col-span-8">
                    <div className="p-4 font-sans antialiased leading-normal tracking-wider text-center text-gray-900 md:p-12 lg:text-left">
                        {/* 照片 */}
                        <div className="relative block w-48 h-48 mx-auto overflow-hidden rounded-full lg:hidden">
                            <Image
                                className="w-48 h-48"
                                src={headShotPic}
                                alt="headshot"
                                placeholder="blur"
                            />
                        </div>

                        <h1 className="pt-8 text-3xl font-bold lg:pt-0">
                            {name}
                        </h1>
                        <p className="pt-4 text-base font-bold">
                            {email}
                        </p>

                        <p className="pt-8 ">
                            {description}
                        </p>

                        <div className="pt-12 pb-8">
                            <button className="px-4 py-2 font-bold text-black transition-all bg-white border-2 border-black hover:text-white hover:bg-black">
                                <span className="text-lg traking-wide">
                                    Contact Me
                                </span>
                            </button>
                        </div>

                        <div className="flex flex-wrap items-center gap-6 pb-16 mx-auto mt-6 lg:pb-0 lg:w-full">
                            <a href="https://github.com/Kevin-MoonNight">
                                <svg className="h-6 text-gray-600 transition-all fill-current hover:text-gray-900" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
                            </a>
                            <a href="https://www.linkedin.com/in/Kevin-Moonngiht/">
                                <svg className="h-6 text-gray-600 transition-all fill-current hover:text-gray-900" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* 照片 */}
                <div className="hidden lg:col-span-4 lg:block">
                    <Image
                        src={headShotPic}
                        alt="headshot"
                        placeholder="blur"
                    />
                </div>
            </div>
        </Container>
    );
};

export default Profile;