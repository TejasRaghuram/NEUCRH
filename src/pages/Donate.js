import "./../styles/Donate.css";

function Organization(props) {
    return (
        <div class="organization">
            <h2>{props.name}</h2>
            <p class="org-desc">{props.description}</p>
            <p class="org-funds">Funds: ${props.funds}</p>
            <button class="org-donate">Donate</button>
        </div>
    );
}

function Donate() {
    return (
        <div id="donate">
            <h1 id="donate-header">Donate Towards a Cause</h1>
            <input id="donate-amount" type="number" placeholder="Enter Donation Amount."/>
            <div id="donate-flex">
                <Organization name="Red Cross" description="This is a description." funds={100}/>
                <Organization name="Red Cross" description="This is a description." funds={100}/>
                <Organization name="Red Cross" description="This is a description." funds={100}/>
                <Organization name="Red Cross" description="This is a description." funds={100}/>
                <Organization name="Red Cross" description="This is a description." funds={100}/>
                <Organization name="Red Cross" description="This is a description." funds={100}/>
                <Organization name="Red Cross" description="This is a description." funds={100}/>
                <Organization name="Red Cross" description="This is a description." funds={100}/>
            </div>
            <button id="donate-smart">Smart Donate</button>
            <h2 id="funds-header">Add Funds</h2>
            <form>
                <input class="input" type="number" placeholder="Credit Card Number"/>
                <br/>
                <input class="input" type="number" placeholder="Money Amount"/>
                <br/>
                <input id="submit" type="submit"/>
            </form>
        </div>
    );
}

export default Donate;