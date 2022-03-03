import React, { useState, useContext } from "react";
import { useHistory, Redirect } from "react-router-dom";
import { toast } from "react-toastify";

import { UserContext } from "../UserContext";

// functions
import { login } from "../api/user";
import { SectionInputLabel, SectionInputLabelCheckbox, SectionInputStyle, SectionStyle, SectionTitleStyle } from "../style-components/SectionStyle";
import { SubmitBtnStyle } from "../style-components/Buttons";

const Login = () => {
	const history = useHistory();
	const { userctx, setUserctx } = useContext(UserContext);


	// form states
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);

	const handleLogin = async (e) => {
		e.preventDefault();

		// try {
		// 	const res = await login({ email, password });
		// 	if (res.error) toast.error(res.error);
		// 	else {
		// 		toast.success(res.message);
		// 		setUserctx(res.username);
		// 		// redirect the user to home
		// 		history.replace("/user-info");
		// 	}
		// } catch (err) {
		// 	toast.error(err);
		// }

		try {

      const res = await login({email, password });
	  if (res.error) toast.error(res.error);
		else {

        toast.success(res.message);
        setUserctx(res.username);
        // redirect the user to home
        history.replace("/user-info");
		}
    } catch (err) {
      toast.error(err);
    }
	};

	return !userctx ? (
		<SectionStyle>
			<SectionTitleStyle>Login</SectionTitleStyle>
			<SectionInputLabel>
			<SectionInputStyle placeholder="Email" type="email" label="Email" value={email}
			onChange={(e) => setEmail(e.target.value)}/>
			</SectionInputLabel>
			<SectionInputLabel>
			<SectionInputStyle placeholder="Password" type={showPassword ? "text" : "password"} label="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
			</SectionInputLabel>

<SectionInputLabelCheckbox>

    <label className="control control-checkbox">
        Show Password
            <input type="checkbox" onClick={() =>
										setShowPassword(!showPassword)
									} />
        <div className="control_indicator"></div>

    </label>
	</SectionInputLabelCheckbox>

      <SubmitBtnStyle disabled={!email || !password} onClick={handleLogin}>
			Submit
			</SubmitBtnStyle>
			</SectionStyle>

	) : (
		<Redirect to="/" />
	);

};

export default Login;
