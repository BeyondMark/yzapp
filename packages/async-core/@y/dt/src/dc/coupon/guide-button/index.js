"use strict";
var r = require("~/r");
r(
  "KDLP",
  Object.assign(
    {},
    require("../../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      KDLP: function (e, t, i) {
        i.r(t);
        var a = i("Fcif"),
          u = i("9ZMt"),
          r = i("AGZf"),
          o = i("uThs"),
          l = i("BlSf"),
          d = i("OGSF"),
          n = u.default.getGlobal("logger"),
          s = {
            name: "GuideButton",
            props: {
              guideType: { type: String, value: "" },
              requestParam: { type: Object, value: {} },
              beforGuideParam: { type: Object, value: {} },
              beforGuide: { type: Function, value: () => {} },
              kdtId: { type: String || Number, value: "" },
              redirectUrl: { type: String, value: "" },
              authorizeScene: { type: String, value: "" },
              hasPopupSlot: { type: Boolean, value: !1 },
              customStyle: { type: String, value: "" },
              isAutoGuide: { type: Boolean, value: !0 },
              authTypeList: { type: Array, value: [] },
            },
            data: () => ({
              guideInfo: { targetType: o.f.FreeMember, guideTargetAlias: "" },
              showPop: !1,
              popupTitle: "",
              confirmButtonText: "",
              mobile: !1,
            }),
            methods: {
              buttonClick() {
                var e,
                  {
                    beforGuide: t,
                    requestParam: u,
                    beforGuideParam: l,
                    guideType: s,
                    isAutoGuide: c,
                  } = this;
                null == (e = t(l)) ||
                  e.catch((e) => {
                    o.b[s].includes(e.code) &&
                      i
                        .e("packages/async-core/chunk")
                        .then(i.bind(null, "JvWB"))
                        .then((e) => e.default)
                        .then((e) => {
                          e.getUserInfo().then((e) => {
                            var { mobile: t } = e;
                            Object(d.a)(Object(a.a)({ guideType: s }, u))
                              .then((e) => {
                                var {
                                  needGuide: i,
                                  guideType: a,
                                  guideTargetAlias: u,
                                } = e;
                                i
                                  ? (n &&
                                      n.log({
                                        et: "view",
                                        ei: "view_" + s,
                                        en: o.d[s] + "引导曝光",
                                        params: { targetType: o.e[a] },
                                      }),
                                    (this.guideInfo = {
                                      targetType: a,
                                      guideTargetAlias: u,
                                    }),
                                    (this.showPop = c),
                                    (this.popupTitle =
                                      o.h[a] + "即可" + o.d[s]),
                                    (this.confirmButtonText =
                                      s === o.c.Coupon ? o.a[a] : o.g[a]),
                                    (this.mobile = t))
                                  : Object(r.a)("当前身份不满足条件"),
                                  this.$emit("afterGetGuide", e);
                              })
                              .catch((e) => {
                                r.a.fail(
                                  (null == e ? void 0 : e.msg) ||
                                    "引导信息获取失败"
                                ),
                                  this.$emit("catchGuide", e);
                              });
                          });
                        });
                  });
              },
              onCancel() {
                this.showPop = !1;
              },
              onConfirm() {
                var e,
                  {
                    beforGuide: t,
                    guideType: i,
                    redirectUrl: a,
                    kdtId: u,
                    guideInfo: r,
                    mobile: d,
                  } = this,
                  { targetType: s, guideTargetAlias: c } = r,
                  p = {
                    guideType: i,
                    targetType: s,
                    kdtId: u,
                    redirectUrl: a,
                    guideTargetAlias: c,
                  };
                (n &&
                  n.log({
                    et: "click",
                    ei: "click_" + i,
                    en: o.d[i] + "引导点击",
                    params: { targetType: o.e[s] },
                  }),
                d)
                  ? Object(l.a)(p)
                  : ((this.showPop = !1),
                    null == (e = t()) ||
                      e.catch((e) => {
                        o.b[i].includes(e.code) && Object(l.a)(p);
                      }));
              },
            },
            ud: !0,
          };
        t.default = u.default.component(s);
      },
    }
  )
);
