class Store {
    constructor() {
        this.page = 1
        this.search = ""
        this.users = []
        this.sort = 'registration_date'
        this.order = true
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

    setSort(payload) {
        this.sort = payload
    }

    setOrder(payload) {
        this.order = payload
    }
    
    setDefault() {
        this.page = 1
        this.search = ""
        this.sort = 'registration_date'
        this.order = true
    }
}

const state = new Store()

export default state