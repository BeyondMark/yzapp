"use strict";
var r = require("~/r");
r(
  "g3Oc",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      g3Oc: function (e, t, s) {
        s.r(t);
        var a = s("Fcif"),
          o = s("z9IR"),
          r = s("qYBx"),
          i = s("US/N"),
          d = (s("2bgu"), s("mztD")),
          c = s("b4An"),
          h = s("882d"),
          l = s("2ktG"),
          b = s("+Pcn"),
          g = s("H+Tb"),
          n = s("9ZMt"),
          u = s("YeA1"),
          p = s("f8bC"),
          v = s("Pp//"),
          j = s("5pTi"),
          w = {};
        w = getApp();
        var O = {
          data: () => ({
            visible: !1,
            showPoster: !1,
            posterSrc: "",
            previewSrc: Object(d.a)(
              "public_files/3e22c11fb1e0e5e4927a017fec1b565b.png"
            ),
            payResult: {},
            shareItems: Object(b.a)(),
          }),
          watch: {},
          created() {
            Object(u.b)(this, ["orderNo", "payResult"]),
              Object(u.b)(
                this,
                {
                  orderItems: (e) => {
                    var t = +(((e && e[0]) || {}).newHotelGood || "");
                    t && (this.shareItems = Object(b.a)({ isNewHotelGood: t }));
                  },
                },
                { isSetData: !1 }
              ),
              Object(u.d)(this, {
                showTradeShareDialog: () => {
                  this.visible = !0;
                },
                hideTradeShareDialog: () => {
                  this.visible = !1;
                },
              });
          },
          methods: {
            close() {
              this.ctx.event.emit("hideTradeShareDialog");
            },
            handleSelect(e) {
              var { key: t } = e;
              switch (t) {
                case "Haibao":
                  this.ctx.logger.log({
                    ei: "click_window_bill",
                    en: "点击海报",
                  }),
                    this.doGetPoster(!0),
                    this.close();
              }
            },
            closePoster() {
              this.showPoster = !1;
            },
            computeH5ShareUrl() {
              var e = window._global,
                { buttonGroup: t } = this.payResult,
                s =
                  e.url.h5 +
                  "/wsctrade/order/share?kdt_id=" +
                  e.kdtId +
                  "&order_no=" +
                  this.orderNo +
                  "&show_share_guide=1";
              this.shareUrl = t.SHARE ? t.SHARE.url : s;
              var { kdtId: a } = window._global;
              this.shareUrlNoGuide = Object(c.a)(
                r.f.args.remove(this.shareUrl, "show_share_guide"),
                "",
                a
              );
            },
            doGetPoster(e, t) {
              var s = this;
              if (
                (void 0 === e && (e = !1),
                void 0 === t && (t = 0),
                (this.showPoster = !0),
                this.posterSrc)
              )
                this.showPoster = !0;
              else {
                Object(p.a)({ title: "正在生成", duration: 1e4 });
                var r,
                  { isRetailApp: d } = w.globalData,
                  c = w.getKdtId(),
                  h = d ? w.getHQKdtId() : w.getKdtId(),
                  b = (w.getAppKdtId && w.getAppKdtId()) || h,
                  g = w.getOfflineId();
                (r = {
                  retry: t,
                  kdtId: c,
                  pageType: "goods",
                  page: "pages/common/blank-page/index",
                  scene: {
                    page: "/packages/order/share-page/index",
                    guestKdtId: c,
                    kdtId: b,
                    dcPs: Object(l.a)({}).get("logv3:dc_ps") || "",
                    offlineId: g,
                    order_no: this.orderNo,
                  },
                }),
                  Object(i.default)({
                    path: "/wsctrade/poster/order-share.json",
                    data: Object(a.a)({}, r, { order_no: this.orderNo }),
                  })
                    .then((e) => {
                      Object(j.a)(), (this.posterSrc = e);
                    })
                    .catch(function (t) {
                      var { msg: a } = void 0 === t ? {} : t;
                      Object(j.a)(),
                        e
                          ? setTimeout(() => {
                              s.doGetPoster(!1, 1);
                            }, 1e3)
                          : o.a.alert({
                              title: a || "未知异常",
                              message: s.orderNo,
                            });
                    });
              }
            },
            saveToLocal() {
              var { posterSrc: e } = this;
              e &&
                (wx.showLoading({ title: "保存中" }),
                Object(g.a)("scope.writePhotosAlbum")
                  .then(() => {
                    this.saveShareImage(e)
                      .then(() => {
                        Object(j.a)(),
                          Object(v.a)({ title: "保存成功", icon: "success" }),
                          this.closePoster();
                      })
                      .catch(() => {
                        Object(j.a)(), Object(v.a)({ title: "保存失败" });
                      });
                  })
                  .catch(() => {
                    Object(j.a)(),
                      Object(v.a)({ title: "请允许访问相册后重试" }),
                      setTimeout(() => {
                        n.default.$native.openSetting({
                          success: (e) => {
                            var { authSetting: t } = e;
                            t["scope.writePhotosAlbum"] && this.saveToLocal();
                          },
                        });
                      }, 1e3);
                  }));
            },
            saveShareImage: (e) =>
              new Promise((t, s) => {
                w.downloadFile({
                  url: e,
                  success(e) {
                    200 === e.statusCode
                      ? Object(h.e)(e.tempFilePath).then(t).catch(s)
                      : s();
                  },
                  fail: s,
                });
              }),
          },
          ud: !0,
        };
        t.default = n.default.component(O);
      },
    }
  )
);
