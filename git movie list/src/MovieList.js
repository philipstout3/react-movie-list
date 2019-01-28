import React from 'react';

class MovieList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {}
	}
	render(){
		return(
			<div className='movieContainer'>{this.props.movie.title}</div>
		)
	}
}

export default MovieList;