import { Request, Response, NextFunction } from 'express';
import FirstModel from '../../storage/models/firstModel';

export const getAllFirst = () => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const firstData = await FirstModel.findAll({ raw: true });
    return res.status(200).json({
      message: 'Success',
      data: firstData,
    });
  };
};
export const addFirstOne = () => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const data = req.body;
    const firstData = await FirstModel.create(data);
    return res.status(200).json({
      message: 'Success',
      data: firstData,
    });
  };
};
// export const getUser = () => {
//   return async (req: Request, res: Response, next: NextFunction) => {
//     const { email } = req.body;
//     const users = await UserModel.findAll({ raw: true });
//     let user = users.filter(function (v) {
//       return v.email === email;
//     });
//     let userFound: any = user[0];
//     if (!userFound) {
//       return next(new AppError('Sorry not a valid request', 401));
//     }
//     if (userFound) {
//       const user = userFound;
//       const hasLeader = user.userLead;

//       if (hasLeader) {
//         const theLeader = users.find((value) => {
//           if (Number(value.nik) === Number(hasLeader)) {
//             return value;
//           }
//         });
//         userFound.userLead = theLeader || [];
//       } else {
//         userFound.userLead = [];
//       }
//       return res.status(200).json({
//         message: 'Success',
//         data: userFound,
//       });
//     }
//   };
// };
