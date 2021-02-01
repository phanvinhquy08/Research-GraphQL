/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: Addbook
// ====================================================

export interface Addbook_addBook_author {
  __typename: "Author";
  name: string | null;
  id: string | null;
}

export interface Addbook_addBook {
  __typename: "Book";
  id: string | null;
  name: string | null;
  genre: string | null;
  author: Addbook_addBook_author | null;
}

export interface Addbook {
  addBook: Addbook_addBook | null;
}

export interface AddbookVariables {
  name: string;
  genre: string;
  authorId: string;
}
