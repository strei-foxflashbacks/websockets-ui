import users from '../database/users';
import { UserData } from '../types/UserData';

const registerOrLogin = (username: string, password: string): Promise<UserData> => {
  return new Promise((resolve) => {
    const registeredUser = users.find((user) => user.name === username);
    if (registeredUser) {
      if (registeredUser.password === password) {
        resolve(registeredUser);
      } else {
        const userError: UserData = {
          name: username,
          index: users.length,
          error: true,
          errorText: 'Wrong Password',
        };
        resolve(userError);
      }
    } else {
      const userToResolve: UserData = {
        name: username,
        index: users.length,
        error: false,
        errorText: '',
      };
      const newUser: UserData = {
        name: username,
        password: password,
        index: users.length,
      };
      resolve(userToResolve);
      users.push(newUser);
    }
  });
};
export default registerOrLogin;
