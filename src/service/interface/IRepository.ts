export default interface IRepository<T>{
    select():T[] | any;
    selectById(id: number):T | any;
    insert(entity: T): any;
    delete(id: number):any;
}