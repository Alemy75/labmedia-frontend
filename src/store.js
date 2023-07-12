class Store {
    constructor() {
        this.page = 1
        this.search = ""
        this.users = []
    }

    setPage(payload) {
        this.page = payload
    }

    setSearch(payload) {
        this.search = payload
    }

    setUsers(payload) {
        this.users = payload
    }
}

const state = new Store()

export default state