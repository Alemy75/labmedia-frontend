import { api } from "../../api";
import { Template } from "./Template";
import { NotFound } from "./Notfound.js";
import state from "../../store";

export class Users {
    static async getUsers() {
        state.setUsers(api.fetchUsers().then(Users.renderUsers));
    }

    static renderUsers(users) {
        const html = users.length ? users.map(Template).join("") : NotFound();
        const usersList = document.getElementById("users-list");
        usersList.innerHTML = html;
    }
}
