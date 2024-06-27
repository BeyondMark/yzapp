"use strict";
var r = require("~/r");
r(
  "PjTC",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    PjTC: function (t, e, a) {
      a.r(e);
      var o = a("7/pW"),
        s = a("VmHG"),
        r = a("9mFz");
      Object(o.a)({
        data: {
          protocolIndex: 10001,
          noAutoAuth: !1,
          showShopStatus: !0,
          showServiceDue: !1,
          isRetailShelf: !1,
          themeTag: {},
          themeColors: {},
          tagStyle: "",
        },
        properties: {},
        observers: {},
        attached() {
          Object(r.b)(this, ["themeTag", "themeColors"]),
            Object(s.d)(this, [
              "isEmpty",
              "showSearchBar",
              "orderBy",
              "hasLoaded",
              "activeName",
              "groupData",
              "isAllGroupShow",
              "navBarHeight",
              "goodsOpt",
              "stickyHeight",
            ]),
            this.handleTagStyle(),
            Object(s.b)(this, ["setVal", "fetchProductList", "handleRootTap"]);
        },
        methods: {
          showAllGroup() {
            var { isAllGroupShow: t } = this.data;
            this.setVal({ isAllGroupShow: !t }),
              this.selectComponent(".js-dropdown-item").toggle(!t);
          },
          handleTabChange(t) {
            this.setVal({ page: 1, activeName: t.detail.name }),
              setTimeout(() => {
                wx.pageScrollTo({ scrollTop: 0, duration: 0 }),
                  this.fetchProductList();
              }, 0),
              this.data.isAllGroupShow && this.showAllGroup();
          },
          handleClickTag(t) {
            var { key: e } = t.currentTarget.dataset;
            this.setVal({ page: 1, activeName: e }),
              setTimeout(() => {
                wx.pageScrollTo({ scrollTop: 0, duration: 0 }),
                  this.fetchProductList();
              }, 0),
              this.showAllGroup();
          },
          handleTagStyle() {
            var { themeTag: t, themeColors: e } = this.data,
              a = t.plain ? e["tag-text"] : "transparent",
              o = t.plain ? "#DCDEE0" : "transparent",
              s = t.plain ? "#fff" : e["neutral-bg-main"] || "#f7f8fa",
              r = t.plain ? "#fff" : e["tag-bg"] || "#f7f8fa";
            this.setYZData({
              tagStyle:
                "--tag-active-border: " +
                a +
                "; --tag-border: " +
                o +
                "; --tag-bg: " +
                s +
                "; --tag-active-bg: " +
                r,
            });
          },
          onCloseDropdown() {
            var { isAllGroupShow: t } = this.data;
            t && this.setVal("isAllGroupShow", !t);
          },
        },
      });
    },
  })
);
