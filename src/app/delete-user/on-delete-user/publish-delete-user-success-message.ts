import * as bus from 'pubsub-js';
import { DeleteUser, DeleteUserSuccess } from '../../message';
import { User } from '../../store/user';
import * as store from '../../store';
import { Base_Api_Url } from '../../settings';
import * as $ from 'jquery';

bus.subscribe(DeleteUser, publishDeleteUserSuccessMessage);

export function publishDeleteUserSuccessMessage(msg:string, id:string){
    $.ajax({
        url:(`${Base_Api_Url}user/${id}`),
        type: 'Delete',
        data: id,
    success:(deleteFromStoreAndPublish),
error:(onFail)})
   
    // store.deleteUser(id);
    // bus.publishSync(DeleteUserSuccess, id);
    
} 
function deleteFromStoreAndPublish(id:string){
    
    store.deleteUser(id);
    console.log(`success`,id);
    bus.publishSync(DeleteUserSuccess,id); 
}

function onFail(message:any){
    console.log("fail",message);
}