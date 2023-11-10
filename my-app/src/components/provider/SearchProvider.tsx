import { ReactNode, useState } from "react";
import { SearchContext } from "../context/SearchContext";

export interface SearchProviderProps {
  children: ReactNode;
}
const SearchProvider = ({ children }: SearchProviderProps) => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
