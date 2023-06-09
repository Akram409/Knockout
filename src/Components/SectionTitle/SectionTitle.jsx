

const SectionTitle = ({heading}) => {
    return (
        <div className="mx-auto text-center md:w-4/12 my-8">
            <h3 className="text-3xl uppercase border-y-4 py-4">{heading}</h3>
            <div className="border border-2 bg-black"></div>
        </div>
    );
};

export default SectionTitle;