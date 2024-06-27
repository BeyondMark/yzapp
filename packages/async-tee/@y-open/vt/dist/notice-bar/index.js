"use strict";
var r = require("~/r");
r(
  "3g5D",
  Object.assign({}, require("~/v.js").modules, {
    "3g5D": function (t, e, i) {
      i.r(e);
      var a = i("U1kS"),
        r = i.n(a),
        n = i("9ZMt"),
        s = i("Zqpg"),
        o = i("m6kV"),
        l = i("BZkp"),
        d = Object(o.a)("t-notice-bar"),
        c = {
          name: "t-notice-bar",
          options: { multipleSlots: !0 },
          externalClass: ["custom-class"],
          mixins: [Object(s.a)({ externalClasses: ["custom-class"] }), r.a],
          props: {
            text: { type: String, default: "" },
            mode: { type: String, default: "" },
            url: { type: String, default: "" },
            openType: { type: String, default: "navigate" },
            delay: { type: Number, default: 1 },
            speed: { type: Number, default: 50 },
            scrollable: { type: Boolean, default: null },
            leftIcon: { type: String, default: "" },
            color: String,
            backgroundColor: String,
            background: String,
            wrapable: Boolean,
          },
          data: () => ({ show: !0 }),
          computed: {
            styles() {
              var { color: t, backgroundColor: e, background: i } = this;
              return {
                root:
                  "\n          color: " +
                  t +
                  ";\n          background-color: " +
                  e +
                  ";\n          background: " +
                  i +
                  "\n        ",
              };
            },
            classes() {
              var { wrapable: t, scrollable: e, id: i } = this;
              return {
                wrap: d("wrap", i),
                content:
                  d("content", i) + " " + (!1 !== e || t ? "" : "t-ellipsis"),
              };
            },
            id() {
              return String(this.$id).replace(".", "d");
            },
          },
          watch: {
            text() {
              this.init();
            },
            speed() {
              this.init();
            },
          },
          mounted() {
            this.$nextTick(() => {
              this.init();
            });
          },
          created() {
            this.animation = n.default.$native.createAnimation({
              timingFunction: "linear",
            });
          },
          destroyed() {
            this.clearTimer();
          },
          methods: {
            init() {
              Promise.all([
                Object(l.f)(this, ".t-notice-bar__content--" + this.id),
                Object(l.f)(this, ".t-notice-bar__wrap--" + this.id),
              ]).then((t) => {
                var [e, i] = t;
                if (null != e && null != i && e.width && i.width) {
                  var { speed: a, scrollable: r } = this;
                  if (!0 === r || i.width < e.width) {
                    var n = (e.width / a) * 1e3;
                    (this.wrapWidth = i.width),
                      (this.contentWidth = e.width),
                      (this.duration = n),
                      this.scroll(!0);
                  }
                }
              });
            },
            clearTimer() {
              this.timer && clearTimeout(this.timer), (this.timer = null);
            },
            scroll(t) {
              this.clearTimer();
              var { duration: e } = this,
                i = t ? 1e3 * this.delay : 0;
              this.animation
                .translateX(t ? 0 : this.wrapWidth)
                .step({ duration: 0 }),
                this.setData({ animationData: this.animation.export() }),
                setTimeout(() => {
                  this.animation
                    .translateX(-this.contentWidth)
                    .step({ duration: e, delay: i }),
                    this.setData({ animationData: this.animation.export() });
                }, 1e3 / 30),
                (this.timer = setTimeout(() => {
                  this.scroll();
                }, this.duration + i));
            },
            onClickIcon(t) {
              "closeable" === this.mode &&
                (this.timer && clearTimeout(this.timer),
                (this.timer = null),
                (this.show = !1),
                this.$emit("close", t));
            },
            onClick(t) {
              this.$emit("click", t, { bubbles: !0, composed: !0 });
            },
          },
          ud: !0,
        };
      e.default = n.default.component(c);
    },
    U1kS: function (t, e, i) {
      var a =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        };
      Object.defineProperty(e, "__esModule", { value: !0 });
      var r = a(i("9ZMt"));
      e.default = {
        methods: {
          _t_hn_(t) {
            r.default.navigate({
              url: t.currentTarget.dataset.href,
              type: "navigateTo",
            });
          },
        },
      };
    },
  })
);
