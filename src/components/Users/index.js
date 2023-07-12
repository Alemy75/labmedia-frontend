import { api } from "../../api";
import { Template } from "./Template";
import { NotFound } from "./Notfound.js"

export class Users {
    static async getUsers() {
        return api
            .fetchUsers()
            .then(Users.renderUsers);
    }

    static renderUsers(users) {
        const html = users.length
            ? users.map(Template).join("")
            : NotFound();
        const usersList = document.getElementById("users-list");
        usersList.innerHTML = html;
    }
}
