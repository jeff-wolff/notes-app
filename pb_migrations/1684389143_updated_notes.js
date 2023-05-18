migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("izsx2p32xddiy42")

  // remove
  collection.schema.removeField("7lwckalg")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0uy5zikz",
    "name": "content",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("izsx2p32xddiy42")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7lwckalg",
    "name": "content",
    "type": "editor",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("0uy5zikz")

  return dao.saveCollection(collection)
})
