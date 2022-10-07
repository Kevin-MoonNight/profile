import Container from "./container";

interface AwardProps {
    year: number,
    awards: string[]
};

const awards: AwardProps[] = [
    {
        year: 2021,
        awards: [
            "高雄應用科技大學 資訊工程系 IEET中華工程教育學會-資訊教育認證(CAC) 學生代表"
        ]
    },
    {
        year: 2019,
        awards: [
            "全國高中技藝競賽 電腦軟體設計 金手獎 第二名",
            "青年程式設計競賽 第三名",
            "北區高中職程式設計競賽 第二名"
        ]
    }
];

const Awards = () => {
    return (
        <Container className="flex justify-center">
            <div className="w-full max-w-5xl select-none">
                <div className="font-sans antialiased leading-normal tracking-wider text-right text-gray-900">
                    <h2 className="px-4 py-2 ml-auto text-4xl font-bold tracking-widest text-white bg-black max-w-min">
                        Awards
                    </h2>
                    <ul className="mt-8 space-y-3 font-normal">
                        {
                            awards.map((item: AwardProps) => (
                                <li key={item.year} className="p-2">
                                    <AwardItem data={item} />
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </Container>
    );
};

const AwardItem = (props: { data: AwardProps }) => {
    const { data } = props;

    return (
        <>
            <p className="text-3xl font-semibold">{data.year}</p>

            <div className="mt-4 space-y-2 text-xl">
                {
                    data.awards.map((award: string) => (
                        <p key={award} className="p-2 ml-4">
                            {award}
                        </p>
                    ))
                }
            </div>
        </>
    );
};

export default Awards;