import React from 'react';

class ObsForm extends React.Component {
	constructor() {
		super();
		this.state = {
			birdname: '',
			birdrarity: '',
			date: '',
			notes: '',
		};
	}

	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	handleSubmit = e => {
		e.preventDefault();
		this.props.addobservationr({
			birdname: this.state.birdname,
			birdrarity: this.state.birdrarity,
			date: this.state.date,
			notes: this.state.notes,
		});
		this.props.history.push('/');
	};

	render() {
		return (
			<div>
				<h2> Add new observation </h2>
			</div>
		);
	}
}

export default ObsForm;
