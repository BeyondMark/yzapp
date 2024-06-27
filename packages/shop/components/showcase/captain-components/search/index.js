var r = require("~/r");
r("TsDn", {
  TsDn: function (e, t) {
    Component({
      externalClasses: ["search-class", "input-class", "cancel-class"],
      properties: {
        show: { type: Array, value: ["icon", "cancel"] },
        cancelText: { type: String, value: "取消" },
        keyword: { type: String, value: "" },
        pickerWidth: { type: Number, value: 55 },
        searchClass: String,
        placeholder: {
          type: String,
          value: "请输入查询关键字",
          observer(e) {
            var t = 0,
              a = /^[A-Za-z1-9]$/;
            e.split("").forEach((e) => {
              t += a.test(e) ? 10.5 : 15;
            }),
              this.setData({ placeholderText: e, inputWidth: t + "px" });
          },
        },
        range: { type: Array, value: [] },
        rangeIndex: { type: Number, value: 0 },
        useCancel: { type: Boolean },
        onlySearch: { type: Boolean, value: !1 },
        alignLeft: { type: Boolean, value: !1 },
        searchStyle: String,
        cancelStyle: String,
        inputStyle: { type: String, value: "height:36px;" },
        innerInputStyle: String,
        focus: { type: Boolean, value: !1 },
        disabled: { type: Boolean, value: !1 },
        textColor: { type: String, value: "#969799" },
        adjustPosition: { type: Boolean, value: !0 },
        searchIconStyle: String,
        showScan: Boolean,
      },
      data: { inputWidth: "auto", placeholderText: "" },
      attached() {
        this.data.useCancel ||
          this.data.range.length ||
          this.setData({ onlySearch: !0 }),
          setTimeout(() => {
            this.setData({ placeholderText: this.data.placeholder });
          }, 0);
      },
      methods: {
        pickerChange(e) {
          var { value: t } = e.detail;
          this.triggerEvent("pickerchange", {
            value: t,
            text: this.data.range[t],
          });
        },
        search(e) {
          this.triggerEvent("search", { value: e.detail.value });
        },
        inputChange(e) {
          (this._inputvalue = e.detail.value),
            this.triggerEvent("change", { value: e.detail.value });
        },
        cancelSearch() {
          this.triggerEvent("cancel"), this.setData({ keyword: "" });
        },
        focus() {
          this.data.onlySearch && this.setData({ onlySearch: !1 }),
            this.triggerEvent("focus");
        },
        blur() {
          this.data.useCancel ||
            this.data.range.length ||
            this._inputvalue ||
            this.setData({ onlySearch: !0 }),
            this.triggerEvent("blur");
        },
        clearInput() {
          this.setData({ focus: !0 }),
            this.triggerEvent("change", { value: "" });
        },
      },
    });
  },
});
