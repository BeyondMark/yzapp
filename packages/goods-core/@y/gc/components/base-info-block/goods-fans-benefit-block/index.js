"use strict";
var r = require("~/r");
r(
  "2meh",
  Object.assign(
    {},
    require("../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      "2meh": function (t, e, a) {
        a.r(e);
        var i = a("Fcif"),
          n = a("US/N"),
          s = a("9ZMt"),
          c = a("RIHA"),
          o = a("ONqW"),
          r = {
            name: "FansBenefitBlock",
            props: {
              iconUrl: String,
              opt: { type: Object, default: () => ({}) },
            },
            data: () => ({
              wecomFansBenefit: null,
              fansStaticData: {
                iconText: "店铺粉丝",
                actionText: "成为粉丝",
                identityText: "你已成为公众号粉丝",
              },
              wecomFansStaticData: {
                iconText: "加好友",
                actionText: "加好友",
                identityText: "你已添加好友",
              },
            }),
            computed: {
              benefitStatic() {
                return this.opt.wecomFansBenefit
                  ? this.wecomFansStaticData
                  : this.fansStaticData;
              },
              benefitData() {
                var { wecomFansBenefit: t, fansBenefit: e } = this.opt,
                  a = t || e;
                return a
                  ? Object(i.a)({ isFans: a.isFans }, Object(c.b)(a))
                  : null;
              },
            },
            methods: {
              becomeFans() {
                if (this.opt.wecomFansBenefit) this.becomeWecomFriends();
                else {
                  var t = this.$getPageQuery();
                  this.$emit("follow", {
                    extraData: Object(i.a)(
                      {},
                      Object(c.a)(this.opt.fansBenefit)
                    ),
                    feature: Object(i.a)({}, t, { goodsAlias: this.opt.alias }),
                  });
                }
              },
              becomeWecomFriends() {
                var t;
                null == (t = Object(o.a)()) ||
                  t.log({
                    et: "click",
                    ei: "gadd_click",
                    en: "商品详情腰封企微加好友按钮点击",
                  });
                var {
                  wecomFansBenefit: { contactWay: e },
                  alias: a,
                  kdtId: i,
                } = this.opt;
                if (e)
                  return (
                    this.$emit("wecomBenefit", e),
                    Object(n.default)({
                      path: "/wscgoods/record-good-to-wecom.json",
                      withCredentials: !0,
                      data: { alias: a, kdtId: i },
                    })
                  );
              },
            },
            ud: !0,
          };
        e.default = s.default.component(r);
      },
    }
  )
);
