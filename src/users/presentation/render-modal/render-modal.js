import modalHTML from "./render-modal.html?raw"; // el ?raw se hace para importar html en vite
import {} from "../render-modal/render-modal.css";
import { User } from "../../models/user";
import { getUserById } from "../../use-cases/get-user-by-id";
let modal;
let form;
let loadedUsers;

/**
 *
 * @param {String} id
 * @returns
 */
// TODO: cargar usuarios
export const showModal = async (id) => {
  modal?.classList.remove("hide-modal");

  loadedUsers = {};

  if (!id) {
    loadedUsers = {};
    return;
  }

  const user = await getUserById(id);
  setFormValue(user);
};

export const hideModal = () => {
  modal?.classList.add("hide-modal");

  form?.reset();
};

/**
 *
 * @param {User} user
 */
const setFormValue = (user) => {
  loadedUsers = {};
  form.querySelector('[name="firstName"]').value = user.firstName;
  form.querySelector('[name="lastName"]').value = user.lastName;
  form.querySelector('[name="balance"]').value = user.balance;
  form.querySelector('[name="isActive"]').checked = !!user.isActive;

  loadedUsers = user;
};

/**
 *
 * @param {HTMLDivElement} element
 * @param {(userLike) => Promise<void>} callback
 * @returns
 */
export const renderModal = (element, callback) => {
  if (modal) return;
  modal = document.createElement("div");
  modal.innerHTML = modalHTML;
  modal.className = "modal-container hide-modal";
  form = modal.querySelector("form");

  // -------------------------
  modal.addEventListener("click", (event) => {
    if (event.target.className === "modal-container") {
      hideModal();
    }
  });

  // -------------------------
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const userLike = { ...loadedUsers };

    for (const [key, value] of formData) {
      if (key === "balance") {
        userLike[key] = +value; // con el + lo convierto a número
        continue;
      }

      if (key === "isActive") continue; // lo seteamos al final
      userLike[key] = value;
    }

    userLike.isActive = form.querySelector(
      '[name="isActive"]'
    ).checked;

    await callback(userLike);
    hideModal();
  });

  element.append(modal);
};
