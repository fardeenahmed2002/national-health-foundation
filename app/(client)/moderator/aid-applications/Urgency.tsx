type Props = {
    urgency: string,
    setUrgency: (value: string) => void
}

const Urgency = ({ urgency, setUrgency }: Props) => {
    return (
        <div className="space-y-2">
            {["Normal", "Urgent", "Emergency"].map((level) => (
                <label
                    key={level}
                    className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-all duration-300
        ${urgency === level ? "bg-[#BB71FF]/20 scale-[1.02]" : "hover:bg-[#2a324a]"}`}
                    onClick={() => setUrgency(level)}
                >
                    <div
                        className={`w-4 h-4 flex items-center justify-center rounded-full border-2 transition-all duration-300 
          ${urgency === level ? "border-[#BB71FF]" : "border-gray-400"}`}
                    >
                        <div
                            className={`w-2 h-2 rounded-full transition-all duration-300
            ${urgency === level ? "bg-[#BB71FF] scale-100" : "scale-0 bg-transparent"}`}
                        />
                    </div>
                    <span className="text-white">{level}</span>
                </label>
            ))}
        </div>
    )
}

export default Urgency
