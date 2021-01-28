import React, { useState } from 'react'
import { useMutation, useQuery, NetworkStatus } from '@apollo/client';

import { getBookQuery } from '../queries/queries';

const BookDetail = props => {
    console.log('render');
    const { loading, error, data, refetch,networkStatus } = useQuery(getBookQuery, { variables: { id : props.id }, notifyOnNetworkStatusChange: true, errorPolicy: 'none'});
    
    if(networkStatus === NetworkStatus.refetch) {
        return (
            <div>Refetch !!! </div>
        )
    }

    console.log(error);
    return (
        <div className="book-detail">
            {loading && <div>Loading...</div>}
            {data && (
                <div>
                    <p>{data.book.name}</p><button onClick={() => refetch()}>Re fetch</button>
                    <p>{data.book.author.name}</p>
                </div>
            )}
        </div>  
    )
}

export default BookDetail
