const Listitem = (props: { children: React.ReactNode }) => {
    return (
        <div className="flex gap-4 items-center mx-2 px-8 py-2 text-md font-black cursor-pointer dark:hover:bg-neutral-300 dark:hover:text-black hover:text-neutral-100 hover:bg-neutral-900 rounded-md select-none">
            {props.children}
        </div>
    );
};

export default Listitem;
