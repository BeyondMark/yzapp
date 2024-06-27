"use strict";
var r = require("~/r");
r(
  "6NdW",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      "6NdW": function (t, e, i) {
        i.r(e);
        var r = i("eijD"),
          a = i("Fcif"),
          o = i("9ZMt"),
          n = i("2wjL"),
          s = i("EqB2"),
          d = i("/gF2"),
          c = i("o6rh"),
          l = i("POlu"),
          u = 2,
          P = {
            id: null,
            name: "",
            pointsNum: 0,
            costPoints: 10,
            receivedCollectionPointPic: "",
            unreceivedCollectionPointPic: "",
            imgType: l.a.Img,
          },
          h = {
            cardBgColor: "#ffffff",
            bgColor: "transparent",
            borderRadius: 8,
            pageMargin: 16,
          },
          m = {
            mixins: [Object(s.a)({ optDesc: d.a })],
            props: {
              kdtId: { type: String },
              themeColors: { type: Object, default: () => ({}) },
            },
            data: () => ({
              mode: u,
              show: !0,
              styleSetting: {},
              rewardPointsData: Object(a.a)({}, P),
              ImgType: l.a,
            }),
            computed: {
              description() {
                var { costPoints: t, pointsNum: e } = this.rewardPointsData;
                return e >= t
                  ? "已集满" + e + "点，可兑换"
                  : "再集" + (t - e) + "点即可获得好礼";
              },
              percentage() {
                var { costPoints: t = 10, pointsNum: e = 0 } =
                  this.rewardPointsData;
                return Math.min((e / t) * 100, 100);
              },
              rewardItemArray() {
                var { pointsNum: t } = this.rewardPointsData;
                return Array.from(
                  { length: this.rewardPointsData.costPoints },
                  (e, i) => t > i
                );
              },
              themeColor() {
                return this.themeColors.general;
              },
            },
            watch: {
              opt: {
                handler(t) {
                  var { mode: e = u, styleSetting: i = {} } = t;
                  (this.mode = e),
                    (this.styleSetting = Object(a.a)({}, h, i)),
                    this.initRewardData();
                },
                immediate: !0,
              },
            },
            methods: {
              initRewardData() {
                var t = this;
                return Object(r.a)(function* () {
                  try {
                    var { rewardPointsList: e } = t.opt;
                    if (!e.length) return void t.hiddenRewardPoints();
                    var { id: i } = e[0] || {};
                    if (i === t.rewardPointsData.id) return;
                    var { pointsNum: r = -1, activityModel: a } =
                      yield c.a.getRewardPointsInfo({ activityId: i });
                    if (-1 === r && !a) return void t.hiddenRewardPoints();
                    var {
                      name: o,
                      minCostPointsPresentRule: { costPoints: n = 10 } = {},
                      receivedCollectionPointPic: s,
                      unreceivedCollectionPointPic: d,
                    } = a;
                    t.$set(t, "rewardPointsData", {
                      id: i,
                      name: o,
                      pointsNum: r,
                      costPoints: n > 20 ? 20 : n,
                      receivedCollectionPointPic: s,
                      unreceivedCollectionPointPic: d,
                      imgType: d.startsWith("icon-") ? l.a.Icon : l.a.Img,
                    }),
                      (t.show = !0);
                  } catch (e) {
                    t.show = !1;
                  }
                })();
              },
              hiddenRewardPoints() {
                (this.show = !1), (this.rewardPointsData = Object(a.a)({}, P));
              },
              handleClick() {
                var { rewardPointsList: t } = this.opt,
                  { id: e } = t[0],
                  i = n.a.add("/packages/point/home/index", {
                    activity_id: e,
                    kdt_id: this.kdtId,
                  });
                o.default.navigate({ url: i });
              },
            },
            ud: !0,
          };
        e.default = o.default.component(m);
      },
    }
  )
);
