"use strict";
var r = require("~/r");
r(
  "9MQu",
  Object.assign(
    {},
    require("~/packages/shop/c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "9MQu": function (t, a, s) {
        s.r(a);
        var e = s("7/pW"),
          u = s("YeA1"),
          h = s("ksi7"),
          i = s("GFa9");
        Object(e.a)({
          data: { clickThumbFlag: !0, featureComponents: [] },
          attached() {
            Object(u.b)(this, [
              "noteData",
              "noteId",
              "noteType",
              "design",
              "noteGoodIds",
              "thumbsStatus",
              "salesman",
            ]),
              this.ctx.watch("featureComponents", (t) => {
                t.length && this.setYZData({ featureComponents: t });
              });
          },
          ready() {},
          methods: {
            thumbClick() {
              if (!1 !== this.data.clickThumbFlag) {
                this.setYZData({ clickThumbFlag: !1 });
                var t = {
                    thumbsStatus: this.data.thumbsStatus ? 0 : 1,
                    shopNoteId: this.data.noteId,
                  },
                  { thumbsUpCount: a } = this.data.noteData;
                this.data.thumbsStatus
                  ? this.setYZData({ "noteData.thumbsUpCount": a - 1 })
                  : this.setYZData({ "noteData.thumbsUpCount": a + 1 }),
                  (this.ctx.data.noteData = this.data.noteData),
                  Object(h.f)(t)
                    .then((t) => {
                      if ((this.setYZData({ clickThumbFlag: !0 }), t)) {
                        var a = this.data.thumbsStatus ? 0 : 1;
                        this.setYZData({ thumbsStatus: a });
                      }
                    })
                    .catch((t) => {
                      this.setYZData({ clickThumbFlag: !0 });
                    });
              }
            },
            showcaseHandleGoodsBuy(t) {
              i.a.navigate({ url: t.detail.url });
            },
          },
        });
      },
    }
  )
);
