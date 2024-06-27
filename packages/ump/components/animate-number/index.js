"use strict";
var r = require("~/r");
r(
  "bnpL",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    bnpL: function (t, e, a) {
      a.r(e);
      var r = a("rqVN");
      Object(r.b)({
        properties: {
          value: {
            type: Number,
            observer(t) {
              this.run(t);
            },
          },
          max: {
            type: Number,
            value: 100,
            observer() {
              this.setRange();
            },
          },
          min: {
            type: Number,
            value: 0,
            observer() {
              this.setRange();
            },
          },
          config: {
            type: Object,
            value: {},
            observer() {
              this.renderStyle();
            },
          },
        },
        data: {
          columns: [],
          keys: [],
          _options: JSON.parse(
            JSON.stringify({
              during: 1.5,
              height: 40,
              cellWidth: 24,
              ease: "cubic-bezier(0.5, 1, 0.89, 1)",
              color: "#FF5837",
              columnStyle: "",
            })
          ),
          maxData: 0,
          minData: 0,
          length: 0,
        },
        created() {
          this.setRange(), this.renderStyle();
        },
        methods: {
          setRange() {
            var { max: t, min: e } = this.properties;
            (t *= 100),
              (e *= 100),
              (e = Math.max(parseInt(e, 10), 0)),
              (t = Math.max(parseInt(t, 10), e));
            var a = this.initColumn(t);
            this.setData({ columns: a, maxData: t, minData: e }),
              this.properties.value && this.run(this.properties.value);
          },
          initColumn(t) {
            for (
              var e = String(t).padStart(3, "0").length,
                a = [],
                r = ["0", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
                s = r.map((t) => t + "."),
                i = 0;
              i < e;
              i++
            ) {
              var n = 2 === i ? s : r;
              i ? a.unshift(n) : a.unshift(n.slice(1));
            }
            return a;
          },
          run(t) {
            var { maxData: e, minData: a } = this.data,
              r = parseInt(100 * t, 10),
              s = (r = Math.min(e, Math.max(a, r))).toString().split(""),
              i = this.data.columns.length,
              n = [];
            for (this.setYZData({ length: s.length }); s.length; ) {
              var h = s.pop();
              n.length
                ? n.unshift(parseInt(h, 10) + 1)
                : n.unshift(parseInt(h, 10));
            }
            for (; n.length < i; ) n.unshift(0);
            this.setYZData({ keys: n });
          },
          renderStyle() {
            var { config: t = {}, _options: e } = this.data,
              a = {};
            Object.keys(e).forEach((r) => {
              a[r] = t[r] || e[r];
            }),
              this.setYZData({ _options: a });
          },
        },
      });
    },
  })
);
