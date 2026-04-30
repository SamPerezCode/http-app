import usersStore from "../../store/users-store";
import { renderTable } from "../render-table/render-table";
import "./render-buttons.css";

/**
 *
 * @param {HTMLDivElement} element
 */
export const renderbuttons = (element) => {
  const nextButton = document.createElement("button");
  nextButton.innerText = " Next >";

  const prevtButton = document.createElement("button");
  prevtButton.innerText = "< Prev";

  const currentPageLabel = document.createElement("spam");
  currentPageLabel.id = "current-page";
  currentPageLabel.innerText = usersStore.getCurrentPage();

  element.append(prevtButton, currentPageLabel, nextButton);

  nextButton.addEventListener("click", async () => {
    await usersStore.loadNextPage();

    currentPageLabel.innerText = usersStore.getCurrentPage();
    renderTable(element);
  });

  prevtButton.addEventListener("click", async () => {
    await usersStore.loadPreviudPage();
    currentPageLabel.innerText = usersStore.getCurrentPage();
    renderTable(element);
  });
};
