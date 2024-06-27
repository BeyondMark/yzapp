"use strict";
var r = require("~/r");
r(
  "TLXg",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    TLXg: function (t, e, s) {
      s.r(e);
      var i = s("py6f"),
        a = s("6MKc"),
        r = s("6S0u");
      Object(i.a)({
        classes: ["active-class"],
        props: {
          valueKey: String,
          className: String,
          itemHeight: Number,
          visibleItemCount: Number,
          initialOptions: { type: Array, value: [] },
          defaultIndex: {
            type: Number,
            value: 0,
            observer(t) {
              this.setIndex(t);
            },
          },
        },
        data: {
          startY: 0,
          offset: 0,
          duration: 0,
          startOffset: 0,
          options: [],
          currentIndex: 0,
        },
        created() {
          var { defaultIndex: t, initialOptions: e } = this.data;
          this.set({ currentIndex: t, options: e }).then(() => {
            this.setIndex(t);
          });
        },
        methods: {
          getCount() {
            return this.data.options.length;
          },
          onTouchStart(t) {
            this.setData({
              startY: t.touches[0].clientY,
              startOffset: this.data.offset,
              duration: 0,
            });
          },
          onTouchMove(t) {
            var { data: e } = this,
              s = t.touches[0].clientY - e.startY;
            this.setData({
              offset: Object(a.l)(
                e.startOffset + s,
                -this.getCount() * e.itemHeight,
                e.itemHeight
              ),
            });
          },
          onTouchEnd() {
            var { data: t } = this;
            if (t.offset !== t.startOffset) {
              this.setData({ duration: 200 });
              var e = Object(a.l)(
                Math.round(-t.offset / t.itemHeight),
                0,
                this.getCount() - 1
              );
              this.setIndex(e, !0);
            }
          },
          onClickItem(t) {
            var { index: e } = t.currentTarget.dataset;
            this.setIndex(e, !0);
          },
          adjustIndex(t) {
            for (
              var { data: e } = this,
                s = this.getCount(),
                i = (t = Object(a.l)(t, 0, s));
              i < s;
              i++
            )
              if (!this.isDisabled(e.options[i])) return i;
            for (var r = t - 1; r >= 0; r--)
              if (!this.isDisabled(e.options[r])) return r;
          },
          isDisabled: (t) => Object(r.f)(t) && t.disabled,
          getOptionText(t) {
            var { data: e } = this;
            return Object(r.f)(t) && e.valueKey in t ? t[e.valueKey] : t;
          },
          setIndex(t, e) {
            var { data: s } = this,
              i = -(t = this.adjustIndex(t) || 0) * s.itemHeight;
            return t !== s.currentIndex
              ? this.set({ offset: i, currentIndex: t }).then(() => {
                  e && this.$emit("change", t);
                })
              : this.set({ offset: i });
          },
          setValue(t) {
            for (var { options: e } = this.data, s = 0; s < e.length; s++)
              if (this.getOptionText(e[s]) === t) return this.setIndex(s);
            return Promise.resolve();
          },
          getValue() {
            var { data: t } = this;
            return t.options[t.currentIndex];
          },
        },
      });
    },
  })
);
