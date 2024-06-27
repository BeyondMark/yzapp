"use strict";
var r = require("~/r");
r(
  "j5IM",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    {
      j5IM: function (s, t, e) {
        e.r(t);
        var i = e("ddwB"),
          o = {
            data: () => ({ isShow: !1, showPopup: !1, isWsc: !0 }),
            computed: {
              content: () => "当前为商城预览版，商家经营资质提交中。",
            },
            created() {
              Object(i.a)().then((s) => {
                var { isShow: t, status: e, isWsc: i } = s;
                (this.ctx.data.shopCertConfig = { isShow: t, status: e }),
                  (this.ctx.data.isWsc = i),
                  (this.isShow = t),
                  (this.isWsc = i);
              });
            },
            methods: {
              triggerPopup() {
                this.showPopup = !this.showPopup;
              },
            },
            ud: !0,
          },
          r = e("9ZMt");
        t.default = r.default.component(o);
      },
    }
  )
);
