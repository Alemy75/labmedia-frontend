import UserService from "../../api/api";
import { Template } from "./Template";
import { NotFound } from "./Notfound.js";
import state from "../../store/store";

export class Users {
    static async getUsers() {
        state.setUsers(UserService.fetchUsers().then(data => {
            state.setUsers(data)
            this.renderUsers()
        }));
    }

    static renderUsers() {
        const html = state.users.length ? state.users.map(Template).join("") : NotFound();
        const usersList = document.getElementById("users-list");
        usersList.innerHTML = html;
    }
}
