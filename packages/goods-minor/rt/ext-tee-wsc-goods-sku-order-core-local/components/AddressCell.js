"use strict";
var r = require("~/r");
r(
  "Ekkt",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      Ekkt: function (e, t, r) {
        r.r(t);
        var s = r("nKXO"),
          a = r.n(s),
          i = r("w/BL"),
          n = {
            props: {
              item: Object,
              isAddressFixed: Boolean,
              expressWaySelected: { type: Object, default: () => ({}) },
              preSaleTips: { type: String, default: "" },
            },
            data: () => ({ value: {} }),
            computed: {
              postageMessage() {
                var { postageTitle: e = "", postage: t = "" } =
                  this.expressWaySelected || {};
                return (
                  e +
                  (t || "") +
                  (this.preSaleTips ? "，" + this.preSaleTips : "")
                );
              },
            },
            watch: {
              item: {
                handler(e) {
                  if (a.a.isEmpty(e))
                    this.value = {
                      icon: "",
                      text: "未获取收货地址，请新建收货地址",
                    };
                  else {
                    var {
                      userName: t = "",
                      tel: r = "",
                      addressDetail: s = "",
                      houseNumber: i = "",
                    } = e || {};
                    this.value = {
                      icon: "location-o",
                      text: t + " " + r + " " + s + " " + i,
                    };
                  }
                },
                immediate: !0,
              },
            },
            methods: {
              onCellClick(e) {
                this.$emit("cell-click", e), this.onLogger();
              },
              onLogger() {
                this.value.icon ? Object(i.b)() : Object(i.f)();
              },
            },
            ud: !0,
          },
          o = r("9ZMt");
        t.default = o.default.component(n);
      },
      URSu: function (e, t, r) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        var s = r("bb6g"),
          a = s.__importDefault(r("h9bJ")),
          i = function (e, t) {
            return void 0 === t
              ? e
              : "object" != typeof e || null === e
              ? t
              : (0, a.default)(e)
              ? ((r = s.__spreadArray([], e, !0)),
                "object" == typeof t &&
                  Object.keys(t).forEach(function (e) {
                    r[e] = i(r[e], t[e]);
                  }),
                r)
              : "object" != typeof t || null === t
              ? s.__assign(s.__assign({}, e), t)
              : ((r = s.__assign({}, e)),
                s
                  .__spreadArray([], Object.keys(r).concat(Object.keys(t)), !0)
                  .reduce(function (e, a) {
                    var n;
                    return s.__assign(
                      s.__assign({}, e),
                      (((n = {})[a] = i(r[a], t[a])), n)
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
              : (0, a.default)(r)
              ? s.__spreadArray([], r, !0)
              : s.__assign({}, r);
          }
          return e.reduce(function (e, t) {
            return null == e
              ? s.__assign(s.__assign({}, e), t)
              : "object" != typeof e
              ? e
              : i(e, t);
          });
        };
      },
    }
  )
);
