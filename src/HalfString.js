import React from "react";
export default class HalfString extends React.Component {
    constructor() {
        super()
        this.state = { half: "no string entered" }
        this.state = { str: "", rev: "", orginal: "" }
        // this.handler=this.handler.bind(this)
    }
    handler = (event) => {
        let s = event.target.value
        let shalf = s.substring(0, s.length / 2).toUpperCase()
        this.setState({ half: shalf })
    }

    revHandler = (e) => {
        let ischecked = e.target.checked
        if (ischecked) {
            let s = this.state.str
            let rev = ""
            for (let i = s.length - 1; i >= 0; i--) {
                rev += s.charAt(i)
            }
            this.setState({ str: rev, rev: rev })
        }
        else {

            this.setState({ str: this.state.orginal })
        }
    }

    radioHandler = (event) => {
        switch (event.target.id) {
            case "uc":
                let s = this.state.str;
                let s1 = s.toUpperCase()
                this.setState({ str: s1 })
                break;
            case "lc":
                let s3 = this.state.str;
                let s4 = s3.toLowerCase()
                this.setState({ str: s4 })
                break;
            case 'tc':
                let s5 = this.state.str;
                let s6 = s5.charAt(0) .toUpperCase()
                let s7 = s5.substring(1).toLowerCase()
                this.setState({ str: s6 + s7 })
                break;
            default:
                break;

        }
    }

    render() {
        return (
            <>
                <div>
                    Enter the string:<input type="text" onChange={this.handler} />
                    <p>HalfString:{this.state.half}</p>

                </div>

                <div>

                    Enter the string:<input type="text" onBlur={(event) => {
                        this.setState({ orginal: event.target.value, str: event.target.value })
                    }} />
                </div>
                <div>
                    Reverse:<input type="checkbox" onClick={this.revHandler} />
                </div>
                <div>
                    UpperCase:<input type="radio" id="uc"  name="btn"onClick={this.radioHandler} />
                    LowerCase:<input type='radio' id="lc" name="btn"onClick={this.radioHandler} />
                    TitleCase:<input type="radio" id="tc" name="btn" onClick={this.radioHandler} />
                </div>
                <p>Output:{this.state.str}</p>
            </>
        )
    }
}