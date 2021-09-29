export default class Database {
    private sqlite = require('sqlite3').verbose();
    private dbName: string;
    protected db: any;

    constructor(dbName = 'data') {
        this.dbName = dbName;
        this.db = this.connection();
        this.createTables(this.db);
    }

    protected connection():any{
        const db = new this.sqlite.Database('./'+this.dbName+'.db', (err: any) => {
            if(err){
                console.log(err);
                return null;
            }
            // else{
            //     console.log("Connected");
            // }
        })
        return db;
        
    }

    protected createTables(db: any){
        const tables = ['CREATE TABLE IF NOT EXISTS post (post_id INTEGER PRIMARY KEY AUTOINCREMENT,'
                            +'title varchar(255) NOT NULL,'
                            +'content TEXT NOT NULL,'
                            +'create_date varchar(50) NOT NULL)',
                            'CREATE TABLE IF NOT EXISTS comment (comment_id INTEGER PRIMARY KEY AUTOINCREMENT,'
                            +'content TEXT NOT NULL,'
                            +'post_id INTEGER NOT NULL, '
                            +'FOREIGN KEY (post_id)' 
                            +'REFERENCES post (post_id))'
                        ]
        for (let i = 0; i < tables.length; i++)
        {
            db.run(tables[i],(err:any) => {
                if(err){
                    console.log(err);
                }
            });
        } 
        
                        
    }


}








// export default abstract class DataProvider {
//     static readonly ROOT_DB_STORE =path.normalize(__dirname + '/../../db/');
//     protected dbStore: nedb;

//     constructor(dbStoreName = 'data') {
//         this.dbStore = new nedb({
//             filename: DataProvider.ROOT_DB_STORE + dbStoreName + '.db'
//         });

//         this.dbStore.loadDatabase((err => {
//             this.onLoadStore(err);
//         }));
//     }

//     protected abstract onLoadStore(err: any): void;

// }
