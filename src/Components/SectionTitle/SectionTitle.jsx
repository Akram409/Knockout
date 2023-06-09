

const SectionTitle = ({heading}) => {
    return (
        <div className="mx-auto text-center md:w-4/12 my-8">
            <h3 className="text-4xl uppercase  py-4">{heading}</h3>
            <div className="border-2 border-red-400 max-w-xs mx-auto"></div>
        </div>
    );
};

export default SectionTitle;