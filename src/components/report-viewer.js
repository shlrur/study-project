import * as React from "react";
import { connect } from "react-redux";

class ReportViewer extends React.Component {
  render() {
    return (
      <div className="row-md">
        {this.props.reportList.map(report => {
          return (
            <div key={report.name + report.date}>
              <div>{report.name}</div>
              <div>{report.date}</div>
              <div>{report.contents}</div>
            </div>
          );
        })}
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
