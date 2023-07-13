class Store {
    constructor() {
        this.modal = document.getElementById("modal")
        this.filterButton = document.getElementById("clear")
        this.page = 1;
        this.search = "";
        // Резерв массива загруженного, он используется при поиске, если сбрасываем запрос
        this.temp = []
        this.users = [];
        this.filteredUsers = [];
        this.sortingField = "registration_date";
        // true - desc, false asc
        this.order = true;
        this.userId = null;
        this.attemps = 0;
    }

    setTemp(payload) {
        this.temp = payload
    }

    setUsers(payload) {
        this.users = payload;
    }

    setFilteredUsers(payload) {
        this.filteredUsers = payload;
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

    setSortingField(payload) {
        this.sortingField = payload;
    }

    setOrder(payload) {
        this.order = payload;
    }
    
    setDefault() {
        this.users = this.temp
        this.page = 1;
        this.search = ""
        this.order = true
        this.sort = "registration_date"
        this.userId = null
    }

    setAttemps(payload) {
        this.attemps = payload
    }
}

const state = new Store();

export default state;
