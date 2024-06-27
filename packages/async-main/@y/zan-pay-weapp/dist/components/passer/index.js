"use strict";
var r = require("~/r");
r(
  "CbPl",
  Object.assign({}, require("../../../../../c.js").modules, {
    CbPl: function (t, e, a) {
      a.r(e);
      var s = a("6ZX2");
      Object(s.a)({
        props: {
          show: Boolean,
          zIndex: Number,
          password: String,
          overlay: Boolean,
          cashierType: String,
        },
        computed: {
          length: function () {
            return this.data.password.length;
          },
        },
        methods: {
          onInput: function (t) {
            var e = t.detail;
            if (6 !== this.data.length) {
              var a = "" + this.data.password + e;
              this.$emit("update", a), 6 === a.length && this.$emit("full", a);
            }
          },
          onDelete: function () {
            if (6 !== this.data.length && 0 !== this.data.length) {
              var t = this.data.password.slice(0, -1);
              this.$emit("update", t);
            }
          },
        },
      });
    },
  })
);
