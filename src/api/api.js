import state from "../store/store";

const BASE = `https://5ebbb8e5f2cfeb001697d05c.mockapi.io/users`;

class UserApi {
    getParams() {
        const SEARCH = state.search == "" ? "" : `&search=${state.search}`;
        const SORT = `&sortby=${state.sort}`
        const ORDER = `&order=${state.order ? 'desc' : 'asc'}`
        return SEARCH + SORT + ORDER;
    }
    async fetchUsers() {
        const BASE_PARAMS = `?page=${state.page}&limit=5`;
        const URL = BASE + BASE_PARAMS + this.getParams();
        return fetch(URL).then((response) => response.json());
    }
    async fetchPages(limit) {
        const response = await fetch(
            BASE + "?" + this.getParams().substring(1)
        ); // Замените URL на вашу конечную точку API
        const data = await response.json();
        const pageCount = Math.ceil(data.length / limit);
        const pageNumbers = Array.from({ length: pageCount }, (_, i) => i + 1);
        return pageNumbers;
    }
}

const UserService = new UserApi();
export default UserService;
