/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetBookDetail
// ====================================================

export interface GetBookDetail_book_author {
  __typename: "Author";
  name: string | null;
  id: string | null;
}

export interface GetBookDetail_book {
  __typename: "Book";
  id: string | null;
  name: string | null;
  genre: string | null;
  author: GetBookDetail_book_author | null;
}

export interface GetBookDetail {
  book: GetBookDetail_book | null;
}

export interface GetBookDetailVariables {
  id: string;
}
