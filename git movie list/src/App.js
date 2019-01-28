import React from "react";
import ReactDOM from "react-dom";
//import {hot} from "react-hot-loader";
import "./App.css";
import movies from './movieData.js';
import MovieList from './MovieList.js';
import Search from './Search.js';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      searchStr: '',
      submittedSearchStr: null,
      movies1: movies
    };
    this.handleSubmitSearchSearchSearchSearch = this.handleSubmitSearchSearchSearchSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmitSearchSearchSearchSearch(e) {
    this.setState({
      submittedSearchStr: this.state.searchStr
    })
  };

  handleChange(txt) {
    this.setState({
      searchStr: txt.target.value
    })
  }

  render(){
    var filterText = this.state.submittedSearchStr;
    return(
      <div className="App">
        <h1>Movie List!</h1>
        <Search handleChange = {this.handleChange} handleSubmitSearchSearchSearchSearch = {this.handleSubmitSearchSearchSearch}/>
        {
          this.state.movies1.map((movie) => {
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