import React from 'react';

class AddMovie extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div>
				<input className='input' onChange={this.props.handleChangeAddMovie}></input>
				<button className='button' onClick={this.props.handleSubmitAddMovie}>Add Movie</button>
			</div>
		)
	}
}

export default AddMovie;