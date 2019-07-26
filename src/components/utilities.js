export const formatBirthday = Object.assign(String.prototype, {
  formatBirthday() {
    const date = new Date(this);
    const day = this.split("-")[1];
    const year = this.split("-")[0];
    const month = date.toLocaleString("default", { month: "long" });
    return `${month} ${day}, ${year}`;
  }
});

export const getAge = Object.assign(String.prototype, {
  getAge() {
    return Math.floor((new Date() - new Date(this).getTime()) / 3.15576e10);
  }
});

export const todayDateFormat = () => {
  var now = new Date();
  var day = ("0" + now.getDate()).slice(-2);
  var month = ("0" + (now.getMonth() + 1)).slice(-2);
  return `${month}.${day}.${now.getFullYear()}`;
};
