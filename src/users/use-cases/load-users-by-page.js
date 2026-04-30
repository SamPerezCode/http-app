import { localhostUserToModel } from "../mappers/localhost-user.mapper";

/**
 *
 * @param {Number} page
 * @returns {Promise<User[]>}
 */
export const loadUsersByPage = async (page = 1) => {
  const url = `${import.meta.env.VITE_BASE_URL}/users?_page=${page}`;
  const res = await fetch(url);
  const data = await res.json();

  const users = data.data.map((userLike) =>
    localhostUserToModel(userLike)
  );
  // console.log(users);
  return users;
};

// En nuestro proyecto tienes json-server ^1.0.0-beta.15 en package.json.
// En esa versión, cuando consultas con paginación (?_page=...) la respuesta viene como objeto:
// { first, prev, next, last, pages, items, data: [...] }

// por eso hacemos data.data.map  para poder acceder al array de la data
