import React, { useState } from 'react'
import { useQuery } from '@apollo/client';
import { getBooksQuery } from '../queries/queries';
import BookDetail from './BookDetail';


const BookList = props => {
    const [id, setId] = useState(null);
    const { loading, error, data } = useQuery(getBooksQuery);
    const displayBook = (params) => {
        if (loading) {
            return (
                <div>Loading...</div>
            )
        }
        if (error) {
            return (
                <div>Error!</div>
            )
        }
        return data.books.map(item => (
            <li onClick={() => setId(item.id)} key={item.id}>{item.name}</li>
        ))
    }

    return (
        <div>
            <ul id="book-list">
                {displayBook()}
            </ul>
            <BookDetail id={id}/>
        </div>
    )

}

export default BookList
