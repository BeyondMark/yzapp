"use strict";
var r = require("~/r");
r(
  "/qWr",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    "/qWr": function (e, s, r) {
      r.r(s);
      var t = r("Fcif"),
        o = (r("2bgu"), r("YeA1")),
        d = r("VmHG"),
        i = {
          data() {
            return Object(t.a)(
              {
                isXhsWebview: !1,
                expressType: "",
                expressWayWords: "",
                grouponModel: {},
                themeColors: {},
              },
              Object(d.d)(this, [
                "postage",
                "hasSomePostageItems",
                "hasMorePostageItems",
                "expressWaySelected",
                "formattedPostageItems",
                "isRetailShop",
                "showExpressWayPopup",
                "delivery",
                "showDeliveryScope",
                "currentAddress",
                "addressEditable",
                "showGrouponHeader",
                "showPoiPrompt",
                "hasAddress",
                "maskedTel",
                "addressArea",
                "addressDetail",
                "showAddressCard",
                "showAddressList",
                "addressListIsDirty",
                "showLocalDeliveryTime",
                "addressVisible",
              ])
            );
          },
          created() {
            this.ctx.process.define(
              "setExpressWayWords",
              this.setExpressWayWords.bind(this)
            ),
              Object(o.b)(this, ["expressType", "grouponModel", "themeColors"]),
              this.initEnvData(),
              this.mapActions(),
              this.initEvent();
          },
          methods: {
            initEnvData() {},
            mapActions() {
              Object(d.b)(this, [
                "onExpressWayCellClick",
                "onExpressWayClose",
                "onSelectExpressWay",
                "onPlatformAddressSave",
                "onAddressCardClick",
                "onAddressListClose",
                "onAddressCardEdit",
                "onAddressVisibleChange",
              ]);
            },
            onToggleGrouponChecked(e) {
              this.ctx.event.emit("setGrouponIsChecked", e);
            },
            initEvent() {
              Object(o.d)(this, {
                onDeliveryAddressCardClick: () => {
                  this.onAddressCardClick();
                },
              });
            },
            setExpressWayWords(e) {
              this.expressWayWords = e;
            },
            handleShowDeliveryScopePopup() {
              this.ctx.event.emit("showDeliveryScopePopup");
            },
          },
        },
        a = r("9ZMt");
      s.default = a.default.component(i);
    },
  })
);
