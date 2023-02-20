let db;

const openDB = (callback) => {
  const request = indexedDB.open("Feeltheblowdata", 1);

  request.onupgradeneeded = function (event) {
    console.log(event.oldVersion);
    console.log(event.newVersion);
    db = event.target.result;
    if (!event.target.transaction.objectStoreNames.contains("volume"))
      db.createObjectStore("volume", { keyPath: "key" });
  };

  request.onsuccess = function (event) {
    db = event.target.result;
    console.log(db.version);
    if (callback) callback();
  };

  request.onerror = function (event) {
    throw new Error("IndexedDB error: " + event.target.errorCode);
  };
};

const set = (key, value) => {
  if (!db) throw new Error("Database not open.");
  const transaction = db.transaction(["volume"], "readwrite");
  const objectStore = transaction.objectStore("volume");
  const request = objectStore.put({ key, value });

  request.onsuccess = function () {
    console.log("Data stored successfully");
  };

  request.onerror = function (event) {
    throw new Error("IndexedDB error: " + event.target.errorCode);
  };
};

const get = (key, callback) => {
  if (!db) throw new Error("Database not open.");
  const transaction = db.transaction(["volume"], "readonly");
  const objectStore = transaction.objectStore("volume");
  const request = objectStore.get(key);

  request.onsuccess = function () {
    if (callback) callback(request.result ? request.result.value : 0);
  };

  request.onerror = function (event) {
    throw new Error("IndexedDB error: " + event.target.errorCode);
  };
};

const remove = (key) => {
  if (!db) throw new Error("Database not open.");
  const transaction = db.transaction(["volume"], "readwrite");
  const objectStore = transaction.objectStore("volume");
  const request = objectStore.delete(key);

  request.onsuccess = function () {
    console.log("Data removed successfully");
  };

  request.onerror = function (event) {
    throw new Error("IndexedDB error: " + event.target.errorCode);
  };
};

const clear = () => {
  if (!db) throw new Error("Database not open.");
  const transaction = db.transaction(["volume"], "readwrite");
  const objectStore = transaction.objectStore("volume");
  const request = objectStore.clear();

  request.onsuccess = function () {
    console.log("Data cleared successfully");
  };

  request.onerror = function (event) {
    throw new Error("IndexedDB error: " + event.target.errorCode);
  };
};

export { openDB, set, get, remove, clear };
