"use strict";

module.exports = {
  host: process.env.MAIL_SERVER,
  port: process.env.MAIL_PORT,
  secure: false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
  }
};
