import * as SecureStore_Import from 'expo-secure-store';

class SecureStore {
    async getItem(key, defaultValue, autoSet) {
        const def = defaultValue;
        try {
            let value = await SecureStore_Import.getItemAsync(key);
            if (value === null && def !== undefined && autoSet === true) {
                await this.setItem(key, def);
                value = await SecureStore_Import.getItemAsync(key);
            }
            const parsedValue = value === null ? undefined : JSON.parse(value);
            return (parsedValue === undefined ? def : parsedValue);
        }
        catch (e) {
            return def;
        }
    }
    async setItem(key, value) {
        await SecureStore_Import.setItemAsync(key, JSON.stringify(value));
    }
    async hasItem(key) {
        return !!(await this.getItem(key));
    }
    async removeItem(key) {
        await SecureStore_Import.deleteItemAsync(key);
    }
}

export { SecureStore };
