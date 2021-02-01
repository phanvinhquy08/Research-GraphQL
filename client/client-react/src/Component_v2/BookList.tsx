import React from "react";
import { Button, List } from "antd";
import {
  QueryLazyOptions,
  QueryResult,
  gql,
  DocumentNode,
} from "@apollo/client";

import { BookVar, BooksVar, BooksData, InitialValues } from "../App";

type Props = {
  getBookDetail: (option?: QueryLazyOptions<BookVar>) => void;
  result: QueryResult<BooksData, BooksVar>;
  setInitialValues: (value: InitialValues) => void;
};

type Fragments = {
  fragments: { [key: string]: DocumentNode };
};

const BookList: React.FC<Props> & Fragments = ({
  getBookDetail,
  result,
  setInitialValues,
}) => {
  const { data, loading, error } = result;

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
                  type='primary'
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
