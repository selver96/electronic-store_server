import Database from './db';
import IDatabase from './interface/IDatabase';
import Comment from '../entity/Comment';

export default class CommentData extends Database implements IDatabase<Comment>{
    select() {
        throw new Error('Method not implemented.');
    }

    selectById(id: number) {
        throw new Error('Method not implemented.');
    }

    insert(entity: Comment): boolean {
        const db = this.connection();
        try{
            db.run('INSERT INTO comment(content,post_id) VALUES(?,?)', [entity.getContent(), entity.getPost_Id()]);
            return true
        }
        catch (err){
            return false;
        }
        finally{
            db.close();
        }
    }

    delete(id: number) {
        throw new Error('Method not implemented.');
    }
    
    

}