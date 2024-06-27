"use strict";
var r = require("~/r");
r(
  "o0vd",
  Object.assign({}, require("~/v.js").modules, {
    o0vd: function (t, e, a) {
      a.r(e);
      var i = a("Fcif"),
        s = a("YeA1"),
        d = a("ONqW"),
        o = {
          name: "review-detail",
          props: {
            list: Array,
            tags: Array,
            alias: String,
            goodsId: Number,
            kdtId: Number,
            memberLabel: Number,
            listParams: Object,
            themeTag: Object,
          },
          watch: {
            "list.length": {
              immediate: !0,
              handler() {
                var t;
                if ((null == (t = this.list) ? void 0 : t.length) >= 2) {
                  var { picturesList: e = [], content: a = "" } =
                    this.list[1] || {};
                  Object(d.a)().log({
                    et: "view",
                    ei: "goods_eva_second_view",
                    en: "商详第2条评价曝光",
                    pt: "g",
                    pi: this.goodsId,
                    params: {
                      goods_id: this.goodsId,
                      has_image: Number(e.length > 0),
                      content_length: a.length,
                    },
                  });
                }
              },
            },
          },
          methods: {
            showEvaluationList(t) {
              var { alias: e, kdtId: a } = this,
                d = Object(i.a)({}, this.listParams, {
                  showSummaryTag: !0,
                  kdtId: a,
                  alias: e,
                });
              t && t.tagCode && (d.tagCode = t.tagCode),
                Object(s.a)().dmc.navigate("GoodsEvaluationList", d);
            },
          },
          ud: !0,
        },
        r = a("9ZMt");
      e.default = r.default.component(o);
    },
  })
);
