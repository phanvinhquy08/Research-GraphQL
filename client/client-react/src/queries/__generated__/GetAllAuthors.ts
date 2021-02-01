/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAllAuthors
// ====================================================

export interface GetAllAuthors_authors {
  __typename: "Author";
  name: string | null;
  id: string | null;
}

export interface GetAllAuthors {
  authors: (GetAllAuthors_authors | null)[] | null;
}
