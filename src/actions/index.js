export function selectBook(book) {
    // select book is an ActionCreator, it need to return 
    // an object with a type property.
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}
