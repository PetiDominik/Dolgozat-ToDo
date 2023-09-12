
class Megjelenit {
    #szuloElem;
    #TODOLIST;
    constructor(TODOLIST, szuloElem) {
        this.#TODOLIST = TODOLIST;
        this.#szuloElem = szuloElem;
        this.#htmlBeagyazas();
    }

    #htmlBeagyazas() {
        let txt = `<table class="table"><tr>`;
        let keys = Object.keys(this.#TODOLIST[0]);
        
        keys.forEach(key => {
            txt += `<th>${key}</th>`;
        });
        
        txt += `</tr>`;

        this.#TODOLIST.forEach(element => {
            let oszlopok = "";
            keys.forEach(key => {
                oszlopok += `<td>${element[key]}</td>`;
            });

            txt += `<tr>
                    ${oszlopok}
                </tr>`;
        });
        txt += "</table>";

        this.#szuloElem.html(txt);
    }
}

export default Megjelenit;