/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAllBooks
// ====================================================

export interface GetAllBooks_books_author {
  __typename: "Author";
  name: string | null;
  id: string | null;
}

export interface GetAllBooks_books {
  __typename: "Book";
  id: string | null;
  name: string | null;
  genre: string | null;
  author: GetAllBooks_books_author | null;
}

export interface GetAllBooks {
  books: (GetAllBooks_books | null)[] | null;
}
