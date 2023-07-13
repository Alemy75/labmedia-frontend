import state from "../store/store";

export const Utils = {
    debounce(func, delay) {
        let timeoutId;

        return function (...args) {
            clearTimeout(timeoutId);

            timeoutId = setTimeout(function () {
                func(...args);
            }, delay);
        };
    },

    calculatePagination() {
        const itemsPerPage = 5;
        const numPages = Math.ceil(state.users.length / itemsPerPage);
        const pages = [];

        for (let i = 0; i < numPages; i++) {
            const start = i * itemsPerPage;
            const end = start + itemsPerPage;
            const page = state.users.slice(start, end);
            pages.push(page);
        }
        state.setFilteredUsers(pages);
    },

    search(query) {
        state.setUsers(
            state.temp.filter((item) => {
                const matchEmail = item.email
                    .toLowerCase()
                    .includes(query.toLowerCase());
                const matchUsername = item.username
                    .toLowerCase()
                    .includes(query.toLowerCase());
                return matchEmail || matchUsername;
            })
        );
    },

    sorting(field, order) {
        return state.users.sort((a, b) => {
            const valueA = a[field];
            const valueB = b[field];

            if (order === false) {
                if (valueA < valueB) return -1;
                if (valueA > valueB) return 1;
            } else if (order === true) {
                if (valueA > valueB) return -1;
                if (valueA < valueB) return 1;
            }

            return 0;
        });
    },

    showFilters() {
        if (state.attemps > 5) {
            state.filterButton.classList.add("search__filter_active")
        }
    }
};
