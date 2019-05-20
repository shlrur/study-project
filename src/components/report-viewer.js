import * as React from "react";
import { connect } from "react-redux";
import _ from "lodash";

import BootstrapTable from "react-bootstrap-table-next";
// import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";

// const { SearchBar } = Search;

class ReportViewer extends React.Component {
  constructor(props) {
    super(props);

    this.debounced = _.debounce(
      this.searchKeywordChangeHandler.bind(this),
      300
    );
    this.valueForPreventDuplicated = "";

    this.state = {
      expanded: [],
      originReportList: [],
      showingReportList: [],
      searchKeyword: ""
    };

    this.columns = [
      {
        dataField: "id",
        text: "ind",
        hidden: true
      },
      {
        dataField: "date",
        text: "날짜",
        sort: true
      },
      {
        dataField: "name",
        text: "이름",
        sort: true
      },
      {
        dataField: "level",
        text: "직급",
        sort: true
      }
    ];

    this.expandRow = {
      renderer: row => {
        return (
          <div>
            <p>{`This Expand row is belong to rowKey ${row.id}`}</p>
            <p>[지난주]</p>
            <p>{row.contents.result}</p>
            <p>[이번주]</p>
            <p>{row.contents.plan}</p>
          </div>
        );
      },
      showExpandColumn: true,
      expandColumnPosition: "right",
      expandHeaderColumnRenderer: ({ isAnyExpands }) => {
        if (isAnyExpands) {
          return (
            <div className="text-center">
              <b>-</b>
            </div>
          );
        }
        return (
          <div className="text-center">
            <b>+</b>
          </div>
        );
      },
      expandColumnRenderer: ({ expanded }) => {
        if (expanded) {
          return (
            <div className="text-center">
              <b>줄이기</b>
            </div>
          );
        }
        return (
          <div className="text-center">
            <b>보기</b>
          </div>
        );
      },
      expanded: []
    };
  }

  render() {
    this.expandRow.expanded = this.state.expanded;

    return (
      <div className="row">
        <div className="search">
          <input
            type="text"
            className="form-control"
            placeholder="Search text"
            value={this.state.searchKeyword}
            onChange={this.searchKeywordChanged.bind(this)}
          />
        </div>
        {/* <ToolkitProvider
          keyField="id"
          data={this.props.reportList}
          columns={this.columns}
          search
        >
          {props => (
            <div>
              <h3>Input something at below input field:</h3>
              <SearchBar {...props.searchProps} />
              <hr />
              <BootstrapTable {...props.baseProps} expandRow={this.expandRow} />
            </div>
          )}
        </ToolkitProvider> */}
        <BootstrapTable
          keyField="id"
          data={this.state.showingReportList}
          columns={this.columns}
          expandRow={this.expandRow}
        />
      </div>
    );
  }

  componentWillReceiveProps(next) {
    const { reportList } = next;

    this.setState({
      originReportList: reportList,
      showingReportList: reportList
    });
  }

  // onTest() {
  //   this.setState({
  //     expanded: ["김영준05-20"]
  //   });
  // }

  searchKeywordChanged(e) {
    this.setState({
      searchKeyword: e.target.value
    });

    this.debounced();
  }

  searchKeywordChangeHandler() {
    if (this.valueForPreventDuplicated === this.state.searchKeyword) {
      return;
    }

    if (!this.state.searchKeyword.replace(/^\s+|\s+$/g, "")) {
      this.setState({
        showingReportList: this.state.originReportList,
        expanded: []
      });
      return;
    }

    this.valueForPreventDuplicated = this.state.searchKeyword;

    this.filterReportsBySearchKeyword(this.state.searchKeyword);
  }

  filterReportsBySearchKeyword(keyword) {
    let showingReportList = this.state.originReportList.filter(report => {
      return (
        report.name.indexOf(keyword) !== -1 ||
        report.level.toString().indexOf(keyword) !== -1 ||
        report.date.indexOf(keyword) !== -1 ||
        report.contents.result.indexOf(keyword) !== -1 ||
        report.contents.plan.indexOf(keyword) !== -1
      );
    });
    this.setState({
      showingReportList,
      expanded: showingReportList.map(report => {
        return report.id;
      })
    });
  }
}

const mapStateToProps = state => ({
  reportList: state.businessReport.reportList
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReportViewer);
