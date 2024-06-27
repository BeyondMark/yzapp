"use strict";
var r = require("~/r");
r(
  "sP0u",
  Object.assign({}, require("~/v.js").modules, {
    "0lBy": function (e, t, o) {
      var n =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, o, n) {
                void 0 === n && (n = o),
                  Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function () {
                      return t[o];
                    },
                  });
              }
            : function (e, t, o, n) {
                void 0 === n && (n = o), (e[n] = t[o]);
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var o in e)
              "default" === o ||
                Object.prototype.hasOwnProperty.call(t, o) ||
                n(t, e, o);
          };
      (t.__esModule = !0), i(o("4wEQ"), t), i(o("m8h5"), t), i(o("2bBs"), t);
    },
    "2bBs": function (e, t, o) {
      t.__esModule = !0;
    },
    "4wEQ": function (e, t, o) {
      t.__esModule = !0;
    },
    C5Gi: function (e, t, o) {
      var n =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, o, n) {
                void 0 === n && (n = o),
                  Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function () {
                      return t[o];
                    },
                  });
              }
            : function (e, t, o, n) {
                void 0 === n && (n = o), (e[n] = t[o]);
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var o in e)
              "default" === o ||
                Object.prototype.hasOwnProperty.call(t, o) ||
                n(t, e, o);
          };
      (t.__esModule = !0), i(o("wH4f"), t), i(o("skK2"), t);
    },
    E2EE: function (e, t, o) {
      var n =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, o, n) {
                void 0 === n && (n = o),
                  Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function () {
                      return t[o];
                    },
                  });
              }
            : function (e, t, o, n) {
                void 0 === n && (n = o), (e[n] = t[o]);
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var o in e)
              "default" === o ||
                Object.prototype.hasOwnProperty.call(t, o) ||
                n(t, e, o);
          };
      (t.__esModule = !0), i(o("FdfI"), t), i(o("C5Gi"), t);
    },
    FdfI: function (e, t, o) {
      var n =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, o, n) {
                void 0 === n && (n = o),
                  Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function () {
                      return t[o];
                    },
                  });
              }
            : function (e, t, o, n) {
                void 0 === n && (n = o), (e[n] = t[o]);
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var o in e)
              "default" === o ||
                Object.prototype.hasOwnProperty.call(t, o) ||
                n(t, e, o);
          };
      (t.__esModule = !0), i(o("0lBy"), t), i(o("qt7L"), t), i(o("kUIa"), t);
    },
    kUIa: function (e, t, o) {
      t.__esModule = !0;
    },
    m8h5: function (e, t, o) {
      t.__esModule = !0;
    },
    qt7L: function (e, t, o) {
      t.__esModule = !0;
    },
    sP0u: function (e, t, o) {
      o.r(t);
      var n = o("E2EE"),
        i = {
          props: {
            themeColors: { type: Object, default: () => ({}) },
            grouponModel: { type: Object, default: () => n.initGrouponModel },
          },
          data: () => ({ showPopup: !1 }),
          computed: {
            grouponTextConfig() {
              return this.grouponModel.textConfig || {};
            },
            showGrouponHeader() {
              return this.grouponModel.showGrouponHeader;
            },
          },
          methods: {
            onClick() {
              this.showPopup = !0;
            },
            onClose() {
              this.showPopup = !1;
            },
          },
          ud: !0,
        },
        r = o("9ZMt");
      t.default = r.default.component(i);
    },
    skK2: function (e, t, o) {
      (t.__esModule = !0),
        (t.CashBackTypeId = t.CashBackType = void 0),
        (function (e) {
          e[(e.Store = 2)] = "Store";
        })(t.CashBackType || (t.CashBackType = {})),
        (function (e) {
          (e[(e.Tuan = 2)] = "Tuan"), (e[(e.CashBack = 203)] = "CashBack");
        })(t.CashBackTypeId || (t.CashBackTypeId = {}));
    },
    wH4f: function (e, t, o) {
      var n, i, r;
      (t.__esModule = !0),
        (t.initGrouponModel =
          t.ExpressType =
          t.grouponMemberReceiveConfig =
          t.grouponOptionalReceiveConfig =
          t.GrouponReceive =
          t.initGroupData =
            void 0),
        (t.initGroupData = {
          isGroupon: !1,
          isHeader: !1,
          isChecked: !1,
          receiveState: 1,
          groupHeader: {},
        }),
        (function (e) {
          (e[(e.ForbidReceive = 0)] = "ForbidReceive"),
            (e[(e.OptionalReceive = 1)] = "OptionalReceive"),
            (e[(e.ForceReceive = 2)] = "ForceReceive");
        })((r = t.GrouponReceive || (t.GrouponReceive = {}))),
        (t.grouponOptionalReceiveConfig =
          (((n = {})[r.OptionalReceive] = {
            headerTitle:
              "若团员选择团长代收，团员商品将发货给你（为确保及时收取包裹，团长的收货信息将会展示给团员）",
            popContent:
              "团员可选择包裹由团长代收，可免除团员邮费。团长收货后会分发给团员，团员也可向团长领取。\n\n为保证团员可及时联系团长领取包裹，团长的手机号将会展示给团员。",
          }),
          (n[r.ForceReceive] = {
            headerTitle:
              "所有团员购买的商品都由团长代收（为确保及时收取包裹，团长的收货信息将会展示给团员）",
            popContent:
              "该团由团长代收包裹，可免除团员邮费。团长收货后会分发给团员，团员也可向团长领取。\n\n为保证团员可及时联系团长领取包裹，团长的手机号将会展示给团员。",
          }),
          n)),
        (t.grouponMemberReceiveConfig =
          (((i = {})[r.OptionalReceive] = {
            headerTitle:
              "团长代收包裹（为确保团长及时分发包裹，手机号会展示给团长）",
            popContent:
              "团员可选择包裹由团长代收，可免除团员邮费。团长收货后会分发给团员，团员也可向团长领取。\n\n为保证团长可及时联系团员分发包裹，团员的手机号将会展示给团长。",
          }),
          (i[r.ForceReceive] = {
            headerTitle:
              "该团由团长代收包裹（为确保团长及时分发包裹，手机号会展示给团长）",
            popContent:
              "该团由团长代收包裹，可免除团员邮费。团长收货后会分发给团员，团员也可向团长领取。\n\n为保证团长可及时联系团员分发包裹，团员的手机号将会展示给团长。",
          }),
          i)),
        (function (e) {
          e.EXPRESS = "express";
        })(t.ExpressType || (t.ExpressType = {})),
        (t.initGrouponModel = {
          textConfig: { headerTitle: "", popContent: "" },
          isGroupon: !1,
          expressType: "",
          showGroupHeader: !1,
          showGrouponMember: !1,
          receiveByGroupHeader: !1,
          grouponOptionalReceive: !1,
          isChecked: !1,
          headerInfo: {},
          receiveState: r.ForbidReceive,
          isHeader: !1,
          originGrouponData: {},
        });
    },
  })
);
