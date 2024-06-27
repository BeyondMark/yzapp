"use strict";
var r = require("~/r");
r(
  "hvHD",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    {
      hvHD: function (e, t, i) {
        i.r(t);
        var a = i("YeA1"),
          l = i("mK7v"),
          o = Object(a.a)(),
          r = {
            name: "StoreItemCom",
            props: {
              item: { type: Object, default: () => ({}) },
              storeConfig: { type: Object, default: () => ({}) },
              location: { type: Object, default: () => ({}) },
            },
            methods: {
              handleCallPhone() {
                this.$emit("phoneClick", this.item.phone);
              },
              handleNavigate() {
                o.logger &&
                  o.logger.log({
                    et: "click",
                    ei: "click_navigation",
                    en: "点击导航",
                    pt: "physicalStoreList",
                  }),
                  this.$emit("guideClick", this.item);
              },
              handleNameClick() {
                var { linkedKdtId: e, storeKdtId: t } = this.item,
                  i = Object(l.a)(this.item);
                this.$emit("nameClick", i ? e : t);
              },
            },
            ud: !0,
          },
          s = i("9ZMt");
        t.default = s.default.component(r);
      },
    }
  )
);
