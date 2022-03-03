import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";


import { UserContext } from "./UserContext";

import { toast, ToastContainer } from "react-toastify";
//import Home from "./pages/Home";
import AddEdit from "./pages/AddEdit";
import ContactDetail from "./pages/ContactDetail";
import "react-toastify/dist/ReactToastify.css";

// components
//import Header from "./components/Header";
import Navbar from "./components/Navigation/Navbar"
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Logger from "./pages/Logger";

// functions
import { getUser } from "./api/user";
import Panel from "./pages/Panel";

const App = () => {
	const [userctx, setUserctx] = useState(null);

	useEffect(() => {
		const unsubscribe = getUser()
			.then((res) => {
				if (res.error) toast(res.error);
				else setUserctx(res.username);
			})
			.catch((err) => toast(err));

		return () => unsubscribe;
	}, []);

	return (
		<div>
			<Router>
				<UserContext.Provider value={{ userctx, setUserctx }}>
					<ToastContainer />
					<Navbar />

					<Route exact path="/" component={Home} />
					<Route exact path="/user-info" component={Logger} />
					<Route exact path="/signup" component={Signup} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/panel" component={Panel} />
					<Route exact path="/addContact" component={AddEdit} />
                  	<Route exact path="/update/:id" component={AddEdit} />
                  	<Route exact path="/view/:id" component={ContactDetail} />
				</UserContext.Provider>
			</Router>
		</div>
	);
};

export default App;
