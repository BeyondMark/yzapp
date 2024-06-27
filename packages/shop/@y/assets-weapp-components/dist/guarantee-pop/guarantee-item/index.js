"use strict";
var r = require("~/r");
r(
  "bvO1",
  Object.assign({}, require("~/c.js").modules, {
    bvO1: function (t, a, i) {
      i.r(a);
      var e = i("0i4I");
      Object(e.a)({
        props: {
          data: { type: Object },
          docs: { type: Object, required: !0, value: {} },
        },
        data: { icon: "" },
        watch: {
          docs() {
            this.setIcon();
          },
        },
        methods: {
          setIcon() {
            var t, a;
            this.setData({
              icon:
                (null ===
                  (a =
                    null === (t = this.data.docs) || void 0 === t
                      ? void 0
                      : t.icon) || void 0 === a
                  ? void 0
                  : a.light[this.data.data.key]) ||
                "https://img01.yzcdn.cn/upload_files/2020/03/23/FsC5ZmJqm2yUIcKfgM9ChlX58Fu-.png",
            });
          },
          onClick() {
            this.data.data.event && this.$emit("onClick", this.data.data);
          },
        },
      });
    },
  })
);
