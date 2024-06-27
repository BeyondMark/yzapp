"use strict";
var r = require("~/r");
r(
  "GHVL",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      GHVL: function (e, t, n) {
        n.r(t),
          n.d(t, "AUTO_IM", function () {
            return d;
          }),
          n.d(t, "YZ_IM", function () {
            return l;
          }),
          n.d(t, "WX_IM", function () {
            return p;
          }),
          n.d(t, "WX_KF", function () {
            return g;
          }),
          n.d(t, "NO_IM", function () {
            return m;
          }),
          n.d(t, "MMP_CHANNEL", function () {
            return u;
          });
        var a = n("eijD"),
          r = n("2wjL"),
          o = n("2ktG"),
          s = n("NERQ"),
          i = n("rqVN"),
          c = n("1bvV"),
          d = "AUTO_IM",
          l = "YZ_IM",
          p = "WX_IM",
          g = "WX_KF",
          m = "NO_IM",
          u = { WEBVIEW: "webview", ORIGINAL: "original" },
          f = Object(o.a)(),
          h = getApp();
        Object(i.b)({
          properties: {
            imConcatWay: { type: String, value: d },
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
            wxKfConfig: Object,
          },
          externalClasses: ["contact-class"],
          data: {
            kfLink: "",
            corpId: "",
            mode: m,
            WX_IM: p,
            YZ_IM: l,
            WX_KF: g,
            NO_IM: m,
          },
          created() {
            this.init();
          },
          ready() {
            setTimeout(() => {
              this.data.mode === m &&
                (h.logger.appError({
                  message: "多客服触发降级",
                  detail: this.getLogBaseParams(),
                }),
                this.setYZData({ mode: p }));
            }, 1e4);
          },
          methods: {
            init() {
              var e = this;
              return Object(a.a)(function* () {
                var { kfLink: t, corpId: n } = e.data.wxKfConfig || {};
                if (t && n) e.setYZData({ kfLink: t, corpId: n, mode: g });
                else
                  try {
                    var a = yield f.getAsync("IM_ENTRY_CONFIG");
                    if (!a) throw new Error("cache expired");
                    var { mode: r, kfLink: o, corpId: s } = a.value || {};
                    if (o && s)
                      return void e.setYZData({
                        kfLink: o,
                        corpId: s,
                        mode: g,
                      });
                    if (![p, l].includes(r))
                      throw new Error("cache no contact mode");
                    e.setYZData({ mode: r });
                  } catch (t) {
                    return e.fetchEntryConfig();
                  }
              })();
            },
            fetchEntryConfig() {
              var e = this;
              return Object(a.a)(function* () {
                try {
                  var t = wx.canIUse("openCustomerServiceChat"),
                    [n = { mmpChannelType: u.ORIGINAL }, a] = yield Promise.all(
                      [
                        Object(c.a)().catch(() => ({
                          mmpChannelType: u.ORIGINAL,
                        })),
                        t ? Object(c.b)().catch(() => !1) : Promise.resolve(!1),
                      ]
                    ),
                    r = n.mmpChannelType === u.WEBVIEW ? l : p;
                  if (a && a.corpId && a.kfLink)
                    return (
                      e.setYZData({
                        kfLink: a.kfLink,
                        corpId: a.corpId,
                        mode: g,
                      }),
                      void f.setAsync(
                        "IM_ENTRY_CONFIG",
                        { mode: g, kfLink: a.kfLink, corpId: a.corpId },
                        { expire: 5 / 1440 }
                      )
                    );
                  f.setAsync(
                    "IM_ENTRY_CONFIG",
                    { mode: r, kfLink: "", corpId: "" },
                    { expire: 5 / 1440 }
                  ),
                    e.setYZData({ mode: r, kfLink: "", corpId: "" });
                } catch (t) {
                  e.setYZData({ mode: p });
                }
              })();
            },
            onContact(e) {
              if (e) {
                var { detail: t = {} } = e;
                this.triggerEvent("contact", {}),
                  t.path && wx.navigateTo({ url: r.a.add(t.path, t.query) });
              }
            },
            onError(e) {
              e && this.triggerEvent("error", e.detail);
            },
            onOpensetting(e) {
              e && this.triggerEvent("opensetting", e.detail);
            },
            onLaunchapp(e) {
              e && this.triggerEvent("launchapp", e.detail);
            },
            onIMTap(e) {
              e && this.triggerEvent("tap", e.detail),
                h.logger.skynetLog({
                  message: "点击客服会话按钮",
                  detail: this.getLogBaseParams(),
                }),
                this.data.sessionFrom ||
                  h.logger.appError({
                    message: "sessionFrom数据异常",
                    detail: this.getLogBaseParams(),
                  });
            },
            onWXIMTap(e) {
              this.onIMTap(e);
            },
            onYZIMTap(e) {
              this.onIMTap(e),
                wx.navigateTo({
                  url: r.a.add("/packages/message/contact/index", {
                    sessionFrom: encodeURIComponent(this.data.sessionFrom),
                  }),
                });
            },
            onWeixinKfTap(e) {
              this.onIMTap(e);
              var { kfLink: t, corpId: n } = this.data;
              wx.openCustomerServiceChat({
                extInfo: { url: t },
                corpId: n,
                fail: (e) => {
                  var { errCode: t, errMsg: n } = e || {};
                  Object(c.c)({
                    mmpErrInfo: JSON.stringify({ errCode: t, errMsg: n }),
                  }),
                    s.a.alert({ message: "网络错误，请重试" });
                },
              });
            },
            getLogBaseParams() {
              return {
                mode: this.data.mode,
                openType: this.data.openType,
                formType: this.data.formType,
                sessionFrom: this.data.sessionFrom,
                extInfo: { url: this.data.kfLink },
                corpId: this.data.corpId,
              };
            },
          },
        });
      },
      NERQ: function (e, t, n) {
        var a = [],
          r = {
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
          o = Object.assign({}, r);
        var s = (e) => (
          (e = Object.assign(Object.assign({}, o), e)),
          new Promise((t, n) => {
            var r,
              o = (
                ("function" == typeof e.context ? e.context() : e.context) ||
                (r = getCurrentPages())[r.length - 1]
              ).selectComponent(e.selector);
            delete e.context,
              delete e.selector,
              o &&
                (o.setData(
                  Object.assign(
                    {
                      callback: (e, a) => {
                        "confirm" === e ? t(a) : n(a);
                      },
                    },
                    e
                  )
                ),
                wx.nextTick(() => {
                  o.setData({ show: !0 });
                }),
                a.push(o));
          })
        );
        (s.alert = (e) => s(e)),
          (s.confirm = (e) => s(Object.assign({ showCancelButton: !0 }, e))),
          (s.close = () => {
            a.forEach((e) => {
              e.close();
            }),
              (a = []);
          }),
          (s.stopLoading = () => {
            a.forEach((e) => {
              e.stopLoading();
            });
          }),
          (s.currentOptions = o),
          (s.defaultOptions = r),
          (s.setDefaultOptions = (e) => {
            (o = Object.assign(Object.assign({}, o), e)),
              (s.currentOptions = o);
          }),
          (s.resetDefaultOptions = () => {
            (o = Object.assign({}, r)), (s.currentOptions = o);
          }),
          s.resetDefaultOptions(),
          (t.a = s);
      },
    }
  )
);
