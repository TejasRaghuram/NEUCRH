import './../signup.css';

function SignUp() {
    return (
        <div className="signup-container">
            <div className="title">Registration</div>
            <div className="content">
                <form action="#" onSubmit={(e) => e.preventDefault()}>
                    <div className="user-details">
                        <div className="input-box">
                            <label htmlFor="email" className="details">Email</label>
                            <input id="email" type="email" placeholder="Enter your email" required />
                        </div>
                        <div className="input-box">
                            <label htmlFor="phone" className="details">Phone Number</label>
                            <input id="phone" type="tel" placeholder="Enter your number" required />
                        </div>
                        <div className="input-box">
                            <label htmlFor="password" className="details">Password</label>
                            <input id="password" type="password" placeholder="Enter your password" required />
                        </div>
                        <div className="input-box">
                            <label htmlFor="confirm-password" className="details">Confirm Password</label>
                            <input id="confirm-password" type="password" placeholder="Confirm your password" required />
                        </div>
                    </div>
                    <div className="button">
                        <input type="submit" value="Register" />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignUp;
