import { addUserToDb } from "../controllers/add-user-to-db";
import { db } from "../db";
import { deleteUserFromDb } from "../controllers/delete-user-from-db";

export const userRoutes = (app: any) =>{
  app
    .route("/api/user")
    .post(addUserToDb)
    .get((req: any, res: any) => {
    //   const userId = req.params.userId;
    //   const user = db.userList.filter((u: any) => u.id === userId).pop();
    //   res.json(user);
       res.send("get is done");
     });
     app.route("/api/user/:userId").delete(deleteUserFromDb);
    };
