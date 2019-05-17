import * as React from "react";
import { connect } from "react-redux";

import { getLabMemberInfoRequest } from "../redux/actions/members";
import { getBusinessReportListRequest } from "../redux/actions/business-report";

import DateRange from "./date-range";

class SearchMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      memberCandidates: [],
      selectedTeam: null,
      selectedPerson: null,
      selectedDate: null
    };
  }

  render() {
    return (
      <div className="row">
        <label className="col-md-2">Team</label>
        <div className="col-md-2 dropdown">
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
        <label className="col-md-2">Member</label>
        <div className="col-md-2 dropdown">
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
        <div className="col-md-4">
          <DateRange onDateChange={this.selectDate.bind(this)} />
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

    this.setState(
      {
        memberCandidates,
        selectedTeam,
        selectedPerson: memberCandidates[0]
      },
      () => {
        this.getWeeklyReports();
      }
    );
  }

  selectPerson(personId) {
    if (this.state.selectedPerson.id === personId) {
      return;
    }

    const selectedPerson = this.props.peopleList.filter(person => {
      return person.id === personId;
    })[0];

    this.setState(
      {
        selectedPerson
      },
      () => {
        this.getWeeklyReports();
      }
    );
  }

  selectDate(dateRange) {
    this.setState(
      {
        selectedDate: dateRange
      },
      () => {
        this.getWeeklyReports();
      }
    );
  }

  getWeeklyReports() {
    if (
      !(
        this.state.selectedTeam &&
        this.state.selectedPerson &&
        this.state.selectedDate
      )
    ) {
      return;
    }

    this.props.getBusinessReportListRequest(
      this.state.selectedTeam,
      this.state.selectedPerson,
      this.state.selectedDate
    );
  }
}

const mapStateToProps = state => ({
  teamList: state.members.teamList,
  peopleList: state.members.peopleList
});

const mapDispatchToProps = {
  getLabMemberInfoRequest,
  getBusinessReportListRequest
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchMenu);
