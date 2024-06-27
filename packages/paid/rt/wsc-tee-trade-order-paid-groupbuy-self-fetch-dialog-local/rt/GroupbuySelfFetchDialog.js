"use strict";
var r = require("~/r");
r(
  "e5kN",
  Object.assign({}, require("~/v.js").modules, {
    e5kN: function (e, t, o) {
      o.r(t);
      var r = o("zMoS"),
        s = o("882d"),
        i = o("AGZf"),
        a = o("US/N"),
        h = o("9ZMt"),
        d = {
          data: () => ({
            imageUrl: "",
            qrCode: "",
            headerName: "",
            payNo: "",
            verifyCode: "",
            qrNum: "",
            headerFetchAddress: "",
            items: [],
            loading: !1,
            hasError: !1,
            orderNo: "",
            visible: !1,
            showSaveImage: !1,
          }),
          created() {
            this.ctx.event.listen("openGroupbuySelfFetchDialog", () => {
              this.open();
            }),
              (this.unWatchOrderNo = this.ctx.watch("orderNo", (e) => {
                this.orderNo = e;
              }));
          },
          destroyed() {
            this.ctx.event.remove("openGroupbuySelfFetchDialog"),
              this.unWatchOrderNo && this.unWatchOrderNo();
          },
          methods: {
            open() {
              (this.visible = !0), this.toggleDialog(!0);
            },
            toggleDialog(e) {
              e && !this.items.length && this.queryOrder(),
                e &&
                  this.ctx.logger &&
                  this.ctx.logger.log({
                    et: "click",
                    ei: "groupbuy_pickupcode",
                    en: "查看提货码",
                    pt: "paySuccess",
                  });
            },
            queryOrder() {
              var { loading: e, items: t, orderNo: o } = this;
              e ||
                t.length ||
                ((this.loading = !0),
                (this.hasError = !1),
                Object(a.default)({
                  method: "GET",
                  path: "/wscindustry/groupbuying/poster/getSelfFetchCode.json",
                  data: { orderNo: o },
                })
                  .then((e) => {
                    var {
                      qrCode: t,
                      verifyCode: o,
                      headerName: r,
                      payNo: s,
                      headerFetchAddress: i,
                      items: a,
                    } = e;
                    (this.qrCode = t),
                      (this.verifyCode = o),
                      (this.headerName = r),
                      (this.payNo = s),
                      (this.qrNum = o
                        ? o.replace(/(\d{4})(\d{4})(\d*)/g, "$1 $2 $3")
                        : ""),
                      (this.headerFetchAddress = i),
                      (this.items = a || []),
                      (this.loading = !1);
                  })
                  .catch(() => {
                    (this.hasError = !0), (this.loading = !1);
                  }));
            },
            close() {
              (this.visible = !1), this.toggleDialog(!1);
            },
            saveToLocal() {
              wx.showLoading({ title: "正在生成海报" }),
                this.getPoster(!0),
                this.ctx.logger &&
                  this.ctx.logger.log({
                    et: "click",
                    ei: "groupbuy_saveto_photoalbum",
                    en: "提货码卡片保存至相册",
                    pt: "paySuccess",
                  });
            },
            downloadPoster(e) {
              var t = function (e) {
                void 0 === e && (e = "生成海报失败"),
                  wx.showToast({ title: e, icon: "none" });
              };
              h.default.$native.downloadFile({
                url: e,
                success: (e) => {
                  var { statusCode: o, tempFilePath: r } = e;
                  200 === o
                    ? Object(s.e)(r)
                        .then(() => {
                          this.close(), t("保存成功");
                        })
                        .catch(() => {
                          t("保存失败");
                        })
                    : t();
                },
                fail: () => t(),
              });
            },
            getPoster(e) {
              var {
                  headerFetchAddress: t,
                  headerName: o,
                  payNo: s,
                  qrCode: h,
                  qrNum: d,
                } = this,
                l = () => {
                  wx.showToast({ title: "生成海报失败", icon: "none" });
                },
                c = this.items.map((e) => {
                  var t = [];
                  try {
                    t = JSON.parse(e.sku);
                  } catch (e) {}
                  return {
                    title: e.title,
                    num: e.num,
                    sku:
                      t.map((e) => e.k + "：" + e.v).join("；") || "默认规格",
                    imgUrl: Object(r.a)(e, "picture[0].url"),
                  };
                });
              this.imageUrl
                ? (wx.hideLoading(), this.downloadPoster(this.imageUrl))
                : Object(a.default)({
                    path: "/wscindustry/groupbuying/poster/selfFetch.json",
                    method: "POST",
                    data: {
                      headerFetchAddress: t,
                      headerName: o,
                      payNo: s,
                      items: c.slice(0, 3),
                      itemsLength: c.length,
                      goodsNum: c.reduce((e, t) => {
                        var { num: o } = t;
                        return e + o;
                      }, 0),
                      qrCode: h,
                      qrNum: d,
                    },
                    dataType: "json",
                  })
                    .then((e) => {
                      wx.hideLoading(),
                        e ? ((this.imageUrl = e), this.downloadPoster(e)) : l();
                    })
                    .catch(() => {
                      e
                        ? setTimeout(() => {
                            this.getPoster(!1);
                          }, 1e3)
                        : (i.a.clear(), l());
                    });
            },
          },
          ud: !0,
        };
      t.default = h.default.component(d);
    },
  })
);
