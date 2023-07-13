import state from "../../store/store";
import { Users } from "../Users";

const filters = [
    {
        type: "registration_date",
        order: "desc",
        title: "Дате регистрации",
    },
    { type: "rating", order: "desc", title: "Рейтингу" },
];

export class Sort {
    static async renderFilters() {
        const sortParent = document.getElementById("sort");
        let html = '<span class="sort__label">Сортировка:</span>';
        html += filters
            .map(
                (filter) => `
                    <span class="sort__item">
                        ${filter.title} 
                    </span>
                `
            )
            .join("");
        sortParent.innerHTML = html;
        this.addClickHandlers();
    }

    static addClickHandlers() {
        const sortButtons = document.querySelectorAll(".sort__item");
        sortButtons[0].classList.add("sort__item_active");
        sortButtons.forEach((item) => {
            const foundElement = filters.find(
                (obj) =>
                    obj.title ==
                    item.textContent.toString().trimStart().trimEnd()
            );
            item.addEventListener("click", () => {
                state.setAttemps(state.attemps + 1)
                if (state.attemps > 5) {
                    state.filterButton.classList.add("search__filter_active")
                }
                state.setOrder(true);
                if (state.sort == foundElement.type) {
                    state.setOrder(!state.order);
                }
                sortButtons.forEach((el) =>
                    el.classList.remove("sort__item_active")
                );
                item.classList.add("sort__item_active");
                state.setSort(foundElement.type);

                Users.getUsers();
            });
        });
    }
}
