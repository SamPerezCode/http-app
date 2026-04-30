import { User } from "../models/user";

/**
 * @param {User} user
 */
export const userModelToLocalhost = (user) => {
  const { avatar, balance, firstName, lastName, id, isActive } = user;

  return {
    avatar,
    balance,
    first_name: firstName,
    last_name: lastName,
    id,
    isActive,
  };
};
