import PouchDB from 'pouchdb';

export default class DB {
    
    constructor() {
        this.db = new PouchDB('helloworld');
    }

    async getAllDocuments() {
       let documents = [];
       let allTasks = await this.db.allDocs({
            include_docs: true
        });
        allTasks.rows.forEach(item => documents.push(item.doc));

       return documents;
    }

    async addUpdateDocument(obj) {
        try {
           let item = await this.db.put({...obj});
            console.log('item added',item)
           return item;
        } catch (err) {
            console.log(err);
        }
    }


}
