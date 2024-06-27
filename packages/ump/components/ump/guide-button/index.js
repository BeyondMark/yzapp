"use strict";
var r = require("~/r");
r(
  "BszL",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    BszL: function (e, t, i) {
      i.r(t);
      var r = i("Fcif"),
        a = i("eijD"),
        u = i("hHpg"),
        o = i("rqVN"),
        d = i("9Bnu"),
        l = i("8B9M"),
        n = 1,
        p = 2,
        g = 3,
        s = 4,
        c = "coupon",
        y = "goods",
        v = "casino",
        T = {
          [c]: [160700605, 160700606, 161201051, 160700517],
          [y]: [],
          [v]: [1605406008, 1605406013],
        },
        m = {
          [n]: "开通会员",
          [p]: "开通会员",
          [g]: "获得权益卡",
          [s]: "获得权益卡",
        },
        h = { [c]: "领券", [y]: "购买", [v]: "抽奖" },
        b = {
          [n]: "注册会员",
          [p]: "开通会员",
          [g]: "免费领卡",
          [s]: "立即开卡",
        },
        f = { [n]: "注册会员", [p]: "开通会员", [g]: "立即开卡" },
        j = { [n]: "免费会员", [p]: "付费会员", [g]: "权益卡", [s]: "权益卡" },
        k = i("w2Y9"),
        S = i.n(k),
        w = i("tuFO"),
        O = i.n(w),
        G = i("GFa9"),
        A = (e) => {
          var {
              targetType: t,
              guideTargetAlias: i,
              guideType: r,
              kdtId: a,
              redirectUrl: u,
            } = e,
            o = "";
          if (t === n) {
            var d = O()(
              S.a.add("/wscuser/levelcenter/fill", {
                kdt_id: a,
                alias: i,
                fromScene: "complete",
                guideType: r,
                redirectUrl: u,
              }),
              "h5",
              a
            );
            o = "/pages/common/webview-page/index?src=" + encodeURIComponent(d);
          } else
            t === p
              ? (o = S.a.add("/packages/shop/levelcenter/plus/index", {
                  kdt_id: a,
                  alias: i,
                  guideType: r,
                  redirectUrl: u,
                }))
              : (t !== g && t !== s) ||
                (o = S.a.add("/packages/card/detail/index", {
                  alias: i,
                  kdt_id: a,
                  shopAutoEnter: 1,
                  guideType: r,
                  redirectUrl: u,
                }));
          G.a.navigate({ url: o });
        },
        I = Object(l.a)(),
        U = Object(l.a)();
      Object(o.b)({
        options: { multipleSlots: !0 },
        properties: {
          guideType: { type: String, value: "" },
          requestParam: { type: Object, value: {} },
          beforGuide: { type: Function, value: () => {} },
          kdtId: { type: String || Number, value: "" },
          redirectUrl: { type: String, value: "" },
          authorizeScene: { type: String, value: "" },
          authTypeList: { type: Array, value: [] },
          hasPopupSlot: { type: Boolean, value: !1 },
          customStyle: { type: String, value: "" },
          containerStyle: { type: String, value: "" },
        },
        data: {
          guideInfo: { targetType: n, guideTargetAlias: "" },
          showPop: !1,
          popupTitle: "",
          confirmButtonText: "",
          mobile: !1,
        },
        methods: {
          buttonClick() {
            var e,
              t = this,
              {
                beforGuide: i,
                requestParam: o,
                guideType: l,
              } = this.properties;
            null == (e = i()) ||
              e.catch(
                (function () {
                  var e = Object(a.a)(function* (e) {
                    if (T[l].includes(e.code)) {
                      var { mobile: i } = yield Object(d.a)();
                      ((a = Object(r.a)({ guideType: l }, o)),
                      I.request({
                        data: a,
                        method: "GET",
                        path: "/wscump/guide-member/get-guide-info.json",
                      }))
                        .then((e) => {
                          var {
                            needGuide: r,
                            guideType: a,
                            guideTargetAlias: o,
                          } = e;
                          r
                            ? (U.logger &&
                                U.logger.log({
                                  et: "view",
                                  ei: "view_" + l,
                                  en: h[l] + "引导曝光",
                                  params: { targetType: j[a] },
                                }),
                              t.setYZData({
                                showPop: !0,
                                guideInfo: {
                                  targetType: a,
                                  guideTargetAlias: o,
                                },
                                popupTitle: m[a] + "即可" + h[l],
                                confirmButtonText: l === c ? f[a] : b[a],
                                mobile: i,
                              }))
                            : Object(u.a)("当前身份不满足条件"),
                            t.triggerEvent("afterGetGuide", e);
                        })
                        .catch((e) => {
                          u.a.fail(
                            (null == e ? void 0 : e.msg) || "引导信息获取失败"
                          ),
                            t.triggerEvent("catchGuide", e);
                        });
                    }
                    var a;
                  });
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })()
              );
          },
          onCancel() {
            this.setYZData({ showPop: !1 });
          },
          onConfirm() {
            var e,
              { guideInfo: t, mobile: i } = this.data,
              {
                beforGuide: r,
                guideType: a,
                redirectUrl: u,
                kdtId: o,
              } = this.properties,
              { targetType: d, guideTargetAlias: l } = t,
              n = {
                guideType: a,
                targetType: d,
                kdtId: o,
                redirectUrl: u,
                guideTargetAlias: l,
              };
            (U.logger &&
              U.logger.log({
                et: "click",
                ei: "click_" + a,
                en: h[a] + "引导点击",
                params: { targetType: j[d] },
              }),
            i)
              ? A(n)
              : (this.setYZData({ showPop: !1 }),
                null == (e = r()) ||
                  e.catch((e) => {
                    T[a].includes(e.code) && A(n);
                  }));
          },
        },
      });
    },
  })
);
