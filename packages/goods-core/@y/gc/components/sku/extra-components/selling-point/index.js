"use strict";
var r = require("~/r");
r(
  "hoLk",
  Object.assign(
    {},
    require("../../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      hoLk: function (t, e, s) {
        s.r(e);
        var o = s("ONqW"),
          a = s("7p7D"),
          i = s("XV13"),
          n = {
            props: { opt: Object },
            data: () => ({ resultInfo: null }),
            computed: {
              pointInfo() {
                return this.resultInfo ? Object(i.a)(this.resultInfo) : null;
              },
            },
            watch: {
              opt: {
                handler() {
                  this.initData();
                },
                immediate: !0,
              },
            },
            methods: {
              initData() {
                this.opt.show &&
                  this.opt.alias &&
                  Object(a.a)({ alias: this.opt.alias })
                    .then((t) => {
                      if (t) {
                        this.resultInfo = t;
                        var e = {
                          userCount: t.userCount,
                          type: this.pointInfo.typeName,
                          tagCount: t.tags.length,
                          tagContent: t.tags,
                          component: "sku",
                        };
                        Object(o.a)().log({
                          et: "view",
                          ei: "goods_sku_selling_point_view",
                          en: "sku面板评价标签曝光",
                          pt: "g",
                          params: e,
                        });
                      }
                    })
                    .catch((t) => {});
              },
            },
            ud: !0,
          },
          u = s("9ZMt");
        e.default = u.default.component(n);
      },
    }
  )
);
