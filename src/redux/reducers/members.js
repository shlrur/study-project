import { types } from "../actions/members";

const initialState = {
    loading: false,
    teamList: [],
    peopleList: []
};

export default function membersReducer(state = initialState, action = {}) {
    switch (action.type) {
        case types.GET_LAB_MEMBER_INFO.REQUEST:
            return {
                ...state,
                loading: true
            };
        case types.GET_LAB_MEMBER_INFO.SUCCESS:
            return {
                ...state,
                loading: false,
                teamList: action.teamList,
                peopleList: action.peopleList
            };
        case types.GET_LAB_MEMBER_INFO.FAILURE:
            return {
                ...state,
                loading: false
            };
        default:
            return state;
    }
}
