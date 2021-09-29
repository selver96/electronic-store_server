import IRepository from './interface/IRepository';
import Comment from '../entity/Comment';

export default class CommentRepository implements IRepository<Comment>{
    select() {
        throw new Error('Method not implemented.');
    }
    selectById(id: number) {
        throw new Error('Method not implemented.');
    }
    insert(entity: Comment): any {
        throw new Error('Method not implemented.');
    }
    delete(id: number) {
        throw new Error('Method not implemented.');
    }

}