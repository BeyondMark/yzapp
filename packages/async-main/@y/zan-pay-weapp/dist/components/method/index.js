"use strict";
var r = require("~/r");
r(
  "X7hh",
  Object.assign({}, require("../../../../../c.js").modules, {
    X7hh: function (e, a, n) {
      n.r(a);
      var i = n("6ZX2");
      Object(i.a)({
        props: {
          name: String,
          desc: String,
          channel: String,
          saleRight: String,
          emphasize: Boolean,
          hairline: Boolean,
          disabled: Boolean,
          loading: Boolean,
          color: String,
        },
        methods: {
          onClick: function () {
            this.data.disabled ||
              this.$emit("click", {
                channel: this.data.channel,
                name: this.data.name,
              });
          },
        },
      });
    },
  })
);
