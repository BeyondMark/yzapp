"use strict";
var r = require("~/r");
r(
  "3U/6",
  Object.assign({}, require("~/v.js").modules, {
    "3U/6": function (t, e, i) {
      i.r(e);
      var r = i("YeA1"),
        s = {
          props: { item: Object },
          data: () => ({ kdtId: 0 }),
          computed: {
            authTypeList() {
              return "poster" === this.item.type ? ["nicknameAndAvatar"] : [];
            },
          },
          created() {
            Object(r.b)(this, ["kdtId"]);
          },
          methods: {
            onItemClick() {
              this.$emit("item-click", this.item);
            },
          },
          ud: !0,
        },
        d = i("9ZMt");
      e.default = d.default.component(s);
    },
  })
);
