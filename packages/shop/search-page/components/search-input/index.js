"use strict";
var r = require("~/r");
r(
  "/eUq",
  Object.assign(
    {},
    require("../../../c.js").modules,
    require("~/v.js").modules,
    require("~/c.js").modules,
    {
      "/eUq": function (t, e, a) {
        a.r(e);
        var r = a("aOlM"),
          s = a("u8kV"),
          d = a("I0XR");
        Object(s.c)({
          properties: { defaultValue: String, focus: Boolean },
          data: { automatedWordsList: [], searchText: "", extraInfo: {} },
          attached() {
            (this.debouncedSearch = Object(r.a)(this.getAutomatedWords, 300)),
              this.setYZData({ searchText: this.data.defaultValue || "" });
          },
          methods: {
            getAutomatedWords() {
              var t = this.data.searchText;
              t
                ? d.a.getAutomatedWords(t).then((t) => {
                    var { recommendWordsList: e = [], extraInfo: a = {} } =
                      t || {};
                    this.setYZData({ automatedWordsList: e, extraInfo: a });
                  })
                : this.setYZData({ automatedWordsList: [], extraInfo: {} });
            },
            handleInput(t) {
              var { detail: e } = t;
              this.setYZData({ searchText: e }, () => {
                this.debouncedSearch();
              });
            },
            handleSearch() {
              this.triggerEvent("search", { text: this.data.searchText });
            },
            handleAutomatedWordClick(t) {
              this.triggerEvent("automated-word-click", {
                wordItem: { text: t.currentTarget.dataset.item },
                slg: this.data.extraInfo.slg || "",
                alg: this.data.extraInfo.alg || "",
              });
            },
          },
        });
      },
    }
  )
);
