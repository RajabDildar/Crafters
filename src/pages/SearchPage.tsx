import { useState } from "react";
import SearchBar from "@/components/explore/SearchBar";
import Circles from "@/components/explore/Circles";
import HelperButtons from "@/components/explore/HelperButtons";

// Array of cards (circles) to display
const circlesData = [
    { desc: "a diverse community of crafters", image: "nkjnk", membersCount: 70, date: "12-12-2000", circleName: "Name" },
    { desc: "a diverse community of crafters", image: "nkjnk", membersCount: 70, date: "12-12-2000", circleName: "Name1" },
    { desc: "a diverse community of crafters", image: "nkjnk", membersCount: 70, date: "12-12-2000", circleName: "Name2" },
    { desc: "a diverse community of crafters", image: "nkjnk", membersCount: 70, date: "12-12-2000", circleName: "Name3" },
    { desc: "a diverse community of crafters", image: "nkjnk", membersCount: 70, date: "12-12-2000", circleName: "Name4" },
    { desc: "a diverse community of crafters", image: "nkjnk", membersCount: 70, date: "12-12-2000", circleName: "Name5" },
    { desc: "a diverse community of crafters", image: "nkjnk", membersCount: 70, date: "12-12-2000", circleName: "Name" },
    { desc: "a diverse community of crafters", image: "nkjnk", membersCount: 70, date: "12-12-2000", circleName: "Name" },
    { desc: "a diverse community of crafters", image: "nkjnk", membersCount: 70, date: "12-12-2000", circleName: "Name" },
    { desc: "a diverse community of crafters", image: "nkjnk", membersCount: 70, date: "12-12-2000", circleName: "Name" },
    { desc: "a diverse community of crafters", image: "nkjnk", membersCount: 70, date: "12-12-2000", circleName: "Name" },
];

const SearchPage = () => {
    const [searchTerm, setSearchTerm] = useState("");

    // Filter circles based on the search term (case-insensitive)
    const filteredCircles = circlesData.filter((circle) =>
        circle.circleName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="min-h-dvh pb-12">
            <div className="p-6 space-y-4">
                <SearchBar onSearch={setSearchTerm} />
            </div>
            <HelperButtons />
            <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-3 p-3">
                {(searchTerm ? filteredCircles : circlesData).map((circle, idx) => (
                    <Circles
                        key={idx}
                        image={circle.image}
                        count={circle.membersCount}
                        date={circle.date}
                        name={circle.circleName}
                        desc={circle.desc}
                    />
                ))}
            </div>
        </div>
    );
};

export default SearchPage
