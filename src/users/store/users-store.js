import { loadUsersByPage } from "../use-cases/load-users-by-page";

const state = {
  currentPage: 0,
  users: [],
};

const loadNextPage = async () => {
  const users = await loadUsersByPage(state.currentPage + 1);
  if (users.length === 0) return;

  state.currentPage += 1;
  state.users = users;
};

const loadPreviudPage = async () => {
  if (state.currentPage === 1) return;
  const users = await loadUsersByPage(state.currentPage - 1);

  state.currentPage -= 1;
  state.users = users;
};

const onUserChanged = async (updateduser) => {
  let wasFound = false;

  // Actualizo el usuario
  state.users = state.users.map((user) => {
    if (user.id === updateduser.id) {
      wasFound = true;
      return updateduser;
    }

    return user;
  });

  if (state.users.length < 10 && !wasFound) {
    state.users.push(updateduser);
  }
};

const reloadPage = async () => {
  const users = await loadUsersByPage(state.currentPage);
  if (users.length === 0) return;
  state.users = users;
};

export default {
  loadNextPage,
  loadPreviudPage,
  onUserChanged,

  reloadPage,

  /**
   *
   * @returns {User[]}
   */
  getUsers: () => [...state.users], // Uso expres porque los objetos en JS pasan por referencia, si no lo pongo no me mandaria los usuarios si no una referencia de estos

  /**
   *
   * @returns {Number}
   */
  getCurrentPage: () => state.currentPage, // Este no pasará opor referencia porque los primitivos como el 0 pasan por valor
};
