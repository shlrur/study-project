import * as React from "react";
import { connect } from "react-redux";

import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";

const { SearchBar } = Search;

class ReportViewer extends React.Component {
  constructor(props) {
    super(props);

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
            <p>지난주 실적</p>
            <p>[이번주]</p>
            <p>이번주 계획</p>
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
      }
    };
  }

  render() {
    return (
      <div className="row">
        <ToolkitProvider
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
        </ToolkitProvider>
      </div>
    );
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
