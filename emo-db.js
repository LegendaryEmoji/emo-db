const __ = "./Src/main.js", ___ = "./Src/util.js";

module.exports = {
    fs: require("fs"),
    set: require(__).set,
    remove: require(__).remove,
    has: require(__).has,
    fetch: require(__).fetch,
    get: require(__).fetch,
    push: require(__).push,
    add: require(__).add,
    subtract: require(__).subtract,
    filter: require(__).filter,
    all: require(__).all,
    clear: require(__).clear,
    destroy: require(__).destroy,
    __set: require(___).__set,
    __read: require(___).__read,
    __delete: require(___).__delete,
    __err: require(___).__err
};