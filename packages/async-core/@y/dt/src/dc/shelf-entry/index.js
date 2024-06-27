"use strict";
var r = require("~/r");
r(
  "XlbT",
  Object.assign({}, require("~/v.js").modules, {
    XlbT: function (e, t, a) {
      a.r(t);
      var i = a("a1Mm"),
        r = "#ffffff",
        n = "transparent",
        p = 16,
        l = {
          props: {
            componentData: { type: Object, default: () => ({}) },
            tableCode: { type: String, default: "" },
          },
          data: () => ({
            cards: [],
            templateType: 0,
            templateMode: 0,
            cardMargin: 10,
            cardType: "",
            borderRadiusType: 2,
            imageAlignType: 3,
            textAlignType: 1,
            typeFiveLeft: [0, 1],
            typeFiveRight: [2, 3, 4],
            bgColor: r,
            cardBgColor: n,
            pageMargin: p,
          }),
          computed: {
            sliceCards() {
              var { templateType: e = 0, cards: t } = this;
              return 1 === e
                ? t.slice(0, 2)
                : 2 === e
                ? t.slice(1, 3)
                : 0 === e || 3 === e
                ? t.slice(0, 3)
                : 4 === e
                ? t.slice(0, 4)
                : [];
            },
            entryCardRowGap() {
              return "row-gap: " + this.cardMargin + "px;";
            },
            entryCardColumnGap() {
              return "column-gap: " + this.cardMargin + "px;";
            },
            multipleALine() {
              var { templateType: e } = this;
              return [1, 3, 4].includes(e);
            },
            iconPosition() {
              var { templateType: e } = this;
              return [3, 4].includes(e) ? "center" : "right";
            },
            tableCodeStyle() {
              var { cardMargin: e = 0 } = this;
              return e < 10
                ? "margin-bottom: " + (e - 10) + "px;"
                : "padding-bottom: " + (e - 10) + "px;";
            },
          },
          created() {
            this.initData();
          },
          methods: {
            initData() {
              var e,
                t,
                a,
                { componentData: l } = this,
                {
                  cardMargin: o,
                  bgColor: s = r,
                  cardBgColor: d = n,
                  pageMargin: c = p,
                } = l;
              (this.templateType = null != (e = l.templateType) ? e : 0),
                (this.templateMode = null != (t = l.templateMode) ? t : 0),
                (this.cards = null != (a = l.items) ? a : []),
                this.cards.forEach((e) => {
                  (e.icon = Object(i.a)(e.icon, "!320x0.jpg")),
                    (e.img = Object(i.a)(e.img, "!750x0.jpg"));
                }),
                (this.cardMargin = "number" == typeof o ? o : 10),
                (this.cardType = l.cardType || ""),
                (this.borderRadiusType = l.borderRadiusType || 2),
                (this.imageAlignType = l.imageAlignType || 3),
                (this.textAlignType = l.textAlignType || 1),
                (this.bgColor = s),
                (this.cardBgColor = d),
                (this.pageMargin = c);
            },
            handleNavigation(e) {
              this.$emit("jumpToLink", e);
            },
            handleTableCodeClick() {
              this.$emit("jumpToLink", {
                linkType: "scan_order_way",
                linkUrl: "pages-retail/dashboard/index?from=home-shelf&s=2",
              });
            },
          },
          ud: !0,
        },
        o = a("9ZMt");
      t.default = o.default.component(l);
    },
  })
);
