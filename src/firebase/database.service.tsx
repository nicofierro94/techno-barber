import firebase from '.'
import { getDatabase, ref, set } from "firebase/database";

const db = getDatabase(firebase);

export const create = async () => {
    console.log('hello')
    await set(ref(db, 'test'), {
        test: 'test',
        time: Date.now()
    })
}
