import "./style.css";
import { Users } from "./components/Users";
import { Pagination } from "./components/Pagination";
import { Sort } from "./components/Sort";
import { Input } from "./components/Search";
import state from "./store/store";

window.addEventListener("load", () => {
    Users.getUsers();
    Pagination.renderPages();
    Sort.renderFilters();
});

state.filterButton.addEventListener("click", () => {
    state.setDefault()
    Pagination.renderPages();
    Sort.renderFilters();
    Input.input.value = "";
    Users.getUsers();
});
