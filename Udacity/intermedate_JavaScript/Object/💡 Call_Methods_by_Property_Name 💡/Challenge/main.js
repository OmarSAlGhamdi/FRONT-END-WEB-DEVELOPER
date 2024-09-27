let chameleon = {
  color: "pink",
  changeColor: function () {
    if (this.color === "green") {
      this.color = "pink";
    } else {
      this.color = "green";
    }
  },
};

chameleon.changeColor();
console.log(chameleon.color);
