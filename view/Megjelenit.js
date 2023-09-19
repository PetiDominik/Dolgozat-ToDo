import Feladat from "./Feladat.js";

class Megjelenit {
    #szuloElem;
    #todoContainer;
    #keys;

    constructor(TODOLIST, szuloElem) {
        this.#keys = Object.keys(TODOLIST[0] || []).filter(key => key != "kesz" && key != "torolve");
        this.#szuloElem = szuloElem;
        this.#tableInsert();
        this.#todoContainer = $("#todoTable tbody");

        TODOLIST.forEach((item, index) => {
            new Feladat(index, item, this.#todoContainer, this.#keys);
        });
        
    }

    #tableInsert() {
        let txt = `<table class="table" id="todoTable"><thead><tr>`;
        this.#keys.forEach(key => {
            txt += `<th>${key}</th>`;
        });
        /*<i class="fa fa-plus fa-2x" title="Új elem hozzáadása"></i>*/
        txt += `<th>
                    
                </th></tr></thead><tbody></tbody></table>`;

        this.#szuloElem.html(txt);
    }

}

export default Megjelenit;