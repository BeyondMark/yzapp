"use strict";
var r = require("~/r");
r(
  "8HB0",
  Object.assign({}, require("~/v.js").modules, {
    "8HB0": function (s, e, t) {
      t.r(e);
      var i = t("Fcif"),
        h = t("YeA1"),
        r = t("VmHG"),
        o = {
          data() {
            return Object(i.a)(
              {
                active: 0,
                themeColors: {},
                selfFetchInitData: {},
                kdtId: "",
                goods: {},
                display: {},
                order: {},
                contact: {},
                selfFetch: {},
                distribution: {},
                showAddressTab: !1,
                isShowExpress: !1,
                isShowSelfFetch: !1,
                isShowExpressWayList: !1,
              },
              Object(r.d)(this, [
                "isShowAddressDeliveryPopup",
                "bookKey",
                "expressWaySelected",
                "expressPostageItems",
                "currentExpressWay",
                "isOnlySuportSelfFetch",
                "isFirstOpen",
                "prepareIsReady",
              ])
            );
          },
          computed: {
            tabList: () => [
              { id: 0, value: "express", text: "商家配送" },
              { id: 1, value: "self-fetch", text: "到店自提" },
            ],
            postageMessage() {
              var { postage: s = "" } = this.expressWaySelected || {};
              return s;
            },
          },
          watch: {
            expressPostageItems(s) {
              (this.isShowExpress || this.showAddressTab) &&
                (this.isShowExpressWayList = 2 === (s || []).length);
            },
            isShowAddressDeliveryPopup(s) {
              if (s && this.showAddressTab) {
                var { active: e } = this;
                (this.active = 1 ^ e),
                  setTimeout(() => {
                    this.active = e;
                  }, 16);
              }
            },
          },
          created() {
            Object(r.b)(this, [
              "handleChangeAddressListPopupShow",
              "handleExpressWayChange",
              "handleChangeExpressTab",
            ]),
              Object(h.b)(this, [
                "themeColors",
                "goods",
                "kdtId",
                "contact",
                "order",
              ]),
              Object(h.c)(this, ["display", "selfFetch", "address"], {
                callback: (s) => {
                  var e,
                    { display: t, selfFetch: i, address: h } = s,
                    { activeTab: r } = h || {},
                    { showExpressTab: o } = t || {},
                    { isAllow: a } = i || {};
                  (this.active = r || 0),
                    this.prepareIsReady &&
                      ((this.isShowExpress = o && !a),
                      (this.isShowSelfFetch = !o && a),
                      (this.showAddressTab = o && a)),
                    (this.selfFetchInitData = {
                      selfFetch: i,
                      shop: { kdtId: this.kdtId },
                      goods: this.goods,
                      crossStoreFetch:
                        this.display.openCrossStoreSelfFetchSwitch,
                      bookKey: this.bookKey,
                      buyerMsg:
                        (null == (e = this.order) ? void 0 : e.buyerMsg) || "",
                      contact: this.contact,
                      route: {},
                      query: {},
                    });
                },
              }),
              Object(h.b)(this, {
                distribution(s) {
                  if (!this.prepareIsReady) {
                    var {
                      supportExpress: e,
                      supportLocalDelivery: t,
                      supportSelfFetch: i,
                    } = s || {};
                    (this.showAddressTab = i && (e || t)),
                      (this.isShowExpress = (e || t) && !i),
                      (this.isShowSelfFetch = !e && i);
                  }
                },
              });
          },
          methods: {
            onPopupClose() {
              this.handleChangeAddressListPopupShow(!1);
            },
            onTabChange(s) {
              var e = s.name;
              this.active = e;
            },
            onExpressWayChange(s) {
              this.ctx.process.invoke("selectExpressType", s),
                this.handleChangeExpressTab(0),
                this.onPopupClose();
            },
          },
        },
        a = t("9ZMt");
      e.default = a.default.component(o);
    },
  })
);
