// // ?populate=*

export type ThumbnailFormat = {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string | null;
  size: number;
  width: number;
  height: number;
};

export type Cover = {
  data: {
    id: number;
    attributes: {
      name: string;
      alternativeText: string | null;
      caption: string | null;
      width: number;
      height: number;
      formats: {
        thumbnail: ThumbnailFormat;
      };
      hash: string;
      ext: string;
      mime: string;
      size: number;
      url: string;
      previewUrl: string | null;
      provider: string;
      provider_metadata: any | null;
      createdAt: string;
      updatedAt: string;
    };
  };
};

export type Author = {
  data: {
    id: number;
    attributes: {
      name: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
    };
  };
};

export type Categorie = {
  data: {
    id: number;
    attributes: {
      name: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
    };
  };
};

export type Post = {
  id: number;
  attributes: {
    title: string;
    content: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    cover: Cover;
    author: Author;
    categorie: Categorie;
  };
};

export type Pagination = {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
};

export type ApiResponse = {
  data: Post[];
  meta: {
    pagination: Pagination;
  };
};

// Example usage:
// const jsonData: ApiResponse = {
//   // ... (your JSON data here)
// };
