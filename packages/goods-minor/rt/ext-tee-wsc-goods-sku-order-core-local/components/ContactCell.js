"use strict";
var r = require("~/r");
r(
  "h3xq",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      URSu: function (e, t, r) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        var a = r("bb6g"),
          s = a.__importDefault(r("h9bJ")),
          n = function (e, t) {
            return void 0 === t
              ? e
              : "object" != typeof e || null === e
              ? t
              : (0, s.default)(e)
              ? ((r = a.__spreadArray([], e, !0)),
                "object" == typeof t &&
                  Object.keys(t).forEach(function (e) {
                    r[e] = n(r[e], t[e]);
                  }),
                r)
              : "object" != typeof t || null === t
              ? a.__assign(a.__assign({}, e), t)
              : ((r = a.__assign({}, e)),
                a
                  .__spreadArray([], Object.keys(r).concat(Object.keys(t)), !0)
                  .reduce(function (e, s) {
                    var l;
                    return a.__assign(
                      a.__assign({}, e),
                      (((l = {})[s] = n(r[s], t[s])), l)
                    );
                  }, {}));
            var r;
          };
        t.default = function () {
          for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
          if (0 === e.length) return {};
          if (1 === e.length) {
            var r = e[0];
            return "object" != typeof r
              ? r
              : (0, s.default)(r)
              ? a.__spreadArray([], r, !0)
              : a.__assign({}, r);
          }
          return e.reduce(function (e, t) {
            return null == e
              ? a.__assign(a.__assign({}, e), t)
              : "object" != typeof e
              ? e
              : n(e, t);
          });
        };
      },
      h3xq: function (e, t, r) {
        r.r(t);
        var a = r("nKXO"),
          s = r.n(a),
          n = r("w/BL"),
          l = {
            props: {
              item: Object,
              labelTitle: String,
              isAddressFixed: Boolean,
            },
            data: () => ({ value: {} }),
            watch: {
              item: {
                handler(e) {
                  var { userName: t, telephone: r } = e || {};
                  !s.a.isEmpty(e) && t && r
                    ? (this.value = {
                        class: "contact-cell__value--black",
                        text: t + " " + r,
                      })
                    : (this.value = {
                        class: "contact-cell__value--gray",
                        text: "请添加联系人",
                      });
                },
                immediate: !0,
              },
            },
            methods: {
              onCellClick(e) {
                this.$emit("cell-click", e), this.onLogger();
              },
              onLogger() {
                "请添加联系人" === this.value.text
                  ? Object(n.g)()
                  : Object(n.e)();
              },
            },
            ud: !0,
          },
          c = r("9ZMt");
        t.default = c.default.component(l);
      },
    }
  )
);
