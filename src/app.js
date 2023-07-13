import "./style.css";
import { Users } from "./components/Users";
import { Pagination } from "./components/Pagination";
import { Sort } from "./components/Sort";
import { Input } from "./components/Search";
import state from "./store/store";
import { Modal } from "./components/Modal";
import { Utils } from "./utils/utils";

window.addEventListener("load", async () => {
    fetch("https://5ebbb8e5f2cfeb001697d05c.mockapi.io/users")
        .then((res) => res.json())
        .then((data) => {
            state.setTemp(data);
            state.setUsers(data);
            Modal.addModalClickHandlers();
            Utils.calculatePagination();
            Users.renderUsers();
            Pagination.renderPagination();
            Sort.renderFilters();
        });
});

state.filterButton.addEventListener("click", () => {
    state.setDefault();
    Sort.renderFilters();
    Input.input.value = "";
    Utils.calculatePagination();
    Pagination.renderPagination();
    Users.renderUsers();
});
