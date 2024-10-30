import "./../styles/Donate.css";

function Donate() {
    return (
        <div id="donate">
            <h1 id="donate-header">Donate Towards a Cause</h1>
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