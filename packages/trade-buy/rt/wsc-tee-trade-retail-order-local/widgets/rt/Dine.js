"use strict";
var r = require("~/r");
r(
  "b94L",
  Object.assign({}, require("~/v.js").modules, {
    b94L: function (t, e, i) {
      i.r(e);
      var s = i("YeA1"),
        a = {
          data: () => ({ show: !1, id: "", tableNo: "", tabs: [] }),
          created() {
            Object(s.b)(this, {
              dine: (t) => {
                if (null != t && t.isDineOrder) {
                  this.ctx.event.emit("dine:afterBlockToggle"),
                    (this.show = !0),
                    (this.tableNo = t.tableNumber),
                    (this.ctx.data.tradeAddressVisible = !1);
                  var e = [],
                    { supportedPickUpWays: i } = this.ctx.data.pickUpWay;
                  i &&
                    (e = Object.keys(i)
                      .map((t) => ({ id: +t, text: i[t] }))
                      .reverse()),
                    (this.tabs = e);
                }
              },
            });
          },
          methods: {
            onSwitchTab(t) {
              t !== this.id &&
                ((this.id = t),
                this.ctx.process.invoke(
                  "updateDinePickUpWay",
                  this.tabs.find((e) => e.id === t)
                ),
                this.ctx.process.invoke("fetchShow"));
            },
          },
          ud: !0,
        },
        r = i("9ZMt");
      e.default = r.default.component(a);
    },
  })
);
