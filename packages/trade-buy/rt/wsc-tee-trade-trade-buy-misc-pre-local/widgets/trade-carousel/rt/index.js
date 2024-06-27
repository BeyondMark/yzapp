"use strict";
var r = require("~/r");
r(
  "Sb6W",
  Object.assign({}, require("~/v.js").modules, {
    Sb6W: function (e, a, d) {
      d.r(a);
      var c = d("Fcif"),
        r = d("eijD"),
        t = d("US/N"),
        o = d("nmEu"),
        s = d("YeA1"),
        f = {
          props: {
            customTop: { type: Number, default: 0 },
            navBarText: { type: String },
            recordList: Array,
          },
          data: () => ({
            tradeRecords: [],
            goods: {},
            shopConfig: {},
            show: !0,
          }),
          computed: {
            tradeCarouselStyle() {
              return "top: " + this.customTop + "px";
            },
          },
          watch: {
            recordList() {
              this.tryFetchTradeRecords(
                this.showTradeCarousel,
                this.goods.list || []
              );
            },
          },
          created() {
            var e = this;
            Object(s.b)(this, {
              goods: (e) => {
                var a = (null == e ? void 0 : e.list) || [];
                this.tryFetchTradeRecords(this.showTradeCarousel, a);
              },
              shopConfig: function (a) {
                var d;
                void 0 === a && (a = {});
                var c =
                    1 ==
                    +(
                      a.goodsTradeMarquee ||
                      JSON.parse(a.goods_trade_marquee || "{}") ||
                      {}
                    ).show,
                  r = (null == (d = e.goods) ? void 0 : d.list) || [];
                e.tryFetchTradeRecords(c, r), (e.showTradeCarousel = c);
              },
            });
          },
          methods: {
            tryFetchTradeRecords(e, a) {
              var d = this;
              return Object(r.a)(function* () {
                var c = [];
                if (
                  (d.recordList &&
                    d.recordList.length > 0 &&
                    (c = c.concat(d.recordList)),
                  e && a.length > 0)
                ) {
                  var r = yield d.fetchTradeRecords(a);
                  c = c.concat(r);
                }
                c.length > 0 && (d.show = !0),
                  c.length !== d.tradeRecords.length
                    ? ((d.tradeRecords = []),
                      setTimeout(() => {
                        d.tradeRecords = c;
                      }))
                    : (d.tradeRecords = c);
              })();
            },
            fetchTradeRecords(e) {
              var a = this,
                { alias: d } = e[0] || {};
              return d
                ? this.records
                  ? Promise.resolve(this.records)
                  : Object(t.default)({
                      path: "/wscgoods/getItemMarqueeRecords.json",
                      data: { alias: d },
                    })
                      .then(function (e) {
                        void 0 === e && (e = []);
                        var d = e.map((e) => {
                          var a = e.content,
                            { content: d } = e,
                            r =
                              /\s{0,1}(\W{0,1}\w{0,1}(\*)+\W{0,1}\w{0,1})\s{1}/.exec(
                                d
                              );
                          if (r) {
                            var t = r[0],
                              s = a.indexOf(t);
                            s > -1 && (a = a.slice(s).trim());
                          }
                          return (
                            d.indexOf("购买了该商品") > -1 &&
                              (a = a.replace("购买了该商品", "已购买")),
                            d.indexOf("给出了好评") > -1 &&
                              (a = a.replace("给出了好评", "给出好评")),
                            Object(c.a)({}, e, {
                              content: a,
                              avatar: e.avatar || Object(o.a)(),
                            })
                          );
                        });
                        return (a.records = d), d;
                      })
                      .catch(() => {})
                : Promise.resolve([]);
            },
          },
          ud: !0,
        },
        b = d("9ZMt");
      a.default = b.default.component(f);
    },
    nmEu: function (e, a, d) {
      d.d(a, "a", function () {
        return r;
      });
      var c = [
        "22937c08bd4d87c2a33a339d81d5b58d",
        "37aeb661064b029f2b0a86e9e662cbbb",
        "535045098ea80c44f817c394b1ecfd10",
        "0791652b22657b3c20ef0a0652a2f444",
        "67e895423d5bdb9b59a6964dab8eb135",
        "a4c29bd2591feaf04b93527ada157382",
        "50db0df2db90833d3e11a9218be4c8d1",
        "ab1159007d8a8f00449dec9087273268",
        "0495a6dd1093f73ab38fde0aa70797de",
        "5861386126c55a5d9b20c6c2c20a7013",
        "da6c575bba1628eed578ceaaf1c1f5d4",
        "99f7591d776795e25d439716f4dba2ff",
        "0fedd48ac49d19c93303961d3255e7a5",
        "95173169f85f61278cbdd75701770be7",
        "02c643189e12d4aecb4f2a43d4c7e16e",
        "36119d0107c34d145afcc689b68b21c6",
        "da11ffc166308a8160527ecba9199ec1",
        "aaedf80b686fe1511195a1622c45c719",
        "0ccdc0f021b0a5d09b88db047dd432b4",
        "9101a5fe88ace0ae861e95ff34f28957",
        "c3998a48d5f8744b744e3e369666e63b",
        "a72ce0a19a7fc19a1921e891f25ee59f",
        "16cdb32d9829b387fe7a7ef0bb73024c",
        "7c49758d28f9e20de19f3e78e585563d",
        "650656080d028b5de05d8dccc789b278",
        "1f35ff9cc78049054d398e09118b8192",
        "8669c369899c8b804beca697ab07bdc0",
        "e443c5c6df53f5db7708dc4122f32dc6",
        "7655db43b1d509595183898b60568f09",
        "aae85930a06d8598146dc79c2f4f415f",
      ].map(function (e) {
        return "https://img01.yzcdn.cn/public_files/2019/09/18/".concat(
          e,
          ".png"
        );
      });
      var r = function () {
        return c[
          (function () {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 0;
            return Math.round(Math.random() * e);
          })(c.length - 1)
        ];
      };
    },
  })
);
