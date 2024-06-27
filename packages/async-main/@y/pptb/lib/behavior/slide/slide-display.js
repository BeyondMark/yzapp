"use strict";
var r = require("~/r");
r(
  "Nwgo",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      Nwgo: function (t, e, i) {
        i.r(e);
        var s = i("9ZMt"),
          h = i("AGZf"),
          r = i("E6qs"),
          a = i("1rIA"),
          d = {
            props: {
              status: String,
              behaviorLoading: Boolean,
              behaviorData: Object,
              scale: Number,
              size: Object,
            },
            data: () => ({ width: a.i }),
            computed: {
              displayWidth() {
                return s.default.style.useTpx(this.width || a.i);
              },
              displayHeight() {
                return s.default.style.useTpx(
                  this.width / (this.size.width / this.size.height || a.n) ||
                    a.h
                );
              },
              bigWidth() {
                return s.default.style.useTpx(this.size.width);
              },
              bigHeight() {
                return s.default.style.useTpx(this.size.height);
              },
            },
            methods: {
              queryRect() {
                Object(r.j)(
                  "behavior-display",
                  (t) => {
                    var {
                      left: e,
                      right: i,
                      top: s,
                      bottom: h,
                      width: r,
                      height: a,
                    } = t;
                    (this.width = r),
                      this.$emit("display-query", {
                        left: e,
                        right: i,
                        top: s,
                        bottom: h,
                        width: r,
                        height: a,
                      });
                  },
                  350,
                  this
                );
              },
              onLoad(t) {
                this.$emit("big-image-loaded", t);
              },
              onError() {
                h.a.fail("图片加载失败，请稍后重试!");
              },
              refreshBehaviorData() {
                this.$emit("refresh-behavior-data");
              },
            },
            ud: !0,
          };
        e.default = s.default.component(d);
      },
    }
  )
);
