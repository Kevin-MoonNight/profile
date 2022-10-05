import Container from "./container";
import Image from 'next/image';
import headShotPic from '../public/images/headshot.jpg';
import LinkedInIcon from "./icons/linkedin";
import GitHubIcon from "./icons/github";

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

                        <p className="pt-8">
                            {description}
                        </p>

                        <div className="pt-12 pb-8">
                            <ContactButton />
                        </div>

                        <div className="flex flex-wrap items-center gap-6 pb-16 mx-auto mt-6 lg:pb-0 lg:w-full">
                            <a href="https://github.com/Kevin-MoonNight" rel="noreferrer" target="_blank">
                                <GitHubIcon />
                            </a>
                            <a href="https://www.linkedin.com/in/Kevin-Moonngiht/" rel="noreferrer" target="_blank">
                                <LinkedInIcon />
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

const ContactButton = () => {
    return (
        <>
            <button className="px-4 py-2 font-bold text-black transition-all bg-white border-2 border-black hover:text-white hover:bg-black">
                <span className="text-lg traking-wide">
                    Contact Me
                </span>
            </button>
        </>
    );
};

export default Profile;