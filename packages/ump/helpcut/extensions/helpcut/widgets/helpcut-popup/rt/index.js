"use strict";
var r = require("~/r");
r(
  "6Usn",
  Object.assign(
    {},
    require("~/packages/ump/c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "53ek": function (e, t, s) {
        var a = (e, t, s) => {
          return ((i = e), Object.keys(i).map((e) => [e, i[e]]))
            .map((e) => {
              var [t, i] = e;
              return [t, "object" == typeof i ? a(i, [], s) : i(s)];
            })
            .concat(t.map((e) => [e, s[e]]))
            .reduce((e, t) => {
              var [s, a] = t;
              return (e[s] = a), e;
            }, {});
          var i;
        };
        t.a = a;
      },
      "6Usn": function (e, t, s) {
        s.r(t);
        var a = s("Fcif"),
          i = s("7/pW"),
          o = s("VmHG"),
          r = s("RY8z"),
          c = s("2wjL"),
          p = s("8P+v");
        Object(i.a)({
          data: {
            show: !1,
            framelessShow: !1,
            showRedDetail: !1,
            showRedPacket: !0,
            clickOverlayClose: !1,
            bargainProgressWidth: 0,
          },
          attached() {
            Object(o.d)(this, [
              "needFollow",
              "goodsDetail",
              "bargainDetail",
              "bargainRecords",
              "allHelpcutListNumber",
              "allHelpcutList",
              "recommendGoodsThree",
              "couponGoodsList",
              "queryOptions",
              "hasAuthorized",
            ]),
              Object(o.d)(this, [
                "popupOptions",
                "bargainProgress",
                "newBargainInfo",
                "helpPopupOptions",
              ]),
              Object(o.b)(this, [
                "SET_SHOW_ACTION_SHEET",
                "SET_SHOW_FOLLOW_POP",
              ]),
              Object(o.b)(this, [
                "HANDLE_PURCHASE",
                "ENTER_SHOP",
                "ENTER_GOODS_DETAIL",
                "USE_COUPON",
                "FETCH_INIT_DETAIL",
                "RESTART_BARGAIN",
              ]);
          },
          observers: {
            "popupOptions.**": function (e) {
              var { type: t, hasTitle: s } = e || {},
                { helpPopupOptions: a } = this.data;
              this.setYZData(
                {
                  show: "frame" === t || "frame" === a.type,
                  framelessShow: "frameless" === t || "frameless" === a.type,
                },
                { immediate: !0 }
              ),
                "initPopup" === t &&
                  Object(p.d)({
                    et: "view",
                    ei: s ? "view_helpcut" : "view_cut",
                    en: s ? "助力按钮曝光" : "发起砍价按钮曝光",
                  });
            },
            "helpPopupOptions.**": function (e) {
              var {
                  type: t,
                  hasCoupon: s,
                  showRecommend: a,
                  allHelpcutList: i,
                } = e || {},
                { popupOptions: o } = this.data;
              this.setYZData(
                {
                  show: "frame" === t || "frame" === o.type,
                  framelessShow: "frameless" === t || "frameless" === o.type,
                },
                { immediate: !0 }
              ),
                s &&
                  Object(p.d)({
                    et: "view",
                    ei: "view_coupon",
                    en: "优惠券曝光",
                  }),
                a &&
                  Object(p.d)({
                    et: "view",
                    ei: "view_recommend_goods",
                    en: "砍价推荐商品曝光",
                    params: { goodsList: i },
                  });
            },
          },
          ready() {
            setTimeout(() => {
              var { hasNewCut: e } = this.data.bargainRecords;
              e &&
                Object(p.d)({
                  et: "view",
                  ei: "view_red_packet_popup",
                  en: "助力红包弹窗曝光",
                  params: { component: "helpcut_redpacket_popup" },
                }),
                this.setYZData({ showRedPacket: e });
            }, 800);
          },
          methods: {
            onClose() {
              this.setYZData({ show: !1 });
            },
            onFramelessClose() {
              this.setYZData({ framelessShow: !1 });
            },
            clickFramelessOverlay() {
              this.data.clickOverlayClose && this.onFramelessClose();
            },
            handleShowShare() {
              Object(p.d)({
                et: "click",
                ei: "click_cut_share",
                en: "分享按钮点击",
                params: { component: "helpcut_redpacket_popup" },
              }),
                this.onFramelessClose(),
                this.SET_SHOW_ACTION_SHEET(!0);
            },
            openRedPacket() {
              Object(p.d)({
                et: "click",
                ei: "click_open",
                en: "”开“按钮点击",
                params: { component: "helpcut_redpacket_popup" },
              }),
                this.setYZData({ showRedPacket: !1 });
              var { bargainRecords: e = {} } = this.data;
              setTimeout(() => {
                this.setYZData({ showRedDetail: !0, clickOverlayClose: !0 });
              }, 550),
                setTimeout(() => {
                  this.setYZData({ bargainProgressWidth: e.cutRate });
                }, 650);
            },
            buy() {
              this.HANDLE_PURCHASE();
            },
            restart() {
              this.RESTART_BARGAIN();
            },
            shop() {
              this.ENTER_SHOP();
            },
            newBargin(e) {
              var { index: t = 0 } = e.currentTarget.dataset,
                s = this.data.allHelpcutList[t];
              Object(p.d)({
                et: "click",
                ei: "click_recommend_goods_cut",
                en: "点击推荐商品砍价按钮",
                params: { goods: s },
              }),
                s.supportCutWhenStart
                  ? r.a.navigate({
                      url:
                        "/packages/ump/helpcut/index?kdtId=" +
                        s.kdtId +
                        "&umpAlias=" +
                        s.alias +
                        "&umpActivityId=" +
                        s.id +
                        "&shopAutoEnter=1",
                    })
                  : this.ENTER_GOODS_DETAIL(
                      Object(a.a)({}, s, { umpActivityId: s.id })
                    );
            },
            useCoupon() {
              Object(p.d)({
                et: "click",
                ei: "click_coupon",
                en: "点立即使用优惠券按钮",
              });
              var { couponResult: e } = this.data.helpPopupOptions;
              this.USE_COUPON(e);
            },
            toInit() {
              var {
                needFollow: e,
                queryOptions: t,
                popupOptions: s,
              } = this.data;
              if (
                (Object(p.d)({
                  et: "click",
                  ei: s.hasTitle ? "click_helpcut" : "click_cut",
                  en: s.hasTitle ? "点击助力按钮" : "点击发起砍价按钮",
                }),
                this.FETCH_INIT_DETAIL(),
                e)
              )
                return this.SET_SHOW_FOLLOW_POP(!0);
              r.a.navigate({
                url: c.a.add("/packages/ump/helpcut/index", t || {}),
              });
            },
          },
        });
      },
    }
  )
);
