'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var SecureStore_Import = require('expo-secure-store');

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}

var SecureStore_Import__namespace = /*#__PURE__*/_interopNamespace(SecureStore_Import);

class SecureStore {
    async getItem(key, defaultValue, autoSet) {
        const def = defaultValue;
        try {
            let value = await SecureStore_Import__namespace.getItemAsync(key);
            if (value === null && def !== undefined && autoSet === true) {
                await this.setItem(key, def);
                value = await SecureStore_Import__namespace.getItemAsync(key);
            }
            const parsedValue = value === null ? undefined : JSON.parse(value);
            return (parsedValue === undefined ? def : parsedValue);
        }
        catch (e) {
            return def;
        }
    }
    async setItem(key, value) {
        await SecureStore_Import__namespace.setItemAsync(key, JSON.stringify(value));
    }
    async hasItem(key) {
        return !!(await this.getItem(key));
    }
    async removeItem(key) {
        await SecureStore_Import__namespace.deleteItemAsync(key);
    }
}

exports.SecureStore = SecureStore;
