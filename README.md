# `pouchdb-deprecation-warning-repro`

This code is a reproduction case for a PouchDB bug: https://github.com/pouchdb/pouchdb/issues/8983

To see the bug in action, run:

```shell
git clone https://github.com/lgarron/pouchdb-deprecation-warning-repro && cd pouchdb-deprecation-warning-repro
npm install # note: this is slow!
node script/dev.js
```

Then open http://localhost:1234/ in a broser and observe the following output:

```
false
undefined
[console warning] db.type() is deprecated and will be removed in a future version of PouchDB
```
