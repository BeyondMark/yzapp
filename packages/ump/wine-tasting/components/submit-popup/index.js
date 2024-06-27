"use strict";
var r = require("~/r");
r(
  "kmRt",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      kmRt: function (t, e, o) {
        o.r(e);
        var a = o("Fcif"),
          i = o("4gzz"),
          n = o("N2ab"),
          s = o("O3h0"),
          r = o("amjV");
        Component({
          data: {
            info: { mobile: "", name: "", company: "", position: "" },
            error: { name: "", mobile: "", company: "", position: "" },
            themeColor: "#C8A65F",
            popupBottom: 0,
            contentTop: 300,
            focus: "",
            loading: !1,
          },
          properties: {
            show: {
              type: Boolean,
              value: !1,
              observer(t) {
                t
                  ? setTimeout(() => {
                      var t = this.createSelectorQuery(),
                        { statusBarHeight: e } = wx.getSystemInfoSync();
                      t
                        .select("#activity-apply-content-id")
                        .boundingClientRect(),
                        t.exec((t) => {
                          if (t && t.length) {
                            var { top: o = 0 } = t[0] || {};
                            this.setData({ contentTop: o - (e + 46) });
                          }
                        });
                    }, 500)
                  : (this.setData({ popupBottom: 0 }), wx.hideKeyboard());
              },
            },
            activityInfo: {
              type: Object,
              value: {},
              observer(t) {
                this.setData({
                  info: Object(a.a)({}, this.data.info, {
                    mobile: null == t ? void 0 : t.mobile,
                  }),
                });
              },
            },
          },
          attached() {
            Object(s.a)().then((t) => {
              this.setData({ themeColor: t });
            }),
              wx.offKeyboardHeightChange(),
              wx.onKeyboardHeightChange((t) => {
                t.height > this.data.contentTop
                  ? setTimeout(() => {
                      this.setData({ popupBottom: this.data.contentTop });
                    }, 80)
                  : setTimeout(() => {
                      this.setData({ popupBottom: t.height });
                    }, 80);
              });
          },
          methods: {
            validator() {
              var {
                  info: t,
                  activityInfo: { applySettingObj: e },
                } = this.data,
                o = !1,
                a = { name: "", mobile: "", company: "", position: "" };
              return (
                t.name || (a.name = "请输入姓名"),
                t.mobile
                  ? i.b.phone.test(t.mobile) || (a.mobile = "手机号格式有误")
                  : (a.mobile = "请输入手机号"),
                t.company ||
                  "true" !== (null == e ? void 0 : e.company) ||
                  (a.company = "请输入公司名称"),
                t.position ||
                  "true" !== (null == e ? void 0 : e.position) ||
                  (a.position = "请输入职位名称"),
                Object.keys(a).forEach((t) => {
                  a[t] && (o = !0);
                }),
                this.setData({ error: a }),
                o
              );
            },
            onSubmit() {
              if (!this.validator()) {
                var t;
                this.setData({ loading: !0 });
                var {
                    alias: e,
                    kdtId: o,
                    promotionAlias: i,
                  } = this.data.activityInfo,
                  l = +(null == (t = r.a.query) ? void 0 : t.promoter_id);
                Object(n.d)(
                  Object(a.a)(
                    {
                      alias: e,
                      shopId: +o,
                      promoterId: l,
                      spreadVoucherAlias: i,
                    },
                    this.data.info
                  )
                )
                  .then(() => {
                    this.triggerEvent("afterSubmit", !0);
                  })
                  .catch((t) => {
                    Object(s.b)(t.msg, "none"),
                      this.triggerEvent("afterSubmit", !1);
                  })
                  .finally(() => {
                    this.setData({ loading: !1 });
                  });
              }
            },
            onClose() {
              this.triggerEvent("close");
            },
            onChange(t) {
              var e,
                o = t.currentTarget.dataset.name;
              this.setData({
                info: Object(a.a)({}, this.data.info, {
                  [o]:
                    null == (e = t.detail) ? void 0 : e.replace(/[\r\n]/g, ""),
                }),
              });
            },
            inputClick(t) {
              var e = t.currentTarget.dataset.name;
              this.setData({ focus: e });
            },
          },
        });
      },
    }
  )
);
