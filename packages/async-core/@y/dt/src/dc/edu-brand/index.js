"use strict";
var r = require("~/r");
r(
  "u3E9",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      u3E9: function (e, t, r) {
        r.r(t);
        var o = r("9ZMt"),
          a = r("tuFO"),
          n = r.n(a),
          i = r("FTR+"),
          s = r("mA5E"),
          l = r("EqB2"),
          u = r("2Dtx"),
          c = r("q4om"),
          { useTpx: d } = o.default.style,
          h = {
            mixins: [Object(l.a)({ optDesc: c.a })],
            props: {
              themeColors: { type: Object, default: () => ({}) },
              shopInfo: { type: Object, default: () => ({}) },
            },
            data: () => ({ basicInfo: {} }),
            computed: {
              show() {
                return !this.shopInfo.isEduChainStore;
              },
              containerStyle() {
                var {
                  backgroundColor: e,
                  pageMargin: t,
                  borderRadiusType: r,
                } = this.opt || {};
                return Object(u.a)({
                  background: e,
                  "margin-left": d(+t),
                  "margin-right": d(+t),
                  "border-radius": 2 == +r ? d(8) : 0,
                });
              },
              titleStyle() {
                var { titleColor: e, textStyleType: t } = this.opt || {};
                return Object(u.a)({
                  color: e,
                  "font-weight": 2 == +t ? "bold" : "normal",
                });
              },
              nameStyle() {
                var { brandNameColor: e, textStyleType: t } = this.opt || {};
                return Object(u.a)({
                  color: e,
                  "font-weight": 2 == +t ? "bold" : "normal",
                });
              },
              ageTagStyle() {
                var e = this.themeColors.general || "";
                return Object(u.a)({
                  "background-color": Object(i.a)(e, 0.1),
                  color: e,
                });
              },
              descStyle() {
                var { descriptionColor: e } = this.opt || {};
                return Object(u.a)({ color: e });
              },
              logo() {
                return this.basicInfo.logo;
              },
              name() {
                return this.basicInfo.name;
              },
              age() {
                var e = +this.basicInfo.foundedYear;
                return e ? new Date().getFullYear() - e + 1 : 0;
              },
              ageText() {
                return "成立" + this.age + "年";
              },
              description() {
                return this.basicInfo.description;
              },
              logoOptions() {
                return { src: this.logo, fill: "contain" };
              },
            },
            mounted() {
              this.getBasicInfo();
            },
            methods: {
              getBasicInfo() {
                s.a.getBasicInfo().then((e) => {
                  this.basicInfo = e || {};
                });
              },
              jumpToBrandPage() {
                var { kdtId: e } = this.basicInfo,
                  t = n()("/wscshop/showcase/edu/brand?kdt_id=" + e, "h5", e);
                o.default.navigate({ type: "navigateTo", url: t });
              },
            },
            ud: !0,
          };
        t.default = o.default.component(h);
      },
    }
  )
);
