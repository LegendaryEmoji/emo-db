const { __read, __set, __delete, __err } = require("./util.js");

/**
 * Set/Replace Property In Database
 * @param {String} key 
 * @param {Any} value 
 * @returns {Promise<JSON>}
 */

async function set(key, value) {
    if (!key || !value) return __err("Missing Key Or Value");
    const json = await __read();
    json[key] = value;
    return __set(json);
};

/**
 * Remove A Property From Database
 * @param {String} key 
 * @returns {Promise<JSON>}
 */

async function remove(key) {
    if (!key) return __err("Missing Key");
    const json = await __read();
    if (!json[key]) return __err(`Cannot Find '${key}' Property In Database`);
    delete json[key];
    return __set(json);
};

/**
 * Check If Database Has Certain Property
 * @param {String} key 
 * @returns {Boolean}
 */

async function has(key) {
    if (!key) return __err("Missing Key");
    return (await __read()[key]) ? true : false;
};

/**
 * Fetch Property From Database
 * @param {String} key 
 * @returns {Promise<Any>}
 */

async function fetch(key) {
    if (!key) return __err("Missing Key");
    return (await __read())[key];
};

/**
 * Push Elements To Array Property
 * @param {String} key 
 * @param  {...Any} values
 * @returns {Promise<JSON>}
 */

async function push(key, ...values) {
    if (!key || !values[0]) return __err("Missing Key Or Value");
    const json = await __read();
    if (!Array.isArray(json[key])) return __err("Element Type Is Not An Array")
    await json[key].push(...values);
    return __set(json);
};

/**
 * Add Amount To Number Property
 * @param {String} key 
 * @param {Number} amount 
 * @returns {Promise<JSON>}
 */

async function add(key, amount) {
    if (!key || !amount) return __err("Missing Key Or Amount");
    const json = await __read();
    if (typeof json[key] !== "number") return __err("Element Type Is Not Number");
    json[key] = json[key] + amount;
    return __set(json);
};

/**
 * Subtract Amount From Number Property
 * @param {String} key 
 * @param {Number} amount 
 * @returns {Promise<JSON>}
 */

async function subtract(key, amount) {
    if (!key || !amount) return __err("Missing Key Or Amount!");
    const json = await __read();
    if (typeof json[key] !== "number") return __err("Element Type Is Not Number");
    json[key] = json[key] - amount;
    return __set(json);
};

/**
 * Get Filtered Properties From Database
 * @param {Function} func 
 * @param {String} type 
 * @returns {Promise<Any>}
 */

async function filter(func, type = "array") {
    if (!func || typeof func !== "function") return __err("Missing Function Or Passed Argument Type Is Not An Function");
    type = type.toLowerCase();
    if (!["array", "object"].includes(type)) return __err("Invalid Type Passed");
    /* Getting Database Properties & Converting It To Array With [Key, Value] Sort & Mapping It With Key, Value Object */
    const json = Object.entries(await __read()).map((e) => Object({ key: e[0], value: e[1] }));
    /* Filtering Elements That Are Matching Function Requirements */
    const filteredArray = await json.filter(func);
    if (!filteredArray) return (type === "object") ? {} : [];
    if (type === "object") {
        const filteredObject = {};
        for (let Element of filteredArray) {
            filteredObject[Element.key] = Element.value;
        };
        return filteredObject;
    };
    return filteredArray;
};

/**
 * Get All Database Properties
 * @param {"Object"|"Array"} type 
 * @returns {Promise<Object|Array>}
 */

async function all(type = "array") {
    type = type.toLowerCase();
    if (!["array", "object"].includes(type)) return __err("Invalid Type Passed");
    if (type === "object") return __read();
    /* Getting Database Properties & Converting It To Array With [Key, Value] Sort & Mapping It As Key, Value Sort Object */
    return Object.entries(await __read()).map((e) => Object({ key: e[0], value: e[1] }));;
};

/**
 * Clear Database (Mini Version Of Destroy)
 * @returns {Promise<JSON>}
 */

async function clear() {
    const json = await __read();
    __set({});
    return json;
};

/**
 * Clear Database & Delete File (Use .clear() | Its For Clearing The Database & Also Faster)
 * @returns {Promise<Boolean>}
 */

async function destroy() {
    return __delete();
};

module.exports = { set, remove, has, fetch, push, add, subtract, filter, all, clear, destroy };