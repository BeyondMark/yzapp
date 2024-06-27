"use strict";
var r = require("~/r");
r(
  "8iio",
  Object.assign(
    {},
    require("~/packages/usercenter/c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "8iio": function (e, t, i) {
        i.r(t);
        var r = i("rqVN"),
          s = i("gPtZ");
        Object(r.b)({
          properties: {
            services: {
              type: Array,
              value: [],
              observer(e) {
                this._setServices(e);
              },
            },
            iconMode: { type: Number, value: 1 },
            badges: { type: Object, value: {} },
            links: { type: Object, value: {} },
          },
          data: { widgets: [] },
          methods: {
            handleWidgetClicked(e) {
              var t = e.currentTarget.dataset.key;
              this.triggerEvent("widgetClicked", t);
            },
            _setServices(e) {
              var t = e
                .filter((e) => "blankLine" !== e.type)
                .filter((e) => (s.b[e.type] || {})[s.a[+this.iconMode || 1]])
                .map((e) => ({
                  key: e.type,
                  title: e.title,
                  icon: s.b[e.type][s.a[+this.iconMode || 1]],
                }));
              this.setYZData({ widgets: t });
            },
          },
        });
      },
    }
  )
);
