import React, { useState } from "react";
import { Row, Col, Button } from "antd";
import { useLazyQuery, useQuery, useApolloClient } from "@apollo/client";

import BookForm from "./Component_v2/BookForm";
import BookList from "./Component_v2/BookList";
import BookDetail from "./Component_v2/BookDetail";
import { getBookQuery, getBooksQuery, getAuthorQuery } from "./queries/queries";

export interface Author {
  id: string;
  name: string;
  age: number;
  books: Book[];
}

export interface Book {
  id: string;
  name: string;
  genre: string;
  author: Author;
}

export interface BooksData {
  books: Book[];
}

export interface BooksVar {}

export interface BookData {
  book: Book;
}

export interface BookVar {
  id: string;
}

export interface InitialValues {
  id?: string;
  book?: string;
  gerne?: string;
  author?: string;
}

const App: React.FC = () => {
  const [initialValues, setInitialValues] = useState<InitialValues>({});

  const [getBookDetail, bookResult] = useLazyQuery<BookData, BookVar>(
    getBookQuery,
    { notifyOnNetworkStatusChange: true }
  );

  const booksResult = useQuery<BooksData, BooksVar>(getBooksQuery);

  const client = useApolloClient();

  // read query
  const getDataLocal = () => {
    const data = client.readQuery<BooksData>({ query: getBooksQuery });
    console.log(data?.books);
  };
  // read fragment
  const getBookLocal = () => {
    const data = client.readFragment({
      id: "Book:5f71544b825824223c644fc5",
      fragment: BookList.fragments.books,
    });
    console.log(data);
  };

  return (
    <div id='main'>
      <Row
        style={{
          height: "100vh",
          margin: "0 16px",
          maxHeight: "100vh",
          padding: "32px",
        }}
      >
        <Col
          span={11}
          style={{
            maxHeight: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Button type='primary' onClick={getDataLocal}>
            Query local books
          </Button>
          <Button type='primary' onClick={getBookLocal}>
            Query local book fragment
          </Button>
          <BookForm
            initialValues={initialValues}
            setInitialValues={setInitialValues}
          />
          <BookList
            getBookDetail={getBookDetail}
            result={booksResult}
            setInitialValues={setInitialValues}
          />
        </Col>
        <Col span={2}></Col>
        <Col span={11}>
          <BookDetail result={bookResult} />
        </Col>
      </Row>
    </div>
  );
};

export default App;
