import { renderAddButton } from "./presentation/render-add-button/render-add-button";
import { renderbuttons } from "./presentation/render-buttons/render-buttons";
import { renderModal } from "./presentation/render-modal/render-modal";
import { renderTable } from "./presentation/render-table/render-table";
import usersStore from "./store/users-store";
import { saveUsers } from "./use-cases/save-user";

export const UsersApp = async (element) => {
  element.innerHTML = "Loading...";
  await usersStore.loadNextPage();

  // console.log(usersStore.getUsers());
  element.innerHTML = "";
  renderTable(element);
  renderbuttons(element);
  renderAddButton(element);
  renderModal(element, async (userLike) => {
    const user = await saveUsers(userLike);
    console.log(user);
    usersStore.onUserChanged(user);
    renderTable();
  });
};
