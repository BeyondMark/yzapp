"use strict";
var r = require("~/r");
r(
  "Fnze",
  Object.assign(
    {},
    require("../../../../c.js").modules,
    require("~/v.js").modules,
    {
      Fnze: function (e, t, r) {
        r.r(t);
        var s = r("Fcif"),
          o = r("YeA1"),
          a = r("Ewla"),
          i = {
            data: () => ({
              themeCSS: "",
              takeGoodsData: { loading: !0 },
              retryTimes: 0,
              orderNo: "",
              hasError: !1,
            }),
            computed: {
              takeGoodsCodeStr() {
                return this.hasError
                  ? "出错了"
                  : this.takeGoodsData.loading
                  ? "加载中"
                  : this.takeGoodsData.takeGoodsCode;
              },
            },
            created() {
              Object(o.b)(this, ["themeCSS", "orderNo"]),
                this.ctx.watch("hasPaid", (e) => {
                  e && this.showContent();
                });
            },
            methods: {
              showContent() {
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
                Object(a.a)({ requestNo: this.orderNo })
                  .then((e) => {
                    null != e && e.takeGoodsCode
                      ? (this.takeGoodsData = Object(s.a)({}, e, {
                          loading: !1,
                        }))
                      : this.requestErrorHandler();
                  })
                  .catch(() => this.requestErrorHandler());
              },
            },
            ud: !0,
          },
          d = r("9ZMt");
        t.default = d.default.component(i);
      },
    }
  )
);
