import React, { useState } from "react";
import { useQuery, useLazyQuery } from "@apollo/client";
import { getBooksQuery, getBookQuery } from "../queries/queries";
import BookDetail from "./BookDetail";

const BookList = (props) => {
  const { loading, error, data } = useQuery(getBooksQuery, {
    displayName: "QUY",
  });

  const [getBook, result] = useLazyQuery(getBookQuery, {
    notifyOnNetworkStatusChange: true,
    fetchPolicy: "network-only",
    onCompleted: (data) => console.log(data),
  });

  const displayBook = (params) => {
    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error!</div>;
    }

    return data.books.map((item) => (
      <li onClick={() => getBook({ variables: { id: item.id } })} key={item.id}>
        {item.name}
      </li>
    ));
  };

  return (
    <div>
      <ul id="book-list">{displayBook()}</ul>
      <BookDetail result={result} />
    </div>
  );
};

export default BookList;
