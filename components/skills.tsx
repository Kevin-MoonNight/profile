import Container from "./container";

const frontendItems = [
    "React.js (TypeScript) (intermediate)",
    "Vue.js (intermediate)",
    "TailwindCSS (advanced)",
    "Next.js (basic)"
];

const backendItems = [
    "Laravel (advanced)",
    "ASP.NET Core (intermediate)"
];

const otherItems = [
    "Git (advanced)",
    "Docker (intermediate)",
    "MySQL",
    "AWS S3 (beginner)"
];

const Skills = () => {
    return (
        <Container className="flex justify-center">
            <div className="w-full max-w-5xl select-none">
                <div className="font-sans antialiased leading-normal tracking-wider text-left text-gray-900">
                    <h2 className="px-4 py-2 text-4xl font-bold tracking-widest text-white bg-black max-w-min">
                        Skills
                    </h2>
                    <div className="grid grid-cols-12 gap-6 lg:mt-8">
                        <div className="col-span-full sm:col-span-6 lg:col-span-4">
                            <h3 className="p-2 mt-8 text-2xl font-semibold lg:mt-0">
                                Frontend
                            </h3>
                            <ul className="mt-4 space-y-3 text-lg font-normal tracking-normal">
                                {frontendItems.map((item: string) => (
                                    <li key={item} className="p-2">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-span-full sm:col-span-6 lg:col-span-4">
                            <h3 className="p-2 mt-8 text-2xl font-semibold lg:mt-0">
                                Backend
                            </h3>
                            <ul className="mt-4 space-y-3 text-lg font-normal tracking-normal">
                                {backendItems.map((item: string) => (
                                    <li key={item} className="p-2">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-span-full sm:col-span-6 lg:col-span-4">
                            <h3 className="p-2 mt-8 text-2xl font-semibold lg:mt-0">
                                Other
                            </h3>
                            <ul className="mt-4 space-y-3 text-lg font-normal tracking-normal">
                                {otherItems.map((item: string) => (
                                    <li key={item} className="p-2">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Skills;