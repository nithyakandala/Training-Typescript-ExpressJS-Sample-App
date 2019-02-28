import { log } from "../logger";
import { db } from "../db";

export const addUserToDb = (req: any, res: any) => {
  const user = req.body;
  log(`fetching use from request`, user);
  log(`adding use to db`, user);
  db.userList.push(user); //replace with mongodb
  log(`sending added user to client`, user);
  res.json(user);
};
