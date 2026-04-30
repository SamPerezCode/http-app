import modalHTML from "./render-modal.html?raw"; // el ?raw se hace para importar html en vite
import {} from "../render-modal/render-modal.css";
let modal;
let form;

// TODO: cargar usuarios
export const showModal = () => {
  modal?.classList.remove("hide-modal");
};

export const hideModal = () => {
  modal?.classList.add("hide-modal");

  form?.reset();
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

    // console.log("Formulario Enviado");
    const formData = new FormData(form);
    const userLike = {};

    for (const [key, value] of formData) {
      if (key === "balance") {
        userLike[key] = +value; // con el + lo convierto a número
        continue;
      }

      if (key === "isActive") {
        userLike[key] = value === "on" ? true : false;
        continue;
      }

      userLike[key] = value;
    }

    // console.log(userLike);
    await callback(userLike);
    hideModal();
  });

  element.append(modal);
};
