import { TODOLIST, TODOLIST2 } from "../model/adatok.js";

class Model {
    #list;

    constructor() {
        this.#list = TODOLIST2;      
    }

    getItems() {
        return this.#list;
    }

    getItem(index) {
        return this.#list[index];
    }

    updateItem(index, newData) {
        this.#list[index] = newData;
    }

    removeItem(index) {
        this.#list.splice(index, 1);
    }

    addItem(datas) {
        this.#list.push(datas);
    }
}

export default Model;