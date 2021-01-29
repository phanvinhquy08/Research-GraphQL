import React, { useState } from "react";
import { useMutation, useQuery, NetworkStatus } from "@apollo/client";

import { getBookQuery } from "../queries/queries";

const BookDetail = ({ result }) => {
  const { data, loading, networkStatus, refetch } = result;

  const { client } = result;

  if (networkStatus === NetworkStatus.refetch) {
    return <div>Refetch !!! </div>;
  }

  return (
    <div className="book-detail">
      {loading && <div>Loading...</div>}
      {data && (
        <div>
          <p>{data.book.name}</p>
          <button onClick={() => refetch()}>Re fetch</button>
          <p>{data.book.author.name}</p>
        </div>
      )}
    </div>
  );
};

export default BookDetail;
