"use strict";
var r = require("~/r");
r(
  "OMp9",
  Object.assign({}, require("~/v.js").modules, {
    OMp9: function (t, e, i) {
      i.r(e);
      var o = i("Fcif"),
        s = i("YeA1"),
        n = i("MLLI"),
        h = i("2wjL"),
        c = i("VmHG"),
        a = {
          name: "fix-bottom-block",
          data() {
            return Object(o.a)(
              {},
              Object(c.d)(this, [
                "goodsBaseInfo",
                "goodsPriceInfo",
                "showBottomBtns",
                "btnsOpt",
                "imConfig",
                "fixBottomOpt",
                "soldOutRecOpt",
                "multiStoreRecOpt",
                "umpTipsOpt",
                "themeVars",
              ]),
              { isPhone13: !1, showUmpTips: !1 }
            );
          },
          watch: {
            soldOutRecOpt: {
              handler() {
                this.store &&
                  this.store.setIsNoStock &&
                  this.store.setIsNoStock();
              },
              immediate: !0,
            },
            umpTipsOpt: {
              handler(t) {
                this.showUmpTips = t.show;
              },
            },
          },
          created() {
            (this.ctx.data.imConfig = this.imConfig),
              (this.ctx.data.bottomBtnClicked = !1),
              this.init();
          },
          methods: {
            init() {
              this.checkIsPhone13(),
                this.store.updateQuery(this.$getPageQuery()),
                this.store.getEduInfo();
            },
            checkIsPhone13() {
              Object(n.a)()
                .then((t) => {
                  var { model: e = "" } = t,
                    i = e.replace(/\s/g, "").toLowerCase();
                  return /<iphone14/.test(i);
                })
                .catch(() => !1)
                .then((t) => {
                  this.isPhone13 = t;
                });
            },
            onMiniBtnClick(t) {
              this.store.onMiniPointBtnClick(t),
                this.store.onUmpMiniBtnClick(t),
                this.ctx.event.emit("mini-btn:click", t);
            },
            onBigBtnClick(t) {
              this.store.handleBigBtnClick(t);
            },
            onContactBack(t) {
              void 0 === t && (t = {}),
                t.path && Object(s.a)().dmc.navigate(h.a.add(t.path, t.query));
            },
            umpClick() {
              this.ctx.event.emit("promotion:show");
            },
          },
        },
        r = i("9ZMt");
      e.default = r.default.component(a);
    },
  })
);
