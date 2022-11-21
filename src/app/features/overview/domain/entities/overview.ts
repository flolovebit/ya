export interface OverviewArticle {
  type: string;
  avatar: string;
  name: string;
  id: string;
}

export interface OverviewArticleState {
    selected:string,
    entities:OverviewArticle[],
    pagination: Pagination;
    criteria: string;
    loading: boolean;
    error:any
  }

  export interface ApiResponse {
    items: OverviewArticle[];
  }

  export interface Pagination {
    selectedSize: number;
    currentPage: number;
    pageSizes: number[];
    
  }
