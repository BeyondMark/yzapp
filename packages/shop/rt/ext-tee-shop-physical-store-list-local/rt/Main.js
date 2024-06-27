"use strict";
var r = require("~/r");
r(
  "w92P",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    w92P: function (t, e, i) {
      i.r(e);
      var s = i("NW04"),
        o = {
          name: "ShopStoreList",
          data: () => ({
            storeList: null,
            storeConfig: {},
            location: {},
            theme: {},
            onSearching: !1,
            unwatchStoreList: null,
            unwatchStoreConfig: null,
            unwatchLocation: null,
          }),
          created() {
            this.initCtx(),
              Object(s.b)(this.ctx.data.kdtId).then((t) => {
                this.theme = t;
              });
          },
          destroyed() {
            this.unwatchStoreList(),
              this.unwatchLocation(),
              this.unwatchStoreConfig(),
              this.ctx.event.remove("search-focus"),
              this.ctx.event.remove("search-cancel");
          },
          methods: {
            initCtx() {
              (this.unwatchStoreList = this.ctx.watch("storeList", (t) => {
                this.storeList = t;
              })),
                (this.unwatchStoreConfig = this.ctx.watch(
                  "storeConfig",
                  (t) => {
                    this.storeConfig = t;
                  }
                )),
                (this.unwatchLocation = this.ctx.watch("location", (t) => {
                  this.location = t;
                })),
                this.ctx.event.listen("search-focus", (t) => {
                  t ||
                    ((this.storeListCache = this.storeList),
                    (this.onSearching = !0),
                    (this.storeList = null));
                }),
                this.ctx.event.listen("search-cancel", () => {
                  (this.storeList = this.storeListCache),
                    (this.onSearching = !1);
                });
            },
            handleNameClick(t) {
              this.ctx.dmc.navigate("ShopInfo", {
                no_footer: 1,
                no_btn: 1,
                kdt_id: t,
              });
            },
          },
          ud: !0,
        },
        h = i("9ZMt");
      e.default = h.default.component(o);
    },
  })
);
