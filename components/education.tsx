import Container from "./container";

const Education = () => {
    return (
        <Container className="flex items-center justify-center">
            <div className="w-full max-w-5xl select-none">
                <div className="font-sans antialiased leading-normal tracking-wider text-center text-gray-900">
                    <h2 className="px-4 py-2 mx-auto text-4xl font-bold tracking-widest text-white bg-black max-w-min">
                        Education
                    </h2>
                    <div className="p-2 mt-8">
                        <h3 className="text-3xl font-semibold">
                            National Kaohsiung University of Science and Technology
                        </h3>

                        <div className="mt-4 space-y-2 text-xl text-gray-700">
                            <p className="p-2 ml-4">
                                Department of Computer Science & Information Engineering<br />
                                (third year student)<br />
                                2020 - 2024
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Education;