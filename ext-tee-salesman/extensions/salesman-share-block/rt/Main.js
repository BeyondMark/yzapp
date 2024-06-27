"use strict";
var r = require("~/r");
r(
  "DrWE",
  Object.assign({}, require("~/v.js").modules, {
    DrWE: function (t, e, s) {
      s.r(e);
      var a = s("Fcif"),
        r = s("YeA1"),
        i = s("vgcL"),
        c = s("US/N"),
        n = s("ONqW"),
        h = s("w2Y9"),
        l = s.n(h),
        u = s("mQXz"),
        d = s.n(u),
        o = (t) => {
          var e = d()(Object(a.a)({}, t, { path: t.url }), "url");
          return Object(c.default)(e);
        },
        b = [],
        g = {
          props: {
            needBindRelation: { type: Boolean, default: !0 },
            sst: Number,
          },
          data: () => ({ shareData: {} }),
          created() {
            this.initData();
          },
          methods: {
            logProcess() {
              (4 !== b.length || b.find((t) => t.includes("Err"))) &&
                Object(n.a)().log({
                  et: "custom",
                  ei: "salesman_share_err",
                  en: "分销员业务异常",
                  params: { processLog: b },
                });
            },
            initSalesmanBiz() {
              (b = []).push("initSalesmanBiz");
              try {
                this.ctx.env.getQueryAsync().then((t) => {
                  b.push("getQueryAsync");
                  var e,
                    s = "";
                  try {
                    var a = getApp(),
                      { yzUserId: r } = a.getToken() || {};
                    s = r;
                  } catch (t) {
                    b.push(("getUserIdErr " + t).slice(0, 100));
                  }
                  try {
                    var { route: c } = this.ctx.env,
                      h = l.a.add(c, t),
                      u = Object(n.a)().getLogParams();
                    (e = {
                      sst: this.sst,
                      gst: Object(i.g)(this.sst),
                      sourceUrl: h,
                    }),
                      Object(i.f)({
                        request: o,
                        logParams: u,
                        userId: s,
                        url: h,
                      });
                  } catch (t) {
                    b.push(("" + t).slice(0, 100));
                  }
                  if (this.needBindRelation)
                    try {
                      b.push("bindSalesman"), Object(i.a)(e);
                    } catch (t) {
                      b.push("bindSalesmanErr");
                    }
                  try {
                    b.push("getSalesman"),
                      Object(i.b)({}, (t, e) => {
                        t ||
                          ((this.shareData = e),
                          this.ctx.event.emit(
                            "share:query",
                            Object(i.d)(this.ctx.data.kdtId)
                          ));
                      });
                  } catch (t) {
                    b.push("getSalesmanErr");
                  }
                  this.logProcess();
                });
              } catch (t) {
                this.logProcess();
              }
            },
            initData() {
              Object(r.e)(this, {
                setShareInfo: (t) => {
                  if (!this.shareData.seller) return t;
                  var e = {
                      shareInfo: { link: t.path, title: t.title },
                      kdtId: this.ctx.data.kdtId,
                    },
                    s = Object(i.c)(e);
                  return (
                    (s = d()(Object(a.a)({}, s, { path: s.link }), "link")),
                    Object(a.a)({}, t, s)
                  );
                },
              }),
                Object(r.b)(this, {
                  kdtId: () => {
                    this.initSalesmanBiz();
                  },
                });
            },
          },
          ud: !0,
        },
        p = s("9ZMt");
      e.default = p.default.component(g);
    },
  })
);
