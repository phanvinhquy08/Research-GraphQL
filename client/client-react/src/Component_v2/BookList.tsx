import React from "react";
import { Button, List } from "antd";
import {
  QueryLazyOptions,
  QueryResult,
  gql,
  DocumentNode,
  useMutation,
} from "@apollo/client";
import _ from "lodash";

import { BookVar, BooksVar, BooksData, InitialValues, Book } from "../App";
import { deleteBookQuery, getBooksQuery } from "../queries/queries";

type Props = {
  getBookDetail: (option?: QueryLazyOptions<BookVar>) => void;
  result: QueryResult<BooksData, BooksVar>;
  setInitialValues: (value: InitialValues) => void;
};

type Fragments = {
  fragments: { [key: string]: DocumentNode };
};

type DeleteBookData = {
  deleteBook: Book;
};

type DeleteBookVar = {
  id: string;
};

const BookList: React.FC<Props> & Fragments = ({
  getBookDetail,
  result,
  setInitialValues,
}) => {
  const { data, loading, error } = result;

  const [deleteBook] = useMutation<DeleteBookData, DeleteBookVar>(
    deleteBookQuery,
    {
      update: (cache, result) => {
        cache.modify({
          fields: {
            books: (existingRef = [], details) => {
              // const resultRef = cache.writeFragment({
              //   data: result.data?.deleteBook,
              //   fragment: BookList.fragments.books,
              // });
              // return existingRef.filter(
              //   (ref: any) => !_.isEqual(ref, resultRef)
              // );
              // return details.DELETE;
            },
          },
          // fields: (fields) => {
          //   console.log(fields);
          // },
        });
        // const data = cache.readQuery<BooksData, BooksVar>({
        //   query: getBooksQuery,
        // });
        // cache.writeQuery({
        //   query: getBooksQuery,
        //   data: {
        //     books: data?.books!.filter(
        //       (book) => book.id !== result.data?.deleteBook.id
        //     ),
        //   },
        // });
      },
    }
  );

  return error ? (
    <List />
  ) : (
    <div style={{ overflow: "auto" }}>
      <List
        dataSource={data?.books}
        loading={loading}
        renderItem={(item) => {
          return (
            <List.Item
              actions={[
                <Button
                  type="primary"
                  onClick={() =>
                    setInitialValues({
                      id: item.id,
                      book: item.name,
                      gerne: item.genre,
                      author: item.author.id,
                    })
                  }
                >
                  Edit
                </Button>,
                <Button
                  type="primary"
                  onClick={() => deleteBook({ variables: { id: item.id } })}
                >
                  Delete
                </Button>,
              ]}
              onClick={() => getBookDetail({ variables: { id: item.id } })}
              style={{ cursor: "pointer" }}
            >
              <List.Item.Meta
                title={item.name}
                description={item.author.name}
              />
              <p>{item.genre}</p>
            </List.Item>
          );
        }}
      />
    </div>
  );
};

BookList.fragments = {
  books: gql`
    fragment BookFragment on Book {
      id
      name
      genre
      author {
        name
        id
      }
    }
  `,
};

export default BookList;
