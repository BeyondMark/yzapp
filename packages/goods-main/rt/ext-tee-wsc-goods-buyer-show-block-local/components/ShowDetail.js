"use strict";
var r = require("~/r");
r(
  "iUdY",
  Object.assign({}, require("~/v.js").modules, {
    iUdY: function (t, s, e) {
      e.r(s);
      var a = e("KEq0"),
        i = e.n(a),
        r = e("YeA1"),
        d = {
          name: "show-detail",
          props: { showList: Array, alias: String, kdtId: Number },
          computed: {
            formatedImages() {
              return this.showList.map((t) => i()(t.picturesList[0], "small"));
            },
          },
          methods: {
            showDetail() {
              Object(r.a)().dmc.navigate("BuyersShowList", {
                alias: this.alias,
                kdtId: this.kdtId,
              });
            },
          },
          ud: !0,
        },
        o = e("9ZMt");
      s.default = o.default.component(d);
    },
  })
);
