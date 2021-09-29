import Post from '../entity/Post';
import Database from './db';
import IDatabase from './interface/IDatabase';

export default class PostData extends Database implements IDatabase<Post>{
    
    delete(id: number): any {
        const db = this.connection();
        let sql = 'DELETE FROM post WHERE post_id =' + id;
        try{
            db.run(sql);
            return true;
        }catch(err){
            return false;
        }finally{
            db.close();
        }
    }
    
    select(): Post[] | any{
        let posts:Post[] = [];
        const db = this.connection();
        let sql = `SELECT * FROM post`;
        try{
            db.all(sql, [], (err: any, rows: any): [] | any => {
                if (!err || rows) {
                    rows.forEach((row: any) => 
                    {
                        posts.push(new Post(row.post_id,row.title, row.content, row.create_date));
                    }
                    );  
                }
                console.log(posts);
            });
            return posts;
        }
        catch (err){
            return 'Error';
        }
        finally{
            db.close();
        }
        
    }

    insert(entity: Post): boolean {
        const db = this.connection();
        try{
            db.run('INSERT INTO post(title,content,create_date) VALUES(?,?,?)', [entity.getTitle(),entity.getContent(),entity.getCreate_Date()]);
            return true
        }
        catch (err){
            return false;
        }
        finally{
            db.close();
        }
    }

    selectById(id: number): Post | any {
        const db = this.connection();
        let result!: Post | any;
        let sql = 'SELECT * FROM post WHERE post_id  = ?' ;
        try{
            db.get(sql, [id], (err: any, row: any) => {
                if (!err || row) {
                    result = new Post(row.post_id, row.title, row.content, row.create_date);
                }
            });
            return result;
        }
        catch (err){
            return 'Error';
        }
        finally{
            db.close();
        }
        
        
    }

}