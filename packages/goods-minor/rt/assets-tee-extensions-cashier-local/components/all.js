"use strict";
var r = require("~/r");
r(
  "+m7l",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    "+m7l": function (e, n, a) {
      a.r(n);
      var t = a("Fcif"),
        l = a("5HXs"),
        r = a.n(l)()({ block: "zan-pay" }),
        c = {
          props: {
            themeColor: String,
            active: { type: Object, required: !0 },
            instalment: Object,
            channels: { type: Array, required: !0 },
            loading: { type: Boolean, default: !0 },
          },
          data: () => ({}),
          computed: {
            hackChannels() {
              return this.channels.map((e) => {
                var n;
                return Object(t.a)({}, e, {
                  channelNotice:
                    e.recommend && e.available && e.channelNotice
                      ? (null == (n = e.channelNotice)
                          ? void 0
                          : n.split(",")) || []
                      : e.channelNotice,
                });
              });
            },
          },
          methods: {
            scrollToChannel(e) {},
            getChannelClass: (e) =>
              r("option", {
                tagged: !!e.channelNotice,
                disabled: !e.available,
                [e.payChannel.toLowerCase()]: !0,
              }),
            onChannelClick(e) {
              var n;
              (null != (n = e.ext) && n.instalments) || this.$emit("change", e);
            },
          },
          ud: !0,
        },
        i = a("9ZMt");
      n.default = i.default.component(c);
    },
  })
);
