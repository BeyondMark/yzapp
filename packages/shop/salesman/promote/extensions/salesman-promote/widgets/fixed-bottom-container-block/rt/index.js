"use strict";
var r = require("~/r");
r(
  "3GFs",
  Object.assign(
    {},
    require("~/packages/shop/c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "3GFs": function (e, t, i) {
        i.r(t);
        var s = i("VmHG"),
          r = i("7/pW"),
          h = i("kHfR");
        Object(r.a)({
          behaviors: [h.b],
          name: "fixed-bottom-block",
          attached() {
            Object(s.b)(this, ["SET_BOTTOM_HRIGHT"]),
              Object(s.d)(this, ["displayPop"]);
          },
          ready() {
            this.timeRunner();
          },
          methods: {
            timeRunner() {
              this.tid =
                !this.hasDetached &&
                setInterval(() => {
                  this.queryHeight();
                }, 2e3);
            },
            queryHeight() {
              this.createSelectorQuery()
                .select("#module-bottom")
                .boundingClientRect((e) => {
                  if (e) {
                    var t = e.bottom - e.top;
                    t !== this._height &&
                      ((this._height = t), this.SET_BOTTOM_HRIGHT(t));
                  }
                })
                .exec();
            },
          },
          detached() {
            (this.hasDetached = !0), clearInterval(this.tid), (this.tid = null);
          },
        });
      },
    }
  )
);
