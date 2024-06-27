"use strict";
var r = require("~/r");
r(
  "ntjd",
  Object.assign({}, require("~/v.js").modules, require("~/c.js").modules, {
    ntjd: function (t, e, a) {
      a.r(e);
      var i = a("z16c"),
        s = a("8B9M");
      Object(i.a)({
        properties: {
          type: String,
          scene: String,
          authTypeList: { type: Array, value: [] },
          zIndex: { type: Number, value: 10100 },
          allowDeny: Boolean,
          customStyle: String,
          popupCustomStyle: String,
          bizDataMap: Object,
          trigger: String,
        },
        externalClasses: ["wrapper-class", "btn-class"],
        data: { kdtId: 0 },
        attached() {
          this.updateKdtId(Object(s.a)().getKdtId()),
            this.on("app:chainstore:kdtid:update", (t) => {
              var { kdtId: e } = t;
              this.updateKdtId(e);
            });
        },
        methods: {
          emit(t, e) {
            this.triggerEvent(t, e.detail.payload);
          },
          updateKdtId(t) {
            this.setYZData({ kdtId: t }, { immediate: !0 });
          },
          onSuccess(t) {
            this.emit("next", t);
          },
          onFail(t) {
            this.emit("fail", t);
          },
          onPopupShow(t) {
            this.emit("popup-show", t);
          },
          onTap(t) {
            this.triggerEvent("tap", t.detail);
          },
        },
      });
    },
  })
);
