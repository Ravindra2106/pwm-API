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
authController.get_user = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const service = new auth_service_1.AuthService();
    service
        .get_user(req.body)
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