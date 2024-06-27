"use strict";
var r = require("~/r");
r(
  "DqOM",
  Object.assign({}, require("~/v.js").modules, {
    "0lBy": function (e, t, o) {
      var i =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, o, i) {
                void 0 === i && (i = o),
                  Object.defineProperty(e, i, {
                    enumerable: !0,
                    get: function () {
                      return t[o];
                    },
                  });
              }
            : function (e, t, o, i) {
                void 0 === i && (i = o), (e[i] = t[o]);
              }),
        n =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var o in e)
              "default" === o ||
                Object.prototype.hasOwnProperty.call(t, o) ||
                i(t, e, o);
          };
      (t.__esModule = !0), n(o("4wEQ"), t), n(o("m8h5"), t), n(o("2bBs"), t);
    },
    "2bBs": function (e, t, o) {
      t.__esModule = !0;
    },
    "4wEQ": function (e, t, o) {
      t.__esModule = !0;
    },
    C5Gi: function (e, t, o) {
      var i =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, o, i) {
                void 0 === i && (i = o),
                  Object.defineProperty(e, i, {
                    enumerable: !0,
                    get: function () {
                      return t[o];
                    },
                  });
              }
            : function (e, t, o, i) {
                void 0 === i && (i = o), (e[i] = t[o]);
              }),
        n =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var o in e)
              "default" === o ||
                Object.prototype.hasOwnProperty.call(t, o) ||
                i(t, e, o);
          };
      (t.__esModule = !0), n(o("wH4f"), t), n(o("skK2"), t);
    },
    DqOM: function (e, t, o) {
      o.r(t);
      var i = o("E2EE"),
        n = o("9ZMt"),
        r = {
          props: {
            themeColors: { type: Object, default: () => ({}) },
            grouponModel: { type: Object, default: () => i.initGrouponModel },
          },
          data: () => ({
            popVisible: !1,
            isWeapp: "weapp" === n.default.getEnv(),
          }),
          computed: {
            textConfig() {
              return this.grouponModel.memberTextConfig || {};
            },
            grouponOptionalReceive() {
              return this.grouponModel.grouponOptionalReceive;
            },
            checkedColor() {
              return this.themeColors.general;
            },
            grouponHeader() {
              return this.grouponModel.headerInfo;
            },
          },
          methods: {
            onClickMemberTip() {
              var e = !this.grouponModel.isChecked;
              this.$emit("setGrouponIsChecked", e);
            },
            showPop() {
              this.popVisible = !0;
            },
            hidePop() {
              this.popVisible = !1;
            },
          },
          ud: !0,
        };
      t.default = n.default.component(r);
    },
    E2EE: function (e, t, o) {
      var i =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, o, i) {
                void 0 === i && (i = o),
                  Object.defineProperty(e, i, {
                    enumerable: !0,
                    get: function () {
                      return t[o];
                    },
                  });
              }
            : function (e, t, o, i) {
                void 0 === i && (i = o), (e[i] = t[o]);
              }),
        n =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var o in e)
              "default" === o ||
                Object.prototype.hasOwnProperty.call(t, o) ||
                i(t, e, o);
          };
      (t.__esModule = !0), n(o("FdfI"), t), n(o("C5Gi"), t);
    },
    FdfI: function (e, t, o) {
      var i =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, o, i) {
                void 0 === i && (i = o),
                  Object.defineProperty(e, i, {
                    enumerable: !0,
                    get: function () {
                      return t[o];
                    },
                  });
              }
            : function (e, t, o, i) {
                void 0 === i && (i = o), (e[i] = t[o]);
              }),
        n =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var o in e)
              "default" === o ||
                Object.prototype.hasOwnProperty.call(t, o) ||
                i(t, e, o);
          };
      (t.__esModule = !0), n(o("0lBy"), t), n(o("qt7L"), t), n(o("kUIa"), t);
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
      var i, n, r;
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
          (((i = {})[r.OptionalReceive] = {
            headerTitle:
              "若团员选择团长代收，团员商品将发货给你（为确保及时收取包裹，团长的收货信息将会展示给团员）",
            popContent:
              "团员可选择包裹由团长代收，可免除团员邮费。团长收货后会分发给团员，团员也可向团长领取。\n\n为保证团员可及时联系团长领取包裹，团长的手机号将会展示给团员。",
          }),
          (i[r.ForceReceive] = {
            headerTitle:
              "所有团员购买的商品都由团长代收（为确保及时收取包裹，团长的收货信息将会展示给团员）",
            popContent:
              "该团由团长代收包裹，可免除团员邮费。团长收货后会分发给团员，团员也可向团长领取。\n\n为保证团员可及时联系团长领取包裹，团长的手机号将会展示给团员。",
          }),
          i)),
        (t.grouponMemberReceiveConfig =
          (((n = {})[r.OptionalReceive] = {
            headerTitle:
              "团长代收包裹（为确保团长及时分发包裹，手机号会展示给团长）",
            popContent:
              "团员可选择包裹由团长代收，可免除团员邮费。团长收货后会分发给团员，团员也可向团长领取。\n\n为保证团长可及时联系团员分发包裹，团员的手机号将会展示给团长。",
          }),
          (n[r.ForceReceive] = {
            headerTitle:
              "该团由团长代收包裹（为确保团长及时分发包裹，手机号会展示给团长）",
            popContent:
              "该团由团长代收包裹，可免除团员邮费。团长收货后会分发给团员，团员也可向团长领取。\n\n为保证团长可及时联系团员分发包裹，团员的手机号将会展示给团长。",
          }),
          n)),
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
