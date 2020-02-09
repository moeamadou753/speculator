import React from "react";
import ReactSearchBox from "react-search-box";
import { validQueries } from "../variables/_queries";

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstQuery: ""
    };
  }

  render() {
    return (
      <div className="landing-page__main">
        <div className="landing-page__main__content-container">
          <ReactSearchBox
            placeholder="AAPL"
            data={validQueries}
            onSelect={record => console.log(record)}
            onFocus={() => {
              console.log("this functions is called when focused");
            }}
            onChange={value => console.log(value)}
          />
        </div>
      </div>
    );
  }
}

export default Landing;
