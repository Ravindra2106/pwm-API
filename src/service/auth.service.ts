import { Encription } from "../crypting/encrypting";
import { AuthModel } from "../model/auth.model"


export class AuthService {

    log_user(body: any) {
        return new Promise(async function (resolve, reject) {
            AuthModel.log_user(body).then((res: any) => {
                console.log('<<><><><', res);
                console.log('sadasdas',body)
                console.log("======",Encription.decrypt(body.passletter));
                
                // console.log("2",res.passletter)
                if (body.user_name === res.user_namee && body.password === res.passletter ) {
                    console.log("++++++++++++++");
                    
                    // console.log("======",decrypt(body.password))
                    resolve(res);
                }
            });
        });
    }
     add_user(body: any) {
        return new Promise(async function (resolve, reject) {
            AuthModel.add_user(body).then((res: any) => {
                console.log(res);
                resolve(res);
            });
        });
    }
    applications(body: any) {
        return new Promise(async function (resolve, reject) {
            AuthModel.applications(body).then((res: any) => {
                console.log(res);
                resolve(res);
            });
        });
    }
    // about(body: any) {
    //     return new Promise(async function (resolve, reject) {
    //         AuthModel.about(body).then((res: any) => {
    //             console.log(res);
    //             resolve(res);
    //         });
    //     });
    // }
    // new_button(body: any) {
    //     return new Promise(async function (resolve, reject) {
    //         AuthModel.new_button(body).then((res: any) => {
    //             console.log(res);
    //             resolve(res);
    //         });
    //     });
    // }
    // schedule(body: any) {
    //     return new Promise(async function (resolve, reject) {
    //         AuthModel.schedule(body).then((res: any) => {
    //             console.log(res);
    //             resolve(res);
    //         });
    //     });
    // }
    // announcements(body: any) {
    //     return new Promise(async function (resolve, reject) {
    //         AuthModel.announcements(body).then((res: any) => {
    //             console.log(res);
    //             resolve(res);
    //         });
    //     });
    // }
    // services(body: any) {
    //     return new Promise(async function (resolve, reject) {
    //         AuthModel.services(body).then((res: any) => {
    //             console.log(res);
    //             resolve(res);
    //         });
    //     });
    // }
    // contact_and_hours(body: any) {
    //     return new Promise(async function (resolve, reject) {
    //         AuthModel.services(body).then((res: any) => {
    //             console.log(res);
    //             resolve(res);
    //         });
    //     });
    // }
    // notificatins(body: any) {
    //     return new Promise(async function (resolve, reject) {
    //         AuthModel.services(body).then((res: any) => {
    //             console.log(res);
    //             resolve(res);
    //         });
    //     });
    // }
    // add_user(body: any) {
    //     return new Promise(async function (resolve, reject) {
    //         AuthModel.add_user(body).then((res: any) => {
    //             console.log(res);
    //             resolve(res);
    //         });
    //     });
    // }
    //     update_user(body: any){
    //         return new Promise(async function (resolve, reject) {
    //              AuthModel.update_user(body).then((res: any) => {
    //                 console.log(res);
    //                 resolve(res);
    //             });
    //         });
    //     }
    //     delete_user(body: any){
    //         return new Promise(async function (resolve, reject) {
    //              AuthModel.delete_user(body).then((res: any) => {
    //                 console.log(res);
    //                 resolve(res);
    //             });
    //         });
    //     }
    // get_user(body: any){
    //         return new Promise(async function (resolve, reject) {
    //              AuthModel.get_user(body).then((res: any) => {
    //                 console.log(res);
    //                 resolve(res);
    //             });
    //         });
    //     }
    //     forget_password(body: any){
    //         return new Promise(async function (resolve, reject) {
    //              AuthModel.forget_password(body).then((res: any) => {
    //                 console.log(res);
    //                 resolve(res);
    //             });
    //         });
    //     }
    //     login(body: any){
    //         return new Promise(async function (resolve, reject) {
    //              AuthModel.login(body).then((res: any) => {
    //                 console.log(res);
    //                 resolve(res);
    //             });
    //         });
    //     }
    get_notifications(body: any){
            return new Promise(async function (resolve, reject) {
                 AuthModel.get_notifications(body).then((res: any) => {
                    console.log(res);
                    resolve(res);
                });
            });
        }
        add_notifications(body: any){
            return new Promise(async function (resolve, reject) {
                 AuthModel.add_notifications(body).then((res: any) => {
                    console.log(res);
                    resolve(res);
                });
            });
        }
        update_notifications(body: any){
            return new Promise(async function (resolve, reject) {
                 AuthModel.update_notifications(body).then((res: any) => {
                    console.log(res);
                    resolve(res);
                });
            });
        }
        update_eyeIcon(body: any){
            return new Promise(async function (resolve, reject) {
                 AuthModel.update_eyeIcon(body).then((res: any) => {
                    console.log(res);
                    resolve(res);
                });
            });
        }
        delete_notification(body: any){
            return new Promise(async function (resolve, reject) {
                 AuthModel.delete_notification(body).then((res: any) => {
                    console.log(res);
                    resolve(res);
                });
            });
        }
        get_announcements(body: any){
            return new Promise(async function (resolve, reject) {
                 AuthModel.get_announcements(body).then((res: any) => {
                    console.log(res);
                    resolve(res);
                });
            });
        }
        add_announcements(body: any){
            return new Promise(async function (resolve, reject) {
                if(body.send==='Now')
                {
                    console.log("+++++++++++");
                    body.send=0;
                       console.log("+++++++++++",body.send);
                       
                }
                else{
                    console.log("----------------");
                    body.send=1;
                    console.log("----------------",body.send);
 
                    
                }
                 AuthModel.add_announcements(body).then((res: any) => {
                    console.log(">>>>>",body.send==='now');
                    // if(body.send==='now')
                    // {
                    //     console.log("11111111111");
                    //     body.send=1;
                    //        console.log("11111111111",body.send);
                    //        console.log(res);
                    //        resolve(res);
                    // }
                    // else{
                    //     console.log("2222222222222");
                    //     res.send=0;
                    //     console.log(res);
                    //     resolve(res);
                    // }
                  
                });
            });
        }
        update_announcements(body: any){
            return new Promise(async function (resolve, reject) {
                 AuthModel.update_announcements(body).then((res: any) => {
                    // console.log(">>>>>",res.sends==='Now');
                    
                    console.log(res);
                    resolve(res);
                });
            });
        }
       
        delete_announcement(body: any){
            return new Promise(async function (resolve, reject) {
                 AuthModel.delete_announcement(body).then((res: any) => {
                    console.log(res);
                    resolve(res);
                });
            });
        }
        // pre_populate(body: any){
        //     return new Promise(async function (resolve, reject) {
        //          AuthModel.pre_populate(body).then((res: any) => {
        //             console.log(res);
        //             resolve(res);
        //         });
        //     });
        // }
        // get_details(body: any){
        //     return new Promise(async function (resolve, reject) {
        //          AuthModel.get_details(body).then((res: any) => {
        //             console.log(res);
        //             resolve(res);
        //         });
        //     });
        // }
        update_contact_and_hours(body: any) {

            return new Promise(async function (resolve, reject) {
    
                AuthModel.update_contact_and_hours(body).then((res: any) => {
    
    
    
                    console.log(res);
    
                    resolve(res);
    
                });
    
            });
    
        }
        get_contact_and_hours(body: any) {

            return new Promise(async function (resolve, reject) {
    
                AuthModel.get_contact_and_hours(body).then((res: any) => {
    
    
    
                    console.log('>>>>>',res);
    
                    resolve(res);
    
                });
    
            });
    
        }
        services(body: any){
            return new Promise(async function (resolve, reject) {
                 AuthModel.services(body).then((res: any) => {
                    console.log(res);
                    resolve(res);
                });
            });
        }
        postservices(body: any){
            return new Promise(async function (resolve, reject) {
                 AuthModel.postservices(body).then((res: any) => {
                    console.log(res);
                    resolve(res);
                });
            });
        }
        putservices(body: any){
            return new Promise(async function (resolve, reject) {
                 AuthModel.putservices(body).then((res: any) => {
                    console.log(res);
                    resolve(res);
                });
            });
        }
        // eyeputservices(body: any){
        //     return new Promise(async function (resolve, reject) {
        //          AuthModel.eyeputservices(body).then((res: any) => {
        //             console.log(res);
        //             resolve(res);
        //         });
        //     });
        // }
        eyeputservices1(body: any){
            return new Promise(async function (resolve, reject) {
                 AuthModel.eyeputservices1(body).then((res: any) => {
                    console.log(res);
                    resolve(res);
                });
            });
        }

        get_about(body: any){
            console.log('res>>>',body);
            return new Promise(async function (resolve, reject) {
                 AuthModel.get_about(body).then((res: any) => {
                    
                
                    resolve(res);
                              
                });
            });
        }
        update_title_position(body: any) {

            return new Promise(async function (resolve, reject) {
    
                AuthModel.update_title_position(body).then((res: any) => {
    
    
    
                    console.log(res);
    
                    resolve(res);
    
                });
    
            });
    
        }
    
     update_about(body: any){
            return new Promise(async function (resolve, reject) {
                 AuthModel.update_about(body).then((res: any) => {
                     console.log('res>>>',res);
                
                    resolve(res);
                
                   
                    }
                );
            });
        }
        create_tiles(body: any) {
            return new Promise(async function (resolve, reject) {
                AuthModel.create_tiles(body).then((res: any) => {
                    console.log(res);
                    resolve(res);
                });
            });
        }
    
        get_tiles(body: any) {
            return new Promise(async function (resolve, reject) {
                AuthModel.get_tiles(body).then((res: any) => {
    
                    console.log('>>>>>',res);
                    resolve(res);
                });
            });
        }
        update_is_checked(body: any) {
            return new Promise(async function (resolve, reject) {
                AuthModel.update_is_checked(body).then((res: any) => {
    
                    console.log(res);
                    resolve(res);
                });
            });
        }
        get_users(body: any) {

            return new Promise(async function (resolve, reject) {
        
              AuthModel.get_users(body).then((res: any) => {
        
                console.log(res);
        
                resolve(res);
        
              });
        
            });
        
          }
          create_schedule(body: any){
            return new Promise(async function (resolve, reject) {
                console.log("bodysvs>>>>>",body)
                for(let i=0;i<body.length;i++){
                    console.log("bodysvs[i]>>>>>",body[i]);
                    
                 AuthModel.create_schedule(body[i]).then((res: any) => {
                     console.log('res>>>',res);
                // body.push(JSON.parse(res).csvRecords)
                    resolve(res);
                              
                });
            }
            });
        }
}

