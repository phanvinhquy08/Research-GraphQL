/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FetchResource
// ====================================================

export interface FetchResource_books_author {
  __typename: "Author";
  name: string | null;
  id: string | null;
}

export interface FetchResource_books {
  __typename: "Book";
  id: string | null;
  name: string | null;
  genre: string | null;
  author: FetchResource_books_author | null;
}

export interface FetchResource_authors {
  __typename: "Author";
  id: string | null;
  name: string | null;
}

export interface FetchResource {
  books: (FetchResource_books | null)[] | null;
  authors: (FetchResource_authors | null)[] | null;
}
