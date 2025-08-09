const Skeleton = () => {
    return (
        <div className="bg-[#1c2333] w-full rounded-2xl p-6 shadow-lg space-y-3">
            <div className="flex justify-between">
                <div className="h-4 w-40 bg-[#2a324a] rounded" />
                <div className="h-4 w-6 bg-[#2a324a] rounded" />
            </div>
            <div className="h-4 w-52 bg-[#2a324a] rounded" />
            <div className="h-4 w-48 bg-[#2a324a] rounded" />
            <div className="h-4 w-44 bg-[#2a324a] rounded" />
            <div className="h-4 w-40 bg-[#2a324a] rounded" />
        </div>
    );
};

export default Skeleton;
