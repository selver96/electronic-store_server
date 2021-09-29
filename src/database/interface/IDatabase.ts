export default interface IDatabase<T>{
    select():T[] | any;
    selectById(id: number):T | any;
    insert(entity: T): boolean;
    delete(id: number): any;
}