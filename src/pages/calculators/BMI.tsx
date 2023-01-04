const BMI = () => {
    return (
        <div className="min-h-full text-colors w-full m-8 mt-16 rounded-md">
            <div className="title">BMI calculator</div>
            <p className="normal-text">
                The body mass index (or BMI) is a measure which shows whether
                people have the right weight for their height. The World Health
                Organisation (WHO), governments and health workers use it. It is
                also sometimes called the Quetelet index.
            </p>
            <p className="normal-text">
                Source:{' '}
                <a href="https://simple.wikipedia.org/wiki/Body_mass_index">
                    Wikipedia
                </a>
            </p>

            <div className="flex flex-col gap-4 default-border rounded-md p-8 w-fit my-16">
                <div className="flex gap-4 items-center">
                    <div className="">Height</div>
                    <input
                        className="panel-bg py-1 px-2 default-border rounded-md outline-0 focus:border-teal-500 focus:ring-teal-500 focus:ring-1 w-24"
                        type="text"
                    />
                </div>
                <div className="flex gap-4 items-center">
                    <div>Weight</div>
                    <input
                        className="panel-bg py-1 px-2 default-border rounded-md outline-0 focus:border-teal-500 focus:ring-teal-500 focus:ring-1 w-24"
                        type="text"
                    />
                </div>
                <div>
                    <div className="my-8 normal-text font-black">Result</div>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default BMI;
