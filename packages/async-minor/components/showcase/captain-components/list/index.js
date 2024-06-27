var r = require("~/r");
r("7jdR", {
  "7jdR": function (e, t) {
    var o = 0;
    Component({
      properties: {
        loading: {
          type: Boolean,
          value: !1,
          observer(e) {
            !e &&
              this.properties.autoCheck &&
              setTimeout(() => {
                this.check();
              }, 500);
          },
        },
        finished: { type: Boolean, value: !1 },
        relativeTo: { type: String, value: "viewport" },
        bottomDistance: { type: Number, value: 200 },
        disabled: { type: Boolean, value: !1, observer: "removeObserver" },
        autoCheck: { type: Boolean, value: !1 },
      },
      ready() {
        this.initObserver();
      },
      detached() {
        this.removeObserver();
      },
      methods: {
        initObserver() {
          var {
            relativeTo: e,
            bottomDistance: t,
            disabled: o,
          } = this.properties;
          if (!o) {
            var i = { bottom: t },
              r = this.createIntersectionObserver();
            "viewport" === e ? r.relativeToViewport(i) : r.relativeTo(e, i),
              r.observe(".c-hook", (e) => {
                var { intersectionRatio: t } = e,
                  { loading: o, finished: i, disabled: r } = this.properties;
                !o && !i && !r && t > 0 && this.triggerEvent("load");
              }),
              (this.ob = r);
          }
        },
        removeObserver() {
          this.ob && (this.ob.disconnect(), (this.ob = null));
        },
        check() {
          var {
            loading: e,
            finished: t,
            disabled: i,
            bottomDistance: r,
          } = this.properties;
          e ||
            t ||
            i ||
            this.createSelectorQuery()
              .select(".c-hook")
              .boundingClientRect((e) => {
                e &&
                  e.top >= 0 &&
                  e.top <=
                    (o || (o = wx.getSystemInfoSync().windowHeight), o + r) &&
                  this.triggerEvent("load");
              })
              .exec();
        },
      },
    });
  },
});
