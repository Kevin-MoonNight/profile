interface NavigationItemProps {
    id: string,
    name: string
};

export const navigations: NavigationItemProps[] = [
    {
        id: "profile",
        name: "Profile"
    },
    {
        id: "education",
        name: "Education"
    },
    {
        id: "work experiences",
        name: "Work Experiences"
    },
    {
        id: "awards",
        name: "Awards"
    },
    {
        id: "skills",
        name: "Skills"
    },
    {
        id: "projects",
        name: "Projects"
    },
];

const Navigation = (props: { watching: string }) => {
    const { watching } = props;

    return (
        <nav className="fixed hidden m-3 lg:m-6 md:block">
            <div className="font-sans text-sm antialiased font-bold leading-normal tracking-wider text-left text-gray-500 lg:text-base">
                {
                    navigations.map((item: NavigationItemProps, index: number) => (
                        <NavigationItem key={"navigation" + item + index} item={item} active={item.id === watching} />
                    ))
                }
            </div>
        </nav>
    );
};

const NavigationItem = (props: { item: NavigationItemProps, active: boolean }) => {
    const { item, active } = props;

    return (
        <a href={"#" + item.id}>
            <p className={"px-4 py-2 lg:px-6" + (active ? " pl-6 text-gray-900 transition-all border-l-4 border-black lg:pl-8" : "")}>
                {item.name}
            </p>
        </a>
    );
};



export default Navigation;