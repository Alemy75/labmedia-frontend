import state from "../../store/store";

export const Template = (user) => {
    let formattedDate = new Date(user.registration_date).toLocaleDateString(
        "ru-RU"
    );

    return `
    <tr>
        <script></script>
        <td class="blue">${user.username}</td>
        <td>${user.email}</td>
        <td>${formattedDate}</td>
        <td>${user.rating}</td>
        <td id="delete-${user.id}" class="delete-button">
            <svg
                onclick=""
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
            >
                <path
                    d="M1.63499 1.66666L12.3132 12.3333"
                    stroke="black"
                    stroke-width="1.5"
                    stroke-linecap="round"
                />
                <path
                    d="M1.63499 12.3333L12.3132 1.66665"
                    stroke="black"
                    stroke-width="1.5"
                    stroke-linecap="round"
                />
            </svg>
        </td>
    </tr>
   `;
};
