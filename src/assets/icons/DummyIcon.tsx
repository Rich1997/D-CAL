const DummyIcon = (props: { size: number }) => {
    return (
        <svg
            height={props.size}
            className="rotate-[-15deg]"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        ></svg>
    );
};

export default DummyIcon;
