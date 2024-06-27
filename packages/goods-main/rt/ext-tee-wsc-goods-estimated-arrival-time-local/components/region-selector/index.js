"use strict";
var r = require("~/r");
r(
  "sF7g",
  Object.assign({}, require("~/v.js").modules, {
    sF7g: function (e, t, a) {
      a.r(t);
      var r = a("Fcif"),
        s = [],
        i = {
          props: { areaList: Array },
          data: () => ({
            pid: "region-selector-" + Math.random(),
            selectedArea: [],
            activeTabIndex: 0,
          }),
          computed: {
            tabList() {
              var { selectedArea: e, nextTabIndex: t } = this;
              return e.map((e, a) => ({
                key: a,
                title: e.name,
                disabled: !e.code && a !== t,
              }));
            },
            nextTabIndex() {
              var { selectedArea: e } = this;
              return e.findIndex((e) => {
                var { code: t } = e;
                return !t;
              });
            },
            activeTabList() {
              var { areaList: e, selectedArea: t, activeTabIndex: a } = this,
                r = e[a];
              if (0 === a) return r;
              var s = a - 1,
                { code: i } = t[s];
              return r.filter((e) => {
                var { parent: t } = e;
                return t === i;
              });
            },
            activeTabSelectedItem() {
              var { selectedArea: e, activeTabIndex: t } = this;
              return e[t] || { code: "0", name: "", parent: "" };
            },
          },
          mounted() {
            var e = ["省份/地区", "城市", "区/县", "街道/乡镇"];
            (s = Array.from(this.areaList, (t, a) => ({
              code: "",
              name: e[a] || "",
              parent: "",
            }))),
              (this.selectedArea = [...s]);
          },
          methods: {
            onChangeTab(e) {
              this.activeTabIndex = e.name;
            },
            onSelectListItem(e) {
              var { tabList: t, activeTabIndex: a, nextTabIndex: i } = this;
              if (
                (this.selectedArea.splice(a, 1, Object(r.a)({}, e)), a !== i)
              ) {
                var n = [
                  ...this.selectedArea.slice(0, a + 1),
                  ...s.slice(a + 1),
                ];
                this.selectedArea = n;
              }
              a < t.length - 1 && this.onChangeTab({ name: a + 1 }),
                this.$emit("selected", this.selectedArea);
            },
            updateView() {
              var e, t;
              null == (e = this.$refs) || null == (t = e.tabs) || t.resize();
            },
          },
          ud: !0,
        },
        n = a("9ZMt");
      t.default = n.default.component(i);
    },
  })
);
