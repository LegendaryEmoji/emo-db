const { writeFileSync, readFileSync, unlinkSync } = require("fs");

/**
 * Set Database File JSON
 * @param {JSON} json
 * @returns {json}
 */

function __set(json = {}) {
    try {
        writeFileSync("./database.json", JSON.stringify(json, null, 2));
        return json;
    } catch (__) {
        console.error("Write Request Failed, Try Again Later");
        return json;
    };
};

/**
 * Read Database File Content
 * @returns {Promise<JSON>}
 */

function __read() {
    try {
        return JSON.parse(readFileSync("./database.json", "utf8"));
    } catch (__) {
        return __set({});
    };
};

/**
 * Delete Database File (Also Its Content)
 * @returns {Boolean}
 */

function __delete() {
    try {
        unlinkSync("./database.json");
        return true;
    } catch (__) {
        return false;
    };
};

/**
 * Throw Error Because Why Not
 * @param {String} message
 * @returns {Error} 
 */

function __err(message) {
    throw new Error(message);
};

module.exports = { __set, __read, __delete, __err };