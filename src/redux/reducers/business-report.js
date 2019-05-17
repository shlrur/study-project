import { types } from "../actions/business-report";

const initialState = {
  loading: false,
  reportList: []
};

export default function businessReportReducer(
  state = initialState,
  action = {}
) {
  switch (action.type) {
    case types.GET_BUSINESS_REPORT_LIST.REQUEST:
      return {
        ...state,
        loading: true,
        team: action.team,
        person: action.person,
        dateRange: action.dateRange
      };
    case types.GET_BUSINESS_REPORT_LIST.SUCCESS:
      return {
        ...state,
        loading: false,
        reportList: action.reportList
      };
    case types.GET_BUSINESS_REPORT_LIST.FAILURE:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}
