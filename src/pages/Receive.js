import './../styles/Receive.css';

function Receive() {
    // 0 - 15, 15 - 30, 30 - 60, 60 - 100, 100 - 150, 150+
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