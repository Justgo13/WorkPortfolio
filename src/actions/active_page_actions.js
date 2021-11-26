import { ABOUT_ME, WORK_EXPERIENCE, PROJECTS, ACTIVE_PAGE as FETCH_ACTIVE_PAGE } from "./action_types";

export const aboutMeActivePage = () => (dispatch) => {
    dispatch({type: ABOUT_ME});
}

export const workExpActivePage = () => (dispatch) => {
    dispatch({type: WORK_EXPERIENCE});
}

export const projectsActivePage = () => (dispatch) => {
    dispatch({type: PROJECTS});
}

export const fetchActivePage = () => (dispatch) => {
    dispatch({type: FETCH_ACTIVE_PAGE})
}