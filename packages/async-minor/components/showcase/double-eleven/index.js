"use strict";
var r = require("~/r");
r(
  "U1LE",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    "94yW": function (t, e, a) {
      a.d(e, "a", function () {
        return r;
      });
      a("taYb"), a("7WUL");
      function r(t) {
        var { extraData: e = {} } = t;
        return {
          linkType:
            "weapplink" === t.linkType && 2 == e.linkType
              ? "otherWeapp"
              : t.linkType || "",
          appId: e.otherWeappAppid || "",
          path: e.otherWeappLink || "",
          useShortLink: +e.useShortLink || 0,
          shortLink: e.shortLink || "",
        };
      }
    },
    U1LE: function (t, e, a) {
      a.r(e);
      var r = a("Fcif"),
        n = a("taYb"),
        i = a("a1Mm"),
        o = a("94yW");
      Component({
        properties: {
          componentData: { type: Object, value: {}, observer: "transformData" },
          extraData: { type: Object, value: {} },
        },
        methods: {
          transformData(t) {
            var {
                bgStyle: e = "1",
                bgImageUrl: a = "",
                textColor: p = "#fff",
                subEntry: s = [],
              } = n.a.toCamelCase(t || this.properties.componentData),
              c = s.map((t) =>
                Object(r.a)({}, t, {
                  navInfo: Object(o.a)(t),
                  imageUrl: Object(i.a)(t.imageUrl, "!450x0.jpg"),
                })
              );
            this.setData({
              bgStyle: +e,
              bgImageUrl: Object(i.a)(a, "!800x0.jpg"),
              textColor: p,
              subEntry: c,
            });
          },
          handleNavigate(t) {
            var { detail: e = {} } = t;
            this.triggerEvent("navigate", e);
          },
          handleContactBack(t) {
            var { detail: e = {} } = t;
            this.triggerEvent("contactback", e);
          },
        },
      });
    },
  })
);
