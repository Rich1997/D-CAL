const Layout = (props: { children: React.ReactNode }) => {
    return <div className="flex min-h-full mx-auto">{props.children}</div>;
};

export default Layout;
