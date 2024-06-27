"use strict";
var r = require("~/r");
r(
  "/mg8",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      "/mg8": function (t, e, i) {
        i.r(e);
        var s = {
            name: "DanmakuBaseItem",
            mixins: [i("S0oj").a],
            props: {
              useContentSlot: { type: Boolean, default: !1 },
              offsetWidth: { type: Number, default: 0 },
            },
            computed: {
              selectorId() {
                return "danmaku_item_" + this.bulletKey;
              },
            },
            mounted() {
              var t = this.$watch(
                "isPlaying",
                () => {
                  this.update()
                    .then(() => {
                      t(), (t = null);
                    })
                    .catch(() => {});
                },
                { immediate: !0 }
              );
            },
            methods: {
              update() {
                return this.$_isUpdating
                  ? Promise.reject(0)
                  : ((this.$_isUpdating = !0),
                    this.getRect()
                      .then((t) => {
                        var { width: e } = t;
                        return (
                          this.updateBullet({
                            key: this.bulletKey,
                            bullet: { width: e },
                          }),
                          (this.$_isUpdating = !1),
                          !0
                        );
                      })
                      .catch((t) => {
                        throw ((this.$_isUpdating = !1), t);
                      }));
              },
              getRect() {
                return new Promise((t, e) => {
                  setTimeout(() => {
                    this.createSelectorQuery()
                      .select("#" + this.selectorId)
                      .boundingClientRect((i) => {
                        var s = null == i ? void 0 : i.width;
                        s ? t(s) : e(0);
                      })
                      .exec();
                  }, 140);
                }).then((t) => ({ width: t + this.offsetWidth }));
              },
            },
            ud: !0,
          },
          r = i("9ZMt");
        e.default = r.default.component(s);
      },
    }
  )
);
