import state from "../../store/store";
import { Users } from "../Users";
import { Pagination } from "../Pagination";
import { debounce } from "../../utils/utils";

class Search {
    constructor() {
        this.input = document.getElementById("search-input");
        this.addInputHandler()
    }
    
    addInputHandler() {
        this.input.addEventListener("input", async (event) => {
            state.setSearch(event.target.value);
            function Handler() {
                state.setPage(1);
                Users.getUsers();
                Pagination.renderPages();
            }
        
            let refetch = debounce(Handler, 500);
            refetch();
        });
    }
    clearValue() {
        this.input.value = ""
    }
    
}

export const Input = new Search
