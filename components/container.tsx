import React, { ReactNode } from "react";

const Container = (props: { className?: string, children: ReactNode }) => {
    return (
        <div className="flex items-center justify-center">
            <div className={`container p-8 md:min-h-screen ${props.className ? props.className : ""}`}>
                {props.children}
            </div>
        </div>
    );
};

export default Container;