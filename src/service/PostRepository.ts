import IRepository from './interface/IRepository';
import Post from '../entity/Post';
import PostData from '../database/postData';

export default class PostRepository implements IRepository<Post>{
    
    protected postData: PostData;

    constructor(){
        this.postData = new PostData();
    }

    async select() {
        return await this.postData.select();
    }

    async selectById(id: number) {
        return await this.postData.selectById(id);
    }

    async insert(entity: Post):Promise<any>{
        let result = await this.postData.insert(entity);
        if(result){
            return true;
        }else{
            return false;
        }
    }

    async delete(id: number) {
        if(await this.postData.delete(id)){
            return true;
        }else
        {
            return false;
        }
    }
    
    

}