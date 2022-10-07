import Container from "./container";
import GitHubIcon from "./icons/github";

interface ProjectProps {
    title: string,
    url: string,
    githubUrl: string,
    tech: string,
    description: string,
    contributions: string[]
};

const projects: ProjectProps[] = [
    {
        title: "工作室網站",
        url: "https://moonnight.software/",
        githubUrl: "",
        tech: "(Vue.js / Laravel / TailwindCSS / MySQL / AWS S3)",
        description: "自己建置出來的網站，用來當作工作室形象網站及Blog。",
        contributions: [
            "身分驗證功能使用Fortify，社群平台登入功能使用Socialite，後台使用Filament，部分元件使用Vue及Livewire。",
            "導入Git Flow",
            "透過GitHub Action、Docker實現CI/CD"
        ]
    },
    {
        title: "LiveIn 工作及租屋搜尋",
        url: "https://live-in.vercel.app/",
        githubUrl: "https://github.com/Kevin-Shen-and-Cipher/live-in-frontend",
        tech: "(React.js / TypeScript / Next.js / TailwindCSS)",
        description: "通過提供的資料搜尋適合的工作或者居住地",
        contributions: [
            "負責前端部分",
            "導入Git Flow",
            "透過Vercel 、Docker實現CI/CD"
        ]
    },
    {
        title: "人臉辨識",
        url: "",
        githubUrl: "https://github.com/Kevin-MoonNight/face-detection",
        tech: "(C#)",
        description: "在C#使用DlibDotNet實現的人臉辨識程式，並且使用Multithreading 來建構程式強化UX。",
        contributions: []
    },
    {
        title: "遠端畫面控制軟體（像是Teamviewer）",
        url: "",
        githubUrl: "https://github.com/Kevin-MoonNight/remote-control-program",
        tech: "(VB.NET、Socket)",
        description: "高中時的專題，在VB.NET使用Socket將畫面、按鍵輸入，傳輸到被控制端，達成遠端控制效果。",
        contributions: []
    }
];

const Projects = () => {
    return (
        <Container className="flex items-center justify-center">
            <div className="w-full max-w-5xl select-none">
                <div className="font-sans antialiased leading-normal tracking-wider text-left text-gray-900">
                    <h2 className="px-4 py-2 mx-auto text-4xl font-bold tracking-widest text-white bg-black max-w-fit">
                        Projects
                    </h2>
                    <ul className="mt-8 space-y-4 font-normal">
                        {
                            projects.map((item: ProjectProps) => (
                                <li key={item.title} className="p-2">
                                    <ProjectItem data={item} />
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </Container>
    );
};

const ProjectItem = (props: { data: ProjectProps }) => {
    const { data } = props;

    return (
        <>
            <div className="flex items-center">
                <ProjectTitle data={data} />
                <GithubLink data={data} />
            </div>

            <div className="text-base">
                <p className="mt-2 text-gray-700">
                    {data.tech}
                </p>
                <p className="mt-2">
                    {data.description}
                </p>

                <ul className="mt-4 list-disc list-inside">
                    {data.contributions.map((contribution) => (
                        <li key={data.title + contribution} className="mt-2">
                            {contribution}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

const ProjectTitle = (props: { data: ProjectProps }) => {
    const { data } = props;

    return (
        <>
            {
                data.url ? (
                    <a href={data.url} rel="noreferrer" target="_blank" className="text-2xl font-semibold">
                        {data.title}
                    </a>
                ) : <p className="text-2xl font-semibold">
                    {data.title}
                </p>
            }
        </>
    );
};

const GithubLink = (props: { data: ProjectProps }) => {
    const { data } = props;

    return (
        <>
            {
                data.githubUrl ? (
                    <a href={data.githubUrl} rel="noreferrer" target="_blank" className="ml-2">
                        <GitHubIcon />
                    </a>
                ) : <></>
            }
        </>
    );
};

export default Projects;