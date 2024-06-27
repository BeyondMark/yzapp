"use strict";
var r = require("~/r");
r(
  "namX",
  Object.assign(
    {},
    require("../../../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      namX: function (e, t, r) {
        r.r(t);
        var u = r("EqB2"),
          a = r("f0yX"),
          p = {
            mixins: [Object(u.a)({ optDesc: a.a })],
            props: { themeColors: { type: Object, default: () => ({}) } },
            data: () => ({ eduGoods: [], currentGroup: 0 }),
            computed: {
              classWrap() {
                var { menuType: e, menuWrap: t, templateType: r } = this.opt;
                return 1 === r
                  ? "dc-course-group-tab template_type" + r
                  : "dc-course-group-tab menu_type" +
                      e +
                      " menu_wrap" +
                      t +
                      " template_type" +
                      r;
              },
            },
            created() {},
            methods: {
              setActiveTab(e) {
                this.currentGroup = e;
                var { groupList: t } = this.opt;
                this.$emit("change", t[e]);
              },
            },
            ud: !0,
          },
          s = r("9ZMt");
        t.default = s.default.component(p);
      },
    }
  )
);
