import { api } from "../../api";
import { Users } from "../Users";
import state from "../../store";

export class Pagination {
    static async renderPages() {
        const pages = await api.fetchPages(5);
        const pagination = document.getElementById("pagination");
        let html = pages.map((page) => `<li class="dot">${page}</li>`).join("");
        pagination.innerHTML = html;
        this.addClickHandlers();
    }

    static addClickHandlers() {
        const pageButtons = document.querySelectorAll(".dot");
        if (pageButtons.length) {
            pageButtons[0].classList.add("blue");
            pageButtons.forEach((page, index) => {
                page.addEventListener("click", () => {
                    this.setPages(index + 1);
                });
            });
        }
    }

    static setPages(pageNumber) {
        const pageButtons = document.querySelectorAll(".dot");
        state.setPage(pageNumber);
        pageButtons.forEach((page, index) => {
            if (index == pageNumber - 1) {
                page.classList.add("blue");
            } else {
                page.classList.remove("blue");
            }
        });
        Users.getUsers();
    }
}
