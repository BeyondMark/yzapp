"use strict";
var r = require("~/r");
r(
  "lTkJ",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      NERQ: function (e, t, i) {
        var s = [],
          a = {
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
          r = Object.assign({}, a);
        var c = (e) => (
          (e = Object.assign(Object.assign({}, r), e)),
          new Promise((t, i) => {
            var a,
              r = (
                ("function" == typeof e.context ? e.context() : e.context) ||
                (a = getCurrentPages())[a.length - 1]
              ).selectComponent(e.selector);
            delete e.context,
              delete e.selector,
              r &&
                (r.setData(
                  Object.assign(
                    {
                      callback: (e, s) => {
                        "confirm" === e ? t(s) : i(s);
                      },
                    },
                    e
                  )
                ),
                wx.nextTick(() => {
                  r.setData({ show: !0 });
                }),
                s.push(r));
          })
        );
        (c.alert = (e) => c(e)),
          (c.confirm = (e) => c(Object.assign({ showCancelButton: !0 }, e))),
          (c.close = () => {
            s.forEach((e) => {
              e.close();
            }),
              (s = []);
          }),
          (c.stopLoading = () => {
            s.forEach((e) => {
              e.stopLoading();
            });
          }),
          (c.currentOptions = r),
          (c.defaultOptions = a),
          (c.setDefaultOptions = (e) => {
            (r = Object.assign(Object.assign({}, r), e)),
              (c.currentOptions = r);
          }),
          (c.resetDefaultOptions = () => {
            (r = Object.assign({}, a)), (c.currentOptions = r);
          }),
          c.resetDefaultOptions(),
          (t.a = c);
      },
      lTkJ: function (e, t, i) {
        i.r(t);
        var s = i("rqVN"),
          a = i("O3Bn"),
          r = i("q29p"),
          c = i.n(r),
          o = i("dWkE"),
          n = i("aOlM"),
          l = i("NERQ"),
          d = i("hHpg"),
          u = i("bdYe"),
          g = i.n(u),
          h = i("2wjL"),
          m = getApp();
        Object(s.b)({
          properties: {},
          data: { isMember: !1, activityList: [], kdtId: m.getKdtId() },
          methods: {
            doReceiveGift(e) {
              this.postLog({
                et: "click",
                ei: "click_membergift",
                en: "会员满赠礼点击",
              }),
                Object(a.b)().then((t) => {
                  t
                    ? l.a
                        .confirm({
                          title: "活动期间仅可领取1档奖励，确定领取该奖品？",
                          confirmButtonText: "领取",
                          cancelButtonText: "取消",
                        })
                        .then(() => {
                          var { activityid: t, gift: i } =
                              e.currentTarget.dataset,
                            { id: s, stageCode: r } = i;
                          Object(a.l)({
                            activityId: Number(t),
                            prizeId: s,
                            prizeType: "PRESENT",
                            stageCode: r,
                          }).then(
                            () => {
                              d.a.success({
                                message: "领取成功",
                                className: "success-toast",
                              }),
                                this.getPayAmountGiftList();
                            },
                            (e) => {
                              wx.showToast({ title: e.msg, icon: "none" }),
                                this.getPayAmountGiftList();
                            }
                          );
                        })
                    : (wx.showToast({ title: "请先成为会员", icon: "none" }),
                      this.setYZData({ isMember: !1 }));
                });
            },
            jumpActivityDetail(e) {
              var { activityid: t } = e.currentTarget.dataset;
              Object(o.a)("/wscuser/levelcenter/activityDetail", {
                query: { kdt_id: this.data.kdtId, activity_id: t },
              });
            },
            jumpFillMember() {
              this.postLog({
                et: "click",
                ei: "click_membergift_join",
                en: "会员满赠礼_引导入会点击",
              }),
                Object(o.a)("/wscuser/levelcenter/fill", {
                  query: { kdt_id: this.data.kdtId },
                });
            },
            viewGift() {
              var e = h.a.add("/packages/ump/presents/index", {
                kdt_id: this.data.kdtId,
              });
              wx.navigateTo({ url: e });
            },
            getPayAmountGiftList() {
              Object(a.i)().then(
                (e) => {
                  e && this.formatData(e);
                },
                (e) => {}
              );
            },
            checkIsMember() {
              Object(a.b)().then((e) => {
                this.setYZData({ isMember: e.value || !1 });
              });
            },
            formatData(e) {
              var t = [];
              (e || []).forEach((e) => {
                var i = {};
                e.beginAt &&
                  e.endAt &&
                  (i.activityTime =
                    "活动时间：" +
                    c()(e.beginAt, "MM.DD") +
                    " - " +
                    c()(e.endAt, "MM.DD")),
                  (i.completedProgress = g()(e.completedProgress, 100)),
                  (i.taskValue = g()(e.taskValue, 100)),
                  (i.id = e.id);
                var s = [],
                  a = !1;
                (e.stageList || []).forEach((e) => {
                  e.prizes.find((e) => e.received) && (a = !0);
                }),
                  (e.stageList || []).forEach((e) => {
                    var { taskValue: t, prizes: r = [], stageCode: c } = e,
                      o = (null == r ? void 0 : r[0]) || {},
                      n = g()(t, 100),
                      l = i.completedProgress,
                      d = {
                        id: o.prizeId,
                        condition: "累计￥" + n + "可领",
                        giftName: " " + o.title,
                        price: "￥" + (g()(o.price, 100) || ""),
                        stockStr:
                          o.stock > 0 ? "共" + o.promptAmount + "份" : "已抢光",
                        leftStock: o.stock,
                        image: o.imgUrl,
                        received: o.received,
                        hasReceivedGift: a,
                        hasFinishCurLevel: l >= n,
                        stageCode: c,
                        progressStyle:
                          l > n
                            ? "width: 100%"
                            : "width: " + (l / n) * 100 + "%",
                      };
                    (d.canReceiveGift =
                      d.leftStock > 0 &&
                      d.hasFinishCurLevel &&
                      !d.hasReceivedGift),
                      s.push(d);
                  }),
                  (i.giftList = s);
                var r = 0;
                (s || []).forEach((e) => {
                  e.hasFinishCurLevel && r++;
                }),
                  (i.curLevelNum = r),
                  (i.joinMemberBtnText =
                    r > 0 ? "入会立即领奖" : "入会参与活动"),
                  (i.progressContainerStyle = "progress-" + i.giftList.length),
                  (i.progresslineStyle =
                    i.curLevelNum >= i.giftList.length
                      ? "finish"
                      : "line-stage" + i.curLevelNum),
                  (i.progressNumStyle = "num-stage" + i.curLevelNum),
                  t.push(i);
              }),
                t.length > 0 &&
                  this.postLog({
                    et: "view",
                    ei: "view_membergift",
                    en: "会员满赠礼曝光",
                  }),
                this.setYZData({ activityList: t });
            },
            postLog(e) {
              var t;
              null == (t = m.logger) || t.log(e);
            },
            checkMemberGuideLog() {
              !this.data.isMember &&
                this.data.activityList.length > 0 &&
                this.postLog({
                  et: "view",
                  ei: "view_membergift_join",
                  en: "会员满赠礼_引导入会曝光",
                });
            },
          },
          attached() {
            this.getPayAmountGiftList(),
              this.checkIsMember(),
              (this.receiveGift = Object(n.a)(this.doReceiveGift, 300)),
              setTimeout(() => {
                this.checkMemberGuideLog();
              }, 1e3);
          },
        });
      },
    }
  )
);
