import React from "react";

export default class LoginForm extends React.Component {
	constructor(){
		super();

		this.state = {
			username: "",
			password: "",
			errors: {
				noPassword: false,
				noUsername: false
			}
		}
	}

	handleChange = event => {
		this.setState({
			[event.target.name]: event.target.value,
			errors: {
				noPassword: false,
				noUsername: false
			}
		});
	}

	onSubmit = (event) => {
		event.preventDefault();
		const { setUsername, isUser, showCongratulation } = this.props;

		const { username, password } = this.state;

		let arrSym = Array.from(username).filter(sym => {
			if(!sym.match(/[a-zA-Z0-9'-\s]/g)){
				return sym;
			}
		});

		if (arrSym.length > 0) {
			this.setState({
					errors: {
						noUsername: true
					}
				})
		} else {
			const errors = {
				noUsername: username.length === 0,
				noPassword: password.length === 0
			};

			this.setState({
				errors
			});

			if (isUser === username && password.length > 0) {
				showCongratulation();
			} else if (isUser === username && password.length === 0) {
				this.setState({
					errors: {
						noPassword: true
					}
				})
			} 

			if (isUser !== username && username.length > 0 && password.length > 0) {
				setUsername(username);
				window.location.reload();

				this.setState({
					username: "",
					password: ""
				});
			}
		}
	}

	render() {
		return (
			<form className="form-login-container col-md-6 needs-validation">
					<div className="form-group">
						<label htmlFor="username" className="font-weight-bold">Login</label>
						<input
							type="text"
							className="form-control"
							id="username"
							value={this.state.username}
							onChange={this.handleChange}
							name="username"
							required
						/>
						{
							this.state.errors.noUsername ? 
							<div className="invalid-feedback d-block">
								Username can contain only letters, numbers, space, dash and apostrophe!
							</div> : null
						}
					</div>
					<div className="form-group">
						<label htmlFor="exampleInputPassword1" className="font-weight-bold">Password</label>
						<input
							type="password"
							className="form-control"
							id="password"
							value={this.state.password}
							onChange={this.handleChange}
							name="password"
							required
						/>
						{
							this.state.errors.noPassword ?
							<div className="invalid-feedback d-block">Password can not be empty!</div> : null
						}
					</div>
					<div className = "form-check login">
						<input type="checkbox" className="form-check-input" id="exampleCheck1" />
						<label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
					</div>
					<div className="d-flex flex-column flex-sm-row justify-content-between align-items-center">
						<input type="submit" className="btn btn-dark mb-3" onClick={this.onSubmit} value="Log in" />
						<a href="#" className="font-weight-bold text-dark">Need help logging in?</a>
					</div>
			</form>
		);
	}
}