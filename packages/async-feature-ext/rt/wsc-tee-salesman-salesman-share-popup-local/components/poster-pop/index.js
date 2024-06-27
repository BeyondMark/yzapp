"use strict";
var r = require("~/r");
r(
  "opgb",
  Object.assign(
    {},
    require("../../../../c.js").modules,
    require("~/v.js").modules,
    {
      opgb: function (e, s, t) {
        t.r(s);
        var a = t("Dj8g"),
          o = t("AGZf"),
          r = {
            name: "PosterPop",
            data: () => ({ show: !1, posterImg: "" }),
            methods: {
              showPosterImg(e) {
                e && ((this.posterImg = e), (this.show = !0));
              },
              closePop() {
                (this.show = !1), this.$emit("open-assistant");
              },
              clickSaveImage() {
                o.a.loading("保存中"),
                  Object(a.e)(this.posterImg)
                    .then(() => {
                      o.a.clear(),
                        Object(o.a)({
                          type: "success",
                          message: "保存成功",
                          onClose: () => this.$emit("open-assistant"),
                        });
                    })
                    .catch((e) => {
                      o.a.clear(), o.a.fail(Object(a.c)(e));
                    });
              },
            },
            ud: !0,
          },
          i = t("9ZMt");
        s.default = i.default.component(r);
      },
    }
  )
);
