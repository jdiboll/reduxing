import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


 class Userlist extends Component {


 	createListItem() {
		let users = this.props.users;


 		return this.props.users.map((user) => {
 			return(
 				<li key={user.id}>{user.name}: {user.age}</li>
 				)
 		});
 	}




	render() {
		return (
			<ul>
				{this.createListItem()}	
			</ul>
			);
	};

};

	function mapStateToProps(state) {
		return {
			users: state.users
		};

	}


export default connect(mapStateToProps)(Userlist);