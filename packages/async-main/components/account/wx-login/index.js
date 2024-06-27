"use strict";
var r = require("~/r");
r(
  "+bgE",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "+bgE": function (t, e, n) {
        n.r(e);
        var o = n("PjiT"),
          a = n("uQM2");
        Component({
          properties: {
            selector: { type: String, value: o.a.DEFAULT_DIALOG_ID },
            forbidClose: { type: Boolean, value: !0 },
          },
          data: { accountLogin: !1, isFromAuthComponent: !1 },
          lifetimes: { attached() {}, detached() {} },
          methods: a.a,
        });
      },
      EFhr: function (t, e, n) {
        n.d(e, "a", function () {
          return s;
        });
        var o = n("Fcif"),
          a = n("jA1y"),
          r = n("a/Yq");
        function s(t, e) {
          return (function (t, e) {
            void 0 === t && (t = {});
            var n = Object(r.a)(e);
            return Object(a.c)(
              Object(o.a)(
                {
                  config: { skipShopInfo: !0 },
                  method: "POST",
                  header: Object(o.a)(
                    { "content-type": "application/x-www-form-urlencoded" },
                    n.header
                  ),
                  origin: "uic",
                  data: {},
                },
                t
              )
            );
          })(
            {
              origin: "uic",
              pathname: "/passport/login/wx.json",
              path: "/passport/login/wx.json",
              data: t,
            },
            e
          );
        }
      },
      NERQ: function (t, e, n) {
        var o = [],
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
        var s = (t) => (
          (t = Object.assign(Object.assign({}, r), t)),
          new Promise((e, n) => {
            var a,
              r = (
                ("function" == typeof t.context ? t.context() : t.context) ||
                (a = getCurrentPages())[a.length - 1]
              ).selectComponent(t.selector);
            delete t.context,
              delete t.selector,
              r &&
                (r.setData(
                  Object.assign(
                    {
                      callback: (t, o) => {
                        "confirm" === t ? e(o) : n(o);
                      },
                    },
                    t
                  )
                ),
                wx.nextTick(() => {
                  r.setData({ show: !0 });
                }),
                o.push(r));
          })
        );
        (s.alert = (t) => s(t)),
          (s.confirm = (t) => s(Object.assign({ showCancelButton: !0 }, t))),
          (s.close = () => {
            o.forEach((t) => {
              t.close();
            }),
              (o = []);
          }),
          (s.stopLoading = () => {
            o.forEach((t) => {
              t.stopLoading();
            });
          }),
          (s.currentOptions = r),
          (s.defaultOptions = a),
          (s.setDefaultOptions = (t) => {
            (r = Object.assign(Object.assign({}, r), t)),
              (s.currentOptions = r);
          }),
          (s.resetDefaultOptions = () => {
            (r = Object.assign({}, a)), (s.currentOptions = r);
          }),
          s.resetDefaultOptions(),
          (e.a = s);
      },
      RfiI: function (t, e, n) {
        n.d(e, "a", function () {
          return a;
        });
        var o = n("f9/1"),
          a = () => {
            var t = "",
              { query: e } = Object(o.getCurrentPageOption)();
            e && e.from_params && (t = e.from_params);
            var n = getApp();
            if (!t) {
              var a,
                r = n.logger.getLogParams();
              t =
                (r &&
                  (null == r || null == (a = r.context)
                    ? void 0
                    : a.from_params)) ||
                "";
            }
            return (
              t || (t = (n.globalData && n.globalData.from_params) || ""), t
            );
          };
      },
      "a/Yq": function (t, e, n) {
        n.d(e, "a", function () {
          return o;
        });
        var o = (t) => {
          var e, n, o;
          if (!t) return {};
          var a =
            null != (e = null == (n = t.data) ? void 0 : n.isFromAuthComponent)
              ? e
              : null == (o = t.properties)
              ? void 0
              : o.isFromAuthComponent;
          return {
            header: { ppt: JSON.stringify({ cmp: a ? "native" : "" }) },
          };
        };
      },
    }
  )
);
