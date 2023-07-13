import state from "../../store/store";
import { Users } from "../Users";
import { Pagination } from "../Pagination";
import { Utils } from "../../utils/utils";

export class Modal {
    static addModalClickHandlers() {
        const button = document.getElementById("delete-user");
        const buttonDeny = document.getElementById("deny-delete-user");
        button.addEventListener("click", () => {
            state.setUsers(
                state.users.filter((user) => user.id != state.userId)
            );
            state.setTemp(state.temp.filter((user) => user.id != state.userId));
            state.modal.classList.remove("modal_active");
            state.userId = null;
            state.setPage(1)
            Utils.calculatePagination();
            Pagination.renderPagination();
            Users.renderUsers();
        });
        buttonDeny.addEventListener("click", () => {
            state.modal.classList.remove("modal_active");
        });
    }
}
