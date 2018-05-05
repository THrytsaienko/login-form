import React from 'react';
import FormTitle from './FormTitle';
import SignUp from './SignUp';
import LoginSocial from './LogInSocial';
import LoginForm from './LoginForm';
import LogedIn from './LogedIn';

export default class App extends React.Component {
	constructor(){
		super();
		this.state = {
			username: "",
			showCong: false
		}
	}

	setUsername = username => {
		const json = JSON.stringify(username);
		localStorage.setItem('username', json);
	}

	showCongratulation = () => {
		this.setState({
			showCong: true
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
			// Do nothing at all
		}
	}

	render() {
		const { username, showCong } = this.state;
		return (
			<div>
				{showCong === true ? (
					<LogedIn 
						username={this.state.username}
					/>) : (
						<div className="form">
						<FormTitle />
						<div className="row">
							<LoginSocial />
							<LoginForm
								setUsername = {this.setUsername}
								isUser = {username}
								showCongratulation = {this.showCongratulation}
							/>
						</div>
						<SignUp />
					</div>
					)}
			</div>
		);
	}
}