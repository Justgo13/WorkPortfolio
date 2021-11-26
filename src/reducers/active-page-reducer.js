import { ABOUT_ME, ACTIVE_PAGE, WORK_EXPERIENCE, PROJECTS } from "../actions/action_types";

const init_stage = {
    pages: [
        {
            page_name: ABOUT_ME,
            active_page: false
        },
        {
            page_name: WORK_EXPERIENCE,
            active_page: false
        },
        {
            page_name: PROJECTS,
            active_page: false
        }
    ]
}

export default (state = init_stage, action) => {
    let pages = [...state.pages];
    let activePageName = {
        active_page_name: ""
    }
    switch(action.type) {
        case ABOUT_ME:
            let about_me_page_index = pages.findIndex(page=>page.page_name === ABOUT_ME);

            if (about_me_page_index !== -1) {
                pages[about_me_page_index].active_page = true;
            }

            // reset active_page status on other pages
            pages.forEach((elem) => {
                if (elem.page_name !== ABOUT_ME) {
                    elem.active_page = false;
                }
            })
            
            activePageName.active_page_name = ABOUT_ME;
            return {...state, activePageName}
        case WORK_EXPERIENCE:

            let work_exp_page_index = pages.findIndex(page=>page.page_name === WORK_EXPERIENCE);

            if (work_exp_page_index !== -1) {
                pages[work_exp_page_index].active_page = true;
            }
            
            // reset active_page status on other pages
            pages.forEach((elem) => {
                if (elem.page_name !== WORK_EXPERIENCE) {
                    elem.active_page = false;
                }
            })

            activePageName.active_page_name = WORK_EXPERIENCE;
            return {...state, activePageName}
        case PROJECTS:
            let projects_page_index = pages.findIndex(page=>page.page_name === PROJECTS);

            if (projects_page_index !== -1) {
                pages[projects_page_index].active_page = true;
            }

            // reset active_page status on other pages
            pages.forEach((elem) => {
                if (elem.page_name !== PROJECTS) {
                    elem.active_page = false;
                }
            })

            activePageName.active_page_name = PROJECTS;
            return {...state, activePageName}
        case ACTIVE_PAGE:
            let active_page = activePageName.active_page_name;
            return {...state, active_page}
        default:
            return state;
    }
}