"use strict";
var r = require("~/r");
r(
  "+4Ek",
  Object.assign(
    {},
    require("../../../../c.js").modules,
    require("~/v.js").modules,
    {
      "+4Ek": function (e, s, a) {
        a.r(s);
        var t = a("2wjL"),
          o = a("n6zP"),
          i = a("YAk7"),
          { msgImg: n, h5Logo: r, baseSharePath: m } = i.e,
          c = {
            mixins: [Object(o.a)(["custom-class"])],
            props: { h5Link: String, navigateTo: Function },
            data: () => ({
              messageTitle: " ",
              showMessageCard: !0,
              messagePath: "",
              msgImg: n,
            }),
            computed: {
              messageConcat() {
                var e = {
                  yz_live_code_link: encodeURIComponent(this.h5Link) || "",
                  yz_live_code_image: encodeURIComponent(r),
                  yz_live_code_title: "点击加好友",
                  yz_live_code_desc: "点击识别二维码加客服微信专属福利享不停",
                };
                return {
                  messageTitle: " ",
                  showMessageCard: !0,
                  messagePath: t.a.add(m, e),
                  msgImg: n,
                  sessionFrom: "",
                  businessId: "",
                };
              },
            },
            methods: {
              onContactBack(e) {
                this.$emit("after-contact"),
                  e && e.path && this.navigateTo(t.a.add(e.path, e.query));
              },
            },
            ud: !0,
          },
          d = a("9ZMt");
        s.default = d.default.component(c);
      },
    }
  )
);
