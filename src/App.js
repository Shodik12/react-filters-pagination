import React, {Component} from 'react';
import {connect} from 'react-redux';
import {filterByValue, loadData, loadExactPage, loadNewPage, sortByAlphabet, sortByPrice} from "./store";

class App extends Component {

    componentDidMount() {
        const params = new URLSearchParams(window.location.search);
        const pageQueryParam = params.get('page');
        if (!pageQueryParam) {
            window.history.pushState({page: 1}, "title 1", "?page=1");
        } else {

        }
        this.props.dispatch(loadData({count: 40}));
    }

    filterByInput(e){
        let input = e.target.value;
        this.props.dispatch(filterByValue({value: input}))
    }

    nextPage() {
        this.props.dispatch(loadNewPage({page: 1}))
    }

    previousPage() {
        this.props.dispatch(loadNewPage({page: -1}));
    }

    goToPage(page) {
        this.props.dispatch(loadExactPage({page}))
    }

    sortByInput(e){
        let value = e.target.value;
        let direction = value.endsWith('asc') ? "asc" : "desc";

        if (value.startsWith('price')){
            this.props.dispatch(sortByPrice({direction}))
        }else {
            this.props.dispatch(sortByAlphabet({direction}));
        }
    }

    render() {
        let products = this.props.state.filteredProducts;
        return (
            <div className="App">
                <section className="hero">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title">
                                Pagination, Filtering and Sorting with React
                            </h1>
                            <h2 className="subtitle">
                                A detailed guide
                            </h2>
                        </div>
                    </div>
                </section>
                




const App = () => {
  const [contacts, setContacts] = React.useState([
    { "id": 1,"photo": Avatar, "name": "Tamma Everill", "phone": "+351 888 411 5474" },
    { "id": 2,"photo": Avatar, "name": "Alejandrina Alexis", "phone": "+62 188 649 7200" },
    { "id": 3,"photo": Avatar, "name": "Hakim Bruntjen", "phone": "+86 241 773 8545" },
    { "id": 4,"photo": Avatar, "name": "Prudi Dagwell", "phone": "+62 606 216 1097" },
    { "id": 5,"photo": Avatar, "name": "Prent Frizell", "phone": "+86 808 891 5427" },
    { "id": 6,"photo": Avatar, "name": "Curtis Enterlein", "phone": "+64 836 110 1773" },
    { "id": 7,"photo": Avatar, "name": "Tamma Everill", "phone": "+351 888 411 5474" },
      ]);

{contacts.map(({ id, photo, name, phone }) => (
          <div className="contact-container" key={id}>
            <img src={photo} alt={name} className="avatar" />
            <div className="text-container">
              <h5 className="name">{name}</h5>
              <p className="phone">{phone}</p>
            </div>
          </div>
        ))}



                <section className='section'>
                    <div className='container'>
                        <div>
                            
                        </div>
                        <div className='tile is-ancestor' style={{flexWrap: "wrap"}}>
                            {
                                products && products.length && products.map(product => (
                                    <div className='tile is-parent is-3'>
                                        <div className='tile is-child box'>
                                            <p>
                                                <b>Name: </b>
                                                {product.name}
                                            </p>
                                            <p>
                                                <b>Designer: </b>
                                                {product.designer}
                                            </p>
                                            <p>
                                                <b>Type: </b>
                                                {product.type}
                                            </p>
                                            <p>
                                                <b>Price: </b>
                                                ${product.price}
                                            </p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </section>
<nav className="pagination" role="navigation" aria-label="pagination">
                            <button className="button pagination-previous" onClick={() => {
                                this.previousPage()
                            }}>Previous
                            </button>
                            <button className="button pagination-next" onClick={() => {
                                this.nextPage()
                            }}>Next page
                            </button>
                            <ul className="pagination-list">
                                {
                                    [...Array(this.props.state.filteredPages)].map((value, index) => (
                                        <button
                                            className={`button pagination-link ${this.props.state.currentPage === index + 1 ? "is-current" : ""}`}
                                            aria-label="Page 1"
                                            onClick={() => this.goToPage(index + 1)}
                                            aria-current="page">
                                            {index + 1}
                                        </button>
                                    ))
                                }
                            </ul>
                        </nav>

            </div>

        );
    }
}

function mapStateToProps(state) {
    return {state};
}

export default connect(mapStateToProps)(App);
