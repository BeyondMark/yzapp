"use strict";
var r = require("~/r");
r(
  "fAyM",
  Object.assign({}, require("~/v.js").modules, {
    fAyM: function (e, t, s) {
      s.r(t);
      var a = s("Fcif"),
        i = s("9ZMt"),
        c = s("YeA1"),
        n = s("US/N"),
        d = s("AGZf"),
        r = s("KEq0"),
        o = s.n(r),
        h = s("1Uvd"),
        g = { pageNum: 1, pageSize: 2, bizName: "promotion~cps" },
        p = {
          props: { wrapperType: { type: String, default: "card" } },
          data: () => ({
            kdtId: "",
            buyerId: "",
            cpsConfigKey: "",
            goods: [],
            visible: !1,
          }),
          computed: {
            bannerId() {
              return (
                this.ctx.logger.getPageSpm() +
                "~cpsShopRecommend.0~0~" +
                Object(h.a)(8)
              );
            },
          },
          created() {
            Object(c.b)(this, ["kdtId", "buyerId"]),
              (this.cpsConfigKeyUnWatch = this.ctx.watch(
                "cpsConfigKey",
                (e) => {
                  (this.cpsConfigKey = e), this.fetch();
                }
              ));
          },
          destroyed() {
            this.cpsConfigKeyUnWatch && this.cpsConfigKeyUnWatch();
          },
          methods: {
            fetch() {
              var { cpsConfigKey: e } = this;
              Object(n.default)({
                path: "/wscstatcenter/cps/queryCpsConfig.json",
                method: "GET",
                data: { params: JSON.stringify({ configKeys: [e] }) },
                withCredentials: !0,
              })
                .then((t) => {
                  if (t[e]) {
                    var { enable: s } = JSON.parse(t[e]);
                    s && this.getRecommendResultData();
                  }
                })
                .catch((e) => {
                  Object(d.a)(e.msg || "店铺配置获取失败");
                });
            },
            getRecommendResultData() {
              Object(n.default)({
                path: "/wscstatcenter/recommend/getRecommendResultData.json",
                method: "GET",
                data: {
                  params: JSON.stringify(
                    Object(a.a)({}, g, {
                      kdtId: this.kdtId,
                      buyerId: this.buyerId,
                    })
                  ),
                },
                withCredentials: !0,
              })
                .then((e) => {
                  var { list: t = [] } = e;
                  (this.visible = !0),
                    (this.goods = t.map((e) =>
                      Object(a.a)({}, e, {
                        imageUrl: o()(e.imageUrl, "!300x0.jpg"),
                      })
                    )),
                    this.ctx.logger &&
                      this.ctx.logger.log({
                        et: "view",
                        ei: "component_view",
                        en: "周边好物入口展示",
                        params: { banner_id: this.bannerId },
                      });
                })
                .catch((e) => {
                  (this.visible = !1), Object(d.a)(e.msg || "推荐列表获取失败");
                });
            },
            navigateToList() {
              var e = i.default.getEnv(),
                t = { banner_id: this.bannerId };
              "web" === e && (t.kdt_id = this.kdtId),
                this.ctx.dmc.navigate("CpsGoodsList", t);
            },
          },
          ud: !0,
        };
      t.default = i.default.component(p);
    },
  })
);
