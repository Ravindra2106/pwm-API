import { Request, Response, NextFunction } from "express";
import { dbClient } from "../config/db";
import { AuthService } from "../service/auth.service";
import { ServerError } from "../utils/errorHandler";
export class authController {
  // static log_user: any = async (req: Request, res: Response, next: NextFunction) => {
  //   const service = new AuthService();
  //   service
  //     .log_user(req.body)
  //     .then(
  //       (resp: any) => {
  //         console.log('res',resp)
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
  static applications: any = async (req: Request, res: Response, next: NextFunction) => {
    const service = new AuthService();
    service
      .applications(req.body)
      .then(
        (resp: any) => {
          return res.status(200).send({
            status: 200,
            message: 'success',
            data: resp,
          } );
        },
        (err: Error) => {
          ServerError(err, res, next);
        }
      )
      .catch((err: Error) => {
        ServerError(err, res, next);
      });
  }
  static about: any = async (req: Request, res: Response, next: NextFunction) => {
    const service = new AuthService();
    service
      .applications(req.body)
      .then(
        (resp: any) => {
          return res.status(200).send({
            status: 200,
            message: 'success',
            data: resp,
          } );
        },
        (err: Error) => {
          ServerError(err, res, next);
        }
      )
      .catch((err: Error) => {
        ServerError(err, res, next);
      });
  }
  static new_button: any = async (req: Request, res: Response, next: NextFunction) => {
    const service = new AuthService();
    service
      .applications(req.body)
      .then(
        (resp: any) => {
          return res.status(200).send({
            status: 200,
            message: 'success',
            data: resp,
          } );
        },
        (err: Error) => {
          ServerError(err, res, next);
        }
      )
      .catch((err: Error) => {
        ServerError(err, res, next);
      });
  }
  static schedule: any = async (req: Request, res: Response, next: NextFunction) => {
    const service = new AuthService();
    service
      .applications(req.body)
      .then(
        (resp: any) => {
          return res.status(200).send({
            status: 200,
            message: 'success',
            data: resp,
          } );
        },
        (err: Error) => {
          ServerError(err, res, next);
        }
      )
      .catch((err: Error) => {
        ServerError(err, res, next);
      });
  }
  static announcements: any = async (req: Request, res: Response, next: NextFunction) => {
    const service = new AuthService();
    service
      .applications(req.body)
      .then(
        (resp: any) => {
          return res.status(200).send({
            status: 200,
            message: 'success',
            data: resp,
          } );
        },
        (err: Error) => {
          ServerError(err, res, next);
        }
      )
      .catch((err: Error) => {
        ServerError(err, res, next);
      });
  }
  static services: any = async (req: Request, res: Response, next: NextFunction) => {
    const service = new AuthService();
    service
      .applications(req.body)
      .then(
        (resp: any) => {
          return res.status(200).send({
            status: 200,
            message: 'success',
            data: resp,
          } );
        },
        (err: Error) => {
          ServerError(err, res, next);
        }
      )
      .catch((err: Error) => {
        ServerError(err, res, next);
      });
  }
  static contact_and_hours: any = async (req: Request, res: Response, next: NextFunction) => {
    const service = new AuthService();
    service
      .applications(req.body)
      .then(
        (resp: any) => {
          return res.status(200).send({
            status: 200,
            message: 'success',
            data: resp,
          } );
        },
        (err: Error) => {
          ServerError(err, res, next);
        }
      )
      .catch((err: Error) => {
        ServerError(err, res, next);
      });
  }
  static notifications: any = async (req: Request, res: Response, next: NextFunction) => {
    const service = new AuthService();
    service
      .applications(req.body)
      .then(
        (resp: any) => {
          return res.status(200).send({
            status: 200,
            message: 'success',
            data: resp,
          } );
        },
        (err: Error) => {
          ServerError(err, res, next);
        }
      )
      .catch((err: Error) => {
        ServerError(err, res, next);
      });
  }
  static add_user: any = async (req: Request, res: Response, next: NextFunction) => {
    const service = new AuthService();
    service
      .add_user(req.body)
      .then(
        (resp: any) => {
          return res.status(200).send({
            status: 200,
            message: 'success',
            data: resp,
          } );
        },
        (err: Error) => {
          ServerError(err, res, next);
        }
      )
      .catch((err: Error) => {
        ServerError(err, res, next);
      });
  }

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
  static get_user: any = async (req: Request, res: Response, next: NextFunction) => {
    const service = new AuthService();
    service
      .get_user(req.body)
      .then(
        (resp: any) => {
          return res.status(200).send({
            status: 200,
            message: 'success',
            data: resp,
          } );
        },
        (err: Error) => {
          ServerError(err, res, next);
        }
      )
      .catch((err: Error) => {
        ServerError(err, res, next);
      });
  }
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
  static log_user: any = async (req: Request, res: Response, next: NextFunction) => {
    const service = new AuthService();
    service
      .log_user(req.body)
      .then(
        (resp: any) => {
          return res.status(200).send({
            status: 200,
            message: 'success',
            data: resp,
            
          } );
        },
        (err: Error) => {
          ServerError(err, res, next);
        }
      )
      .catch((err: Error) => {
        ServerError(err, res, next);
        res.status(500).send('something broke!');
      });
  }
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
  static get_notifications: any = async (req: Request, res: Response, next: NextFunction) => {
    const service = new AuthService();
    service
      .get_notifications(req.body)
      .then(
        (resp: any) => {
          return res.status(200).send({
            status: 200,
            message: 'success',
            data: resp,
          } );
        },
        (err: Error) => {
          ServerError(err, res, next);
        }
      )
      .catch((err: Error) => {
        ServerError(err, res, next);
      });
}
static add_notifications: any = async (req: Request, res: Response, next: NextFunction) => {
  const service = new AuthService();
  service
    .add_notifications(req.body)
    .then(
      (resp: any) => {
        return res.status(200).send({
          status: 200,
          message: 'success',
          data: resp,
        } );
      },
      (err: Error) => {
        ServerError(err, res, next);
      }
    )
    .catch((err: Error) => {
      ServerError(err, res, next);
    });
}
static update_notifications: any = async (req: Request, res: Response, next: NextFunction) => {
  const service = new AuthService();
  service
    .update_notifications(req.body)
    .then(
      (resp: any) => {
        return res.status(200).send({
          status: 200,
          message: 'success',
          data: resp,
        } );
      },
      (err: Error) => {
        ServerError(err, res, next);
      }
    )
    .catch((err: Error) => {
      ServerError(err, res, next);
    });
}
}








