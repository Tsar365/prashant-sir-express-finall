module.exports = {
  proxy: "http://localhost:3000", // your Express server
  files: ["views/**/*.html", "public/css/output.css"],
  open: false,
  notify: false
};