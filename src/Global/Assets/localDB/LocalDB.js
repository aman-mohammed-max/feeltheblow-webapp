let db;

const openDB = (callback) => {
  const request = indexedDB.open("Feeltheblowdata", 1);

  request.onupgradeneeded = function (event) {
    db = event.target.result;
   // const objectStore = db.createObjectStore("Volumedata", {
   //   keyPath: "key",
   // });
  };

  request.onsuccess = function (event) {
    db = event.target.result;
    if (callback) callback();
  };

  request.onerror = function (event) {
    throw new Error("IndexedDB error: " + event.target.errorCode);
  };
};

const set = (key, value) => {
  const transaction = db.transaction(["Volumedata"], "readwrite");
  const objectStore = transaction.objectStore("Volumedata");
  const request = objectStore.put({ key, value });

  request.onsuccess = function () {
    console.log("Data stored successfully");
  };

  request.onerror = function (event) {
    throw new Error("IndexedDB error: " + event.target.errorCode);
  };
};

const get = (key, callback) => {
  const transaction = db.transaction(["Volumedata"], "readonly");
  const objectStore = transaction.objectStore("Volumedata");
  const request = objectStore.get(key);

  request.onsuccess = function () {
    if (callback) callback(request.result ? request.result.value : null);
  };

  request.onerror = function (event) {
    throw new Error("IndexedDB error: " + event.target.errorCode);
  };
};

const remove = (key) => {
  const transaction = db.transaction(["Volumedata"], "readwrite");
  const objectStore = transaction.objectStore("Volumedata");
  const request = objectStore.delete(key);

  request.onsuccess = function () {
    console.log("Data removed successfully");
  };

  request.onerror = function (event) {
    throw new Error("IndexedDB error: " + event.target.errorCode);
  };
};

const clear = () => {
  const transaction = db.transaction(["Volumedata"], "readwrite");
  const objectStore = transaction.objectStore("Volumedata");
  const request = objectStore.clear();

  request.onsuccess = function () {
    console.log("Data cleared successfully");
  };

  request.onerror = function (event) {
    throw new Error("IndexedDB error: " + event.target.errorCode);
  };
};

export { openDB, set, get, remove, clear };
