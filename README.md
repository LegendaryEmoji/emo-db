# Emo DB

- JSON Based Database, Specifically For Normal Discord Bots

### Example
```js
const db = require("emo-db");
// GET Data Some How | You Need To Replace It With Your Data
const data = getDataSomeHow();

// Set Property | Key - String | Value - Any (Object, Array, String, ...)
db.set("John", data);
db.set("John-2", data);
db.set("Balance", data.balance);
db.set("Fruits", data.fruits);
db.set("Temporary-Data", data.temp);
// Delete Property | Key - String
db.remove("Temporary-Data");
// Fetch Property | Key - String | Alias - get
db.fetch("John");
db.get("John");
// Check If Property Exists | Key - String | Lodash GET - False
db.has("John");
// Add Value To Property | Key - String | Property Value Type - Number | Value - Number
db.add("Balance", 100);
// Subtract Value From Property | Key - String | Property Value Type - Number | Value - Number
db.subtract("Balance", 100);
// Push Element To Array-type Property | Key - String | Property Value Type - Array | Value - Any (Object, Array, String, ...)
db.push("Fruits", "Apple");
db.push("Fruits", "Banana", "Orange");
// Filter Specific Properties From Database | Func - Function | Type - Array (Default) Or Object
db.filter((element) => element.key.startsWith("John"));
db.filter((element) => element.key.startsWith("John"), "Object");
// Be Careful With value Property, It Can Be Any (Object, Array, String, ...) So Check Type Before Checking Anything
db.filter((element) => typeof element.value === "number");
db.filter((element) => typeof element.value === "number" && element.value === 0);
// GET All Properties From Database | Type - Array (Default) Or Object
db.all();
db.all("Object");
// Clear Database
db.clear();
// Destroy Database (Clear Database & Delete Database File)
db.destroy();
```

### Why Emo DB?

- Simple & Easy To Use
- Small But Powerful
- Discord Support
- Want More? Use Private Functions

### Private Functions

- Please Use These Functions Carefully, Thanks

```js
const db = require("emo-db");
const data = getDataSomeHow();

// Set Whole Database File Content Into Provided JSON Content
db.__set({});
// Read Whole Database File Content
db.__read();
// Delete Whole Database File (Content Too)
db.__delete();
// Throw An Error Using emo-db
db.__err("Fake Error Message From emo-db NPM Package");
// FS (File System) Package
db.fs.readFileSync(options);
db.fs.writeFileSync(options);
db.fs.unlinkSync(options);
```

### Information

_Note: I Didn't Created This Fully By Myself & It's NOT For Huge Projects_

- [Discord Server](https://bit.ly/34tvqau) - [Click Me](https://discord.gg/c39gWkYDk5)

- [Documentation](https://bit.ly/34tvqau) - [Click Me](https://github.com/LegendaryEmoji/emo-db/wiki)

- [Github Repository](https://bit.ly/34tvqau) - [Click Me](https://github.com/LegendaryEmoji/emo-db/)

- Thank You For Reading & Using This [Package](https://www.npmjs.com/package/emo-db) ;)