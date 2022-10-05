import Container from "./container";

interface WorkExperienceProps {
    title: string,
    tech: string,
    type: string,
    date: string,
    description: string
};

const workExperiences: WorkExperienceProps[] = [
    {
        title: "實用技能現況調查系統",
        tech: "(C# / ASP.NET Core MVC / Bootstrap / MySQL)",
        type: "LabProject",
        date: "Sep 2022 - now",
        description: ""
    },
    {
        title: "演算法程式開發",
        tech: "(C#)",
        type: "Piecework",
        date: "Mar 2021 - Jun 2021",
        description: "透過多種策略的演算法，計算績效表現，讓使用者可以在不同的情況下，選擇出績效最好的策略。"
    },
];

const WorkExperiences = () => {
    return (
        <Container className="flex justify-center">
            <div id="work experiences" className="w-full max-w-5xl select-none">
                <div className="font-sans antialiased leading-normal tracking-wider text-left text-gray-900">
                    <h2 className="px-4 py-2 text-4xl font-bold tracking-widest border-2 border-black max-w-fit">
                        Work Experiences
                    </h2>
                    <ul className="mt-8 space-y-3 font-normal">
                        {
                            workExperiences.map((item: WorkExperienceProps) => (
                                <li key={item.title} className="p-2">
                                    <WorkExperienceItem data={item} />
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </Container>
    );
};

const WorkExperienceItem = (props: { data: WorkExperienceProps }) => {
    const { data } = props;

    return (
        <>
            <p className="text-2xl font-semibold">
                {data.title}
            </p>

            <div className="mt-2 text-base">
                <p className="text-gray-700">
                    {data.tech} {data.type} {data.date}
                </p>
                <p className="mt-4">
                    {data.description}
                </p>
            </div>
        </>
    );
};

export default WorkExperiences;