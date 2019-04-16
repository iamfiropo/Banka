import dummyData from '../utils/dummyData';
// import User from '../models/user.model';

const dummyDataUsers = [...dummyData];

const UserService = {
  addUser(user) {
    const userLength = dummyDataUsers.length;
    const newId = userLength + 1;
    user.id = newId;
    dummyDataUsers.push(user);
    return user;
  },
};

export default UserService;
