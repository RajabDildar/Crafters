import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
    placeholder?: string;
    onSearch: (value: string) => void;
}

const SearchBar = ({ placeholder = "Search...", onSearch }: SearchBarProps) => {
    return (
        <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
                type="search"
                placeholder={placeholder}
                className="pl-10 rounded-2xl" // Add padding to the left so text doesn't overlap the icon
                onChange={(e) => onSearch(e.target.value)}
            />
        </div>
    );
}

export default SearchBar
