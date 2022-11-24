"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.authController = void 0;
const auth_service_1 = require("../service/auth.service");
const errorHandler_1 = require("../utils/errorHandler");
class authController {
}
exports.authController = authController;
_a = authController;
authController.log_user = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const service = new auth_service_1.AuthService();
    service
        .log_user(req.body)
        .then((resp) => {
        console.log('res', resp);
        return res.status(200).send({
            status: 200,
            message: 'success',
            data: resp,
        });
    }, (err) => {
        (0, errorHandler_1.ServerError)(err, res, next);
    })
        .catch((err) => {
        (0, errorHandler_1.ServerError)(err, res, next);
    });
});
authController.add_user = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const service = new auth_service_1.AuthService();
    service
        .add_user(req.body)
        .then((resp) => {
        return res.status(200).send({
            status: 200,
            message: 'success',
            data: resp,
        });
    }, (err) => {
        (0, errorHandler_1.ServerError)(err, res, next);
    })
        .catch((err) => {
        (0, errorHandler_1.ServerError)(err, res, next);
    });
});
authController.applications = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const service = new auth_service_1.AuthService();
    service
        .applications(req.body)
        .then((resp) => {
        return res.status(200).send({
            status: 200,
            message: 'success',
            data: resp,
        });
    }, (err) => {
        (0, errorHandler_1.ServerError)(err, res, next);
    })
        .catch((err) => {
        (0, errorHandler_1.ServerError)(err, res, next);
    });
});
// static about: any = async (req: Request, res: Response, next: NextFunction) => {
//   const service = new AuthService();
//   service
//     .applications(req.body)
//     .then(
//       (resp: any) => {
//         return res.status(200).send({
//           status: 200,
//           message: 'success',
//           data: resp,
//         } );
//       },
//       (err: Error) => {
//         ServerError(err, res, next);
//       }
//     )
//     .catch((err: Error) => {
//       ServerError(err, res, next);
//     });
// }
// static new_button: any = async (req: Request, res: Response, next: NextFunction) => {
//   const service = new AuthService();
//   service
//     .applications(req.body)
//     .then(
//       (resp: any) => {
//         return res.status(200).send({
//           status: 200,
//           message: 'success',
//           data: resp,
//         } );
//       },
//       (err: Error) => {
//         ServerError(err, res, next);
//       }
//     )
//     .catch((err: Error) => {
//       ServerError(err, res, next);
//     });
// }
// static schedule: any = async (req: Request, res: Response, next: NextFunction) => {
//   const service = new AuthService();
//   service
//     .applications(req.body)
//     .then(
//       (resp: any) => {
//         return res.status(200).send({
//           status: 200,
//           message: 'success',
//           data: resp,
//         } );
//       },
//       (err: Error) => {
//         ServerError(err, res, next);
//       }
//     )
//     .catch((err: Error) => {
//       ServerError(err, res, next);
//     });
// }
// static announcements: any = async (req: Request, res: Response, next: NextFunction) => {
//   const service = new AuthService();
//   service
//     .applications(req.body)
//     .then(
//       (resp: any) => {
//         return res.status(200).send({
//           status: 200,
//           message: 'success',
//           data: resp,
//         } );
//       },
//       (err: Error) => {
//         ServerError(err, res, next);
//       }
//     )
//     .catch((err: Error) => {
//       ServerError(err, res, next);
//     });
// }
// static services: any = async (req: Request, res: Response, next: NextFunction) => {
//   const service = new AuthService();
//   service
//     .applications(req.body)
//     .then(
//       (resp: any) => {
//         return res.status(200).send({
//           status: 200,
//           message: 'success',
//           data: resp,
//         } );
//       },
//       (err: Error) => {
//         ServerError(err, res, next);
//       }
//     )
//     .catch((err: Error) => {
//       ServerError(err, res, next);
//     });
// }
// static contact_and_hours: any = async (req: Request, res: Response, next: NextFunction) => {
//   const service = new AuthService();
//   service
//     .applications(req.body)
//     .then(
//       (resp: any) => {
//         return res.status(200).send({
//           status: 200,
//           message: 'success',
//           data: resp,
//         } );
//       },
//       (err: Error) => {
//         ServerError(err, res, next);
//       }
//     )
//     .catch((err: Error) => {
//       ServerError(err, res, next);
//     });
// }
// static notifications: any = async (req: Request, res: Response, next: NextFunction) => {
//   const service = new AuthService();
//   service
//     .applications(req.body)
//     .then(
//       (resp: any) => {
//         return res.status(200).send({
//           status: 200,
//           message: 'success',
//           data: resp,
//         } );
//       },
//       (err: Error) => {
//         ServerError(err, res, next);
//       }
//     )
//     .catch((err: Error) => {
//       ServerError(err, res, next);
//     });
// }
//   static update_user: any = async (req: Request, res: Response, next: NextFunction) => {
//     const service = new AuthService();
//     service
//       .update_user(req.body)
//       .then(
//         (resp: any) => {
//           return res.status(200).send({
//             status: 200,
//             message: 'success',
//             data: resp,
//           } );
//         },
//         (err: Error) => {
//           ServerError(err, res, next);
//         }
//       )
//       .catch((err: Error) => {
//         ServerError(err, res, next);
//       });
//   }
//   static delete_user: any = async (req: Request, res: Response, next: NextFunction) => {
//     const service = new AuthService();
//     service
//       .delete_user(req.body)
//       .then(
//         (resp: any) => {
//           return res.status(200).send({
//             status: 200,
//             message: 'success',
//             data: resp,
//           } );
//         },
//         (err: Error) => {
//           ServerError(err, res, next);
//         }
//       )
//       .catch((err: Error) => {
//         ServerError(err, res, next);
//       });
//   }
// static get_user: any = async (req: Request, res: Response, next: NextFunction) => {
//   const service = new AuthService();
//   service
//     .get_user(req.body)
//     .then(
//       (resp: any) => {
//         return res.status(200).send({
//           status: 200,
//           message: 'success',
//           data: resp,
//         } );
//       },
//       (err: Error) => {
//         ServerError(err, res, next);
//       }
//     )
//     .catch((err: Error) => {
//       ServerError(err, res, next);
//     });
// }
//   static forget_password: any = async (req: Request, res: Response, next: NextFunction) => {
//     const service = new AuthService();
//     service
//       .forget_password(req.body)
//       .then(
//         (resp: any) => {
//           return res.status(200).send({
//             status: 200,
//             message: 'success',
//             data: resp,
//           } );
//         },
//         (err: Error) => {
//           ServerError(err, res, next);
//         }
//       )
//       .catch((err: Error) => {
//         ServerError(err, res, next);
//       });
//   }
// static log_user: any = async (req: Request, res: Response, next: NextFunction) => {
//   const service = new AuthService();
//   service
//     .log_user(req.body)
//     .then(
//       (resp: any) => {
//         return res.status(200).send({
//           status: 200,
//           message: 'success',
//           data: resp,
//         } );
//       },
//       (err: Error) => {
//         ServerError(err, res, next);
//       }
//     )
//     .catch((err: Error) => {
//       ServerError(err, res, next);
//       res.status(500).send('something broke!');
//     });
// }
//   static dashboard: any = async (req: Request, res: Response, next: NextFunction) => {
//     const service = new AuthService();
//     service
//       .dashboard(req.body)
//       .then(
//         (resp: any) => {
//           return res.status(200).send({
//             status: 200,
//             message: 'success',
//             data: resp,
//           } );
//         },
//         (err: Error) => {
//           ServerError(err, res, next);
//         }
//       )
//       .catch((err: Error) => {
//         ServerError(err, res, next);
//       });
authController.get_notifications = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const service = new auth_service_1.AuthService();
    console.log("get_notification", req);
    service
        .get_notifications(req.query)
        .then((resp) => {
        return res.status(200).send({
            status: 200,
            message: 'success',
            data: resp,
        });
    }, (err) => {
        (0, errorHandler_1.ServerError)(err, res, next);
    })
        .catch((err) => {
        (0, errorHandler_1.ServerError)(err, res, next);
    });
});
authController.add_notifications = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const service = new auth_service_1.AuthService();
    service
        .add_notifications(req.body)
        .then((resp) => {
        return res.status(200).send({
            status: 200,
            message: 'success',
            data: resp,
        });
    }, (err) => {
        (0, errorHandler_1.ServerError)(err, res, next);
    })
        .catch((err) => {
        (0, errorHandler_1.ServerError)(err, res, next);
    });
});
authController.update_notifications = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const service = new auth_service_1.AuthService();
    service
        .update_notifications(req.body)
        .then((resp) => {
        return res.status(200).send({
            status: 200,
            message: 'success',
            data: resp,
        });
    }, (err) => {
        (0, errorHandler_1.ServerError)(err, res, next);
    })
        .catch((err) => {
        (0, errorHandler_1.ServerError)(err, res, next);
    });
});
authController.update_eyeIcon = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const service = new auth_service_1.AuthService();
    service
        .update_eyeIcon(req.body)
        .then((resp) => {
        return res.status(200).send({
            status: 200,
            message: 'success',
            data: resp,
        });
    }, (err) => {
        (0, errorHandler_1.ServerError)(err, res, next);
    })
        .catch((err) => {
        (0, errorHandler_1.ServerError)(err, res, next);
    });
});
authController.delete_notification = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const service = new auth_service_1.AuthService();
    service
        .delete_notification(req.body)
        .then((resp) => {
        return res.status(200).send({
            status: 200,
            message: 'success',
            data: resp,
        });
    }, (err) => {
        (0, errorHandler_1.ServerError)(err, res, next);
    })
        .catch((err) => {
        (0, errorHandler_1.ServerError)(err, res, next);
    });
});
authController.get_announcements = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const service = new auth_service_1.AuthService();
    service
        .get_announcements(req.query)
        .then((resp) => {
        return res.status(200).send({
            status: 200,
            message: 'success',
            data: resp,
        });
    }, (err) => {
        (0, errorHandler_1.ServerError)(err, res, next);
    })
        .catch((err) => {
        (0, errorHandler_1.ServerError)(err, res, next);
    });
});
authController.add_announcements = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const service = new auth_service_1.AuthService();
    service
        .add_announcements(req.body)
        .then((resp) => {
        return res.status(200).send({
            status: 200,
            message: 'success',
            data: resp,
        });
    }, (err) => {
        (0, errorHandler_1.ServerError)(err, res, next);
    })
        .catch((err) => {
        (0, errorHandler_1.ServerError)(err, res, next);
    });
});
authController.update_announcements = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const service = new auth_service_1.AuthService();
    service
        .update_announcements(req.body)
        .then((resp) => {
        return res.status(200).send({
            status: 200,
            message: 'success',
            data: resp,
        });
    }, (err) => {
        (0, errorHandler_1.ServerError)(err, res, next);
    })
        .catch((err) => {
        (0, errorHandler_1.ServerError)(err, res, next);
    });
});
authController.delete_announcement = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const service = new auth_service_1.AuthService();
    service
        .delete_announcement(req.body)
        .then((resp) => {
        return res.status(200).send({
            status: 200,
            message: 'success',
            data: resp,
        });
    }, (err) => {
        (0, errorHandler_1.ServerError)(err, res, next);
    })
        .catch((err) => {
        (0, errorHandler_1.ServerError)(err, res, next);
    });
});
// static pre_populate: any = async (req: Request, res: Response, next: NextFunction) => {
//   const service = new AuthService();
//   service
//     .pre_populate(req.body)
//     .then(
//       (resp: any) => {
//         return res.status(200).send({
//           status: 200,
//           message: 'success',
//           data: resp,
//         } );
//       },
//       (err: Error) => {
//         ServerError(err, res, next);
//       }
//     )
//     .catch((err: Error) => {
//       ServerError(err, res, next);
//     });
//   }
// static get_details: any = async (req: Request, res: Response, next: NextFunction) => {
//   const service = new AuthService();
//   service
//     .get_details(req.body)
//     .then(
//       (resp: any) => {
//         return res.status(200).send({
//           status: 200,
//           message: 'success',
//           data: resp,
//         } );
//       },
//       (err: Error) => {
//         ServerError(err, res, next);
//       }
//     )
//     .catch((err: Error) => {
//       ServerError(err, res, next);
//     });
//   }
authController.update_contact_and_hours = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const service = new auth_service_1.AuthService();
    service
        .update_contact_and_hours(req.body)
        .then((resp) => {
        return res.status(200).send({
            status: 200,
            message: 'success',
            data: resp,
        });
    }, (err) => {
        (0, errorHandler_1.ServerError)(err, res, next);
    })
        .catch((err) => {
        (0, errorHandler_1.ServerError)(err, res, next);
    });
});
authController.get_contact_and_hours = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const service = new auth_service_1.AuthService();
    service
        .get_contact_and_hours(req.query)
        .then((resp) => {
        return res.status(200).send({
            status: 200,
            message: 'success',
            data: resp,
        });
    }, (err) => {
        (0, errorHandler_1.ServerError)(err, res, next);
    })
        .catch((err) => {
        (0, errorHandler_1.ServerError)(err, res, next);
    });
});
authController.services = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const service = new auth_service_1.AuthService();
    service
        .services(req.query)
        .then((resp) => {
        return res.status(200).send({
            status: 200,
            message: 'success',
            data: resp,
        });
    }, (err) => {
        (0, errorHandler_1.ServerError)(err, res, next);
    })
        .catch((err) => {
        (0, errorHandler_1.ServerError)(err, res, next);
    });
});
authController.postservices = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const service = new auth_service_1.AuthService();
    service
        .postservices(req.body)
        .then((resp) => {
        return res.status(200).send({
            status: 200,
            message: 'success',
            data: resp,
        });
    }, (err) => {
        (0, errorHandler_1.ServerError)(err, res, next);
    })
        .catch((err) => {
        (0, errorHandler_1.ServerError)(err, res, next);
    });
});
authController.putservices = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const service = new auth_service_1.AuthService();
    service
        .putservices(req.body)
        .then((resp) => {
        return res.status(200).send({
            status: 200,
            message: 'success',
            data: resp,
        });
    }, (err) => {
        (0, errorHandler_1.ServerError)(err, res, next);
    })
        .catch((err) => {
        (0, errorHandler_1.ServerError)(err, res, next);
    });
});
// static eyeputservices  : any = async (req: Request, res: Response, next: NextFunction) => {
//   const service = new AuthService();
//   service
//     .eyeputservices(req.body)
//     .then(
//       (resp: any) => {
//         return res.status(200).send({
//           status: 200,
//           message: 'success',
//           data: resp,
//         } );
//       },
//       (err: Error) => {
//         ServerError(err, res, next);
//       }
//     )
//     .catch((err: Error) => {
//       ServerError(err, res, next);
//     });
// }
authController.eyeputservices1 = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const service = new auth_service_1.AuthService();
    service
        .eyeputservices1(req.body)
        .then((resp) => {
        return res.status(200).send({
            status: 200,
            message: 'success',
            data: resp,
        });
    }, (err) => {
        (0, errorHandler_1.ServerError)(err, res, next);
    })
        .catch((err) => {
        (0, errorHandler_1.ServerError)(err, res, next);
    });
});
authController.get_about = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const service = new auth_service_1.AuthService();
    service
        .get_about(req.query)
        .then((resp) => {
        console.log(">>>>..>>>>");
        return res.status(200).send({
            status: 200,
            message: 'success',
            data: resp,
        });
    }, (err) => {
        (0, errorHandler_1.ServerError)(err, res, next);
    })
        .catch((err) => {
        (0, errorHandler_1.ServerError)(err, res, next);
    });
});
authController.update_about = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const service = new auth_service_1.AuthService();
    service
        .update_about(req.body)
        .then((resp) => {
        return res.status(200).send({
            status: 200,
            message: 'success',
            data: resp,
        });
    }, (err) => {
        (0, errorHandler_1.ServerError)(err, res, next);
    })
        .catch((err) => {
        (0, errorHandler_1.ServerError)(err, res, next);
    });
});
authController.create_tiles = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const service = new auth_service_1.AuthService();
    service
        .create_tiles(req.body)
        .then((resp) => {
        return res.status(200).send({
            status: 200,
            message: 'success',
            data: resp,
        });
    }, (err) => {
        (0, errorHandler_1.ServerError)(err, res, next);
    })
        .catch((err) => {
        (0, errorHandler_1.ServerError)(err, res, next);
    });
});
authController.get_tiles = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const service = new auth_service_1.AuthService();
    service
        .get_tiles(req.query)
        .then((resp) => {
        return res.status(200).send({
            status: 200,
            message: 'success',
            data: resp,
        });
    }, (err) => {
        (0, errorHandler_1.ServerError)(err, res, next);
    })
        .catch((err) => {
        (0, errorHandler_1.ServerError)(err, res, next);
    });
});
authController.update_is_checked = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const service = new auth_service_1.AuthService();
    service
        .update_is_checked(req.body)
        .then((resp) => {
        return res.status(200).send({
            status: 200,
            message: 'success',
            data: resp,
        });
    }, (err) => {
        (0, errorHandler_1.ServerError)(err, res, next);
    })
        .catch((err) => {
        (0, errorHandler_1.ServerError)(err, res, next);
    });
});
authController.update_title_position = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const service = new auth_service_1.AuthService();
    service
        .update_title_position(req.body)
        .then((resp) => {
        return res.status(200).send({
            status: 200,
            message: 'success',
            data: resp,
        });
    }, (err) => {
        (0, errorHandler_1.ServerError)(err, res, next);
    })
        .catch((err) => {
        (0, errorHandler_1.ServerError)(err, res, next);
    });
});
authController.get_users = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const service = new auth_service_1.AuthService();
    service
        .get_users(req.query)
        .then((resp) => {
        return res.status(200).send({
            status: 200,
            message: "success",
            data: resp,
        });
    }, (err) => {
        (0, errorHandler_1.ServerError)(err, res, next);
    })
        .catch((err) => {
        (0, errorHandler_1.ServerError)(err, res, next);
    });
});
authController.create_schedule = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const service = new auth_service_1.AuthService();
    service
        .create_schedule(req.body)
        .then((resp) => {
        return res.status(200).send({
            status: 200,
            message: 'success',
            data: resp,
        });
    }, (err) => {
        (0, errorHandler_1.ServerError)(err, res, next);
    })
        .catch((err) => {
        (0, errorHandler_1.ServerError)(err, res, next);
    });
});
//# sourceMappingURL=auth.controller.js.map