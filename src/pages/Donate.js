import { useContext, useState, useEffect } from "react";
import "./../styles/Donate.css";
import { UserContext } from "../UserContext";
import { useNavigate } from "react-router-dom";
import Load from './../styles/Load.png';

function Organization(props) {
    const user = useContext(UserContext);
    return (
        <div class="organization">
            <h2>{props.name}</h2>
            <p class="org-desc">{props.description}</p>
            <p class="org-funds">Funds: ${props.funds}</p>
            <button class="org-donate" onClick={async () => {
                const amount = document.getElementById('donate-amount').value;
                if (amount === '') {
                    alert('Please Select a Donation Amount.');
                    return;
                }
                const money = parseInt(amount);
                const response = await fetch('http://localhost:4000/api/routes/addFundsOrg', {
                    method: 'post',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        username: user.username,
                        amount: money,
                        organizationName: props.name
                    })
                });
                if (response.ok) {
                    alert('Success!');
                } else {
                    const json = await response.json();
                    alert(json.error);
                }
            }}>Donate</button>
        </div>
    );
}

function Donate() {
    const navigate = useNavigate();
    const user = useContext(UserContext);
    const [orgs, setOrgs] = useState([<p>Loading...</p>])
    useEffect(() => {
        fetch('http://localhost:4000/api/routes/getOrgs', {
            method: 'get',
            headers: {'Content-Type': 'application/json'},
        })
            .then(response => response.json())
            .then(json => {
                const arr = [];
                for (let i = 0; i < json.length; i++) {
                    arr.push(<Organization name={json[i].name} description={json[i].description} funds={json[i].funds}/>);
                }
                setOrgs(arr);
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
        <div id="donate">
            <h1 id="donate-header">Donate Towards a Cause</h1>
            <input id="donate-amount" type="number" placeholder="Enter Donation Amount."/>
            <div id="donate-flex">
                {orgs}
            </div>
            <button id="donate-smart" onClick={async() => {
                const amount = document.getElementById('donate-amount').value;
                if (amount === '') {
                    alert('Please Select a Donation Amount.');
                    return;
                }
                const money = parseInt(amount);
                const response = await fetch('http://localhost:4000/api/routes/giveToReceivers', {
                    method: 'post',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        username: user.username,
                        amount: money
                    })
                });
                if (response.ok) {
                    alert("Success!");
                } else {
                    const json = await response.json();
                    alert(json.error);
                }
            }}>Smart Donate</button>
            <h2 id="funds-header">Add Funds</h2>
            <form>
                <input id="card" class="input" type="text" placeholder="Credit Card Number"/>
                <br/>
                <input id="deposit" class="input" type="number" placeholder="Money Amount"/>
                <br/>
                <input id="submit" type="submit" onClick={async (event) => {
                    event.preventDefault();
                    const card = document.getElementById('card').value;
                    if (isNaN(card) || card.length !== 16) {
                        alert('Enter Valid Credit Card Number!');
                        return;
                    }
                    const money = document.getElementById('deposit').value;
                    const response = await fetch('http://localhost:4000/api/routes/addFunds', {
                        method: 'post',
                        headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify({
                            username: user.username,
                            amount: parseInt(money)
                        })
                    });
                    if (response.ok) {
                        alert('Success!');
                        document.getElementById('card').value = '';
                        document.getElementById('deposit').value = null;
                    } else {
                        const json = await response.json();
                        alert(json.error);
                    }
                }}/>
            </form>
        </div>
    );
}

export default Donate;