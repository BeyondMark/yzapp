"use strict";
var r = require("~/r");
r(
  "Y4ao",
  Object.assign(
    {},
    require("../../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      Y4ao: function (e, t, o) {
        o.r(t);
        var n = o("N4qH"),
          r = o("BZkp"),
          i = o("Vnr7"),
          s = {
            props: {
              poppable: Boolean,
              show: Boolean,
              title: String,
              showTitle: Boolean,
              showSubtitle: Boolean,
              minDate: null,
              maxDate: null,
              type: String,
              color: String,
              showMark: Boolean,
              formatter: null,
              rowHeight: String,
              currentDate: null,
              safeAreaInsetBottom: Boolean,
              showConfirm: Boolean,
              confirmDisabledText: String,
              confirmText: String,
              allowSameDay: Boolean,
            },
            data: () => ({ subtitle: "", scrollIntoViewId: "" }),
            computed: {
              months() {
                var { minDate: e, maxDate: t } = this,
                  o = [],
                  r = new Date(e);
                r.setDate(1);
                do {
                  o.push(r.getTime()), r.setMonth(r.getMonth() + 1);
                } while (1 !== Object(n.d)(r, new Date(t)));
                return o;
              },
              buttonDisabled() {
                var { type: e, currentDate: t } = this;
                return (
                  null == t ||
                  ("range" === e
                    ? !t[0] || !t[1]
                    : "multiple" === e
                    ? !t.length
                    : !t)
                );
              },
            },
            mounted() {
              (!this.show && this.poppable) ||
                (this.initRect(), this.scrollIntoView());
            },
            methods: {
              onClickDay(e) {
                this.$emit("click-day", e);
              },
              onConfirm() {
                this.$emit("confirm");
              },
              initRect() {
                if (
                  (null != this.contentObserver &&
                    this.contentObserver.disconnect(),
                  this.createIntersectionObserver)
                ) {
                  var e = this.createIntersectionObserver({
                    thresholds: [0, 0.1, 0.9, 1],
                    observeAll: !0,
                  });
                  (this.contentObserver = e),
                    e.relativeTo(".t-calendar__body"),
                    e.observe(".month", (e) => {
                      e.boundingClientRect.top <= e.relativeRect.top &&
                        (this.subtitle = Object(n.f)(e.dataset.date));
                    });
                } else {
                  var t = Object(i.a)(this, {
                    thresholds: [0, 0.1, 0.9, 1],
                    observeAll: !0,
                  });
                  (this.contentObserver = t),
                    t.relativeTo(".t-calendar__body"),
                    t.observe(".month", (e) => {
                      e.boundingClientRect.top <= e.relativeRect.top &&
                        (this.subtitle = Object(n.f)(e.dataset.dataset.date));
                    });
                }
              },
              scrollIntoView() {
                (this.scrollIntoViewId = ""),
                  Object(r.g)(() => {
                    var {
                        currentDate: e,
                        type: t,
                        show: o,
                        poppable: i,
                        minDate: s,
                        maxDate: a,
                      } = this,
                      l = "single" === t ? e : e[0];
                    !l ||
                      (!o && i) ||
                      Object(n.i)(s, a).some(
                        (e, t) =>
                          0 === Object(n.d)(e, l) &&
                          (Object(r.g)(() => {
                            this.scrollIntoViewId = "month" + t;
                          }),
                          !0)
                      );
                  });
              },
            },
            ud: !0,
          },
          a = o("9ZMt");
        t.default = a.default.component(s);
      },
    }
  )
);
