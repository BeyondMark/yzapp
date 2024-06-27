"use strict";
var r = require("~/r");
r(
  "0Zsc",
  Object.assign({}, require("~/v.js").modules, {
    "0Zsc": function (e, t, d) {
      d.r(t);
      var a = d("Fcif"),
        c = d("US/N"),
        r = d("nmEu"),
        s = {
          props: {
            customTop: { type: Number, default: 0 },
            show: { type: Boolean },
            navBarText: { type: String },
            goodsList: { type: Array, default: () => [] },
          },
          data: () => ({ tradeRecords: [], dataQueried: !1 }),
          watch: {
            show(e) {
              this.tryFetchTradeRecords(e, this.goodsList);
            },
            goodsList(e) {
              this.tryFetchTradeRecords(this.show, e);
            },
          },
          created() {
            this.tryFetchTradeRecords(this.show, this.goodsList);
          },
          destroyed() {
            clearTimeout(this.tid), (this.tid = null);
          },
          methods: {
            tryFetchTradeRecords(e, t) {
              e &&
                t.length > 0 &&
                !this.dataQueried &&
                this.fetchTradeRecords(t).then(this.startAnimation.bind(this));
            },
            fetchTradeRecords(e) {
              var t = this,
                { alias: d } = e[0] || {};
              if (d)
                return Object(c.default)({
                  path: "/wscgoods/getItemMarqueeRecords.json",
                  data: { alias: d },
                })
                  .then(function (e) {
                    void 0 === e && (e = []);
                    var d = e.map((e) => {
                      var t = e.content,
                        { content: d } = e,
                        c =
                          /\s{0,1}(\W{0,1}\w{0,1}(\*)+\W{0,1}\w{0,1})\s{1}/.exec(
                            d
                          );
                      if (c) {
                        var s = c[0],
                          i = t.indexOf(s);
                        i > -1 && (t = t.slice(i).trim());
                      }
                      return (
                        d.indexOf("购买了该商品") > -1 &&
                          (t = t.replace("购买了该商品", "已购买")),
                        d.indexOf("给出了好评") > -1 &&
                          (t = t.replace("给出了好评", "给出好评")),
                        Object(a.a)({}, e, {
                          content: t,
                          avatar: e.avatar || Object(r.a)(),
                        })
                      );
                    });
                    return (t.dataQueried = !0), d;
                  })
                  .catch(() => {});
            },
            startAnimation(e) {
              void 0 === e && (e = []);
              var { length: t } = e;
              if (t) {
                var d = (t, a, c) => {
                  var r = t === a - 1 ? 0 : t + 1,
                    s = e.map(
                      (e) => ((e.showEnter = !1), (e.showLeave = !1), e)
                    );
                  (this.tradeRecords = s),
                    setTimeout(() => {
                      this.move(s, t, c, () => {
                        d(r, a);
                      });
                    }, 5);
                };
                d(0, t, !0);
              }
            },
            move(e, t, d, a) {
              var c = d ? 1e3 : 2e3;
              this.timeoutPromise(
                this.moveIn.bind(this, { tradeRecords: e, index: t }),
                c
              )
                .then(() =>
                  this.timeoutPromise(
                    this.moveOut.bind(this, { tradeRecords: e, index: t }),
                    2e3
                  )
                )
                .then(() => {
                  this.timeoutPromise(a, 300);
                });
            },
            timeoutPromise(e, t) {
              return new Promise((d) => {
                this.tid = setTimeout(() => {
                  e(), d();
                }, t);
              });
            },
            moveIn(e) {
              var { tradeRecords: t, index: d } = e,
                a = t[d];
              (a.showEnter = !0), (a.showLeave = !1), (this.tradeRecord = t);
            },
            moveOut(e) {
              var { tradeRecords: t, index: d } = e,
                a = t[d];
              (a.showEnter = !1), (a.showLeave = !0), (this.tradeRecord = t);
            },
          },
          ud: !0,
        },
        i = d("9ZMt");
      t.default = i.default.component(s);
    },
    nmEu: function (e, t, d) {
      d.d(t, "a", function () {
        return c;
      });
      var a = [
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
      var c = function () {
        return a[
          (function () {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 0;
            return Math.round(Math.random() * e);
          })(a.length - 1)
        ];
      };
    },
  })
);
