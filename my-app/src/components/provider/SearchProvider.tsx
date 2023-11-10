import { ReactNode, useState } from "react";
import { ISearchContext, SearchContext } from "../context/SearchContext";

export interface SearchProviderProps {
  children?: ReactNode;
}
const SearchProvider = ({ children }: SearchProviderProps) => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const contextValue: ISearchContext = {
    searchQuery,
    setSearchQuery,
  };
  return (
    <SearchContext.Provider value={contextValue}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
