const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/pathUtils");

// fake database
let registeredHomes = [];

module.exports = class Home {
  constructor(name, email, phone, address) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.address = address;
  }

  save() {
    registeredHomes.push(this);
    const homeDataPath = path.join(rootDir, "data", "homes.json");
    fs.writeFile(
      homeDataPath,
      JSON.stringify(registeredHomes),
      (error) => {
        console.log("File Writing Concluded", error);
      }
    );
  }

  static fetchAll(callback) {
    const homeDataPath = path.join(rootDir, "data", "homes.json");

    fs.readFile(homeDataPath, (err, data) => {
      console.log("File read: ", err, data);
      callback(!err ? JSON.parse(data) : []);
    });
  }
};

