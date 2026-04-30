import { userModelToLocalhost } from "../mappers/user-to-localhost.mapper";
import { User } from "../models/user";

/**
 *
 * @param {Like<User>} userLike
 */
export const saveUsers = async (userLike) => {
  const user = new User(userLike);

  if (!user.firstName || !user.lastName) {
    throw new Error("First & last name are required");
  }

  const userToSave = userModelToLocalhost(user);

  if (user.id) {
    throw new Error("No implementada la actualización");
    return;
  }
  const updateduser = await createUser(userToSave);
  return updateduser;
};

/**
 *
 * @param {Like<User>} user
 */
const createUser = async (user) => {
  const url = `${import.meta.env.VITE_BASE_URL}/users`;
  const res = await fetch(url, {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const newUser = await res.json();
  console.log(newUser);
  return newUser;
};
