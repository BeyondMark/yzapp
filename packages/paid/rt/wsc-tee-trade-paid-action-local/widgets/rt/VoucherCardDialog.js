"use strict";
var r = require("~/r");
r(
  "VALP",
  Object.assign(
    {},
    require("../../../../c.js").modules,
    require("~/v.js").modules,
    {
      VALP: function (e, t, i) {
        i.r(t);
        var r = i("Fcif"),
          a = i("882d"),
          o = i("mztD"),
          c = i("9Fos"),
          s = i("YeA1"),
          h = i("f8bC"),
          d = i("Pp//"),
          u = i("5pTi"),
          l = getApp(),
          n = {
            data: () => ({
              visible: !1,
              voucherCard: {},
              orderNo: "",
              themeCSS: "",
              showSaveImage: !1,
              imageUrl: "",
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
              Object(s.b)(this, ["orderNo", "themeCSS"]),
                Object(s.d)(this, {
                  showVoucherCardDialog: () => this.showVoucherDetail(),
                  hideVoucherCardDialog: () => {
                    this.visible = !1;
                  },
                });
            },
            methods: {
              onClose() {
                this.ctx.event.emit("hideVoucherCardDialog"),
                  this.ctx.event.emit("closeAutoOpenPopup");
              },
              showVoucherDetail() {
                this.voucherCard && this.voucherCard.qrcode
                  ? (this.visible = !0)
                  : (Object(h.a)({ duration: 1e4 }),
                    this.tryFetchVoucherDetail()
                      .then(() => {
                        (this.visible = !0), Object(u.a)();
                      })
                      .catch(() => {
                        Object(u.a)(),
                          Object(d.a)({
                            title: "卡券生成中，请重新点击查看券码",
                          });
                      }));
              },
              tryFetchVoucherDetail(e) {
                return (
                  void 0 === e && (e = 0),
                  new Promise((t, i) => {
                    e < 3
                      ? this.fetchVoucherDetail()
                          .then(t)
                          .catch(() => {
                            setTimeout(() => {
                              this.tryFetchVoucherDetail(++e).then(t).catch(i);
                            }, 1500);
                          })
                      : i("");
                  })
                );
              },
              fetchVoucherDetail() {
                return new Promise((e, t) => {
                  Object(c.a)({ orderNo: this.orderNo, source: "weapp" })
                    .then((i) => {
                      if (i && i.qrCode) {
                        var r = Object(o.a)(
                            "public_files/2019/08/06/3f099aa967abd3821d610344d7ba3729.jpg"
                          ),
                          a = this.ctx.data.orderItems.map((e) => ({
                            title: e.title,
                            num: e.num,
                            sku:
                              e.skuItems
                                .map((e) => e.k + "：" + e.v)
                                .join("；") || "默认规格",
                            imgUrl: e.imgUrl || r,
                            validity:
                              i.validity.indexOf(" - ") > -1
                                ? "有效期至" + i.validity.split(" - ")[1]
                                : i.validity,
                          }));
                        (this.voucherCard = {
                          items: a,
                          cardnums:
                            i.tickets instanceof Array
                              ? i.tickets.map((e) => e.ticketCode)
                              : [],
                          barcode: i.barCode,
                          qrcode: i.qrCode,
                          code: i.code,
                        }),
                          e();
                      } else t("");
                    })
                    .catch(function (e) {
                      var { msg: i } = void 0 === e ? {} : e;
                      t(i);
                    });
                });
              },
              saveToLocal() {
                Object(h.a)({ title: "生成海报中" }), this.getPoster(!0);
              },
              getPoster(e) {
                var t = function (e) {
                  void 0 === e && (e = "生成海报失败"),
                    Object(d.a)({ title: e });
                };
                Object(c.b)(Object(r.a)({}, this.voucherCard))
                  .then((e) => {
                    Object(u.a)(),
                      e
                        ? l.downloadFile({
                            url: e,
                            success: (e) => {
                              var { statusCode: i, tempFilePath: r } = e;
                              200 === i
                                ? Object(a.e)(r)
                                    .then(() => {
                                      Object(d.a)({
                                        title: "保存成功",
                                        icon: "success",
                                      });
                                    })
                                    .catch(() => t("保存失败"))
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
                      : (Object(u.a)(), t());
                  });
              },
            },
            ud: !0,
          },
          m = i("9ZMt");
        t.default = m.default.component(n);
      },
    }
  )
);
