"use strict";
var r = require("~/r");
r(
  "Z8LA",
  Object.assign({}, require("~/v.js").modules, {
    Z8LA: function (t, e, a) {
      a.r(e);
      var i = a("Fcif"),
        s = a("US/N");
      var r = (t) =>
          new Promise((e, a) => {
            var i = 5,
              r = () => {
                setTimeout(() => {
                  var h;
                  ((h = { key: t }),
                  Object(s.default)({
                    path: "/wscump/communitybuy/poster/getByKey.json",
                    data: h,
                    type: "GET",
                    withCredentials: !0,
                  }))
                    .then((t) => {
                      if (t.img) e(t);
                      else {
                        if (!(i > 0 && "pending" === t.type))
                          throw new Error("海报生成失败，请重试");
                        i--, r();
                      }
                    })
                    .catch((t) => {
                      a(t);
                    });
                }, 1e3);
              };
            r();
          }),
        h = {
          data: () => ({
            visible: !1,
            orderNo: "",
            solitaireData: {},
            showBuyItems: [],
            showData: {
              shareImg:
                "https://img01.yzcdn.cn/upload_files/2020/04/26/Flhx0PkQwvyd4HQGINelGVdl3Qo3.png",
              activityName: "",
              activityAlias: "",
              sls: "",
            },
            showShared: !1,
            isWeb: !1,
          }),
          computed: {
            showTotalItems() {
              var t;
              return (
                (null == (t = this.solitaireData.buyItems)
                  ? void 0
                  : t.length) > 3
              );
            },
          },
          created() {
            (this.ctx.data.solitaireShareData = {}),
              this.ctx.event.listen("openSolitaireDialog", () => {
                this.open(), this.getOrderShare();
              }),
              (this.unWatchOrderNo = this.ctx.watch("orderNo", (t) => {
                this.orderNo = t;
              }));
          },
          destroyed() {
            this.unWatchOrderNo && this.unWatchOrderNo();
          },
          methods: {
            getOrderShare() {
              Object(s.default)({
                method: "GET",
                path: "/wscindustry/solitaire/getOrderShare.json",
                query: { orderNo: this.orderNo },
              })
                .then((t) => {
                  if (t) {
                    (this.solitaireData = t),
                      (this.showBuyItems = t.buyItems.slice(0, 3));
                    var e = Object(i.a)({}, this.ctx.data.solitaireShareData, {
                      activityName: t.activityName,
                      activityAlias: t.activityAlias,
                      shareImg:
                        "https://img01.yzcdn.cn/upload_files/2020/04/26/Flhx0PkQwvyd4HQGINelGVdl3Qo3.png",
                    });
                    this.updateShareData(e), this.getUserSl();
                  }
                })
                .catch((t) => {}),
                this.ctx.logger &&
                  this.ctx.logger.log({
                    et: "view",
                    ei: "solitaire_dialog_show",
                    en: "接龙成功卡片曝光",
                  });
            },
            getUserSl() {
              Object(s.default)({
                method: "GET",
                path: "/wscindustry/solitaire/getAccountSl.json",
              })
                .then((t) => {
                  if (t) {
                    var e = {};
                    (e =
                      null == t.sls
                        ? Object(i.a)({}, this.ctx.data.solitaireShareData, {
                            sls: "",
                          })
                        : Object(i.a)({}, this.ctx.data.solitaireShareData, {
                            sls: t.sls,
                          })),
                      this.updateShareData(e),
                      this.getSharePic();
                  }
                })
                .catch(() => {});
            },
            open() {
              (this.visible = !0), (this.ctx.data.showSolitaire = !0);
            },
            close() {
              (this.visible = !1),
                (this.ctx.data.showSolitaire = !1),
                this.ctx.event.emit("closeAutoOpenPopup");
            },
            updateShareData(t) {
              this.ctx.data.solitaireShareData = Object(i.a)({}, t, {
                path:
                  "/pages/common/webview-page/index?src=" +
                  encodeURIComponent(
                    "https://h5.youzan.com/wscindustry/solitaire/buy?alias=" +
                      t.activityAlias
                  ),
              });
            },
            getSharePic() {
              var t = this.showBuyItems;
              this.showBuyItems.length > 2 &&
                (t = this.showBuyItems.slice(0, 1)),
                Object(s.default)({
                  method: "POST",
                  path: "/wscindustry/solitaire/poster/getSolitaireWeappShareImg.json",
                  data: {
                    userAvatar: this.solitaireData.buyerAvatar,
                    userName: this.solitaireData.buyerName,
                    activityNum: this.solitaireData.sortNo,
                    userBuyNums: this.solitaireData.buyItems.length,
                    showBuyItems: t,
                  },
                  contentType: "application/json",
                })
                  .then((t) => {
                    if (t.redisKey) return r(t.redisKey);
                    return Promise.reject("海报生成失败，请重试");
                  })
                  .then((t) => {
                    var e = {};
                    void 0 !== t.img &&
                      (e = Object(i.a)({}, this.ctx.data.solitaireShareData, {
                        shareImg: t.img,
                      })),
                      this.updateShareData(e);
                  })
                  .catch(() => {});
            },
            handleShare() {
              this.ctx.logger &&
                this.ctx.logger.log({
                  et: "click",
                  ei: "solitaire_dialog_show_click",
                  en: "接龙成功卡片点击分享",
                });
            },
            openSharedPop() {
              (this.showShared = !0), this.close();
            },
            closeSharedPop() {
              this.showShared = !1;
            },
          },
          ud: !0,
        },
        o = a("9ZMt");
      e.default = o.default.component(h);
    },
  })
);
