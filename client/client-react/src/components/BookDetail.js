import React, { useState } from 'react'
import { useMutation, useQuery } from '@apollo/client';

import { getBookQuery } from '../queries/queries';

const BookDetail = props => {
    const { loading, error, data } = useQuery(getBookQuery, { variables: { id : props.id }});
    return (
        <div className="book-detail">
            {loading && <div>Loading...</div>}
            {data && (
                <div>
                    <p>{data.book.name}</p>
                    <p>{data.book.author.name}</p>
                </div>
            )}
        </div>  
    )
}

export default BookDetail
