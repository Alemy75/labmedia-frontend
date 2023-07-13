import UserService from "../../api/api";
import { Template } from "./Template";
import { NotFound } from "./Notfound.js";
import state from "../../store/store";

export class Users {
    static async getUsers() {
        state.setUsers(
            UserService.fetchUsers().then((data) => {
                state.setUsers(data);
                this.renderUsers();
                this.addModalClickHandlers();
            })
        );
    }

    static renderUsers() {
        const html = state.users.length
            ? state.users.map(Template).join("")
            : NotFound();
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

    static addModalClickHandlers() {
        const button = document.getElementById("delete-user");
        const buttonDeny = document.getElementById("deny-delete-user");
        button.addEventListener("click", () => {
            state.users = state.users.filter((user) => user.id != state.userId);
            state.modal.classList.remove("modal_active");
            state.userId = null
            this.renderUsers();
        });
        buttonDeny.addEventListener("click", () => {
            state.modal.classList.remove("modal_active");
        });
    }
}
