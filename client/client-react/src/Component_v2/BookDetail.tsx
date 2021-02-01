import React from "react";
import { Button, Descriptions, Skeleton, Empty } from "antd";
import { LazyQueryResult, NetworkStatus } from "@apollo/client";

import { BookVar, BookData } from "../App";

type Props = {
  result: LazyQueryResult<BookData, BookVar>;
};

const BookDetail: React.FC<Props> = ({ result }) => {
  const { data, loading, refetch, networkStatus } = result;

  return (
    <Skeleton loading={loading || networkStatus === NetworkStatus.refetch}>
      {data ? (
        <Descriptions
          layout='horizontal'
          bordered
          extra={
            <Button type='primary' onClick={() => refetch && refetch()}>
              Refetch
            </Button>
          }
        >
          <Descriptions.Item label='id' span={3}>
            {data?.book.id}
          </Descriptions.Item>
          <Descriptions.Item label='name' span={3}>
            {data?.book.name}
          </Descriptions.Item>
          <Descriptions.Item label='genre' span={3}>
            {data?.book.genre}
          </Descriptions.Item>
          <Descriptions.Item label='author' span={3}>
            {data?.book.author.name}
          </Descriptions.Item>
        </Descriptions>
      ) : (
        <Empty />
      )}
    </Skeleton>
  );
};

export default BookDetail;
