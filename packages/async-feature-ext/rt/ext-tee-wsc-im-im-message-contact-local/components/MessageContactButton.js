"use strict";
var r = require("~/r");
r(
  "Epa4",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    {
      Epa4: function (e, t, r) {
        r.r(t);
        var a = r("eijD"),
          i = r("Fcif"),
          o = r("9ZMt"),
          n = r("KrsW"),
          s = r("US/N"),
          l = r("w2Y9"),
          d = r.n(l),
          m = r("z9IR"),
          p = r("fjvq"),
          g = r("YeA1"),
          c = r("GFyo"),
          h = o.default.getApp(),
          u = "YZ_IM",
          I = "WX_IM",
          f = { WEBVIEW: "webview", ORIGINAL: "original" },
          v = {
            mixins: [n.b.externalClassesMixin(["contact-class"])],
            props: {
              opacityFull: { type: Boolean, value: !1 },
              contactStyle: { type: String, value: "" },
              size: String,
              type: String,
              plain: Boolean,
              disabled: Boolean,
              loading: Boolean,
              formType: String,
              openType: String,
              hoverClass: String,
              hoverStopPropagation: Boolean,
              hoverStartTime: Number,
              hoverStayTime: Number,
              lang: String,
              sessionFrom: String,
              sendMessageTitle: String,
              sendMessagePath: String,
              sendMessageImg: String,
              appParamter: String,
              showMessageCard: String,
              businessId: String,
            },
            data: () => ({
              mode: "NO_IM",
              WX_IM: I,
              YZ_IM: u,
              NO_IM: "NO_IM",
              WX_KF: "WX_KF",
              kfLink: "",
              corpId: "",
              initDowngradeTimer: 0,
            }),
            watch: {
              sessionFrom(e) {
                var t;
                e ||
                  null == (t = h.logger) ||
                  t.appError({ message: "sessionFrom数据异常" });
              },
            },
            created() {
              Promise.resolve(this.init()).catch((e) => {
                var t;
                null == (t = h.logger) ||
                  t.appError({
                    message: "客服会话入口初始化异常",
                    detail: Object(i.a)(
                      { error: e.message || e.msg || e.errMsg || "" },
                      this.getLogBaseParams()
                    ),
                  });
              }),
                (this.initDowngradeTimer = setTimeout(() => {
                  var e;
                  "NO_IM" === this.mode &&
                    (null == (e = h.logger) ||
                      e.appError({
                        message: "多客服触发降级",
                        detail: this.getLogBaseParams(),
                      }),
                    (this.mode = I));
                }, 1e4));
            },
            destroyed() {
              clearTimeout(this.initDowngradeTimer);
            },
            methods: {
              init() {
                var e = this;
                return Object(a.a)(function* () {
                  var t, r;
                  try {
                    r = yield Object(c.c)("IM_ENTRY_CONFIG_KEY");
                  } catch (t) {
                    return e.fetchEntryConfig();
                  }
                  if (null == (t = r) || !t.data || r.data.expire < Date.now())
                    return e.fetchEntryConfig();
                  var { mode: a, kfLink: i, corpId: o } = r.data.value || {};
                  return i && o
                    ? ((e.kfLink = i), (e.corpId = o), void (e.mode = "WX_KF"))
                    : [I, u].includes(a)
                    ? void (e.mode = a)
                    : e.fetchEntryConfig();
                })();
              },
              fetchEntryConfig() {
                var e = this;
                return Object(a.a)(function* () {
                  var t = o.default.$native.canIUse("openCustomerServiceChat"),
                    [r = { mmpChannelType: f.ORIGINAL }, a = !1] =
                      yield Promise.all([
                        Object(p.a)(),
                        t ? Object(p.b)() : Promise.resolve(!1),
                      ]).catch((t) => {
                        var r;
                        return (
                          null == (r = h.logger) ||
                            r.appError({
                              message: "客服会话入口配置获取异常",
                              detail: Object(i.a)(
                                { error: t.message || t.msg || t.errMsg || "" },
                                e.getLogBaseParams()
                              ),
                            }),
                          []
                        );
                      }),
                    n = r.mmpChannelType === f.WEBVIEW ? u : I;
                  if (a && a.corpId && a.kfLink)
                    return (
                      (e.kfLink = a.kfLink),
                      (e.corpId = a.corpId),
                      (e.mode = "WX_KF"),
                      void Object(c.g)("IM_ENTRY_CONFIG_KEY", {
                        value: { mode: n, kfLink: a.kfLink, corpId: a.corpId },
                        expire: Date.now() + 18e4,
                      })
                    );
                  Object(c.g)("IM_ENTRY_CONFIG_KEY", {
                    value: { mode: n, kfLink: "", corpId: "" },
                    expire: Date.now() + 18e4,
                  }),
                    (e.mode = n);
                })();
              },
              onContact(e) {
                var t;
                e && this.$emit("contact", {}),
                  null != e &&
                    null != (t = e.detail) &&
                    t.path &&
                    Object(g.a)().dmc.navigate(
                      d.a.add(e.detail.path, e.detail.query)
                    );
              },
              onIMTap(e) {
                var t;
                e && this.$emit("click", e.detail),
                  null == (t = h.logger) ||
                    null == t.skynetLog ||
                    t.skynetLog({
                      message: "点击客服会话按钮",
                      detail: this.getLogBaseParams(),
                    });
              },
              getLogBaseParams() {
                return {
                  mode: this.mode,
                  openType: this.openType,
                  formType: this.formType,
                  sessionFrom: this.sessionFrom,
                  extInfo: { url: this.kfLink },
                  corpId: this.corpId,
                };
              },
              onGetphonenumber(e) {
                e && this.$emit("getphonenumber", e.detail);
              },
              onError(e) {
                e && this.$emit("error", e.detail);
              },
              onOpensetting(e) {
                e && this.$emit("opensetting", e.detail);
              },
              onLaunchapp(e) {
                e && this.$emit("launchapp", e.detail);
              },
              onWXIMTap(e) {
                this.onIMTap(e);
              },
              onYZIMTap(e) {
                this.onIMTap(e),
                  Object(g.a)().dmc.navigate("ImIndex", {
                    sessionFrom: this.sessionFrom,
                  });
              },
              onWXKFTap(e) {
                this.onIMTap(e),
                  o.default.$native.openCustomerServiceChat({
                    extInfo: { url: this.kfLink },
                    corpId: this.corpId,
                    fail: (e) => {
                      var { errCode: t, errMsg: r } = e || {};
                      Object(s.default)({
                        path: "/v3/im/api/weixin-kf/report-visited-mmp-error.json",
                        method: "POST",
                        withCredentials: !0,
                        data: {
                          mmpErrInfo: JSON.stringify({ errCode: t, errMsg: r }),
                        },
                      }),
                        m.a.alert({ message: "网络错误，请重试" });
                    },
                  });
              },
            },
            ud: !0,
          };
        t.default = o.default.component(v);
      },
    }
  )
);
