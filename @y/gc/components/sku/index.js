"use strict";
var r = require("~/r");
r(
  "4sli",
  Object.assign({}, require("~/v.js").modules, {
    "4sli": function (e, t, o) {
      o.r(t);
      var i = {
          props: {
            show: Boolean,
            sku: { type: Object, default: () => ({}) },
            goods: { type: Object, default: () => ({}) },
            safeAreaInsetBottom: { type: Boolean, default: !0 },
            kdtId: Number,
            initialSku: { type: Object, default: () => ({}) },
            pointsConfig: { type: Object, default: () => ({}) },
            messageConfig: { type: Object, default: () => ({}) },
            multiSkuDecision: { type: Object, default: () => ({}) },
            skuConfig: { type: Object, default: () => ({}) },
            event: { type: Object, default: () => ({}) },
            extraData: { type: Object, default: () => ({}) },
            customStyle: { type: String, default: "" },
            zIndex: { type: Number, default: 100 },
            baseConfig: { type: Object, default: () => ({}) },
            popCloseClear: { type: Boolean, default: !0 },
            themeTag: { type: Object, default: () => ({ plain: !1 }) },
            enterIsSleep: { type: Boolean, default: !0 },
          },
          data: () => ({ loading: !0, showRowBlock: !1, showRowSkeleton: !0 }),
          methods: {
            onInit() {
              this.loading = !1;
            },
            onClose() {
              var e, t;
              this.popCloseClear &&
                (null == (e = this.$refs) ||
                  null == (t = e.skuContainer) ||
                  t.clearSkuGlobalData());
              this.$emit("close");
            },
            onPreview(e) {
              this.$emit("preview", e);
            },
            onNumChange(e) {
              this.$emit("num-change", e);
            },
            onSubmit(e) {
              this.$emit("submit", e);
            },
            onCustom(e) {
              this.$emit("custom", e);
            },
            onOverLimit(e) {
              this.$emit("over-limit", e);
            },
            onSelected(e) {
              this.$emit("selected", e);
            },
            onUserAuthorizeShow(e) {
              this.$emit("user-authorize-show", e);
            },
            afterPopEnter() {
              (this.showRowBlock = !0),
                (this.showRowSkeleton = !1),
                this.$emit("opened");
            },
            validate(e) {
              var t, o;
              return null == (t = this.$refs) ||
                null == (o = t.skuContainer) ||
                null == o.validate
                ? void 0
                : o.validate(e);
            },
          },
          ud: !0,
        },
        l = o("9ZMt");
      t.default = l.default.component(i);
    },
  })
);
