/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: EditBook
// ====================================================

export interface EditBook_editBook_author {
  __typename: "Author";
  name: string | null;
  id: string | null;
}

export interface EditBook_editBook {
  __typename: "Book";
  id: string | null;
  name: string | null;
  genre: string | null;
  author: EditBook_editBook_author | null;
}

export interface EditBook {
  editBook: EditBook_editBook | null;
}

export interface EditBookVariables {
  id: string;
  name: string;
  genre: string;
  authorId: string;
}
