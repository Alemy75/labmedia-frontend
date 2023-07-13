import { Users } from "../Users";
import state from "../../store/store";

export class Pagination {
    static renderPagination() {
        let pages = state.filteredUsers.length
            ? state.filteredUsers.map((_,index) => index + 1)
            : [1]
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
                    this.setPage(index + 1)                   
                });
            });
        }
    }

    static setPage(pageNumber) {
        const pageButtons = document.querySelectorAll(".dot");
        state.setPage(pageNumber);
        pageButtons.forEach((page, index) => {
            if (index == pageNumber - 1) {
                page.classList.add("blue");
            } else {
                page.classList.remove("blue");
            }
        });
        Users.renderUsers()
    }
}
