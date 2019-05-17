import * as React from "react";
import moment from "moment";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";

class DateRange extends React.Component {
  constructor(props) {
    super(props);

    const today = moment();
    let thisWeek = today.isoWeekday(),
      startDtts = today.clone().subtract(thisWeek - 1, "day"),
      endDtts = today.clone().add(7 - thisWeek, "day");

    this.state = {
      dateRange: [startDtts.toDate(), endDtts.toDate()]
    };

    this.props.onDateChange([startDtts.toDate(), endDtts.toDate()]);
  }

  render() {
    return (
      <div>
        <DateRangePicker
          onChange={this.onDateChange.bind(this)}
          value={this.state.dateRange}
        />
      </div>
    );
  }

  onDateChange(date) {
    this.setState(
      {
        dateRange: [...date]
      },
      () => {
        this.props.onDateChange(this.state.dateRange);
      }
    );
  }
}

export default DateRange;
