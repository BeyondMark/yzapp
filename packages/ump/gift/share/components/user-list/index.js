"use strict";
var r = require("~/r");
r(
  "aohi",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    aohi: function (e, r, s) {
      s.r(r);
      var i = s("rqVN");
      Object(i.b)({
        properties: {
          gameType: Number,
          receiverList: Array,
          lotteryInfo: Object,
          givenNum: Number,
          giftNum: Number,
        },
        externalClasses: ["user-class"],
      });
    },
  })
);
