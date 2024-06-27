"use strict";
var r = require("~/r");
r(
  "uRn7",
  Object.assign(
    {},
    require("../../../../c.js").modules,
    require("~/v.js").modules,
    {
      uRn7: function (e, t, s) {
        s.r(t);
        var i = s("Fcif"),
          r = s("882d"),
          a = s("mztD"),
          c = s("OEMs"),
          l = s("YeA1"),
          h = s("f8bC"),
          o = s("Pp//"),
          d = s("5pTi"),
          u = getApp(),
          n = {
            data: () => ({
              selfFetch: { loading: !0 },
              orderNo: "",
              visible: !1,
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
                  "border-top-left-radius: var(--theme-radius-dialog, 20px); border-top-right-radius: var(--theme-radius-dialog, 20px); text-align: center;" +
                  this.themeCSS
                );
              },
            },
            created() {
              Object(l.b)(this, ["themeCSS", "themeColors", "orderNo"]),
                Object(l.b)(this, ["payResult"], {
                  callback: () => {
                    var e,
                      { payResult: t } = this.ctx.data,
                      { isScanBuyOrder: s = !1, selfFetch: r = {} } = t || {};
                    (this.isScanBuyOrder = s),
                      (this.selfFetchCodeName = s ? "核销码" : "提货码"),
                      (this.selfFetch = Object(i.a)({}, r, {
                        selfFetchNo: this.filterSelfFetchNo(
                          null != (e = r.selfFetchNo) ? e : ""
                        ),
                        loading: !r.selfFetchQRCode,
                      }));
                  },
                }),
                Object(l.d)(this, {
                  showSelfFetchDialog: () => this.onShowDialog(),
                  hideSelfFetchDialog: () => {
                    this.visible = !1;
                  },
                });
            },
            methods: {
              onClose() {
                this.ctx.event.emit("hideSelfFetchDialog"),
                  this.ctx.event.emit("closeAutoOpenPopup");
              },
              saveToLocal() {
                Object(h.a)({ title: "生成海报中" }), this.getPoster(!0);
              },
              getPoster(e) {
                var t = () => {
                    Object(o.a)({ title: "生成海报失败" });
                  },
                  {
                    province: s,
                    city: i,
                    county: a,
                    addressDetail: l,
                    userTime: h,
                    selfFetchQRCode: n,
                    selfFetchNo: m,
                  } = this.selfFetch,
                  { orderItems: f = [] } = this.ctx.data,
                  b = f.map((e) => {
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
                Object(c.b)({
                  type: this.isScanBuyOrder ? "self-fetch-scan-buy" : "",
                  fetchAddress: s + i + a + l,
                  fetchTime: h,
                  items: b.slice(0, 3),
                  itemsLength: b.length,
                  qrcode: n,
                  number: m.replace(/(\d{4})(\d{4})(\d*)/g, "$1 $2 $3"),
                })
                  .then((e) => {
                    Object(d.a)(),
                      e
                        ? u.downloadFile({
                            url: e,
                            success: (e) => {
                              var { statusCode: s, tempFilePath: i } = e;
                              200 === s
                                ? Object(r.e)(i)
                                    .then(() => {
                                      Object(o.a)({
                                        title: "保存成功",
                                        icon: "success",
                                      });
                                    })
                                    .catch(() => {
                                      Object(o.a)({ title: "保存失败" });
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
                      : (Object(d.a)(), t());
                  });
              },
              onShowDialog() {
                this.selfFetch && this.selfFetch.selfFetchQRCode
                  ? (this.visible = !0)
                  : ((this.visible = !0),
                    Object(h.a)({ duration: 1e4 }),
                    this.selfFetchMessage()
                      .then(() => {
                        Object(d.a)();
                      })
                      .catch(() => {
                        Object(d.a)(),
                          Object(o.a)({
                            title:
                              "获取" + this.selfFetchCodeName + "失败，请重试",
                          });
                      }));
              },
              requestErrorHandler() {
                return (
                  (this.retryTimes += 1),
                  this.retryTimes < 3
                    ? new Promise((e, t) => {
                        setTimeout(() => {
                          this.selfFetchMessage().then(e).catch(t);
                        }, 1500);
                      })
                    : Promise.reject()
                );
              },
              selfFetchMessage() {
                return Object(c.a)({
                  requestNo: this.orderNo,
                  phase: this.ctx.data.phasePaymentStage,
                })
                  .then((e) => {
                    if (e && null != e && e.selfFetchQRCode) {
                      var t = Object(a.a)(
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
                      return (
                        (this.selfFetch = Object(i.a)({}, e, {
                          selfFetchNo: this.filterSelfFetchNo(e.selfFetchNo),
                          items: s,
                          loading: !1,
                        })),
                        this.selfFetch
                      );
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
          m = s("9ZMt");
        t.default = m.default.component(n);
      },
    }
  )
);
