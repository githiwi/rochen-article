
import sqlite3 from 'sqlite3'
import { open } from 'sqlite'
import DatabaseConfig from './setup/DatabaseConfig.js'


class DatabaseConnection {

    database

    async connect() {

        const db = await open({
            filename: DatabaseConfig.database,
            driver: sqlite3.Database
        })
    
        this.database = db

    }

    getDatabase() {
        return this.database
    }

}

export default new DatabaseConnection()
