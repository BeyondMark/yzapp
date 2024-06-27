"use strict";
var r = require("~/r");
r(
  "GEU4",
  Object.assign(
    {},
    require("~/packages/shop/c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      GEU4: function (t, a, s) {
        s.r(a);
        var e = s("7/pW"),
          h = s("YeA1"),
          i = s("ksi7"),
          u = s("GFa9");
        Object(e.a)({
          data: { clickThumbFlag: !0 },
          attached() {
            Object(h.b)(this, [
              "noteData",
              "noteId",
              "noteType",
              "design",
              "noteGoodIds",
              "thumbsStatus",
              "salesman",
              "shop",
            ]);
          },
          ready() {},
          methods: {
            thumbClick() {
              if (!1 !== this.data.clickThumbFlag) {
                this.setYZData({ clickThumbFlag: !1 });
                var t = {
                  thumbsStatus: this.data.thumbsStatus ? 0 : 1,
                  shopNoteId: this.data.noteId,
                };
                Object(i.f)(t)
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
              u.a.navigate({ url: t.detail.url });
            },
            onSalesmanShareCard() {
              try {
                this.selectComponent("#share-goods").drawSalemanCard();
              } catch (t) {}
            },
          },
        });
      },
    }
  )
);
