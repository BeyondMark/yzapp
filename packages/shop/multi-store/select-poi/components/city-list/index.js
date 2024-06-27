"use strict";
var r = require("~/r");
r(
  "XWT9",
  Object.assign(
    {},
    require("../../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      XWT9: function (t, e, r) {
        r.r(e);
        var a = r("rqVN"),
          i = r("9KEa"),
          s = r("7dh9");
        Object(a.b)({
          data: {
            cityData: s.a,
            letters: [],
            listScrollTop: 0,
            currentCityText: "北京市",
            height: "800px",
          },
          properties: {
            currentCity: {
              type: Object,
              observer(t) {
                var e = "定位中";
                t && (e = t.name ? "当前定位" : "定位失败，请选择城市"),
                  this.setYZData({ currentCityText: e });
              },
            },
          },
          attached() {
            var t = Object(i.b)();
            t && this.setYZData({ height: t.windowHeight + "px" });
          },
          methods: {
            clickCity(t) {
              var e = t.currentTarget.dataset;
              this.triggerEvent(
                "selected",
                this.data.cityData.adcodeMap[e.code]
              );
            },
            handleClickCurrentCity() {
              this.triggerEvent("selected", this.data.currentCity);
            },
            handleClickLetterBar(t) {
              var e = t.currentTarget.dataset.letter;
              this.setYZData({ currentLetterId: "letter" + e });
            },
          },
        });
      },
    }
  )
);
