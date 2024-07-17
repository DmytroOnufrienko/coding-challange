"use client";

import { FC, useEffect, useState } from "react";
import { Solicitation, solicitations } from "./data";
import { useDebounce } from "use-debounce";
import { Button } from "@modules/common/ui/button";
import { Input } from "@modules/common/ui/input";

interface ISearchBarProps {
  onSearch: (data: Solicitation[]) => void;
}

const SearchBar: FC<ISearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearch = () => {
    const filteredSolicitations = solicitations.filter((solicitation) =>
      solicitation.id.toLowerCase().includes(searchTerm.toLowerCase())
    );
    onSearch(filteredSolicitations);
  };

  const [debouncedSearchTerm] = useDebounce(searchTerm, 300);

  useEffect(() => {
    handleSearch();
  }, [debouncedSearchTerm]);

  return (
    <div className="flex flex-col gap-4">
      <span className="text-2xl font-medium">Bid Dashboard</span>
      <div className="flex gap-4">
        <Input
          placeholder="Enter a Bid ID"
          className="w-full"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button>Submit</Button>
      </div>
    </div>
  );
};

export default SearchBar;
