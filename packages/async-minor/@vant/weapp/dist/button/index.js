"use strict";
var r = require("~/r");
r(
  "8LGa",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    "8LGa": function (e, a, i) {
      i.r(a);
      var t = i("py6f"),
        l = i("TzfB"),
        o = i("ECkf"),
        r = [l.a];
      Object(o.a)() && r.push("wx://form-field-button"),
        Object(t.a)({
          mixins: r,
          classes: ["hover-class", "loading-class"],
          data: { baseStyle: "" },
          props: {
            formType: String,
            icon: String,
            classPrefix: { type: String, value: "van-icon" },
            plain: Boolean,
            block: Boolean,
            round: Boolean,
            square: Boolean,
            loading: Boolean,
            hairline: Boolean,
            disabled: Boolean,
            loadingText: String,
            customStyle: String,
            loadingType: { type: String, value: "circular" },
            type: { type: String, value: "default" },
            dataset: null,
            size: { type: String, value: "normal" },
            loadingSize: { type: String, value: "20px" },
            color: String,
          },
          methods: {
            onClick(e) {
              this.$emit("click", e);
              var {
                canIUseGetUserProfile: a,
                openType: i,
                getUserProfileDesc: t,
                lang: l,
              } = this.data;
              "getUserInfo" === i &&
                a &&
                wx.getUserProfile({
                  desc: t || "  ",
                  lang: l || "en",
                  complete: (e) => {
                    this.$emit("getuserinfo", e);
                  },
                });
            },
          },
        });
    },
  })
);
