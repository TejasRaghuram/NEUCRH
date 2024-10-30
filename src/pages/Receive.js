import { useNavigate } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import { UserContext } from '../UserContext';
import Load from "./../styles/Load.png";
import './../styles/Receive.css';

function Receive() {
    const navigate = useNavigate();
    const user = useContext(UserContext);
    const [balance, setBalance] = useState('-');
    useEffect(() => {
        fetch('http://localhost:4000/api/routes/getFunds', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username: user.username
            })
        })
            .then(response => response.json())
            .then(json => {
                setBalance(json);
            })
    }, [user.username]);
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
            <p id="balance">Your Balance: ${balance}</p>
            <h2>Register as a Receiver:</h2>
            <form>
                <p class='radio-header'>Enter Race Information:</p>
                <input class="radio" type="radio" name="race" value="Hispanic"/>
                <label>Hispanic</label>
                <br/>
                <input class="radio" type="radio" name="race" value="Not Hispanic"/>
                <label>Not Hispanic</label>
                <br/>
                <p class='radio-header'>Enter Sex Information:</p>
                <input class="radio" type="radio" name="sex" value="Male"/>
                <label>Male</label>
                <br/>
                <input class="radio" type="radio" name="sex" value="Female"/>
                <label>Female</label>
                <br/>
                <p class='radio-header'>Enter Income Information:</p>
                <input class="radio" type="radio" name="income" value="14999"/>
                <label>Under $15,000</label>
                <br/>
                <input class="radio" type="radio" name="income" value="29999"/>
                <label>Under $30,000</label>
                <br/>
                <input class="radio" type="radio" name="income" value="59999"/>
                <label>Under $60,000</label>
                <br/>
                <input class="radio" type="radio" name="income" value="99999"/>
                <label>Under $100,000</label>
                <br/>
                <input class="radio" type="radio" name="income" value="149999"/>
                <label>Under $150,000</label>
                <br/>
                <input class="radio" type="radio" name="income" value="150001"/>
                <label>Over $150,000</label>
                <br/>
                <input id="register-submit" type="submit" onClick={async (event) => {
                    event.preventDefault();
                    let race = null;
                    var raceElements = document.getElementsByName('race');
                    for (let i = 0, length = raceElements.length; i < length; i++) {
                        if (raceElements[i].checked) {
                            race = raceElements[i].value;
                            break;
                        }
                    }
                    let sex = null;
                    var sexElements = document.getElementsByName('sex');
                    for (let i = 0, length = sexElements.length; i < length; i++) {
                        if (sexElements[i].checked) {
                            sex = sexElements[i].value;
                            break;
                        }
                    }
                    let income = null;
                    var incomeElements = document.getElementsByName('income');
                    for (let i = 0, length = incomeElements.length; i < length; i++) {
                        if (incomeElements[i].checked) {
                            income = incomeElements[i].value;
                            break;
                        }
                    }
                    if (race != null && sex != null && income != null) {
                        const response = await fetch('http://localhost:4000/api/routes/makeReceiver', {
                            method: 'post',
                            headers: {'Content-Type': 'application/json'},
                            body: JSON.stringify({
                                username: user.username,
                                hispanicLatino: race === "Hispanic" ? true : false,
                                sex: sex,
                                income: parseInt(income)
                            })
                        });
                        if (response.ok) {
                            alert('Success!');
                        } else {
                            const json = await response.json();
                            alert(JSON.stringify(json));
                        }
                    }
                    const race_buttons = document.getElementsByName('race');
                    for (let i = 0; i < race_buttons.length; i++) {
                        const button = race_buttons[i];
                        button.checked = false;
                    }
                    const sex_buttons = document.getElementsByName('sex');
                    for (let i = 0; i < sex_buttons.length; i++) {
                        const button = sex_buttons[i];
                        button.checked = false;
                    }
                    const income_buttons = document.getElementsByName('income');
                    for (let i = 0; i < income_buttons.length; i++) {
                        const button = income_buttons[i];
                        button.checked = false;
                    }
                }}/>
            </form>
        </div>
    );
}

export default Receive;