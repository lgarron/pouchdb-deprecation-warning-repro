import PouchDB from "pouchdb";
import PouchDBFind from "pouchdb-find";

PouchDB.plugin(PouchDBFind);

const db1 = new PouchDB("db-1");
console.log(db1._remote); // expected: `false`, observed: `false`
const db2 = new PouchDB("db-2");
console.log(db2._remote); // expected: `false`, observed: `undefined`

// Triggers a warning.
db2.createIndex({
  index: { fields: ["some_field"] },
});
