import localforage from "localforage";

export default localforage.createInstance({
  driver: localforage.INDEXEDDB,
  name: "UserDate",
  storeName: "Volume",
});
