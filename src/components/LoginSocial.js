import React from 'react';

const LoginSocial = () => (
	<div className="left-part col-md-6 d-flex flex-column align-items-center flex-sm-row justify-content-sm-between justify-content-sm-start align-items-sm-start flex-md-column justify-content-md-start align-items-md-stretch">
		<button type="button" className="btn btn-primary mb-4 d-flex justify-content-sm-around">
			<svg className="svg mr-3 mr-md-5" fill="#ffffff" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
				<path d="M14.984 0.187v4.125h-2.453c-1.922 0-2.281 0.922-2.281 2.25v2.953h4.578l-0.609 4.625h-3.969v11.859h-4.781v-11.859h-3.984v-4.625h3.984v-3.406c0-3.953 2.422-6.109 5.953-6.109 1.687 0 3.141 0.125 3.563 0.187z"></path>
			</svg>
			Log in with Facebook
		</button>
		<button type="button" className="btn btn-danger d-flex justify-content-sm-around">
		<svg className="svg mr-3 mr-md-5" fill="#ffffff" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
				<path d="M1.989 5.589c0 1.494 0.499 2.572 1.482 3.205 0.806 0.52 1.74 0.598 2.226 0.598 0.118 0 0.213-0.006 0.279-0.010 0 0-0.154 1.004 0.59 1.996h-0.034c-1.289 0-5.493 0.269-5.493 3.727 0 3.516 3.861 3.695 4.636 3.695 0.061 0 0.097-0.002 0.097-0.002 0.008 0 0.063 0.002 0.158 0.002 0.497 0 1.782-0.062 2.975-0.643 1.548-0.75 2.333-2.059 2.333-3.885 0-1.764-1.196-2.814-2.069-3.582-0.533-0.469-0.994-0.873-0.994-1.266 0-0.4 0.337-0.701 0.762-1.082 0.689-0.615 1.339-1.492 1.339-3.15 0-1.457-0.189-2.436-1.354-3.057 0.121-0.062 0.551-0.107 0.763-0.137 0.631-0.086 1.554-0.184 1.554-0.699v-0.099h-4.599c-0.046 0.002-4.651 0.172-4.651 4.389zM9.413 14.602c0.088 1.406-1.115 2.443-2.922 2.574-1.835 0.135-3.345-0.691-3.433-2.096-0.043-0.676 0.254-1.336 0.835-1.863 0.589-0.533 1.398-0.863 2.278-0.928 0.104-0.006 0.207-0.012 0.31-0.012 1.699 0.001 2.849 0.999 2.932 2.325zM8.212 4.626c0.451 1.588-0.23 3.246-1.316 3.553-0.125 0.035-0.253 0.052-0.384 0.052-0.994 0-1.979-1.006-2.345-2.393-0.204-0.776-0.187-1.458 0.047-2.112 0.229-0.645 0.643-1.078 1.163-1.225 0.125-0.035 0.254-0.053 0.385-0.053 1.2 0 1.972 0.498 2.45 2.178zM16 8v-3h-2v3h-3v2h3v3h2v-3h3v-2h-3z"></path>
			</svg>
			Log in with Google +
		</button>
	</div>
)

export default LoginSocial;