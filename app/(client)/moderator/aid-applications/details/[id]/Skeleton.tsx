const Skeleton = () => {
    return (
        <div className="flex flex-col md:flex-row gap-8 animate-pulse">
            <div className="md:w-1/3 w-full">
                <div className="w-full h-[300px] rounded-xl bg-[#2a324a] border border-[#BB71FF]/30" />
            </div>
            <div className="md:w-2/3 w-full grid grid-cols-1 sm:grid-cols-2 gap-5 text-sm">
                {Array.from({ length: 12 }).map((_, i) => (
                    <div key={i} className="flex flex-col gap-2">
                        <div className="w-24 h-4 bg-[#2a324a] rounded" />
                        <div className="w-full h-8 bg-[#2a324a] rounded-xl" />
                    </div>
                ))}
                <div className="sm:col-span-2 flex flex-col gap-2">
                    <div className="w-24 h-4 bg-[#2a324a] rounded" />
                    <div className="w-full h-24 bg-[#2a324a] rounded-xl" />
                </div>
                <div className="sm:col-span-2 flex justify-between gap-4 ml-[190px]">
                    <div className="w-32 h-10 bg-[#2a324a] rounded-lg" />
                    <div className="w-32 h-10 bg-[#2a324a] rounded-lg" />
                </div>
            </div>
        </div>
    )
}

export default Skeleton
