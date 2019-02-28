import * as bus from "pubsub-js";
import { AddUser, AddUserSuccess } from "../../message";
import { User } from "../../store/user";
import * as store from "../../store";
import { Base_Api_Url } from "../../settings";
import * as $ from "jquery";

bus.subscribe(AddUser, AddUserInDataBase);

export function AddUserInDataBase(msg: string, user: User) {
  //make server call
  //need url
  //need jquery to post

  $.post(`${Base_Api_Url}user`, user)
    .done(addToStoreAndPublish)
    .fail(onFail);

  //on success call addToStoreAndPublish
  // publishAddUserSuccessMessage(user);
}

function addToStoreAndPublish(user: User) {
  console.log("success", user);
  store.addUser(user);
  bus.publishSync(AddUserSuccess, user.id);
}

function onFail(message: any) {
  console.log("fail", message);
}
 