"use strict";
var r = require("~/r");
r(
  "Ib5u",
  Object.assign(
    {},
    require("../../../../c.js").modules,
    require("~/v.js").modules,
    {
      Ib5u: function (e, t, s) {
        s.r(t);
        var i = s("Fcif"),
          l = s("St5l"),
          n = s("BZkp"),
          u = s("Zqpg"),
          r = {
            name: "t-picker",
            mixins: [
              Object(u.a)({
                externalClasses: [
                  "custom-class",
                  "active-class",
                  "toolbar-class",
                  "column-class",
                ],
              }),
            ],
            props: Object(i.a)({}, l.a, {
              valueKey: { type: String, default: "text" },
              toolbarPosition: { type: String, default: "top" },
              defaultIndex: { type: Number, default: 0 },
              columns: { type: Array, default: () => [] },
            }),
            logicData: () => ({ needReset: !0 }),
            computed: {
              simple() {
                var e = this.columns || [];
                return e.length && !e[0].values;
              },
              realColumns() {
                return this.simple ? [{ values: this.columns }] : this.columns;
              },
              styles() {
                return {
                  mask:
                    "\n          background-size: 100% " +
                    (this.itemHeight * this.visibleItemCount -
                      this.itemHeight) /
                      2 +
                    "px\n        ",
                };
              },
              publicInstance() {
                return Object(n.i)(this, [
                  "$id",
                  "getValues",
                  "setValues",
                  "getIndexes",
                  "setIndexes",
                  "getColumnValue",
                  "getColumnIndex",
                  "setColumnIndex",
                  "getColumnValues",
                  "setColumnValues",
                ]);
              },
            },
            watch: {
              columns() {
                this.$nextTick(() => {
                  Array.isArray(this.children) &&
                    this.children.length &&
                    this.setColumns().catch(() => {});
                });
              },
            },
            created() {
              (this.children = []),
                (this.initedCol = !1),
                (this.safeCallBackList = []),
                this.$emit(
                  "link",
                  Object(i.a)({}, this.publicInstance, {
                    setNeedReset: this.setNeedReset,
                  })
                );
            },
            methods: {
              noop() {},
              onLink(e) {
                this.children.push(e),
                  this.children.length >= this.realColumns.length &&
                    ((this.initedCol = !0),
                    this.safeCallBackList.forEach((e) => {
                      var { index: t, fn: s, args: i } = e;
                      this.children[t][s](...i);
                    }),
                    (this.safeCallBackList = []));
              },
              onUnLink(e) {
                this.children = this.children.filter((t) => t.$id !== e.$id);
              },
              setColumns() {
                var e = (
                  this.simple ? [{ values: this.columns }] : this.columns
                ).map((e, t) => this.setColumnValues(t, e.values));
                return Promise.all(e);
              },
              emit(e) {
                this.simple
                  ? this.$emit(e, {
                      value: this.getColumnValue(0),
                      index: this.getColumnIndex(0),
                    })
                  : this.$emit(e, {
                      value: this.getValues(),
                      index: this.getIndexes(),
                    });
              },
              safeColCall(e, t, s) {
                this.initedCol
                  ? this.children[e][t](...s)
                  : this.safeCallBackList.push({ index: e, fn: t, args: s });
              },
              onChange(e) {
                this.simple
                  ? this.$emit("change", {
                      picker: this.publicInstance,
                      value: this.getColumnValue(0),
                      index: this.getColumnIndex(0),
                    })
                  : this.$emit("change", {
                      picker: this.publicInstance,
                      value: this.getValues(),
                      index: e,
                    });
              },
              getColumn(e) {
                return this.children[e];
              },
              getColumnValue(e) {
                var t = this.getColumn(e);
                return t && t.getValue();
              },
              setColumnValue(e, t) {
                var s = this.getColumn(e);
                return null == s
                  ? (this.safeColCall(e, "setValue", [t]), Promise.resolve())
                  : s.setValue(t);
              },
              getColumnIndex(e) {
                return (this.getColumn(e) || {}).getIndex();
              },
              setColumnIndex(e, t) {
                var s = this.getColumn(e);
                return null == s
                  ? Promise.reject(new Error("setColumnIndex: 对应列不存在"))
                  : s.setIndex(t);
              },
              getColumnValues(e) {
                return (this.children[e] || {}).getOptions();
              },
              setColumnValues(e, t, s) {
                void 0 === s && (s = this.needReset);
                var i = this.children[e];
                return null == i
                  ? Promise.reject(new Error("setColumnValues: 对应列不存在"))
                  : (JSON.stringify(i.getOptions()) === JSON.stringify(t) ||
                      (i.setOptions(t),
                      this.$nextTick(() => {
                        s && i.setIndex(0);
                      })),
                    Promise.resolve());
              },
              getValues() {
                return this.children.map((e) => e.getValue());
              },
              setValues(e) {
                var t = e.map((e, t) => this.setColumnValue(t, e));
                return Promise.all(t);
              },
              getIndexes() {
                return this.children.map((e) => e.getIndex());
              },
              setIndexes(e) {
                var t = e.map((e, t) => this.setColumnIndex(t, e));
                return Promise.all(t);
              },
              setNeedReset(e) {
                this.needReset = e;
              },
            },
            ud: !0,
          },
          a = s("9ZMt");
        t.default = a.default.component(r);
      },
    }
  )
);
