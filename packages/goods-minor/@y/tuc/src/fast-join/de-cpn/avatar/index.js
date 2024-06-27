"use strict";
var r = require("~/r");
r(
  "ax90",
  Object.assign(
    {},
    require("../../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      ax90: function (t, e, a) {
        a.r(e);
        var i = a("okrm"),
          r = {
            name: "AttributeAvatar",
            props: { item: { type: Object } },
            data: () => ({
              fileList: [],
              image:
                "https://b.yzcdn.cn/showcase/membercenter/2018/08/06/default_avatar@2x.png",
            }),
            created() {
              this.item.value && (this.image = this.item.value);
            },
            methods: {
              afterRead(t) {
                Object(i.a)(t.file.url).then((t) => {
                  (this.image = t.data.attachment_url),
                    this.$emit("onChange", {
                      id: this.item.attributeId,
                      value: t.data.attachment_url,
                    });
                });
              },
            },
            ud: !0,
          },
          s = a("9ZMt");
        e.default = s.default.component(r);
      },
    }
  )
);
