import UserService from '../services/user.service';

const userController = {
  addUser(req, res) {
    /*
      Expect json of the format
      {
        name: 'john',
        email: 'princeolatjohnjoe@yahoo.com'
      }
    */

    const newUser = req.body;
    const createdUser = UserService.addUser(newUser);
    return res.json({
      status: 'sucess',
      data: createdUser,
    }).status(200);
  },
};

export default userController;
