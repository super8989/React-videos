import React from "react";

class SearchBar extends React.Component {
  state = { term: '' }; //short for searchterm

  onInputChange = () => {

  }; //method on the class

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange} //onChange is a special name / onInputChange is a callback function on the SearchBar class
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
