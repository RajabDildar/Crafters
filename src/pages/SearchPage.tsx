import { useState } from "react";
import SearchBar from "@/components/explore/SearchBar";
import Circles from "@/components/explore/Circles";
import HelperButtons from "@/components/explore/HelperButtons";

// Array of cards (circles) to display
const circlesData = [
    { image: "nkjnk", membersCount: 70, date: "12-12-2000", circleName: "Name" },
    { image: "nkjnk", membersCount: 70, date: "12-12-2000", circleName: "Name1" },
    { image: "nkjnk", membersCount: 70, date: "12-12-2000", circleName: "Name2" },
    { image: "nkjnk", membersCount: 70, date: "12-12-2000", circleName: "Name3" },
    { image: "nkjnk", membersCount: 70, date: "12-12-2000", circleName: "Name4" },
    { image: "nkjnk", membersCount: 70, date: "12-12-2000", circleName: "Name5" },
    { image: "nkjnk", membersCount: 70, date: "12-12-2000", circleName: "Name" },
    { image: "nkjnk", membersCount: 70, date: "12-12-2000", circleName: "Name" },
    { image: "nkjnk", membersCount: 70, date: "12-12-2000", circleName: "Name" },
    { image: "nkjnk", membersCount: 70, date: "12-12-2000", circleName: "Name" },
    { image: "nkjnk", membersCount: 70, date: "12-12-2000", circleName: "Name" },
];

const SearchPage = () => {
    const [searchTerm, setSearchTerm] = useState("");

    // Filter circles based on the search term (case-insensitive)
    const filteredCircles = circlesData.filter((circle) =>
        circle.circleName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="min-h-dvh">
            <div className="p-6 space-y-4">
                <SearchBar onSearch={setSearchTerm} />
            </div>
            <HelperButtons />
            <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-3 p-3">
                {(searchTerm ? filteredCircles : circlesData).map((circle, idx) => (
                    <Circles
                        key={idx}
                        image={circle.image}
                        membersCount={circle.membersCount}
                        date={circle.date}
                        circleName={circle.circleName}
                    />
                ))}
            </div>
        </div>
    );
};

export default SearchPage
