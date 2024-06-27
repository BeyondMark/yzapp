"use strict";
var r = require("~/r");
r(
  "lZlg",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      lZlg: function (t, o, e) {
        e.r(o);
        var i = e("9ZMt"),
          a = e("YeA1"),
          r = e("qEWN"),
          s = e("/TR5"),
          n = {
            props: { isShowNav: { type: Boolean, default: !0 } },
            data: () => ({
              kdtId: 0,
              buyerId: 0,
              footerData: null,
              pageBgColor: "",
              pageStyleConfig: {},
              isShowStoreInfo: !1,
              unWatch: null,
            }),
            computed: {
              footerBgColor() {
                return (
                  this.pageStyleConfig.footerBgColor ||
                  this.pageBgColor ||
                  "f7f8fa"
                );
              },
            },
            created() {
              Object(a.b)(this, [
                "isShowStoreInfo",
                "pageBgColor",
                "buyerId",
                "miniprogram",
                "pageStyleConfig",
              ]),
                (this.unWatch = this.ctx.watch("kdtId", (t) => {
                  var o,
                    e,
                    i = this.kdtId;
                  this.kdtId = t;
                  var a = null == (o = this.miniprogram) ? void 0 : o.isXhsApp,
                    r = null == (e = this.miniprogram) ? void 0 : e.isTTApp;
                  !t || i === t || a || r || this.getFooterData();
                }));
            },
            destroyed() {
              this.unWatch();
            },
            methods: {
              getFooterData() {
                Object(r.a)(this.kdtId)
                  .then((t) => {
                    this.ctx.inited(), (this.footerData = t);
                  })
                  .catch(() => {
                    this.ctx.inited();
                  });
              },
              onLongTap() {
                var t = this.$getPageQuery() || {},
                  o = this.$getPageRoute() || "";
                Object(s.a)({
                  kdtId: this.kdtId,
                  buyerId: this.buyerId,
                  query: t,
                  route: o,
                  appName: "wsc",
                  appVersion: "2.174.5",
                });
              },
              linkToNav(t) {
                "FOLLOW" === t.type
                  ? this.ctx.event.emit("fullguide:show", {
                      viewType: "follow",
                    })
                  : this.ctx.dmc.navigate(t.link);
              },
              linkToStoreInfo() {
                this.ctx.dmc.navigate("ShopInfo", {
                  no_footer: 1,
                  no_btn: 1,
                  kdt_id: this.kdtId,
                });
              },
              onClick() {
                var t = i.default.getEnv(),
                  o = "ant" === t,
                  e = "qq" === t,
                  a = "";
                this.footerData.hidePoweredBy ||
                  ((a =
                    "https://www.youzan.com/intro/supportlogo?kdtId=" +
                    this.kdtId),
                  o
                    ? (a = "https://www.youzan.com/intro/zhifubao")
                    : e && (a = "https://www.youzan.com/intro/qq"),
                  this.ctx.logger &&
                    this.ctx.logger.log({
                      et: "click",
                      ei: "youzan_logo",
                      en: "有赞提供技术支持",
                      params: { from_source: "youzan_technic_yzxcx_0" },
                      si: this.kdtId,
                    }),
                  this.ctx.dmc.navigate(a));
              },
            },
            ud: !0,
          };
        o.default = i.default.component(n);
      },
    }
  )
);
