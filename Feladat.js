
class Feladat {
    #feladatAdatok;
    #htmlKod;
    #szuloElem;
    #keys;

    constructor(feladat, szuloElem, keys) {
        this.#feladatAdatok = feladat;
        this.#szuloElem = szuloElem;
        this.#keys = keys;
    }
    #htmlKodLetrehoz() {
        let oszlopok = "";
        let element = this.#feladatAdatok;

        this.#keys.forEach(key => {
            let text = element[key] || "-";
            oszlopok += `<td>${text}</td>`;
        });
            
        let txt = `<tr class="` + (element.kesz ? "kesz" : "") +`">
                ${oszlopok}
                <td>
                ` + (element.kesz ? `<i class="fa fa-remove fa-2x"></i>` : `<i class="fa fa-check fa-2x"></i>`)
                + `<i class="fa fa-trash fa-2x"></i>
                </td>
            </tr>`;

        this.#htmlKod = txt;
    }

    htmlBeagyaz() {
        this.#htmlKodLetrehoz();
        this.#szuloElem.append(this.#htmlKod);
        
        /* console.log(this.#szuloElem.children("tr:last-child .fa-check")); */
        this.#szuloElem.children("tr:last-child").children("td:last-child").children(".fa-check").on("click", (event) => {
            this.setKesz(true);
            this.#dispatch();
        });
        
        this.#szuloElem.children("tr:last-child").children("td:last-child").children(".fa-remove").on("click", (event) => {
            this.setKesz(false);
            this.#dispatch();
        });
    }

    #dispatch() {
        const EVENT = new CustomEvent("listaFrissit",{detail : this});

        window.dispatchEvent(EVENT);
    }

    setKesz(bool) {
        this.#feladatAdatok.kesz = bool;
    }
}

export default Feladat;