import React from 'react';
import FormTitle from './FormTitle';
import SignUp from './SignUp';
import LoginSocial from './LogInSocial';
import LoginForm from './LoginForm';
import LogedIn from './LogedIn';

export default class App extends React.Component {
	state = {
		username: "",
		greeting: false
	}

	setUsername = username => {
		const json = JSON.stringify(username);
		localStorage.setItem('username', json);
	}

	showGreetings = () => {
		this.setState({
			greeting: true
		})
	}

	componentDidMount() {
		try {
			const json = localStorage.getItem('username');
			const username = JSON.parse(json);

			if (username) {
				this.setState({
					username
				});
			}
		} catch (e) {
			
		}
	}

	render() {
		const { username, greeting } = this.state;
		return (
			<div>
				{greeting ? (
					<LogedIn 
						username={this.state.username}
					/>) : (
						<div className="form">
						<FormTitle />
						<div className="row">
							<LoginSocial />
							<LoginForm
								setUsername = {this.setUsername}
								currentUser = {username}
								showGreetings = {this.showGreetings}
							/>
						</div>
						<SignUp />
					</div>
					)}
			</div>
		);
	}
}