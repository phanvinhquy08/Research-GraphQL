import { gql } from "@apollo/client";
import BookList from "../Component_v2/BookList";
import BookForm from "../Component_v2/BookForm";

const FETCH_RESOURCE = gql`
  query FetchResource {
    books {
      ...BookFragment
    }
    authors {
      ...AuthorSelectFragment
    }
  }
  ${BookList.fragments.books}
`;

const getBooksQuery = gql`
  query GetAllBooks {
    books {
      ...BookFragment
    }
  }
  ${BookList.fragments.books}
`;

const getAuthorQuery = gql`
  query GetAllAuthors {
    authors {
      name
      id
    }
  }
`;

const addBookMutation = gql`
  mutation Addbook($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      ...BookFragment
    }
  }
  ${BookList.fragments.books}
`;

const getBookQuery = gql`
  query GetBookDetail($id: ID!) {
    book(id: $id) {
      ...BookFragment
    }
  }
  ${BookList.fragments.books}
`;

const editBookMutation = gql`
  mutation EditBook($id: ID!, $name: String!, $genre: String!, $authorId: ID!) {
    editBook(id: $id, name: $name, genre: $genre, authorId: $authorId) {
      ...BookFragment
    }
  }
  ${BookList.fragments.books}
`;

export {
  getAuthorQuery,
  getBooksQuery,
  addBookMutation,
  getBookQuery,
  editBookMutation,
};
