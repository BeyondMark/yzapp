"use strict";
var r = require("~/r");
r(
  "u37k",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    u37k: function (e, t, i) {
      i.r(t);
      var o,
        a,
        s,
        m,
        r,
        c,
        h = i("Fcif"),
        l = i("m6kV"),
        n = i("wSeO"),
        v = i("BZkp"),
        g = i("Zqpg"),
        u = i("8Ggg"),
        d = Object(l.a)("image-preview-swipe-item"),
        p = Object(u.c)(),
        b = {
          name: "image-preview-swipe-item",
          options: { virtualHost: !0 },
          mixins: [Object(g.a)({ relation: Object(n.b)("swipe") })],
          props: {
            customStyle: { type: Object, default: () => ({}) },
            innerShow: Boolean,
            src: String,
            item: { type: Object, default: () => ({}) },
            active: Boolean,
            rootWidth: Number,
            rootHeight: Number,
            minZoom: { type: [Number, String], default: 1 / 3 },
            maxZoom: { type: [Number, String], default: 3 },
            disableZoom: Boolean,
            showMenuByLongpress: Boolean,
          },
          logicData: () => ({
            size: 0,
            offset: 0,
            vertical: !1,
            state: {
              scale: 1,
              moveX: 0,
              moveY: 0,
              moving: !1,
              zooming: !1,
              imageRatio: 0,
              displayWidth: 0,
              displayHeight: 0,
            },
          }),
          computed: {
            classes() {
              var { vertical: e } = this;
              return {
                root: "" + d("swipe-item"),
                image: "" + d("image", { vertical: e }),
              };
            },
            videoStyle: () => ({ width: "100%" }),
            itemStyle() {
              var { size: e, vertical: t, customStyle: i } = this,
                o = Object(h.a)({}, i);
              return (
                e &&
                  ((o.visibility = "visible"),
                  (o[t ? "height" : "width"] = e + "px")),
                this.offset &&
                  (o.transform =
                    "translate" + (t ? "Y" : "X") + "(" + this.offset + "px)"),
                o
              );
            },
            imageStyle() {
              var { state: e, size: t, rootWidth: i, rootHeight: o } = this,
                {
                  scale: a,
                  moveX: s,
                  moveY: m,
                  moving: r,
                  zooming: c,
                  imageRatio: h,
                } = e,
                l = {
                  transitionDuration: c || r ? "0s" : ".3s",
                  width: (t || i || 0) + "px",
                  height: (h * t || o || 0) + "px",
                };
              if (1 !== a) {
                var n = s / a,
                  g = m / a;
                l.transform =
                  "scale(" +
                  a +
                  ", " +
                  a +
                  ") translate(" +
                  n +
                  "px, " +
                  g +
                  "px)";
              }
              return Object(v.k)(l);
            },
            maxMoveX() {
              var { state: e, rootWidth: t, rootHeight: i, vertical: o } = this;
              if (e.imageRatio) {
                var a = o ? i / e.imageRatio : t;
                return Math.max(0, (e.scale * a - t) / 2);
              }
              return 0;
            },
            maxMoveY() {
              var { state: e, rootWidth: t, rootHeight: i, vertical: o } = this;
              if (e.imageRatio) {
                var a = o ? i : t * e.imageRatio;
                return Math.max(0, (e.scale * a - i) / 2);
              }
              return 0;
            },
          },
          watch: {
            active(e) {
              e || this.resetScale();
            },
          },
          mounted() {
            this.hasMounted = !0;
          },
          methods: {
            setScale(e) {
              var { state: t, minZoom: i, maxZoom: o } = this;
              (t.scale = Object(u.b)(e, +i, +o)),
                this.$emit("scale", { scale: t.scale });
            },
            toggleScale() {
              var { state: e } = this,
                t = e.scale > 1 ? 1 : 2;
              this.setScale(t), (e.moveX = 0), (e.moveY = 0);
            },
            onTouchStart(e) {
              var { touches: t } = e,
                { offsetX: i } = p,
                { state: r } = this;
              p.start(e),
                (o = r.moveX),
                (a = r.moveY),
                (c = new Date()),
                (r.moving = 1 === t.length && 1 !== r.scale),
                (r.zooming = 2 === t.length && !i),
                r.zooming && ((s = r.scale), (m = Object(u.a)(e.touches)));
            },
            onTouchMove(e) {
              var { touches: t } = e,
                { state: i, disableZoom: r } = this;
              if ((p.move(e), i.moving || i.zooming, i.moving)) {
                var { deltaX: c, deltaY: h } = p,
                  { maxMoveX: l, maxMoveY: n } = this,
                  v = c + o,
                  g = h + a;
                (i.moveX = Object(u.b)(v, -l, l)),
                  (i.moveY = Object(u.b)(g, -n, n));
              }
              if (i.zooming && 2 === t.length && !r) {
                var d = Object(u.a)(t),
                  b = (s * d) / m;
                this.setScale(b);
              }
            },
            checkTap() {
              var { offsetX: e, offsetY: t } = p,
                i = new Date() - c;
              e < 10 &&
                t < 10 &&
                i < 250 &&
                (r
                  ? (clearTimeout(r),
                    (r = null),
                    this.disableZoom || this.toggleScale())
                  : (r = setTimeout(() => {
                      this.$emit("tapEnd"), (r = null);
                    }, 250)));
            },
            resetScale() {
              this.setScale(1), (this.state.moveX = 0), (this.state.moveY = 0);
            },
            onTouchEnd(e) {
              if (!this.item || "video" !== this.item.type) {
                var { state: t } = this;
                if (
                  (t.moving || t.zooming) &&
                  (!0,
                  t.moving && o === t.moveX && a === t.moveY && !1,
                  !e.touches.length)
                ) {
                  var { maxMoveX: i, maxMoveY: m } = this;
                  t.zooming &&
                    ((t.moveX = Object(u.b)(t.moveX, -i, i)),
                    (t.moveY = Object(u.b)(t.moveY, -m, m)),
                    (t.zooming = !1)),
                    (t.moving = !1),
                    (o = 0),
                    (a = 0),
                    (s = 1),
                    t.scale < 1 && this.resetScale();
                }
                this.checkTap(), p.reset();
              }
            },
            onLoad(e) {
              var { width: t, height: i } = e.detail,
                { state: o } = this;
              (o.imageRatio = i / t),
                this.$emit("onLoad", { width: t, height: i });
            },
            click(e) {
              e && e.stopPropagation && e.stopPropagation(),
                this.$emit("click");
            },
          },
          ud: !0,
        },
        f = i("9ZMt");
      t.default = f.default.component(b);
    },
  })
);
