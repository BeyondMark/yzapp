"use strict";
var r = require("~/r");
r(
  "ppuj",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      ppuj: function (t, i, e) {
        e.r(i);
        var a = e("9ZMt"),
          c = e("mgUg"),
          o = e("R7Zb"),
          s = e("qe3o"),
          r = e("l7k/"),
          l = e("vyom"),
          n = {
            name: "ShowcaseUmpReward",
            mixins: [Object(o.a)({ optDesc: r.a })],
            props: { uuid: { type: String, default: "" } },
            data: () => ({ activityList: [], goodsList: [], active: 0 }),
            computed: {
              titleValue() {
                return this.opt.titleValue;
              },
              titleType() {
                return this.opt.titleType;
              },
              activeTitleStyle() {
                return (
                  "color: " +
                  this.opt.tabColor +
                  ";background-color: rgba(0, 0,0 ,0.2);\n    border-radius: 999px;" +
                  l.b
                );
              },
              inActivetitleStyle: () =>
                "color: rgba(255, 255, 255, 0.6);" + l.b,
              moduleTitleVisible() {
                return (
                  this.opt.titleType !== c.a.DISABLE &&
                  this.activityList.length > 0
                );
              },
            },
            created() {
              this.getActivityRecommendList();
            },
            methods: {
              handleTabChange(t) {
                var { index: i } = t;
                this.active = i;
                var e = this.activityList[i];
                this.sendComponentLogger("logger", {
                  et: "click",
                  ei: "meetReduce_tab_click",
                  en: "点击切换tab",
                  params: {
                    activity_id: "" + e.activityId,
                    tab_no: i + 1,
                    component: "meetReduce",
                  },
                });
              },
              handleItemClick(t) {
                this.$emit("item-click", t);
              },
              getActivityRecommendList() {
                var t,
                  i = (null == (t = this.opt.activities)
                    ? void 0
                    : t.map((t) => t.id)) || [this.opt.activityId];
                s.a({
                  count: 5,
                  activityId: this.opt.activityId,
                  activityIds: i.join(","),
                  activitySource: this.opt.activitySource,
                })
                  .then((t) => {
                    this.activityList = t;
                  })
                  .catch((t) => {
                    a.default.$native.showToast({ title: t.msg, icon: "none" });
                  });
              },
            },
            ud: !0,
          };
        i.default = a.default.component(n);
      },
    }
  )
);
