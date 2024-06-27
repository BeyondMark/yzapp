"use strict";
var r = require("~/r");
r(
  "/jyq",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    "/jyq": function (e, r, o) {
      o.r(r);
      var t = o("7/pW");
      Object(t.a)({
        data: {
          searchConfig: {
            border_style_color: "#f9f9f9",
            border_style_height: 40,
            border_style_method: "0",
            color: "#fff",
            hot_search_keys: [],
            hot_search_keys_new: [],
            position_show_method: "1",
            position_type: "1",
            show_search_component: "1",
            text_align_method: "0",
            text_color: "#999",
            type: "search",
            z_index: 121,
          },
        },
        properties: {},
        observers: {},
        attached() {},
        methods: {},
      });
    },
  })
);
