export const types = {
  GET_LAB_MEMBER_INFO: {
    REQUEST: "GET_LAB_MEMBER_INFO.REQUEST",
    SUCCESS: "GET_LAB_MEMBER_INFO.SUCCESS",
    FAILURE: "GET_LAB_MEMBER_INFO.FAILURE"
  }
};

// get lab member information
export const getLabMemberInfoRequest = () => ({
  type: types.GET_LAB_MEMBER_INFO.REQUEST
});

export const getLabMemberInfoSuccess = (teamList, peopleList) => ({
  type: types.GET_LAB_MEMBER_INFO.SUCCESS,
  teamList,
  peopleList
});

export const getLabMemberInfoFailure = () => ({
  type: types.GET_LAB_MEMBER_INFO.FAILURE
});
