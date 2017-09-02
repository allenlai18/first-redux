// book list needs to be aware of the state with redux so its a container
// (smart component) 

import React, { Component } from 'react';
import { connect } from 'react-redux';  

class BookList extends Component {
    renderList() {
        return this.props.books.map( (book) => {
            return (
                <li key={book.title} className="list-group-item">{book.title}</li>
            );
        });
    }
    render () {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }
}

// state contains array of books and active book
function mapStateToProps(state) {
    // whatever returned will show up as props inside of booklist
    return {
        books: state.books
    };
}


export default connect(mapStateToProps) (BookList);


