interface SearchResult {
    id: number;
    title: string;
    description: string;
    author: string;
    avatar: string;
    tags: string[];
    likes: number;
    comments: number;
    time: string;
}
interface UseSearchOptions {
    onSuccess?: (data: SearchResult[]) => void;
    onError?: (error: Error) => void;
}
interface UseSearchReturn {
    keyword: string;
    setKeyword: (keyword: string) => void;
    results: SearchResult[];
    loading: boolean;
    hasSearched: boolean;
    search: () => void;
    clearSearch: () => void;
}
declare function useSearch(options?: UseSearchOptions): UseSearchReturn;

export { useSearch as default };
export type { SearchResult, UseSearchOptions, UseSearchReturn };
