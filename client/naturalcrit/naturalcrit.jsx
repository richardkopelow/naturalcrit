const React = require('react');
const _     = require('lodash');
const cx    = require('classnames');

const CreateRouter = require('pico-router').createRouter;

//Pages
const HomePage = require('./homePage/homePage.jsx');
const SignupPage = require('./signupPage/signupPage.jsx');
const LoginPage = require('./loginPage/loginPage.jsx');

let Router;
const Naturalcrit = React.createClass({
	getDefaultProps: function() {
		return {
			user : null,
			url : ''
		};
	},

	componentWillMount: function() {
		Router = CreateRouter({
			'/login' : (args, query) => {
				return <LoginPage
					redirect={query.redirect}
					user={this.props.user} />
			},
			'*' : () => {
				return <HomePage />
			}
		});
	},
	render : function(){
		return <div className='naturalcrit'>
			<Router initialUrl={this.props.url}/>
		</div>
	}
});

module.exports = Naturalcrit;
