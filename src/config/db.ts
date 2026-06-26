import { Pool } from "pg";
import config from "../config";

export const pool = new Pool({
  connectionString: config.DATABASE_URL,
});

const createUsersTable = `
   CREATE TABLE IF NOT EXISTS users (
     id SERIAL PRIMARY KEY,
     name VARCHAR(100) NOT NULL,
     email VARCHAR(255) NOT NULL UNIQUE,
     password TEXT NOT NULL,

     role VARCHAR(20) NOT NULL DEFAULT 'contributor'
       CHECK (role IN ('contributor', 'maintainer')),

     created_at TIMESTAMPTZ DEFAULT NOW(),
     updated_at TIMESTAMPTZ DEFAULT NOW()
   );
 `;

 const createIssuesTable = `
   CREATE TABLE IF NOT EXISTS issues (
     id SERIAL PRIMARY KEY,

     title VARCHAR(150) NOT NULL,

     description TEXT NOT NULL
       CHECK (char_length(description) >= 20),

     type VARCHAR(20) NOT NULL
       CHECK (type IN ('bug', 'feature_request')),

     status VARCHAR(20) NOT NULL DEFAULT 'open'
       CHECK (status IN ('open', 'in_progress', 'resolved')),

     reporter_id INT NOT NULL,
    
     created_at TIMESTAMPTZ DEFAULT NOW(),
     updated_at TIMESTAMPTZ DEFAULT NOW(),

     CONSTRAINT fk_reporter
       FOREIGN KEY (reporter_id)
       REFERENCES users(id)
       ON DELETE CASCADE
   );
 `;

 export const initDB = async (): Promise<void> => {
   try {
     await pool.query(createUsersTable);
     await pool.query(createIssuesTable);

     console.log("Database initialized successfully");
   } catch (error) {
     console.error("Database initialization failed:", error);
//   }
// };