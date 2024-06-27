"use strict";
var r = require("~/r");
r(
  "vo+8",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    Qu2e: function (o, e, r) {
      r.d(e, "j", function () {
        return t;
      }),
        r.d(e, "l", function () {
          return i;
        }),
        r.d(e, "k", function () {
          return n;
        }),
        r.d(e, "h", function () {
          return a;
        }),
        r.d(e, "b", function () {
          return d;
        }),
        r.d(e, "d", function () {
          return s;
        }),
        r.d(e, "e", function () {
          return c;
        }),
        r.d(e, "i", function () {
          return l;
        }),
        r.d(e, "g", function () {
          return g;
        }),
        r.d(e, "a", function () {
          return u;
        }),
        r.d(e, "f", function () {
          return b;
        }),
        r.d(e, "c", function () {
          return C;
        }),
        r.d(e, "n", function () {
          return p;
        }),
        r.d(e, "m", function () {
          return f;
        });
      var t = 3,
        i = 6,
        n = 8,
        a = "init",
        d = { NO_RULE: t, RULE: i, PAY: n, ERROR_CARD_TYPE: -1 },
        s = 1,
        c = 0,
        l = {
          Color200: {
            direction: "135deg",
            colors: ["#B7D0FF", "#4E67B7"],
            bgColor: "#526AB9",
            imageUrl:
              "//img01.yzcdn.cn/public_files/2019/03/11/704e415d887541d2bf9ce945483af305.png",
          },
          Color201: {
            direction: "135deg",
            colors: ["#959595", "#20242A"],
            bgColor: "#444",
            imageUrl:
              "//img01.yzcdn.cn/public_files/2019/03/11/fb7d33fa35a5c118ba0495c09cdd1b3e.png",
          },
          Color202: {
            direction: "135deg",
            colors: ["#8BECBD", "#319E69"],
            bgColor: "#2F835A",
            imageUrl:
              "//img01.yzcdn.cn/public_files/2019/03/11/7ac9de05b089cb13d36323d6864b8d49.png",
          },
          Color203: {
            direction: "135deg",
            colors: ["#FF9E97", "#C44E46"],
            bgColor: "#8B3C36",
            imageUrl:
              "//img01.yzcdn.cn/public_files/2019/03/11/17fbdf65817fef6f4bd7acdb8fa414ab.png",
          },
          Color204: {
            direction: "135deg",
            colors: ["#FFDAA6", "#CE9A51"],
            bgColor: "#8C714B",
            imageUrl:
              "//img01.yzcdn.cn/public_files/2019/03/11/659d46363828ac8f571bd4a13ad89458.png",
          },
          Color205: {
            direction: "135deg",
            colors: ["#FFB5C1", "#D73B5B"],
            bgColor: "#9D4456",
            imageUrl:
              "//img01.yzcdn.cn/public_files/2019/03/11/7646eb0f59b1ce45d3cfbcb67686e93d.png",
          },
          Color206: {
            direction: "135deg",
            colors: ["#FCFCFC", "#A8A8A8"],
            bgColor: "#444444",
          },
        },
        g = 1,
        u = 2,
        b = 3,
        C = {
          Color030: "Color200",
          Color040: "Color200",
          Color050: "Color200",
          Color102: "Color201",
          Color010: "Color202",
          Color020: "Color202",
          Color082: "Color202",
          Color090: "Color203",
          Color100: "Color203",
          Color101: "Color203",
          Color060: "Color204",
          Color070: "Color204",
          Color080: "Color204",
          Color081: "Color204",
        },
        p =
          "https://img01.yzcdn.cn/public_files/23f9f5089197722cff6962bc33a66929.png",
        f = {
          appName: "更多权益",
          icon: "https://img01.yzcdn.cn/public_files/a1fb1079aa056c48631a190bc5247dd9.png",
          benefitTplId: 0,
        };
    },
    "vo+8": function (o, e, r) {
      r.r(e);
      var t = r("Fcif"),
        i = r("jA1y"),
        n = r("taYb"),
        a = r("1Uvd"),
        d = r("2wjL"),
        s = r("xyw3"),
        c = r("u8kV"),
        l = r("9KEa"),
        g = r("GrZP"),
        u = r("Qu2e"),
        { toCamelCase: b } = n.a,
        C = Object(a.a)(8),
        p = {
          goods: [],
          image_ratio: 1,
          layout: 1,
          size_type: 0,
          show_buy_button: !1,
          buy_button_type: 1,
          buy_btn_express: !1,
          button_text: "",
          show_title: !0,
          show_sub_title: !1,
          show_price: !0,
          show_corner_mark: !1,
          corner_mark_type: 0,
          corner_mark_image: "",
          default_image_url: "",
          image_fill_style: 1,
          page_margin: 7,
          goods_margin: 6,
          border_radius_type: 1,
          text_align_type: "left",
          text_style_type: 2,
        };
      Object(c.c)({
        behaviors: [g.a],
        data: { goodsComponentData: p, RECOMMEND_NAME: "更多精选商品" },
        properties: {
          cardType: { type: Number, value: "" },
          spmId: { type: Number, value: "" },
        },
        attached() {
          (this.goodsList = p.goods),
            this.refresh(),
            this.createIntersectionObserver()
              .relativeToViewport({ bottom: 100 })
              .observe("#placeholder", () => {
                this.data.goodsComponentData.goods !== this.goodsList &&
                  (this.setYZData({
                    "goodsComponentData.goods": this.goodsList,
                  }),
                  this.triggerEvent("afterload", this.goodsList.length));
              });
        },
        methods: {
          renderGoods() {
            this.data.goodsComponentData.goods !== this.goodsList &&
              this.createSelectorQuery()
                .select("#placeholder")
                .boundingClientRect((o) => {
                  if (o) {
                    var { screenHeight: e } = Object(l.b)() || {};
                    (!e || (o.top > 0 && o.top < e)) &&
                      this.setYZData({
                        "goodsComponentData.goods": this.goodsList,
                      });
                  }
                })
                .exec();
          },
          refresh() {
            var o = this;
            this.isFetching ||
              ((this.isFetching = !0),
              Object(i.c)({
                path: "/wscuser/scrm/api/benefitcard/getGoodsList.json",
                data: { itemSize: 6 },
              })
                .then(function (e) {
                  void 0 === e && (e = []);
                  var r = [],
                    i = o.getCardType(o.data.cardType);
                  (o.goodsList = b(e).map((e, n) => {
                    var a =
                        i +
                        "." +
                        o.data.spmId +
                        "~recommend_fixed~" +
                        (n + 1) +
                        "~" +
                        C,
                      c = {
                        alg: e.algs,
                        banner_id: a,
                        recommend_name: "更多精选商品",
                      },
                      l = Object(t.a)(
                        {
                          component: "recommend_fixed",
                          goods_id: e.id + "",
                          item_id: e.id + "",
                          item_type: "goods",
                        },
                        c
                      );
                    return (
                      (e.loggerParams = l),
                      (e.url = d.a.add(
                        "/pages/goods/detail/index",
                        Object(t.a)({ alias: e.alias }, c)
                      )),
                      (e.price = Object(s.a)(e.price).toYuan()),
                      r.push(l),
                      e
                    );
                  })),
                    o.ensureAppLogger("view", r);
                })
                .catch(() => {})
                .then(() => {
                  (this.isFetching = !1), this.renderGoods();
                }));
          },
          getCardType(o) {
            switch (o) {
              case u.k:
                return "paycard";
              case u.l:
                return "rulecard";
              default:
                return "quanyika";
            }
          },
        },
      });
    },
  })
);
