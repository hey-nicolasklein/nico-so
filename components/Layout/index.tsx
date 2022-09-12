import React from "react";

const Layout = (props: {
    children: React.ReactNode;
    overlay?: boolean;
    center?: boolean;
}) => {
    return (
        <div className="w-full overflow-hidden pb-32">
            <div className="mx-auto max-w-4xl px-10 sm:px-12 xl:px-0">
                {props.children}
            </div>
        </div>
    );
};

export default Layout;
