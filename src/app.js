import "./style.css";
import { Users } from "./components/Users";
import { Pagination } from "./components/Pagination";
import { Sort } from "./components/Sort";
import { Input } from "./components/Search";
import state from "./store/store";

const clear = document.getElementById("clear");

console.log(clear);

window.addEventListener("load", () => {
    Users.getUsers();
    Pagination.renderPages();
    Sort.renderFilters();
});

clear.addEventListener("click", () => {
    state.setDefault();
    Users.getUsers();
    Pagination.renderPages();
    Sort.renderFilters();
    Input.value = ""
});


