"use strict";
var r = require("~/r");
r(
  "TRLl",
  Object.assign(
    {},
    require("../../../../c.js").modules,
    require("~/v.js").modules,
    {
      TRLl: function (e, t, s) {
        s.r(t);
        var r = s("Fcif"),
          o = s("YeA1"),
          i = s("Ewla"),
          a = {
            data: () => ({
              visible: !1,
              themeCSS: "",
              takeGoodsData: { loading: !0 },
              retryTimes: 0,
              orderNo: "",
              hasError: !1,
            }),
            created() {
              Object(o.b)(this, ["themeCSS", "orderNo"]),
                Object(o.d)(this, {
                  showTakeGoodsDialog: () => {
                    this.onShowDialog();
                  },
                });
            },
            methods: {
              onClose() {
                (this.visible = !1), this.ctx.event.emit("closeAutoOpenPopup");
              },
              onShowDialog() {
                (this.visible = !0),
                  this.hasError &&
                    ((this.retryTimes = 0),
                    (this.hasError = !1),
                    (this.takeGoodsData.loading = !0)),
                  this.getTakeGoodsMessage();
              },
              requestErrorHandler() {
                (this.retryTimes += 1),
                  this.retryTimes < 3
                    ? setTimeout(() => {
                        this.getTakeGoodsMessage();
                      }, 1e3)
                    : (this.hasError = !0);
              },
              getTakeGoodsMessage() {
                Object(i.a)({ requestNo: this.orderNo })
                  .then((e) => {
                    null != e && e.takeGoodsCode
                      ? (this.takeGoodsData = Object(r.a)({}, e, {
                          loading: !1,
                        }))
                      : this.requestErrorHandler();
                  })
                  .catch(() => this.requestErrorHandler());
              },
            },
            ud: !0,
          },
          h = s("9ZMt");
        t.default = h.default.component(a);
      },
    }
  )
);
