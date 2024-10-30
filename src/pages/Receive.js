import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../UserContext';
import Load from "./../styles/Load.png";
import './../styles/Receive.css';

function Receive() {
    const navigate = useNavigate();
    const user = useContext(UserContext);
    if(user.username == null)
    {
        return(
            <img src={Load} alt='' onLoad={() => {
                navigate('/login');
            }}/>
        );
    }
    return (
        <div id="receive">
            <h1>Receive Money</h1>
            <p id="balance">Your Balance: $1000</p>
            <h2>Register as a Receiver:</h2>
            <form>
                <p class='radio-header'>Enter Race Information:</p>
                <input class="radio" type="radio" name="race"/>
                <label>Hispanic</label>
                <br/>
                <input class="radio" type="radio" name="race"/>
                <label>Not Hispanic</label>
                <br/>
                <p class='radio-header'>Enter Sex Information:</p>
                <input class="radio" type="radio" name="sex"/>
                <label>Male</label>
                <br/>
                <input class="radio" type="radio" name="sex"/>
                <label>Female</label>
                <br/>
                <p class='radio-header'>Enter Income Information:</p>
                <input class="radio" type="radio" name="income"/>
                <label>Under $15,000</label>
                <br/>
                <input class="radio" type="radio" name="income"/>
                <label>Under $30,000</label>
                <br/>
                <input class="radio" type="radio" name="income"/>
                <label>Under $60,000</label>
                <br/>
                <input class="radio" type="radio" name="income"/>
                <label>Under $100,000</label>
                <br/>
                <input class="radio" type="radio" name="sex"/>
                <label>Under $150,000</label>
                <br/>
                <input class="radio" type="radio" name="sex"/>
                <label>Over $150,000</label>
                <br/>
                <input id="register-submit" type="submit"/>
            </form>
        </div>
    );
}

export default Receive;