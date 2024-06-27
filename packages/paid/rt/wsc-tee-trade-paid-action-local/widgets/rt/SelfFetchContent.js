"use strict";
var r = require("~/r");
r(
  "21Ot",
  Object.assign(
    {},
    require("../../../../c.js").modules,
    require("~/v.js").modules,
    {
      "21Ot": function (e, t, s) {
        s.r(t);
        var r = s("Fcif"),
          a = s("AGZf"),
          c = s("882d"),
          i = s("mztD"),
          l = s("OEMs"),
          h = s("YeA1"),
          o = getApp(),
          d = {
            data: () => ({
              selfFetch: { loading: !0 },
              orderNo: "",
              themeCSS: "",
              themeColors: "",
              retryTimes: 0,
              isScanBuyOrder: !1,
              showSaveImage: !1,
              imageUrl: "",
              selfFetchCodeName: "",
            }),
            computed: {
              customPopupStyle() {
                return (
                  "border-radius: 20px 20px 0 0; text-align: center;" +
                  this.themeCss
                );
              },
            },
            created() {
              Object(h.b)(this, ["themeCSS", "themeColors", "orderNo"]),
                Object(h.b)(this, ["payResult"], {
                  callback: () => {
                    var e,
                      { payResult: t } = this.ctx.data,
                      { isScanBuyOrder: s = !1, selfFetch: a = {} } = t || {};
                    (this.isScanBuyOrder = s),
                      (this.selfFetchCodeName = s ? "核销码" : "提货码"),
                      (this.selfFetch = Object(r.a)({}, a, {
                        selfFetchNo: this.filterSelfFetchNo(
                          null != (e = a.selfFetchNo) ? e : ""
                        ),
                        loading: !a.selfFetchQRCode,
                      }));
                  },
                }),
                this.showContent();
            },
            methods: {
              saveToLocal() {
                a.a.loading({ message: "生成海报中" }), this.getPoster(!0);
              },
              getPoster(e) {
                var t = () => {
                    Object(a.a)({ message: "生成海报失败", icon: "none" });
                  },
                  {
                    province: s,
                    city: r,
                    county: i,
                    addressDetail: h,
                    userTime: d,
                    selfFetchQRCode: n,
                    selfFetchNo: u,
                  } = this.selfFetch,
                  { orderItems: m = [] } = this.ctx.data,
                  f = m.map((e) => {
                    var t;
                    return {
                      title: e.title,
                      num: e.num,
                      sku:
                        (null == (t = e.skuItems)
                          ? void 0
                          : t.map((e) => e.k + "：" + e.v).join("；")) ||
                        "默认规格",
                      imgUrl: e.imgUrl,
                    };
                  });
                Object(l.b)({
                  type: this.isScanBuyOrder ? "self-fetch-scan-buy" : "",
                  fetchAddress: s + r + i + h,
                  fetchTime: d,
                  items: f.slice(0, 3),
                  itemsLength: f.length,
                  qrcode: n,
                  number: u.replace(/(\d{4})(\d{4})(\d*)/g, "$1 $2 $3"),
                })
                  .then((e) => {
                    a.a.clear(),
                      e
                        ? o.downloadFile({
                            url: e,
                            success: (e) => {
                              var { statusCode: s, tempFilePath: r } = e;
                              200 === s
                                ? Object(c.e)(r)
                                    .then(() => {
                                      a.a.success("保存成功");
                                    })
                                    .catch(() => {
                                      Object(a.a)("保存失败");
                                    })
                                : t();
                            },
                            fail: t,
                          })
                        : t();
                  })
                  .catch(() => {
                    e
                      ? setTimeout(() => {
                          this.getPoster(!1);
                        }, 1e3)
                      : (a.a.clear(), t());
                  });
              },
              showContent() {
                this.selfFetchMessage();
              },
              requestErrorHandler() {
                return (
                  (this.retryTimes += 1),
                  this.retryTimes < 3
                    ? new Promise((e, t) => {
                        setTimeout(() => {
                          this.selfFetchMessage().then(e).catch(t);
                        }, 1e3);
                      })
                    : ((this.selfFetch = { hasError: !0 }), Promise.reject())
                );
              },
              selfFetchMessage() {
                return Object(l.a)({
                  requestNo: this.orderNo,
                  phase: this.ctx.data.phasePaymentStage,
                })
                  .then((e) => {
                    if (e && null != e && e.selfFetchQRCode) {
                      var t = Object(i.a)(
                          "public_files/2019/08/06/3f099aa967abd3821d610344d7ba3729.jpg"
                        ),
                        s = this.ctx.data.orderItems.map((e) => ({
                          title: e.title,
                          num: e.num,
                          sku:
                            e.skuItems
                              .map((e) => e.k + "：" + e.v)
                              .join("；") || "默认规格",
                          imgUrl: e.imgUrl || t,
                        }));
                      return (this.selfFetch = Object(r.a)({}, e, {
                        selfFetchNo: this.filterSelfFetchNo(e.selfFetchNo),
                        items: s,
                        loading: !1,
                      }));
                    }
                    return this.requestErrorHandler();
                  })
                  .catch(this.requestErrorHandler);
              },
              filterSelfFetchNo: (e) =>
                e.replace(/(\d{4})(\d{4})(\d*)/g, "$1 $2 $3"),
            },
            ud: !0,
          },
          n = s("9ZMt");
        t.default = n.default.component(d);
      },
    }
  )
);
