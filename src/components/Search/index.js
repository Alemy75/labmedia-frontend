import state from "../../store/store";
import { Users } from "../Users";
import { Pagination } from "../Pagination";
import { Utils } from "../../utils/utils";

class Search {
    constructor() {
        this.input = document.getElementById("search-input");
        this.addInputHandler();
    }

    addInputHandler() {
        this.input.addEventListener("input", async (event) => {
            state.setPage(1)
            state.setAttemps(state.attemps + 1)
            state.setSearch(event.target.value);
            Utils.search(event.target.value)
            Utils.calculatePagination()
            Pagination.renderPagination()
            Users.renderUsers()
            console.log(state.users, state.filteredUsers)            
        });
    }
    clearValue() {
        this.input.value = "";
    }
}

export const Input = new Search();
