import React from "react";
import ReactDOM from "react-dom";
//import {hot} from "react-hot-loader";
import "./App.css";
//import movies from './movieData.js';
import MovieList from './MovieList.js';
import Search from './Search.js';
import AddMovie from './AddMovie.js';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      searchStr: '',
      submittedSearchStr: null,
      titleStr: '',
      movies: []
    };
    this.handleSubmitSearch = this.handleSubmitSearch.bind(this);
    this.handleChangeSearch = this.handleChangeSearch.bind(this);
    this.handleChangeAddMovie = this.handleChangeAddMovie.bind(this);
    this.handleSubmitAddMovie = this.handleSubmitAddMovie.bind(this);
  }

  handleSubmitSearch(e) {
    this.setState({
      submittedSearchStr: this.state.searchStr
    })
  };

  handleChangeAddMovie(txt) {
    this.setState({
      titleStr: txt.target.value
    })
  }

  handleSubmitAddMovie(txt) {
    this.state.movies.push({title: this.state.titleStr});
    this.setState({
      movies: this.state.movies,
    })
  }

  handleChangeSearch(txt) {
    this.setState({
      searchStr: txt.target.value
    })
  }

  render(){
    console.log('this.state.movies ==== ',this.state.movies);
    var filterText = this.state.submittedSearchStr;
    return(
      <div className="App">
        <h1>Movie List!</h1>
        <AddMovie handleChangeAddMovie = {this.handleChangeAddMovie} handleSubmitAddMovie = {this.handleSubmitAddMovie}/>
        <Search handleChangeSearch = {this.handleChangeSearch} handleSubmitSearch = {this.handleSubmitSearch}/>
        {
          this.state.movies.map((movie) => {
            if(movie.title.search(filterText) !== -1 || filterText === null){
              return <MovieList movie = {movie}/>
            }
            
          })
        }
      </div>
    );
  }
}

export default App;
//export default hot(module)(App);