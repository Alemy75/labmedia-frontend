import { Template } from "./Template";
import state from "../../store/store";
import { NotFound } from "./Notfound";
import { Utils } from "../../utils/utils";

export class Users {   
    static renderUsers() {
        state.setUsers(Utils.sorting(state.sortingField, state.order))
        Utils.calculatePagination()
        Utils.showFilters()
        const html = state.filteredUsers.length
            ? state.filteredUsers[state.page - 1].map(Template).join("")
            : NotFound()
        const usersList = document.getElementById("users-list");
        usersList.innerHTML = html;

        this.addButtonsClickHandlers();
        
    }

    static addButtonsClickHandlers() {
        const deleteButtons = document.querySelectorAll(".delete-button");

        deleteButtons.forEach((button) => {
            button.addEventListener("click", () => {
                state.setUserId(Number(button.id.replace("delete-", "")));
                state.modal.classList.add("modal_active");
            });
        });
    }
}
