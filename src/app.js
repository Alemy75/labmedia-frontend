import "./style.css";
import { Users } from "./components/Users";
import { Pagination } from "./components/Pagination";
import { debounce } from "./utils";

const input = document.getElementById("search-input");

window.addEventListener("load", () => {
    window.state = {
        page: 1,
        search: "",
    };
    Users.getUsers(state);
    Pagination.renderPages();
});

input.addEventListener("input", async (event) => {
    window.state.search = event.target.value;
    function Handler() {
        Pagination.renderPages();
        Users.getUsers(state)       
    }

    let refetch = debounce(Handler, 500);
    refetch();
     
});
