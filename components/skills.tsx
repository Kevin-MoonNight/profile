import Container from "./container";

const Skills = () => {
    return (
        <Container className="flex justify-center">
            <div className="w-full max-w-5xl select-none">
                <div className="p-4 font-sans antialiased leading-normal tracking-wider text-left text-gray-900 md:p-8">
                    <h2 className="px-4 py-2 text-4xl font-bold tracking-widest text-white bg-black max-w-min">
                        Skills
                    </h2>
                    <div className="grid grid-cols-1 gap-6 lg:mt-8 lg:grid-cols-12 ">
                        <div className="col-span-full lg:col-span-4">
                            <h3 className="p-2 mt-8 text-2xl font-semibold lg:mt-0">
                                Frontend
                            </h3>
                            <ul className="mt-4 space-y-3 text-lg font-normal tracking-normal">
                                <li className="p-2">
                                    React.js (TypeScript) (intermediate)
                                </li>
                                <li className="p-2">
                                    Vue.js (intermediate)
                                </li>
                                <li className="p-2">
                                    TailwindCSS (advanced)
                                </li>
                                <li className="p-2">
                                    Next.js (basic)
                                </li>
                            </ul>
                        </div>
                        <div className="col-span-full lg:col-span-4">
                            <h3 className="p-2 mt-8 text-2xl font-semibold lg:mt-0">
                                Backend
                            </h3>
                            <ul className="mt-4 space-y-3 text-lg font-normal tracking-normal">
                                <li className="p-2">
                                    Laravel (advanced)
                                </li>
                                <li className="p-2">
                                    ASP.NET Core (intermediate)
                                </li>
                            </ul>
                        </div>
                        <div className="col-span-full lg:col-span-4">
                            <h3 className="p-2 mt-8 text-2xl font-semibold lg:mt-0">
                                Other
                            </h3>
                            <ul className="mt-4 space-y-3 text-lg font-normal tracking-normal">
                                <li className="p-2">
                                    Git (advanced)
                                </li>
                                <li className="p-2">
                                    Docker (intermediate)
                                </li>
                                <li className="p-2">
                                    MySQL
                                </li>
                                <li className="p-2">
                                    AWS S3 (beginner)
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Skills;