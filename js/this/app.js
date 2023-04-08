const person = {
  firstName: "Viggo",
  lastName: "Mortensen",
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

//this will return 'undefined undefined' as it refers to window
// const person2 = {
//   firstName: "Viggo",
//   lastName: "Mortensen",
//   fullName: () => `${this.firstName} ${this.lastName}`,
// };
