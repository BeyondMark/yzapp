"use strict";
var r = require("~/r");
r(
  "j8xL",
  Object.assign(
    {},
    require("../../../../c.js").modules,
    require("~/v.js").modules,
    {
      j8xL: function (e, t, a) {
        a.r(t);
        var i = a("N4qH"),
          n = a("AGZf"),
          l = {
            name: "t-calendar",
            props: {
              title: { type: String, default: "日期选择" },
              color: String,
              show: Boolean,
              formatter: null,
              confirmText: { type: String, default: "确定" },
              rangePrompt: String,
              defaultDate: null,
              allowSameDay: Boolean,
              confirmDisabledText: String,
              type: { type: String, default: "single" },
              minDate: { type: null, default: Date.now() },
              maxDate: {
                type: null,
                default: new Date(
                  new Date().getFullYear(),
                  new Date().getMonth() + 6,
                  new Date().getDate()
                ).getTime(),
              },
              position: { type: String, default: "bottom" },
              rowHeight: { type: String, default: i.a },
              round: { type: Boolean, default: !0 },
              poppable: { type: Boolean, default: !0 },
              showMark: { type: Boolean, default: !0 },
              showTitle: { type: Boolean, default: !0 },
              showConfirm: { type: Boolean, default: !0 },
              showSubtitle: { type: Boolean, default: !0 },
              safeAreaInsetBottom: { type: Boolean, default: !0 },
              closeOnClickOverlay: { type: Boolean, default: !0 },
              maxRange: { type: null, default: null },
            },
            data: () => ({ currentDate: null }),
            computed: {
              customClassName() {
                return "t-calendar__popup--" + this.position;
              },
            },
            watch: {
              show(e) {
                var t, a;
                e &&
                  (null == (t = this.$refs.calendar) || t.initRect(),
                  null == (a = this.$refs.calendar) || a.scrollIntoView());
              },
              defaultDate() {
                var e;
                (this.currentDate = this.getInitialDate()),
                  null == (e = this.$refs.calendar) || e.scrollIntoView();
              },
              type() {
                this.reset();
              },
            },
            created() {
              this.currentDate = this.getInitialDate();
            },
            methods: {
              reset() {
                var e;
                (this.currentDate = this.getInitialDate()),
                  null == (e = this.$refs.calendar) || e.scrollIntoView();
              },
              getInitialDate() {
                var { type: e, defaultDate: t, minDate: a } = this;
                if ("range" === e) {
                  var [n, l] = t || [];
                  return [n || a, l || Object(i.j)(new Date(a)).getTime()];
                }
                return "multiple" === e ? t || [a] : t || a;
              },
              onOpen() {
                this.$emit("open");
              },
              onOpened() {
                this.$emit("opened");
              },
              onClose() {
                this.$emit("close");
              },
              onClosed() {
                this.$emit("closed");
              },
              onClickDay(e) {
                var { date: t } = e,
                  { type: a, currentDate: n, allowSameDay: l } = this;
                if ("range" === a) {
                  var [r, s] = n;
                  if (r && !s) {
                    var o = Object(i.c)(t, r);
                    1 === o
                      ? this.select([r, t], !0)
                      : -1 === o
                      ? this.select([t, null])
                      : l && this.select([t, t]);
                  } else this.select([t, null]);
                } else if ("multiple" === a) {
                  var c;
                  if (
                    n.some((e, a) => {
                      var n = 0 === Object(i.c)(e, t);
                      return n && (c = a), n;
                    })
                  ) {
                    var u = n.splice(c, 1);
                    (this.currentDate = n), this.unselect(u);
                  } else this.select([...n, t]);
                } else this.select(t, !0);
              },
              unselect(e) {
                var t = e[0];
                t && this.$emit("unselect", Object(i.e)(t));
              },
              select(e, t) {
                if (t && "range" === this.type && !this.checkRange(e))
                  return void (this.showConfirm
                    ? this.emit([e[0], Object(i.g)(e[0], this.maxRange - 1)])
                    : this.emit(e));
                this.emit(e), t && !this.showConfirm && this.onConfirm();
              },
              emit(e) {
                var t = (e) => (e instanceof Date ? e.getTime() : e);
                (this.currentDate = Array.isArray(e) ? e.map(t) : t(e)),
                  this.$emit("select", Object(i.e)(e));
              },
              checkRange(e) {
                var { maxRange: t, rangePrompt: a } = this;
                return (
                  !(t && Object(i.b)(e) > t) ||
                  (Object(n.a)({
                    context: this,
                    message: a || "选择天数不能超过 " + t + " 天",
                  }),
                  !1)
                );
              },
              onConfirm() {
                ("range" !== this.type || this.checkRange(this.currentDate)) &&
                  this.$emit("confirm", Object(i.e)(this.currentDate));
              },
            },
            ud: !0,
          },
          r = a("9ZMt");
        t.default = r.default.component(l);
      },
    }
  )
);
