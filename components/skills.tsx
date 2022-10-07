import Container from "./container";

const frontend: string[] = [
    "React.js (TypeScript) (intermediate)",
    "Vue.js (intermediate)",
    "TailwindCSS (advanced)",
    "Next.js (basic)"
];

const backend: string[] = [
    "Laravel (advanced)",
    "ASP.NET Core (intermediate)"
];

const other: string[] = [
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
                    <h2 className="px-4 py-2 text-4xl font-bold tracking-widest border-2 border-black max-w-min">
                        Skills
                    </h2>
                    <div className="grid grid-cols-12 gap-6 lg:mt-8">
                        <div className="col-span-full sm:col-span-6 lg:col-span-4">
                            <h3 className="p-2 mt-8 text-2xl font-semibold lg:mt-0">
                                Frontend
                            </h3>
                            <SkillItems data={frontend} />
                        </div>
                        <div className="col-span-full sm:col-span-6 lg:col-span-4">
                            <h3 className="p-2 mt-8 text-2xl font-semibold lg:mt-0">
                                Backend
                            </h3>
                            <SkillItems data={backend} />
                        </div>
                        <div className="col-span-full sm:col-span-6 lg:col-span-4">
                            <h3 className="p-2 mt-8 text-2xl font-semibold lg:mt-0">
                                Other
                            </h3>
                            <SkillItems data={other} />
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

const SkillItems = (props: { data: string[] }) => {
    const { data } = props;

    return (
        <>
            <ul className="mt-4 space-y-3 text-lg font-normal tracking-normal">
                {
                    data.map((item: string) => (
                        <li key={item} className="p-2">
                            {item}
                        </li>
                    ))
                }
            </ul>
        </>
    );
};

export default Skills;