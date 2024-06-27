"use strict";
var r = require("~/r");
r(
  "k0sZ",
  Object.assign(
    {},
    require("../../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      k0sZ: function (e, i, t) {
        t.r(i);
        var s = t("eDYq"),
          r = {
            props: { opt: Object },
            data: () => ({ deliverTimeId: "", skuExtraList: [] }),
            watch: {
              opt: {
                handler() {
                  this.setInitData();
                },
                immediate: !0,
              },
            },
            methods: {
              setInitData() {
                var { deliveryTimeList: e = [], period: i = 0 } =
                  this.opt.periodBuy || {};
                (this.skuExtraList = e.map((e) => ({
                  id: e,
                  name: s.a[i][e],
                }))),
                  this.setPluginsData();
              },
              getValidteMessage() {
                return this.opt.periodBuy && "" === this.deliverTimeId
                  ? { periodBuy: "请选择配送方式" }
                  : {};
              },
              setPluginsData() {
                var e;
                if (null != (e = this.opt) && e.periodBuy) {
                  var i =
                      "" !== this.deliverTimeId
                        ? { deliverTimeId: this.deliverTimeId }
                        : null,
                    t = [{ text: "周期购" }, ...(this.opt.tags || [])];
                  this.$emit("change", {
                    name: "periodBuy",
                    priority: 30,
                    pluginsResult: { periodBuy: i },
                    invalidMessage: this.getValidteMessage(),
                    view: {
                      tags: t,
                      hideStock: !0,
                      stepperTitle: "每期配送数量",
                    },
                  });
                }
              },
              onSelect(e) {
                var i = this.deliverTimeId === e ? "" : e;
                (this.deliverTimeId = i), this.setPluginsData();
              },
            },
            ud: !0,
          },
          a = t("9ZMt");
        i.default = a.default.component(r);
      },
    }
  )
);
