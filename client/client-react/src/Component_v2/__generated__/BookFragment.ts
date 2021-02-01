/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: BookFragment
// ====================================================

export interface BookFragment_author {
  __typename: "Author";
  name: string | null;
  id: string | null;
}

export interface BookFragment {
  __typename: "Book";
  id: string | null;
  name: string | null;
  genre: string | null;
  author: BookFragment_author | null;
}
