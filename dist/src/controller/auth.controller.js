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
authController.about = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const service = new auth_service_1.AuthService();
    service
        .about(req.body)
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
authController.update_about1 = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const service = new auth_service_1.AuthService();
    service
        .update_about1(req.body)
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


authController.add_schedule = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const service = new auth_service_1.AuthService();
    service
        .add_schedule(req.body)
    authController.schedule = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
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
});
    authController.announcements = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        const service = new auth_service_1.AuthService();
        service
            .announcements(req.body)
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
    authController.new_annnouncement1 = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        const service = new auth_service_1.AuthService();
        service
            .new_annnouncement1(req.body)
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
    authController.updateannouncements = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        const service = new auth_service_1.AuthService();
        service
            .updateannouncements(req.body)
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
    // static delete_announcement1: any = async (req: Request, res: Response, next: NextFunction) => {
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
authController.services = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const service = new auth_service_1.AuthService();
    service
        .services(req.body)
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
    authController.contact_and_hours = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        const service = new auth_service_1.AuthService();
        service
            .contact_and_hours(req.body)
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
    authController.notifications = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
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
authController.updatenotifications = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const service = new auth_service_1.AuthService();
    service
        .updateannouncements(req.body)
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