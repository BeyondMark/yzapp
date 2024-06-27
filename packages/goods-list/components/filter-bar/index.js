"use strict";
var r = require("~/r");
r(
  "RAJs",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    RAJs: function (e, t, r) {
      r.r(t);
      var i = r("Fcif"),
        s = r("rqVN");
      Object(s.b)({
        externalClasses: ["theme-class", "theme-color", "theme-border-color"],
        properties: {
          filters: { type: Object, value: [] },
          defaultFilter: { type: String, value: 0 },
          color: { type: String, value: "#ff4e4d" },
          currentLayoutType: { type: String, value: "two" },
          isShowLayoutChange: { type: Boolean, value: !1 },
        },
        data: { commonFilters: [], currentFilter: 0 },
        attached() {
          this.setYZData({
            commonFilters: this.data.filters.map((e) => Object(i.a)({}, e)),
            currentFilter: parseInt(this.data.defaultFilter, 10),
          });
        },
        methods: {
          handleClick(e) {
            var {
              currentTarget: {
                dataset: { index: t },
              },
            } = e;
            t = parseInt(t, 10);
            var { filters: r, currentFilter: s } = this.data,
              a = r.slice(),
              l = Object(i.a)({}, r[t]);
            (s === t && "sort" !== l.type) ||
              ("sort" === l.type &&
                (s !== t
                  ? this.resetSortDirection(l, t)
                  : "descend" === l.sortDirection
                  ? ((l.sortDirection = "ascend"),
                    a.splice(t, 1, l),
                    this.setYZData({ filters: a }))
                  : ((l.sortDirection = "descend"),
                    a.splice(t, 1, l),
                    this.setYZData({ filters: a }))),
              this.setYZData({ currentFilter: t }),
              this.triggerEvent("change", { filter: l, index: t }));
          },
          handleChangeLayoutType() {
            this.triggerEvent("handleChangeLayoutType");
          },
          resetSortDirection(e, t) {
            var r = this.data.filters.slice();
            (e.sortDirection = e.defaultDirection || "ascend"),
              r.splice(t, 1, e),
              this.setYZData({ filters: r });
          },
        },
      });
    },
  })
);
