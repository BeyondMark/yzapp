"use strict";
var r = require("~/r");
r(
  "vaT5",
  Object.assign({}, require("~/v.js").modules, {
    vaT5: function (e, t, a) {
      a.r(t);
      var o = a("Fcif"),
        i = a("ONqW"),
        s = a("YeA1"),
        r = a("w2Y9"),
        p = a.n(r),
        c = {
          props: { opt: Object, kdtId: [Number, String] },
          data: () => ({ showPopup: !1 }),
          watch: {
            showPopup(e) {
              if (e) {
                var t = this.opt.serviceDescList.map((e) => e.tag);
                this.logger(
                  { en: "服务标签-详情-曝光", ei: "service_tag_pop_view" },
                  t
                );
              }
            },
          },
          mounted() {
            var e = this.opt.serviceBarList.map((e) => e.tag);
            this.logger({ en: "服务标签-曝光", ei: "service_tag_view" }, e);
          },
          methods: {
            logger(e, t) {
              Object(i.a)().log(
                Object(o.a)({}, e, {
                  et: "view",
                  params: {
                    component: "service_tab_bar",
                    goodsId: this.opt.goodsBaseInfo.id,
                    tags: t,
                  },
                })
              );
            },
            handleChangeShowPopup(e) {
              this.showPopup = e;
            },
            onClickItem(e) {
              if (e.url) {
                var t = {};
                "haitaoShopCert" === e.key && (t.shopId = this.kdtId),
                  Object(s.a)().dmc.navigate("CommonWebview", {
                    src: p.a.add(e.url, t),
                  });
              }
            },
          },
          ud: !0,
        },
        d = a("9ZMt");
      t.default = d.default.component(c);
    },
  })
);
