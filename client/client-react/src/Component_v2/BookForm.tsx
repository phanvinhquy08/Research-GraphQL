import React, { useEffect } from "react";
import { Form, Input, Select, Button, Row, Col, notification } from "antd";
import { useQuery, useMutation, DocumentNode, gql } from "@apollo/client";
import { isEmpty } from "lodash";

import { Author, InitialValues, BookData, Book, BooksData } from "../App";
import {
  getAuthorQuery,
  editBookMutation,
  addBookMutation,
  getBooksQuery,
} from "../queries/queries";
import BookList from "./BookList";

interface AuthorData {
  authors: Author[];
}

interface AuthorVar {}

interface AddBookVar {
  id?: string;
  name?: string;
  genre?: string;
  authorId?: string;
}

interface AddBook {
  addBook: Book;
}

type Props = {
  initialValues: InitialValues;
  setInitialValues: (value: InitialValues) => void;
};

type Fragments = {
  fragments: { [key: string]: DocumentNode };
};

const BookForm: React.FC<Props> & Fragments = ({
  initialValues,
  setInitialValues,
}) => {
  const { data } = useQuery<AuthorData, AuthorVar>(getAuthorQuery);

  const [editBook, { loading: editLoading }] = useMutation<
    BookData,
    AddBookVar
  >(editBookMutation, {
    onCompleted: () => {
      notification.success({ message: "DONE" });
      setInitialValues({});
      form.resetFields();
    },
  });

  const [addBook, { loading: addLoading }] = useMutation<AddBook, AddBookVar>(
    addBookMutation,
    {
      update: (cache, result) => {
        // WRITE QUERY

        const mutationResult = result.data;
        const data = cache.readQuery<BooksData>({ query: getBooksQuery });
        const ref = cache.writeQuery({
          query: getBooksQuery,
          data: { books: [...data!.books, mutationResult!.addBook] },
        });
        console.log(ref);
        // CACHE MODIFY

        // cache.modify({
        //   // id: cache.identify(),
        //   fields: {
        //     books: (existingBooksRef = [], { readField }) => {
        //       const newBookRef = cache.writeFragment({
        //         fragment: BookList.fragments.books,
        //         data: result.data?.addBook,
        //       });
        //       console.log(existingBooksRef, newBookRef);
        //       return [...existingBooksRef, newBookRef];
        //     },
        //   },
        // });
      },
    }
  );

  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue(initialValues);
  }, [initialValues, form]);

  const onSubmit = (value: InitialValues) => {
    if (isEmpty(initialValues)) {
      addBook({
        variables: {
          name: value.book,
          genre: value.gerne,
          authorId: value.author,
        },
      });
    } else {
      editBook({
        variables: {
          id: initialValues.id,
          name: value.book,
          genre: value.gerne,
          authorId: value.author,
        },
      });
    }
  };

  return (
    <div>
      <Form form={form} labelCol={{ span: 4 }} onFinish={onSubmit}>
        <Form.Item
          name="book"
          label="Book name"
          rules={[{ required: true, message: "Please input book name" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="gerne"
          label="Gerne"
          rules={[{ required: true, message: "Please input gerne" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="author"
          label="Author"
          rules={[{ required: true, message: "Please choose author" }]}
        >
          <Select>
            {data?.authors.map((item) => (
              <Select.Option key={item.id} value={item.id}>
                {item.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Row>
          <Col span={4}></Col>
          <Col span={20}>
            <Button
              htmlType="submit"
              type="primary"
              loading={editLoading || addLoading}
            >
              {isEmpty(initialValues) ? "Add book" : "Edit Book"}
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

BookForm.fragments = {
  authors: gql`
    fragment AuthorSelectFragment on Author {
      id
      name
    }
  `,
};

export default BookForm;
