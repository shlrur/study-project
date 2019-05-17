export const types = {
  GET_BUSINESS_REPORT_LIST: {
    REQUEST: "GET_BUSINESS_REPORT_LIST.REQUEST",
    SUCCESS: "GET_BUSINESS_REPORT_LIST.SUCCESS",
    FAILURE: "GET_BUSINESS_REPORT_LIST.FAILURE"
  }
};

// get business report list
export const getBusinessReportListRequest = (team, person, dateRange) => ({
  type: types.GET_BUSINESS_REPORT_LIST.REQUEST,
  team,
  person,
  dateRange
});

export const getBusinessReportListSuccess = reportList => ({
  type: types.GET_BUSINESS_REPORT_LIST.SUCCESS,
  reportList
});

export const getBusinessReportListFailure = () => ({
  type: types.GET_BUSINESS_REPORT_LIST.FAILURE
});
