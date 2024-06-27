"use strict";
var r = require("~/r");
r(
  "LJPc",
  Object.assign(
    {},
    require("../../../../c.js").modules,
    require("~/v.js").modules,
    {
      LJPc: function (e, t, s) {
        s.r(t);
        var o = s("Tewj"),
          a = s("pg5i"),
          i = {
            name: "help-cut",
            props: { goodsBaseInfo: Object },
            data: () => ({
              show: !1,
              questionData: null,
              errMsg: "发起砍价失败，请重试",
              list: [],
            }),
            computed: {
              itemClass() {
                var e = this.list.length;
                return e > 2
                  ? "goods-item-multi"
                  : ["goods-item-single", "goods-item-double"][e - 1] || "";
              },
            },
            created() {
              o.default.on("popupContainer:helpcutErr:show", (e) => {
                this.getData(), (this.errMsg = e.errMsg), (this.show = !0);
              });
            },
            destroyed() {
              o.default.off("popupContainer:helpcutErr:show");
            },
            methods: {
              onClose() {
                this.show = !1;
              },
              getData() {
                var e;
                Object(a.a)({
                  pageSize: 3,
                  scene: "wsc~helpcut~rec",
                  extraParam: {
                    goodsIds: [
                      null == (e = this.goodsBaseInfo) ? void 0 : e.id,
                    ],
                  },
                })
                  .then((e) => {
                    (this.show = !0), (this.list = e);
                  })
                  .catch(() => {});
              },
              goodsClick(e) {
                if (e.alias) {
                  var t = (null == e ? void 0 : e.algId) || "",
                    { alias: s } = e;
                  this.$emit("dmc-jump", {
                    type: "navigate",
                    page: "GoodsDetail",
                    options: { alias: s, alg: t, shopAutoEnter: 1 },
                  });
                }
              },
              enterShop() {
                this.$emit("dmc-jump", { type: "switchTab", page: "Home" });
              },
            },
            ud: !0,
          },
          r = s("9ZMt");
        t.default = r.default.component(i);
      },
    }
  )
);
