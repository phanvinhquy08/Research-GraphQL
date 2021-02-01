import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";

import {
  getAuthorQuery,
  addBookMutation,
  getBooksQuery,
} from "../queries/queries";

const AddBook = (props) => {
  const [book, setBook] = useState(undefined);
  const [genre, setGenre] = useState(undefined);
  const [author, setAuthor] = useState(undefined);
  const { data } = useQuery(getAuthorQuery);
  const [Addbook] = useMutation(addBookMutation);

  const onSubmit = (e) => {
    e.preventDefault();
    Addbook({
      variables: { name: book, genre, authorId: author },
      refetchQueries: [{ query: getBooksQuery }],
    });
  };

  return (
    <div className='addBook'>
      <form action='#' id='add-book' onSubmit={onSubmit}>
        <div className='field'>
          <label htmlFor='bookName'>Book name: </label>
          <input
            type='text'
            value={book}
            onChange={(e) => setBook(e.target.value)}
          />
        </div>
        <div className='field'>
          <label htmlFor='genre'>Genre: </label>
          <input
            type='text'
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
        </div>
        <div className='field'>
          <label htmlFor=''>Author: </label>
          <select
            name='author'
            id='author'
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          >
            {data?.authors.map((item) => (
              <option value={item.id} key={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <button type='submit'>Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
