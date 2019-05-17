export const types = {
  GET_BUSINESS_REPORT_LIST: {
    REQUEST: "GET_BUSINESS_REPORT_LIST.REQUEST",
    SUCCESS: "GET_BUSINESS_REPORT_LIST.SUCCESS",
    FAILURE: "GET_BUSINESS_REPORT_LIST.FAILURE"
  }
};

// get business report list
export const getbusinessReportListRequest = (teamId, personId) => ({
  type: types.GET_BUSINESS_REPORT_LIST.REQUEST,
  teamId,
  personId
});

export const getbusinessReportListSuccess = reportList => ({
  type: types.GET_BUSINESS_REPORT_LIST.SUCCESS,
  reportList
});

export const getbusinessReportListFailure = () => ({
  type: types.GET_BUSINESS_REPORT_LIST.FAILURE
});
