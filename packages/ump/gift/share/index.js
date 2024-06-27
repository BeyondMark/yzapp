"use strict";
var r = require("~/r");
r(
  "5JMb",
  Object.assign(
    {},
    require("../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "5JMb": function (e, t, s) {
        s.r(t);
        var a = s("Fcif"),
          i = s("qJXH"),
          n = s("hHpg"),
          r = s("VQj9"),
          o = s("RY8z"),
          c = s("a1Mm"),
          d = s("B9LC"),
          l = s("taYb"),
          h = s("v6dD"),
          g = s("NERQ"),
          u = s("x5Yp"),
          f = s("ETTj"),
          m = s("clnt"),
          p = getApp();
        Object(i.b)({
          data: {
            giftId: "",
            showActionSheet: !1,
            actions: [
              { index: 0, name: "发送给朋友", openType: "share" },
              { index: 1, name: "生成海报" },
            ],
            presenterView: !1,
            presenterInfo: {},
            userInfo: {},
            address: null,
            goodsInfo: {},
            message: "",
            validEndTimeStr: "",
            receiverList: [],
            useUp: !1,
            finallyTaken: !1,
            isFetching: !0,
            giftNum: 0,
            givenNum: 0,
            giftOrderNo: "",
            currentAddress: {},
            logistics: {},
            gameType: 2,
            lotteryInfo: {},
            showFillAddressTips: !1,
          },
          canvasImgList: [
            "https://img01.yzcdn.cn/public_files/2018/07/05/ab7d0d1e5074c1a9a39e63c0645e3155.png",
            "https://img01.yzcdn.cn/public_files/2018/07/05/545937f9ea2a1d29dc39dd272f27da9a.png",
            "https://img01.yzcdn.cn/public_files/2018/07/05/d6c01ba4f8960183c4ff4567176ab70a.png",
          ],
          lotteryStatus: ["ENGAGE", "GET", "FAIL", "OPENING"],
          onLoad(e) {
            var { giftId: t = 0, presenterView: s = 0 } = l.a.toCamelCase(e);
            s ? wx.showShareMenu({ withShareTicket: !0 }) : wx.hideShareMenu(),
              this.setUserInfo(),
              this.initGiftPackageDetail(t, s),
              this.setAddressSelectListener();
          },
          onUnload() {
            this.off(null, null, this);
          },
          setAddressSelectListener() {
            this.on(
              "address-select",
              (e) => {
                var {
                    userName: t,
                    tel: s,
                    fullAddress: a,
                    province: i,
                    city: n,
                    county: r,
                    addressDetail: o,
                  } = e,
                  c = {
                    tel: s,
                    name: t,
                    province: i,
                    city: n,
                    district: r,
                    street: o,
                  };
                g.a
                  .confirm({
                    context: this,
                    title: "确认收件信息",
                    message: t + "," + s + "," + a,
                    showCancelButton: !0,
                    confirmButtonText: "确认地址",
                    cancelButtonText: "返回修改",
                  })
                  .then(() => {
                    var t = this.mapAddressToReceiverInfo(e);
                    this.checkAddressValidation(t).then((e) => {
                      var { value: s } = e;
                      s
                        ? this.setAddressState(t, c)
                        : this.handleInvalidAddressSelect();
                    });
                  })
                  .catch(() => {
                    g.a.close(), this.goAddressSelectPage();
                  });
              },
              this
            );
          },
          handleInvalidAddressSelect() {
            g.a
              .alert({
                title: "",
                message: "当前收货地址不支持配送，请修改收货地址",
                showCancelButton: !0,
                confirmButtonText: "修改地址",
                cancelButtonText: "取消",
              })
              .then(() => {
                this.goAddressSelectPage();
              })
              .catch(() => {
                g.a.close();
              });
          },
          mapAddressToReceiverInfo(e) {
            var { county: t, addressDetail: s, tel: i, userName: n } = e;
            return {
              receiverAddress: Object(a.a)({}, e, { district: t, detail: s }),
              receiverPhone: i,
              receiverName: n,
            };
          },
          initGiftPackageDetail(e, t) {
            wx.showLoading({ title: "加载中" }),
              this.fetchGiftPackageInfo(e)
                .then((s) => {
                  wx.hideLoading(),
                    this.setYZData(
                      Object(a.a)({}, s, {
                        newMemo: s.message,
                        presenterView: t,
                        giftId: e,
                        isFetching: !1,
                      })
                    ),
                    2 === s.gameType &&
                      this.initLotteryCountdown(s.lotteryInfo.lotteryTime),
                    this.showFillAddressTips();
                  try {
                    this.canvasCache = this.loadAllCanvasImage();
                  } catch (e) {}
                })
                .catch((e) => {
                  Object(n.a)(e.msg || "获取礼物详情失败");
                });
          },
          initLotteryCountdown(e) {
            var t = e - Date.now();
            t > 0 &&
              new d.a(t, {
                onChange: (e, t) => {
                  var { day: s, hour: a, minute: i, second: n } = t;
                  (a = (a = 24 * +s + Number(a)) > 10 ? a : "0" + a),
                    this.setYZData({
                      "lotteryInfo.countdown": {
                        hour: a,
                        minute: i,
                        second: n,
                      },
                    });
                },
              });
          },
          onShareAppMessage() {
            var { gameType: e, giftId: t } = this.data;
            return {
              title:
                this.data.userInfo.nickName +
                "送你一份礼物，" +
                (1 === e ? "拆开看看" : "快来抢吧"),
              path: "/packages/ump/gift/open-gift/index?gift_id=" + t,
              imageUrl:
                "https://img01.yzcdn.cn/public_files/2018/07/05/b335d22db3b0c6fd0b5fc04f7fd65d04.png",
            };
          },
          closeActionSheet() {
            this.setYZData({ showActionSheet: !1 });
          },
          handleShareClick() {
            this.setYZData({ showActionSheet: !0 });
          },
          handleActionClick(e) {
            var { detail: t } = e;
            "生成海报" === t.name
              ? (wx.showLoading({ title: "海报生成中" }),
                this.drawPoster().then(this.saveShareCard))
              : this.closeActionSheet();
          },
          onGetUserInfo(e) {
            var { detail: t } = e;
            Object(u.a)(t.userInfo) || this.setYZData({ userInfo: t.userInfo });
          },
          setUserInfo() {
            var e = p.globalData.userInfo;
            this.setYZData({
              userInfo:
                e && e.userInfo
                  ? e.userInfo
                  : {
                      avatarUrl:
                        "https://img01.yzcdn.cn/public_files/2017/10/23/1321da81aa84d0539b0d5af73fbbf53b.png",
                      nickName: "",
                    },
            });
          },
          _getValidEndStr: (e) => (-1 === e ? "" : h.b(e, "YYYY-MM-DD HH:mm")),
          handlePickGiftClick() {
            o.a.navigate({
              url:
                "/packages/ump/gift/goods-list/index?alias=" +
                this.data.activityAlias,
            });
          },
          handleEditAddressClick() {
            var { validEndTime: e } = this.data;
            -1 != e && Date.now() > e
              ? g.a.alert({ title: "", message: "已超出兑换日期，请联系商家" })
              : this.goAddressSelectPage();
          },
          goAddressSelectPage() {
            var e = p.db.set({ switchable: !0 });
            o.a.navigate({
              url: "/packages/order-native/address-list/index?dbid=" + e,
            });
          },
          _fetchGeoByAddress: (e) =>
            new Promise((t) => {
              Object(f.a)(e)
                .then((e) => {
                  t(e);
                })
                .catch(() => {
                  t({});
                });
            }),
          checkAddressValidation(e) {
            return new Promise((t, s) => {
              this._fetchGeoByAddress(e.receiverAddress).then((a) => {
                var i = Object.assign({}, e);
                (i.receiverAddress = Object.assign(i.receiverAddress, a)),
                  p
                    .request({
                      path: "wscump/gift/checkdelivery.json",
                      data: {
                        receiver: JSON.stringify(i),
                        giftOrderNo: this.data.giftOrderNo,
                      },
                      success: (e) => {
                        t(e);
                      },
                      fail: (e) => {
                        s(e);
                      },
                    })
                    .catch((e) => {
                      s(e);
                    });
              });
            });
          },
          setAddressState(e, t) {
            this.ensureAddress(JSON.stringify(e))
              .then(() => {
                Object(n.a)("收礼地址设置成功"),
                  this.setYZData({ finallyTaken: !0, currentAddress: t }),
                  this.trigger("ensure:gift:address");
              })
              .catch((e) => {
                Object(n.a)(e.msg || "\b确认地址失败，请重试");
              });
          },
          fetchWeappCode() {
            return new Promise((e, t) => {
              var s =
                "packages/ump/gift/open-gift/index?gift_id=" + this.data.giftId;
              m.d(s)
                .then((s) => {
                  var a = s;
                  m.g(a)
                    .then((t) => {
                      e(t);
                    })
                    .catch((e) => {
                      t(e);
                    });
                })
                .catch((e) => {
                  t(e);
                });
            });
          },
          drawPoster() {
            var e = 1 === this.data.gameType ? 0 : 20;
            return new Promise((t) => {
              var s = wx.createCanvasContext("giftsharecard");
              m.c(4, 4, 339, 487, 12, s),
                s.setFillStyle("#e0493f"),
                s.fill(),
                m.c(63, 99 + e, 220, 312, 5, s),
                s.setStrokeStyle("#c6322c"),
                s.stroke(),
                m.c(73, 109 + e, 200, 290, 5, s),
                s.setFillStyle("#fff"),
                s.fill(),
                Promise.all([
                  this.canvasCache,
                  m.g(this.data.userInfo.avatarUrl),
                  this.fetchWeappCode(),
                ])
                  .then((a) => {
                    var [i, n, r] = a,
                      [o, d, l, h] = i;
                    s.drawImage(o, 283, 435, 68, 64),
                      s.drawImage(d, 163, 92.5 + e, 21, 15),
                      s.drawImage(l, 0, 0, 101, 98),
                      s.drawImage(r, 133, 308 + e, 80, 80),
                      m.b(n, 173, 348 + e, 20, s),
                      m.f(this.data.goodsInfo.originImg).then((a) => {
                        var {
                          top: i,
                          left: n,
                          width: r,
                          height: o,
                        } = Object(c.b)(a, 160, 160);
                        s.drawImage(h, 94 + n, 121 + i + e, r, o),
                          (s.font = "16px Arial"),
                          (s.textAlign = "center"),
                          s.setFillStyle("#fff");
                        var d = this.data.userInfo.nickName;
                        (d = m.e(d, 16)),
                          1 === this.data.gameType
                            ? s.fillText(d + "送你一份礼物", 169.5, 80)
                            : (s.fillText(d + "发起一次抽奖", 169.5, 60),
                              (s.font = "14px Arial"),
                              (s.textAlign = "center"),
                              s.setFillStyle("#fff"),
                              s.fillText(
                                this.parseLotteryTime(
                                  this.data.lotteryInfo.lotteryTime
                                ),
                                170,
                                92
                              )),
                          (s.font = "14px Arial"),
                          (s.textAlign = "left"),
                          s.fillText("长按小程序码领取", 122, 433 + e),
                          (s.font = "14px Arial"),
                          s.setFillStyle("#333"),
                          (s.textAlign = "center");
                        var l = m.e(this.data.goodsInfo.goodsTitle, 20);
                        s.fillText(l, 169.5, 301 + e),
                          s.draw(!1, () => {
                            t();
                          });
                      });
                  })
                  .catch(() => {
                    Object(n.a)("卡片绘制失败，请重试"), wx.hideLoading();
                  });
            });
          },
          saveShareCard() {
            m.a("giftsharecard", this)
              .then((e) => {
                Object(r.a)("scope.writePhotosAlbum")
                  .then(() => {
                    m.h(e)
                      .then(() => {
                        wx.hideLoading(),
                          Object(n.a)("已成功保存至相册"),
                          this.closeActionSheet();
                      })
                      .catch((e) => {
                        "saveImageToPhotosAlbum:fail cancel" !== e.errMsg &&
                          Object(n.a)("保存至相册失败，请重试");
                      });
                  })
                  .catch(() => {
                    wx.hideLoading(),
                      wx.showModal({
                        content:
                          "需要同意将分享图片保存到相册，点击确定后跳转至设置页操作",
                        success: (e) => {
                          e.cancel ||
                            wx.openSetting({
                              success: (e) => {
                                var { authSetting: t } = e;
                                t["scope.writePhotosAlbum"] &&
                                  this.saveShareCard();
                              },
                            });
                        },
                      });
                  });
              })
              .catch((e) => {});
          },
          loadAllCanvasImage() {
            if (this.data.presenterView) {
              var e = [];
              return (
                this.canvasImgList.push(this.data.goodsInfo.goodsImg),
                this.canvasImgList.forEach((t) => {
                  e.push(m.g(t));
                }),
                Promise.all(e)
              );
            }
          },
          fetchGiftPackageInfo(e) {
            return new Promise((t, s) => {
              p.request({
                path: "wscump/gift/giftdetail.json",
                data: { giftId: e },
                success: (e) => {
                  ((e = l.a.toCamelCase(e)).validEndTimeStr =
                    this._getValidEndStr(e.validEndTime)),
                    (e.goodsInfo.originImg = e.goodsInfo.goodsImg),
                    (e.goodsInfo.goodsImg = Object(c.a)(
                      e.goodsInfo.goodsImg,
                      "!300x300.jpg"
                    )),
                    2 === e.gameType &&
                      ((e.lotteryInfo.userStatus =
                        this.lotteryStatus[e.lotteryInfo.userStatus]),
                      (e.lotteryInfo.countdown = {})),
                    t(e);
                },
                fail: (e) => {
                  s(e);
                },
              }).catch((e) => {
                s(e);
              });
            });
          },
          handleRepresent() {
            var { validEndTime: e } = this.data;
            -1 != e && Date.now() > e
              ? g.a.alert({ title: "", message: "已超出兑换日期，不可转赠" })
              : g.a
                  .confirm({
                    title: "转赠",
                    message: "确认将礼物转赠给朋友？",
                    showCancelButton: !0,
                    confirmButtonText: "确定",
                    cancelButtonText: "取消",
                  })
                  .then(() => {
                    this.rePresentGift(this.data.giftOrderNo)
                      .then((e) => {
                        e.alias
                          ? (o.a.redirect({
                              url:
                                "/packages/ump/gift/share/index?presenter_view=1&gift_id=" +
                                e.alias,
                            }),
                            this.setYZData({ finallyTaken: !0 }))
                          : Object(n.a)("转赠失败，请重试");
                      })
                      .catch((e) => {
                        Object(n.a)(e.msg || "转赠失败，请重试");
                      });
                  });
          },
          rePresentGift: (e) =>
            new Promise((t, s) => {
              p.request({
                path: "wscump/gift/represent.json",
                data: { memo: "", giftOrderNo: e },
                success: (e) => {
                  t(e);
                },
                fail: (e) => {
                  s(e);
                },
              }).catch((e) => {
                s(e);
              });
            }),
          ensureAddress(e) {
            return new Promise((t, s) => {
              p.request({
                path: "wscump/gift/chooseaddress.json",
                data: { receiver: e, giftOrderNo: this.data.giftOrderNo },
                success: (e) => {
                  t(e);
                },
                fail: (e) => {
                  s(e);
                },
              }).catch((e) => {
                s(e);
              });
            });
          },
          showFillAddressTips() {
            var {
                gameType: e,
                lotteryInfo: t,
                engage: s,
                outDated: a,
                currentAddress: i,
                validEndTimeStr: n,
                presenterView: r,
              } = this.data,
              o = 2 === e && "GET" !== t.userStatus,
              c = s && !a,
              d = !i.tel,
              l = !r && n && c && d && !o;
            this.setYZData({ showFillAddressTips: l });
          },
          parseLotteryTime(e) {
            var t = (e) => (e < 10 ? "0" + e : e),
              s = new Date(e);
            return (
              t(s.getMonth() + 1) +
              "月" +
              t(s.getDate()) +
              "日 " +
              t(s.getHours()) +
              ":" +
              t(s.getMinutes()) +
              "开奖"
            );
          },
        });
      },
      MqXn: function (e, t, s) {
        var a = s("hY7o");
        t.a = a.a;
      },
      NERQ: function (e, t, s) {
        var a = [],
          i = {
            show: !1,
            title: "",
            width: null,
            theme: "default",
            message: "",
            zIndex: 100,
            overlay: !0,
            selector: "#van-dialog",
            className: "",
            asyncClose: !1,
            beforeClose: null,
            transition: "scale",
            customStyle: "",
            messageAlign: "",
            overlayStyle: "",
            confirmButtonText: "确认",
            cancelButtonText: "取消",
            showConfirmButton: !0,
            showCancelButton: !1,
            closeOnClickOverlay: !1,
            confirmButtonOpenType: "",
          },
          n = Object.assign({}, i);
        var r = (e) => (
          (e = Object.assign(Object.assign({}, n), e)),
          new Promise((t, s) => {
            var i,
              n = (
                ("function" == typeof e.context ? e.context() : e.context) ||
                (i = getCurrentPages())[i.length - 1]
              ).selectComponent(e.selector);
            delete e.context,
              delete e.selector,
              n &&
                (n.setData(
                  Object.assign(
                    {
                      callback: (e, a) => {
                        "confirm" === e ? t(a) : s(a);
                      },
                    },
                    e
                  )
                ),
                wx.nextTick(() => {
                  n.setData({ show: !0 });
                }),
                a.push(n));
          })
        );
        (r.alert = (e) => r(e)),
          (r.confirm = (e) => r(Object.assign({ showCancelButton: !0 }, e))),
          (r.close = () => {
            a.forEach((e) => {
              e.close();
            }),
              (a = []);
          }),
          (r.stopLoading = () => {
            a.forEach((e) => {
              e.stopLoading();
            });
          }),
          (r.currentOptions = n),
          (r.defaultOptions = i),
          (r.setDefaultOptions = (e) => {
            (n = Object.assign(Object.assign({}, n), e)),
              (r.currentOptions = n);
          }),
          (r.resetDefaultOptions = () => {
            (n = Object.assign({}, i)), (r.currentOptions = n);
          }),
          r.resetDefaultOptions(),
          (t.a = r);
      },
      VQj9: function (e, t, s) {
        t.a = (e) =>
          new Promise((t, s) => {
            wx.getSetting({
              success: (a) => {
                a.authSetting[e]
                  ? t()
                  : wx.authorize({ scope: e, success: t, fail: s });
              },
              fail: s,
            });
          });
      },
      cQKx: function (e, t, s) {
        s.d(t, "f", function () {
          return l;
        }),
          s.d(t, "c", function () {
            return g;
          }),
          s.d(t, "a", function () {
            return h;
          }),
          s.d(t, "e", function () {
            return o;
          }),
          s.d(t, "b", function () {
            return c;
          }),
          s.d(t, "d", function () {
            return d;
          });
        var a = s("MqXn");
        function i() {
          var e = getCurrentPages() || [];
          return e.length ? e[e.length - 1].route : "";
        }
        var n = {
          "packages/order": new a.a({
            key: "XBXBZ-FU6EF-S6ZJZ-JI7ZL-OXMP5-T2F73",
          }),
          __default: new a.a({ key: "DE4BZ-X6DCP-WUNDV-L4DDA-6NWA7-3CBSO" }),
        };
        function r() {
          var e = getCurrentPages() || [],
            t = (e[e.length - 1] || {}).route || "",
            s = Object.keys(n).find((e) => t.indexOf(e) > -1);
          return n[s] || n.__default;
        }
        function o(e) {
          return new Promise((t, s) => {
            (e.success = t),
              (e.fail = (e) => {
                s(e),
                  getApp().logger.requestError({
                    message: "search-address-error",
                    detail: e,
                  });
              });
            var a,
              n,
              o = r();
            (a = o.key),
              (n = getApp()) &&
                n.logger.log({
                  et: "custom",
                  ei: "get_suggestion",
                  en: "关键词输入提示",
                  params: { route: i(), key: a },
                  si: n.getKdtId(),
                }),
              o.getSuggestion(e);
          });
        }
        function c(e) {
          return new Promise((t, s) => {
            (e.success = t), (e.fail = s), r().geocoder(e);
          });
        }
        function d(e) {
          return new Promise((t, s) => {
            (e.success = t), (e.fail = s);
            var a,
              n,
              o = r();
            (a = o.key),
              (n = getApp()) &&
                n.logger.log({
                  et: "custom",
                  ei: "reverse_geocoder",
                  en: "逆地址解析",
                  params: { route: i(), key: a },
                  si: n.getKdtId(),
                }),
              o.reverseGeocoder(e);
          });
        }
        function l(e, t, s) {
          wx.getLocation({
            type: "gcj02",
            success: (t) => {
              var { latitude: s, longitude: a } = t,
                { lng: i, lat: n } = h(a, s);
              e({ lng: i, lat: n }, { latitude: s, longitude: a });
            },
            fail: s ? s(e, t) : t,
          });
        }
        function h(e, t) {
          var s = (3e3 * Math.PI) / 180,
            a = e,
            i = t,
            n = Math.sqrt(a * a + i * i) + 2e-5 * Math.sin(i * s),
            r = Math.atan2(i, a) + 3e-6 * Math.cos(a * s);
          return {
            lng: (e = n * Math.cos(r) + 0.0065),
            lat: (t = n * Math.sin(r) + 0.006),
          };
        }
        function g(e) {
          return e
            ? (e =
                (e = +e || 0) > 1e4
                  ? "> 10km"
                  : e > 1e3
                  ? (e / 1e3).toFixed(2) + "km"
                  : e < 100
                  ? "< 100m"
                  : e.toFixed(2) + "m")
            : 0;
        }
      },
    }
  )
);
