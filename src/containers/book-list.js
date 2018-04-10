// book list needs to be aware of the state with redux so its a container
// (smart component)
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';


class BookList extends Component {
    renderList() {
        return this.props.books.map( (book) => {
            return (
                <li
                    key={book.title}
                    onClick={() => this.props.selectBook(book)}
                    className="list-group-item">
                    {book.title}
                </li>
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

// takes application state and shows up as props
// state contains array of books and active book
function mapStateToProps(state) {
    // whatever returned will show up as props inside of booklist
    return {
        books: state.books
    };
}

// anything returned from this function will end up as props
// on the booklist container.
function mapDispatchToProps(dispatch) {
    // whenever select book is called,
    // the result should be passed to all the reducers
    return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// promote booklist from a component to a container -
// it needs to know about htis new dispatch, select book. make it as a prop
export default connect(mapStateToProps, mapDispatchToProps) (BookList);

// takes a function and component -- makes a container, container is aware of redux state
// export default connect(mapStateToProps) (BookList);
