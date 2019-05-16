export const types = {
  GET_BUSINESS_REPORT_LIST_INFO: {
    REQUEST: "GET_BUSINESS_REPORT_LIST_INFO.REQUEST",
    SUCCESS: "GET_BUSINESS_REPORT_LIST_INFO.SUCCESS",
    FAILURE: "GET_BUSINESS_REPORT_LIST_INFO.FAILURE"
  }
};

// get lab member information
export const getLabMemberInfoRequest = () => ({
  type: types.GET_BUSINESS_REPORT_LIST_INFO.REQUEST
});

export const getLabMemberInfoSuccess = (teamList, peopleList) => ({
  type: types.GET_BUSINESS_REPORT_LIST_INFO.SUCCESS,
  teamList,
  peopleList
});

export const getLabMemberInfoFailure = () => ({
  type: types.GET_BUSINESS_REPORT_LIST_INFO.FAILURE
});
