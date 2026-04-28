let show = "ah";

if (
  // The problem is I forget the () of the method .toLowerCase()
  show.toLowerCase() === "yes" ||
  show.toLowerCase() === "yup" ||
  show.toLowerCase() === "ok" ||
  show.toLowerCase() === "agree"
) {
  console.log(
    `<p style= 'font-size: 20px';>The User Agree to the Terms and Condtion </p>`
  );

  document.write(`<p style= 'font-size: 40px';>The User Agree to the Terms and Condition ;) 👍🏻</p>`);
} else if (
  show.toLowerCase() === "no" ||
  show.toLowerCase() === "nope" ||
  show.toLowerCase() === "i m not"
) {
  console.log("The User Refuse the Terms and Condition");
  document.write(
    `<p style= 'font-size: 40px';>The User Refuse The Terms and Condition 👎🏻</p>`
  );
} else {
  document.write(
    `<p style= 'font-size : 40px';>The User Not Sure from what he wants exactly 🤷‍♂️</p>`
  );
}
