import React from 'react'
import { Search } from 'lucide-react'
type Props = {
    searchText: string,
    setSearchText: (value: string) => void
}
const SearchBar = ({ searchText, setSearchText }: Props) => {
    return (
        <div className="relative w-full sm:w-[300px] group transition-all duration-300 ease-in-out">
            <input
                type="text"
                placeholder="Search by name, phone, or condition"
                className="w-full pl-4 pr-10 py-2 rounded-xl bg-[#2a324a] text-white placeholder-gray-400 
                   focus:outline-none focus:ring-2 focus:ring-[#BB71FF] focus:pl-5
                   transition-all duration-300 ease-in-out"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
            />
            <Search
                className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 
                   transition-transform duration-300 group-focus-within:scale-110 group-focus-within:text-[#BB71FF]"
            />
        </div>
    )
}

export default SearchBar
