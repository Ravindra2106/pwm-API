import { Request, Response, NextFunction } from "express";
import { dbClient } from "../config/db";
import { AuthService } from "../service/auth.service";
import { ServerError } from "../utils/errorHandler";
export class authController {
  static log_user: any = async (req: Request, res: Response, next: NextFunction) => {
    const service = new AuthService();
    service
      .log_user(req.body)
      .then(
        (resp: any) => {
          console.log('res',resp)
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
  static get_notifications: any = async (req: Request, res: Response, next: NextFunction) => {
    const service = new AuthService();
    console.log("get_notification",req)
    service
      .get_notifications(req.query)
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
static update_eyeIcon: any = async (req: Request, res: Response, next: NextFunction) => {
  const service = new AuthService();
  service
    .update_eyeIcon(req.body)
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
  static delete_notification: any = async (req: Request, res: Response, next: NextFunction) => {
    const service = new AuthService();
    service
      .delete_notification(req.body)
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
static get_announcements: any = async (req: Request, res: Response, next: NextFunction) => {
  const service = new AuthService();
  service
    .get_announcements(req.query)
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
static add_announcements: any = async (req: Request, res: Response, next: NextFunction) => {
const service = new AuthService();
service
  .add_announcements(req.body)
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
static update_announcements: any = async (req: Request, res: Response, next: NextFunction) => {
const service = new AuthService();
service
  .update_announcements(req.body)
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
static delete_announcement: any = async (req: Request, res: Response, next: NextFunction) => {
  const service = new AuthService();
  service
    .delete_announcement(req.body)
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
    static update_contact_and_hours  : any = async (req: Request, res: Response, next: NextFunction) => {

      const service = new AuthService();
  
      service
  
        .update_contact_and_hours(req.body)
  
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
    static get_contact_and_hours: any = async (req: Request, res: Response, next: NextFunction) => {

      const service = new AuthService();
  
      service
  
        .get_contact_and_hours(req.query)
  
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
  
        .services(req.query)
  
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
    static postservices  : any = async (req: Request, res: Response, next: NextFunction) => {

      const service = new AuthService();
  
      service
  
        .postservices(req.body)
  
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
    static putservices  : any = async (req: Request, res: Response, next: NextFunction) => {

      const service = new AuthService();
  
      service
  
        .putservices(req.body)
  
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
    static eyeputservices1  : any = async (req: Request, res: Response, next: NextFunction) => {

      const service = new AuthService();
  
      service
  
        .eyeputservices1(req.body)
  
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

    static get_about: any = async (req: Request, res: Response, next: NextFunction) => {
      const service = new AuthService();
      service
        .get_about(req.query)
        .then(
          (resp: any) => {
            console.log(">>>>..>>>>");
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
  
  static update_about: any = async (req: Request, res: Response, next: NextFunction) => {
      const service = new AuthService();
      service
        .update_about(req.body)
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
    static create_tiles: any = async (req: Request, res: Response, next: NextFunction) => {
      const service = new AuthService();
      service
        .create_tiles(req.body)
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
    static get_tiles: any = async (req: Request, res: Response, next: NextFunction) => {
      const service = new AuthService();
      service
        .get_tiles(req.query)
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
    static update_is_checked : any = async (req: Request, res: Response, next: NextFunction) => {
      const service = new AuthService();
      service
        .update_is_checked(req.body)
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
    static update_title_position : any = async (req: Request, res: Response, next: NextFunction) => {

      const service = new AuthService();
  
      service
  
        .update_title_position(req.body)
  
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
    static get_users: any = async (

      req: Request,
  
      res: Response,
  
      next: NextFunction
  
    ) => {
  
      const service = new AuthService();
  
      service
  
        .get_users(req.query)
  
        .then(
  
          (resp: any) => {
  
            return res.status(200).send({
  
              status: 200,
  
              message: "success",
  
              data: resp,
  
            });
  
          },
  
          (err: Error) => {
  
            ServerError(err, res, next);
  
          }
  
        )
  
        .catch((err: Error) => {
  
          ServerError(err, res, next);
  
        });
  
    };
    static create_schedule: any = async (req: Request, res: Response, next: NextFunction) => {
      const service = new AuthService();
      service
        .create_schedule(req.body)
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








