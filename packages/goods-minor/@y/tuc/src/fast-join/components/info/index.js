"use strict";
var r = require("~/r");
r(
  "74xX",
  Object.assign(
    {},
    require("../../../../../../c.js").modules,
    require("~/v.js").modules,
    {
      "74xX": function (t, e, r) {
        r.r(e);
        var i = r("MTtC"),
          s = function (t) {
            void 0 === t && (t = {});
            var e = t.customerAttributes || [];
            return Array.isArray(e)
              ? e
                  .map((t) =>
                    t.dataType === i.b.GENDER && t.value === i.e.UNKNOWN
                      ? (delete t.value, t)
                      : t
                  )
                  .filter((t) => t.isRequired)
              : [];
          },
          u = {
            props: { attributeInfo: { type: Object } },
            data: () => ({
              DATA_ATTRIBUTE_DATA_TYEP: i.b,
              DATA_ATTRIBUTE_ID_TYEP: i.c,
              customerAttributesView: [],
              scrollLock: !1,
            }),
            logicData: () => ({ customerAttributes: [] }),
            watch: {
              attributeInfo: {
                immediate: !0,
                handler(t) {
                  if (t) {
                    var e = s(t);
                    (this.customerAttributesView = e),
                      (this.customerAttributes = e);
                  }
                },
              },
            },
            created() {
              var t = s(this.attributeInfo);
              (this.customerAttributesView = t), (this.customerAttributes = t);
            },
            methods: {
              handleChangeCustomerAttribute(t) {
                var { id: e, value: r } = t,
                  i = this.customerAttributes.findIndex(
                    (t) => t.attributeId === e
                  );
                (this.customerAttributes[i].value = (" " + r).slice(1)),
                  (this.customerAttributes[i].isChange = !0);
              },
              getCustomerAttributes() {
                return this.customerAttributes;
              },
              withSwitchOtherPopup(t) {
                setTimeout(
                  () => {
                    this.scrollLock = t;
                  },
                  t ? 0 : 300
                );
              },
            },
            ud: !0,
          },
          a = r("9ZMt");
        e.default = a.default.component(u);
      },
    }
  )
);
