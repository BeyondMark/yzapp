"use strict";
var r = require("~/r");
r(
  "U0sZ",
  Object.assign({}, require("~/v.js").modules, {
    U0sZ: function (e, t, s) {
      s.r(t);
      var i = s("Fcif"),
        r = {
          name: "t-area",
          props: {
            title: String,
            loading: Boolean,
            showToolbar: Boolean,
            cancelButtonText: { type: String, default: "取消" },
            confirmButtonText: { type: String, default: "确认" },
            visibleItemCount: { type: Number, default: 6 },
            itemHeight: { type: Number, default: 44 },
            value: String,
            areaList: { type: Object, default: () => {} },
            columnsNum: { type: null, default: 3 },
            columnsPlaceholder: Array,
          },
          logicData: () => ({
            columns: [{ values: [] }, { values: [] }, { values: [] }],
          }),
          computed: {
            displayColumns() {
              return this.columns.slice(0, +this.columnsNum);
            },
            typeToColumnsPlaceholder() {
              var { columnsPlaceholder: e } = this;
              return {
                province: e[0] || "",
                city: e[1] || "",
                county: e[2] || "",
              };
            },
          },
          watch: {
            areaList() {
              this.setValues();
            },
            value(e) {
              (this.code = e), this.setValues();
            },
          },
          mounted() {
            setTimeout(() => {
              (this.code = this.value), this.setValues();
            }, 200);
          },
          methods: {
            getPicker() {
              return this.$refs.picker;
            },
            onCancel(e) {
              this.emit("cancel", e);
            },
            onConfirm(e) {
              var { index: t } = e,
                { value: s } = e;
              (s = this.parseValues(s)),
                this.emit("confirm", { value: s, index: t });
            },
            emit(e, t) {
              (t.values = t.value), delete t.value, this.$emit(e, t);
            },
            parseValues(e) {
              var { columnsPlaceholder: t } = this;
              return e.map((e, s) =>
                !e || (e.code && e.name !== t[s])
                  ? e
                  : Object(i.a)({}, e, { code: "", name: "" })
              );
            },
            onChange(e) {
              var { index: t, picker: s, value: i } = e;
              (this.code = i[t].code),
                this.setValues().then(() => {
                  this.$emit("change", {
                    picker: s,
                    values: this.parseValues(s.getValues()),
                    index: t,
                  });
                });
            },
            getConfig(e) {
              var { areaList: t } = this;
              return (t && t[e + "_list"]) || {};
            },
            getList(e, t) {
              if ("province" !== e && !t) return [];
              var { typeToColumnsPlaceholder: s } = this,
                i = this.getConfig(e),
                r = Object.keys(i).map((e) => ({ code: e, name: i[e] }));
              if (
                (null != t &&
                  ("9" === t[0] && "city" === e && (t = "9"),
                  (r = r.filter((e) => 0 === e.code.indexOf(t)))),
                s[e] && r.length)
              ) {
                var n =
                  "province" === e
                    ? ""
                    : "city" === e
                    ? "000000".slice(2, 4)
                    : "000000".slice(4, 6);
                r.unshift({ code: "" + t + n, name: s[e] });
              }
              return r;
            },
            getIndex(e, t) {
              var s = "province" === e ? 2 : "city" === e ? 4 : 6,
                i = this.getList(e, t.slice(0, s - 2));
              "9" === t[0] && "province" === e && (s = 1), (t = t.slice(0, s));
              for (var r = 0; r < i.length; r++)
                if (i[r].code.slice(0, s) === t) return r;
              return 0;
            },
            setValues() {
              var e = this.getPicker();
              if (e) {
                var t = this.code || this.getDefaultCode(),
                  s = this.getList("province"),
                  i = this.getList("city", t.slice(0, 2)),
                  r = [],
                  n = [],
                  { columnsNum: a } = this;
                return (
                  a >= 1 &&
                    (r.push(e.setColumnValues(0, s, !1)),
                    n.push(this.getIndex("province", t))),
                  a >= 2 &&
                    (r.push(e.setColumnValues(1, i, !1)),
                    n.push(this.getIndex("city", t)),
                    i.length && "00" === t.slice(2, 4) && ([{ code: t }] = i)),
                  3 === a &&
                    (r.push(
                      e.setColumnValues(
                        2,
                        this.getList("county", t.slice(0, 4)),
                        !1
                      )
                    ),
                    n.push(this.getIndex("county", t))),
                  Promise.all(r)
                    .catch(() => {})
                    .then(() => e.setIndexes(n))
                    .catch(() => {})
                );
              }
            },
            getDefaultCode() {
              var { columnsPlaceholder: e } = this;
              if (e.length) return "000000";
              var t = Object.keys(this.getConfig("county"));
              if (t[0]) return t[0];
              var s = Object.keys(this.getConfig("city"));
              return s[0] ? s[0] : "";
            },
            getValues() {
              var e = this.getPicker();
              return e
                ? this.parseValues(e.getValues().filter((e) => !!e))
                : [];
            },
            getDetail() {
              var e = this.getValues(),
                t = {
                  code: "",
                  country: "",
                  province: "",
                  city: "",
                  county: "",
                };
              if (!e.length) return t;
              var s = e.map((e) => e.name);
              return (
                (t.code = e[e.length - 1].code),
                "9" === t.code[0]
                  ? ((t.country = s[1] || ""), (t.province = s[2] || ""))
                  : ((t.province = s[0] || ""),
                    (t.city = s[1] || ""),
                    (t.county = s[2] || "")),
                t
              );
            },
            reset(e) {
              return (this.code = e || ""), this.setValues();
            },
          },
          ud: !0,
        },
        n = s("9ZMt");
      t.default = n.default.component(r);
    },
  })
);
