import "./style.css";
import { Users } from "./components/Users";
import { Pagination } from "./components/Pagination";
import { debounce } from "./utils";
import state from "./store";

const input = document.getElementById("search-input");

window.addEventListener("load", () => {
    Users.getUsers();
    Pagination.renderPages();
});

input.addEventListener("input", async (event) => {
    state.setSearch(event.target.value);
    function Handler() {
        Pagination.renderPages();
        Users.getUsers()       
    }

    let refetch = debounce(Handler, 500);
    refetch();
     
});
