import React from "react";

class SearchBar extends React.Component {
  state = { term: '' }; //short for searchterm

  onInputChange = event => {
    this.setState({ term: event.target.value });
  }; //method on the class

  onFormSubmit = event => {
    event.preventDefault(); // no refresh after pressing enter on searchbar

    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form"> {/*onSubmit is a special name*/}
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange} //onChange is a special name / onInputChange is a callback function on the SearchBar class / instead of this.onInputChange for this.setState, could've been e=> this.setState({ term: e.target.value })
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
