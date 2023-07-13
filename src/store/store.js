class Store {
    constructor() {
        this.modal = document.getElementById("modal")
        this.filterButton = document.getElementById("clear")
        this.page = 1;
        this.search = "";
        this.users = [];
        this.filteredUsers;
        this.sort = "registration_date";
        this.order = true;
        this.userId = null;
        this.attemps = 0;
    }

    setUserId(payload) {
        this.userId = payload
    }

    setPage(payload) {
        this.page = payload;
    }

    setSearch(payload) {
        this.search = payload;
    }

    setUsers(payload) {
        this.users = payload;
    }

    setFilteredUsers(payload) {
        this.filteredUsers = payload;
    }

    setSort(payload) {
        this.sort = payload;
    }

    setOrder(payload) {
        this.order = payload;
    }

    setDefault() {
        this.page = 1;
        this.search = ""
        this.order = "desc"
        this.sort = "registration_date"
        this.userId = null
    }

    setAttemps(payload) {
        this.attemps = payload
    }
}

const state = new Store();

export default state;
