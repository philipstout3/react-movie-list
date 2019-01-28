import React from 'react';

class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {searchStr: ''}
	}
	render() {
		return(
			<div className='searchCont'>
				<input id='search' className='search' onChange={this.props.handleChange}></input>
				<button className='button' onClick={this.props.handleSubmitSearch}>Search</button>
			</div>
		)
	}
}

export default Search;