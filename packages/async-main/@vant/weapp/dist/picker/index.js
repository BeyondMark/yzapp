"use strict";
var r = require("~/r");
r(
  "s55C",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    s55C: function (e, t, s) {
      s.r(t);
      var r = s("py6f"),
        n = s("vtdp");
      Object(r.a)({
        classes: ["active-class", "toolbar-class", "column-class"],
        props: Object.assign(Object.assign({}, n.a), {
          valueKey: { type: String, value: "text" },
          toolbarPosition: { type: String, value: "top" },
          defaultIndex: { type: Number, value: 0 },
          columns: {
            type: Array,
            value: [],
            observer(e) {
              void 0 === e && (e = []),
                (this.simple = e.length && !e[0].values),
                Array.isArray(this.children) &&
                  this.children.length &&
                  this.setColumns().catch(() => {});
            },
          },
        }),
        beforeCreate() {
          Object.defineProperty(this, "children", {
            get: () => this.selectAllComponents(".van-picker__column") || [],
          });
        },
        methods: {
          noop() {},
          setColumns() {
            var { data: e } = this,
              t = (this.simple ? [{ values: e.columns }] : e.columns).map(
                (e, t) => this.setColumnValues(t, e.values)
              );
            return Promise.all(t);
          },
          emit(e) {
            var { type: t } = e.currentTarget.dataset;
            this.simple
              ? this.$emit(t, {
                  value: this.getColumnValue(0),
                  index: this.getColumnIndex(0),
                })
              : this.$emit(t, {
                  value: this.getValues(),
                  index: this.getIndexes(),
                });
          },
          onChange(e) {
            this.simple
              ? this.$emit("change", {
                  picker: this,
                  value: this.getColumnValue(0),
                  index: this.getColumnIndex(0),
                })
              : this.$emit("change", {
                  picker: this,
                  value: this.getValues(),
                  index: e.currentTarget.dataset.index,
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
              ? Promise.reject(new Error("setColumnValue: 对应列不存在"))
              : s.setValue(t);
          },
          getColumnIndex(e) {
            return (this.getColumn(e) || {}).data.currentIndex;
          },
          setColumnIndex(e, t) {
            var s = this.getColumn(e);
            return null == s
              ? Promise.reject(new Error("setColumnIndex: 对应列不存在"))
              : s.setIndex(t);
          },
          getColumnValues(e) {
            return (this.children[e] || {}).data.options;
          },
          setColumnValues(e, t, s) {
            void 0 === s && (s = !0);
            var r = this.children[e];
            return null == r
              ? Promise.reject(new Error("setColumnValues: 对应列不存在"))
              : JSON.stringify(r.data.options) === JSON.stringify(t)
              ? Promise.resolve()
              : r.set({ options: t }).then(() => {
                  s && r.setIndex(0);
                });
          },
          getValues() {
            return this.children.map((e) => e.getValue());
          },
          setValues(e) {
            var t = e.map((e, t) => this.setColumnValue(t, e));
            return Promise.all(t);
          },
          getIndexes() {
            return this.children.map((e) => e.data.currentIndex);
          },
          setIndexes(e) {
            var t = e.map((e, t) => this.setColumnIndex(t, e));
            return Promise.all(t);
          },
        },
      });
    },
  })
);
