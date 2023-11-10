import { Dispatch, SetStateAction, createContext } from "react";

export interface ISearchContext {
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
}

export const SearchContext = createContext<ISearchContext | null>(null!);
