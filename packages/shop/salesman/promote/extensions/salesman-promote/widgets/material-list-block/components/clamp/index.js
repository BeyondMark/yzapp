"use strict";
var r = require("~/r");
r(
  "LDs6",
  Object.assign(
    {},
    require("~/packages/shop/c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      LDs6: function (e, t, s) {
        s.r(t);
        var a = s("Bt9F");
        Object(a.a)({
          externalClasses: ["custom-class", "custom-action-class"],
          properties: {
            maxLine: { type: Number, value: 4 },
            needAction: { type: Boolean, value: !0 },
            expandText: { type: String, value: "展开" },
            shrinkText: { type: String, value: "收起" },
            content: String,
          },
          data: { showAction: !1, isClamped: !0, contentClass: "" },
          observers: {
            content() {
              this.refNode && this._checkIsClamped();
            },
          },
          lifetimes: {
            ready() {
              (this.refNode =
                this.createSelectorQuery().select("#fake-content")),
                this._checkIsClamped();
            },
          },
          methods: {
            handleActionClick() {
              var e = !this.data.isClamped;
              this.setYZData({
                contentClass: e ? "" : "clamp__content--expanded",
                isClamped: e,
              });
            },
            _checkIsClamped() {
              var { maxLine: e, needAction: t } = this.data;
              t &&
                this.refNode
                  .fields(
                    { size: !0, computedStyle: ["lineHeight", "fontSize"] },
                    (t) => {
                      var { height: s, lineHeight: a, fontSize: i } = t;
                      (i = this._toNumber(i)),
                        (a = "normal" === a ? 1.5 * i : this._toNumber(a)),
                        this.setYZData({
                          maxHeight: e * a,
                          showAction: s > e * a,
                        });
                    }
                  )
                  .exec();
            },
            _toNumber(e) {
              var t;
              try {
                t = e.match(/([\d.])+/g)[0];
              } catch (e) {}
              return t;
            },
          },
        });
      },
    }
  )
);
