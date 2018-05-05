import React from "react";

export default class LoginForm extends React.Component {
	state = {
		username: "",
		password: "",
		errors: {
			noPassword: false,
			noUsername: false
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

	onSubmit = event => {
		event.preventDefault();
		const { setUsername, currentUser, showGreetings } = this.props;

		const { username, password } = this.state;

		const re = /[a-zA-Z0-9'-\s]/g;
		let symbols = Array.from(username).filter(el => {
			if(!el.match(re)){
				return el;
			}
		});

		if (symbols.length > 0) {
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

			if (currentUser === username && password.length > 0) {
				showGreetings();
			} else if (currentUser === username && password.length === 0) {
				this.setState({
					errors: {
						noPassword: true
					}
				})
			} 

			if (currentUser !== username && username.length > 0 && password.length > 0) {
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
			<form className="login-form col-md-6 needs-validation">
				<div className="login-form__group form-group">
					<label htmlFor="username" className="font-weight-bold login-form__label">Login</label>
					<input
						type="text"
						className="form-control login-form__input"
						id="username"
						value={this.state.username}
						onChange={this.handleChange}
						name="username"
						required
					/>
					{
						this.state.errors.noUsername ? 
						<div className="invalid-feedback d-block login-form__error">
							Username can contain only letters, numbers, space, dash and apostrophe!
						</div> : null
					}
				</div>
				<div className="login-form__group form-group">
					<label htmlFor="exampleInputPassword1" className="font-weight-bold login-form__label">Password</label>
					<input
						type="password"
						className="form-control login-form__input"
						id="password"
						value={this.state.password}
						onChange={this.handleChange}
						name="password"
						required
					/>
					{
						this.state.errors.noPassword ?
						<div className="invalid-feedback d-block login-form__error">Password can not be empty!</div> : null
					}
				</div>
				<div className = "form-check login-form__check">
					<input type="checkbox" className="form-check-input login-form__input" id="checkbox" />
					<label className="form-check-label login-form__label" htmlFor="checkbox">Remember me</label>
				</div>
				<div className="d-flex flex-column flex-sm-row justify-content-between align-items-center">
					<input type="submit" className="btn btn-dark mb-3 login-form__submit" onClick={this.onSubmit} value="Log in" />
					<a href="#" className="font-weight-bold text-dark login-form__link">Need help logging in?</a>
				</div>
			</form>
		);
	}
}