import * as React from "react";
import { connect } from "react-redux";

import { getLabMemberInfoRequest } from "../redux/actions/members";

class SearchMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      memberCandidates: [],
      selectedTeam: {},
      selectedPerson: {}
    };
  }

  render() {
    return (
      <div className="row">
        <label className="col-md-3">Team</label>
        <div className="col-md-3 dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenu1"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {this.state.selectedTeam ? this.state.selectedTeam.name : "loading"}
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenu1">
            {this.props.teamList.map(team => {
              return (
                <button
                  key={team.id}
                  className="dropdown-item"
                  type="button"
                  onClick={this.selectTeam.bind(this, team.id)}
                >
                  {team.name}
                </button>
              );
            })}
          </div>
        </div>
        <label className="col-md-3">Member</label>
        <div className="col-md-3 dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenu2"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {this.state.selectedPerson
              ? this.state.selectedPerson.name
              : "loading"}
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
            {this.state.memberCandidates.map(person => {
              return (
                <button
                  key={person.id}
                  className="dropdown-item"
                  type="button"
                  onClick={this.selectPerson.bind(this, person.id)}
                >
                  {person.name}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.props.getLabMemberInfoRequest();
  }

  componentWillReceiveProps(next) {
    const { teamList, peopleList } = next;

    this.setState({
      memberCandidates: [...peopleList],
      selectedTeam: teamList[0],
      selectedPerson: peopleList[0]
    });
  }

  selectTeam(teamId) {
    if (this.state.selectedTeam.id === teamId) {
      return;
    }

    const selectedTeam = this.props.teamList.filter(team => {
      return team.id === teamId;
    })[0];
    const memberCandidates = this.props.peopleList.filter(person => {
      return (
        selectedTeam.id === -1 ||
        person.id === -1 ||
        selectedTeam.id === person.teamId
      );
    });

    this.setState({
      memberCandidates,
      selectedTeam,
      selectedPerson: memberCandidates[0]
    });
  }

  selectPerson(personId) {
    if (this.state.selectedPerson.id === personId) {
      return;
    }

    const selectedPerson = this.props.peopleList.filter(person => {
      return person.id === personId;
    })[0];

    this.setState({
      selectedPerson
    });
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
