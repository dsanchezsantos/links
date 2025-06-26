import AsyncStorage from "@react-native-async-storage/async-storage";

const LINKS_STORAGE_KEY = "links-storage"

type LinkStorage = {
    id: string
    name: string
    url: string
    category: string
}

async function get(): Promise<LinkStorage[]> {
    const storage = await AsyncStorage.getItem(LINKS_STORAGE_KEY)
    const response = storage ? JSON.parse(storage) : []

    return response
}

async function save(newLink: LinkStorage) {
    try {
        const storage = await get()

        await AsyncStorage.setItem()
    } catch(error) {
        throw error
    }
}