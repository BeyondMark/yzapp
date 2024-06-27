"use strict";
var r = require("~/r");
r(
  "liRO",
  Object.assign({}, require("~/v.js").modules, {
    liRO: function (i, t, e) {
      e.r(t);
      var s = e("9mFz"),
        h = e("mztD"),
        a = {
          data: () => ({ showPopup: !1, delivery: {}, initialShow: !1 }),
          computed: {
            pic() {
              var i = Object(h.a)(this.delivery.attachPic, "!750x1500.jpg");
              return this.delivery.attachPic ? i : "";
            },
          },
          watch: {
            showPopup: {
              handler(i) {
                i
                  ? (!this.initialShow && (this.initialShow = !0),
                    this.displayTimer && clearTimeout(this.displayTimer))
                  : (this.displayTimer = setTimeout(() => {
                      this.initialShow = !1;
                    }, 600));
              },
              immediate: !0,
            },
          },
          created() {
            Object(s.b)(this, ["delivery"]),
              Object(s.d)(this, {
                showDeliveryScopePopup: () => {
                  this.showPopup = !0;
                },
              });
          },
          methods: {
            onClose() {
              this.showPopup = !1;
            },
          },
          ud: !0,
        },
        o = e("9ZMt");
      t.default = o.default.component(a);
    },
  })
);
