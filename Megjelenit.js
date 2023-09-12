import Feladat from "./Feladat.js";

class Megjelenit {
    #szuloElem;
    #TODOLIST;
    #todoContainer;
    #keys;
    constructor(TODOLIST, szuloElem) {
        this.#keys = Object.keys(TODOLIST[0]).filter(key => key != "kesz" && key != "torolve");
        this.#szuloElem = szuloElem;
        this.#htmlBeagyazas();
        this.#todoContainer = $("#todoTable tbody");
        this.#TODOLIST = this.#listaFeltolt(TODOLIST);

        this.#todokMegjelenit();

        $(window).on("listaFrissit", (event) => {

            this.#todokMegjelenit();
            console.log(event.details);
        });
    }

    #todokMegjelenit() {
        this.#todoContainer.html("");
        
        this.#TODOLIST.forEach((todo) => {
            if (!todo.hidden) {
                todo.htmlBeagyaz();
            }
        });
    }

    #listaFeltolt(TODOLIST) {
        let list = [];

        TODOLIST.forEach((todo, index) => {
            list.push(new Feladat(todo, this.#todoContainer, this.#keys));
            list[index].htmlBeagyaz();
        });
        return list;
    }

    #htmlBeagyazas() {
        let txt = `<table class="table" id="todoTable"><tr>`;
        this.#keys.forEach(key => {
            txt += `<th>${key}</th>`;
        });
        
        txt += `</tr>"</table>`;

        this.#szuloElem.html(txt);
        
    }

}

export default Megjelenit;