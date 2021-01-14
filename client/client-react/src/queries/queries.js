import { gql } from '@apollo/client';

const getBooksQuery = gql`
    {
        books {
            name
            id
        }
    }
`
const getAuthorQuery = gql`
    {
        authors {
            name
            id
        }
    }
`

const addBookMutation = gql` 
    mutation Addbook($name: String!, $genre: String!, $authorId: ID!){
        addBook(name: $name, genre: $genre, authorId: $authorId) {
            name,
            id,
        }
    }
`

const getBookQuery = gql`
    query($id: ID!) {
        book(id: $id) {
            id,
            name,
            genre,
            author {
                name, 
                id, 
                age,
                books {
                    id,
                    name
                }
            }
        }
    }
`

export { getAuthorQuery, getBooksQuery, addBookMutation, getBookQuery }