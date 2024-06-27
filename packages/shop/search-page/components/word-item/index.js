var r = require("~/r");
r("TIlI", {
  TIlI: function (e, r) {
    Component({
      properties: { wordItem: Object },
      methods: {
        handleClick(e) {
          this.triggerEvent("click", e.currentTarget.dataset.wordItem);
        },
      },
    });
  },
});
