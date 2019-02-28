import { log } from "../logger";
import { db } from "../db";
import {Request} from "express";

export const deleteUserFromDb = (req: Request, res: any) => {
  const userId = req.params.userId;
  log("req param", req.params);
 // log(chalk.blue("deleting userId", userId));
  //log(chalk.green(`fetching user from request`), userId);
  log(`deleting user from db`, userId);
  db.userList.pop(userId); //replace with mongo
  log(`sending user deleted to client`, userId);
  res.json(userId);
};
