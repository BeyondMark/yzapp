"use strict";
var r = require("~/r");
r(
  "rlrW",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    rlrW: function (e, t, r) {
      r.r(t);
      var a = r("rqVN");
      Object(a.b)({
        properties: {
          presenterView: Boolean,
          finallyTaken: { type: Boolean, observer: "handleGiftTaken" },
          isPresenter: Boolean,
          useUp: Boolean,
          outDated: Boolean,
          gameType: Number,
          giftOrderNo: String,
          lotteryEnd: { type: Boolean, default: !1 },
        },
        data: { isButtonGroup: !1 },
        externalClasses: ["btn-class"],
        attached() {
          this.observeDataChange();
        },
        methods: {
          handleWholeBtnTap() {
            var { presenterView: e, gameType: t, lotteryEnd: r } = this.data;
            e
              ? 2 === t && r
                ? this.triggerEvent("jump")
                : this.triggerEvent("share")
              : this.triggerEvent("jump");
          },
          handleRepresentTap() {
            this.triggerEvent("represent");
          },
          handleAddressTap() {
            this.triggerEvent("address");
          },
          onGetUserInfo(e) {
            var { detail: t } = e;
            this.triggerEvent("getuser", t);
          },
          handleGiftTaken() {
            this.observeDataChange();
          },
          observeDataChange() {
            var e = !1,
              {
                finallyTaken: t,
                useUp: r,
                outDated: a,
                presenterView: s,
                giftOrderNo: n,
              } = this.data;
            s || (!t && (r || a)) || t || ((e = !0), n || (e = !1)),
              this.setYZData({ isButtonGroup: e });
          },
        },
      });
    },
  })
);
