import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NoMatch from './pages/NoMatch';
import Nav from './components/Nav/Nav';
import Create from './pages/Create';
import Friends from './pages/Friends';
import Profile from './pages/Profile';
import Landing from './pages/Landing';
import FriendRegistry from './pages/FriendRegistry';
import Signup from './components/Signup';
import Login from './components/Login';

// import Signup from "./components/Signup";
// import Login from "./components/Login";
// import Share from "./pages/Share";
import Start from './pages/Start';

//Navigation imports ***PENDING PAGES CREATION***
// import Landing from "./pages/Landing";
import Shopping from './pages/Shopping';
// import FriendRegistry from "./pages/FriendRegistry"
// import Profile from "./pages/Profile";
import ResetPswd from './components/ResetPswd';

const initialState = {
	uuid: '',
	account_key: '',
	sessionId: '',
	email: '',
	firstName: '',
	lastName: '',
	screenName: '',
	pic: '',
	shareWithMe: [],
	shareWithOthers: [],
	notes: ''
};

class App extends Component {
	state = initialState;

	updateStateItem = (updates) => {
		console.log('updateStateItem: ', updates);
		this.setState({
			...this.state,
			uuid: updates.uuid,
			screenName: updates.screenName,
			firstName: updates.firstName,
			lastName: updates.lastName,
			pic: updates.pic,
			notes: updates.notes
		});
	};

	updateState = (updates) => {
		console.log('updateState: ', updates);
		this.setState({
			...this.state,
			[updates.key]: updates.value
		});
	};

	render() {
		return (
			<Router>
				<div>
					<Nav />
					<Switch>
						<Route
							exact
							path="/"
							render={() => (
								<Start
									updateState={this.updateState}
									updateStateItem={this.updateStateItem}
									state={this.state}
								/>
							)}
						/>
						<Route
							exact
							path="/Landing"
							render={() => <Landing update={this.updateState} state={this.state} />}
						/>
						<Route
							exact
							path="/create"
							render={() => <Create update={this.updateState} state={this.state} />}
						/>
						<Route
							exact
							path="/reset"
							render={() => <ResetPswd update={this.updateState} state={this.state} />}
						/>
						<Route
							exact
							path="/friends"
							render={() => <Friends update={this.updateState} state={this.state} />}
						/>
						<Route
							exact
							path="/FriendRegistry/:userId"
							render={(props) => <FriendRegistry {...props} update={this.updateState} state={this.state} />}
						/>
						<Route
							exact
							path="/Shopping"
							render={() => <Shopping update={this.updateState} state={this.state} />}
						/>
						<Route
							exact
							path="/Profile"
							render={() => <Profile update={this.updateState} state={this.state} />}
						/>
						<Route
							exact
							path="/Signup"
							render={() => <Signup update={this.updateState} state={this.state} />}
						/>
						<Route
							exact
							path="/Login"
							render={() => <Login update={this.updateState} state={this.state} />}
						/>

						{/* //Navigation imports ***PENDING PAGES CREATION*** */}

						<Route component={NoMatch} />
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
