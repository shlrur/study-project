import * as React from "react";
import { connect } from "react-redux";

import { getLabMemberInfoRequest } from "../redux/actions/members";

class SearchMenu extends React.Component {
  render() {
    return (
      <div>
        <div>
          <label>Team</label>
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenu2"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
              <button className="dropdown-item" type="button">
                Action
              </button>
              <button className="dropdown-item" type="button">
                Another action
              </button>
              <button className="dropdown-item" type="button">
                Something else here
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.props.getLabMemberInfoRequest();
  }
}

const mapStateToProps = state => ({
  teamList: state.members.teamList,
  peopleList: state.members.peopleList
});

const mapDispatchToProps = {
  getLabMemberInfoRequest
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchMenu);

// export default SearchMenu;
