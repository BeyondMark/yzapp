"use strict";
var r = require("~/r");
r(
  "8/+5",
  Object.assign({}, require("~/v.js").modules, {
    "8/+5": function (e, s, t) {
      t.r(s);
      var d = t("Fcif"),
        a = t("9ZMt"),
        i = t("YeA1"),
        o = t("VmHG"),
        r = getApp(),
        c = {
          props: {
            cloudConfig: {
              type: Object,
              default: () => ({
                addressTipsBackgroundColor: "1",
                addressTipsPadding: "2",
              }),
            },
            defaultAddressBlockVisible: { type: Boolean, default: !0 },
          },
          data() {
            var e;
            return Object(d.a)(
              {
                visible: null == (e = this.defaultAddressBlockVisible) || e,
                isShowRetailDeliveryAddress: !1,
                isShowForcePoiSelectAddress: !1,
                dataLoaded: !1,
                address: {},
              },
              Object(o.d)(this, [
                "expressType",
                "styleStr",
                "showAddressTab",
                "moduleLoadMaps",
                "showSelfFetch",
                "showContact",
                "showIdcard",
                "showPeriodBuy",
              ])
            );
          },
          created() {
            Object(i.b)(this, [
              "isShowRetailDeliveryAddress",
              "retailHouseNumberRequired",
              "isShowForcePoiSelectAddress",
              "isHouseNumberRequired",
              "dataLoaded",
              "address",
            ]),
              Object(i.b)(this, {
                tradeAddressVisible: (e) => {
                  this.visible = e;
                },
                forcePoiSelect: (e) => {
                  var s,
                    t,
                    d,
                    a,
                    i,
                    o,
                    c = r.getShopInfoSync() || {};
                  (a = null == (s = c.shopMetaInfo) ? void 0 : s.shop_role),
                    (i = null == (t = c.shopMetaInfo) ? void 0 : t.shop_topic),
                    (o = null == (d = c.shopMetaInfo) ? void 0 : d.shop_type),
                    (this.ctx.data.isShowForcePoiSelectAddress =
                      e &&
                      this.checkWscSingleStore({
                        shopRole: a,
                        shopTopic: i,
                        shopType: o,
                      }));
                },
                extra: (e) => {
                  var { HOUSE_NUMBER_REQUIRED: s } = e || {},
                    { forcePoiSelect: t } = this.ctx.data;
                  this.ctx.data.isHouseNumberRequired = t && !!+s;
                },
              }),
              (this.setDb = this.ctx.lambdas.setDb),
              this.addressTabCreated(),
              this.mapActions(),
              Object(i.d)(this, {
                "trade-buy-core:validate-effect": (e) => {
                  var { type: s } = e;
                  "validateAddress:toEdit" === s && this.onAddressCardEdit();
                },
              });
          },
          mounted() {
            this.ctx.inited(),
              a.default.setGlobal(
                "addressBlockDialogRef",
                this.$refs.addressBlockDialog
              );
          },
          methods: {
            checkWscSingleStore(e) {
              var { shopRole: s, shopTopic: t, shopType: d } = e || {};
              return 0 === s && 0 === t && [0, 2, 9].includes(d);
            },
            addressTabCreated() {
              (this.isWatchMapHandled = !1),
                Object(i.b)(this, ["isScanCodeBuy", "expressType"], {
                  callback: () => {
                    if (!this.isWatchMapHandled) {
                      var { isScanCodeBuy: e, expressType: s } = this.ctx.data;
                      e &&
                        "string" == typeof s &&
                        ((this.isWatchMapHandled = !0),
                        "self-fetch" !== s && this.onSwitchTab(1));
                    }
                  },
                });
            },
            mapActions() {
              Object(o.b)(this, [
                "onSwitchTab",
                "setNav",
                "changeModuleLoadStatus",
                "pickDefaultSelfFetch",
                "onAddressCardEdit",
              ]);
            },
          },
        };
      s.default = a.default.component(c);
    },
  })
);
