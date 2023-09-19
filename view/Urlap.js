
class Urlap {
    #adat = {};
    #tevekenysegElem;
    #hataridoElem;
    #submitElem;

    constructor(adat, szuloElem) {
        adat.forEach(elem => {
            this.#adat[elem.dataName] = "";
        });

        this.#urlapLetrehoz(adat, szuloElem);

        this.#submitElem = $("#newItemAdd");
        this.#tevekenysegElem = $("#newItem-tev");

        this.#hataridoElem = $("#newItem-date");

        this.#submitElem.on("click", (event) => {
            event.preventDefault();
            this.#adatGyujt();
            this.#kattintasTrigger();
        });
    }

    #adatGyujt() {
        Object.keys(this.#adat).forEach((key) => {
            this.#adat[key] = $(`#newItem-${key}`).val();
        });
    }

    #urlapLetrehoz(adat, szuloElem) {
        let txt = `<form>`

        adat.forEach(elem => {
            txt += `<input type="${elem.type}" label="${elem.dataName}" placeholder="${elem.dataName}" id="newItem-${elem.dataName}"/>`;
        });
        txt += `<button type="submit" id="newItemAdd">Hozzáad</button>
                    </form>`;
        
        szuloElem.html(txt);
    }

    #kattintasTrigger() {
        if (!this.#isValidDatas()) {alert("Ki kéne tölteni rendesen :/"); return;};

        window.dispatchEvent(new CustomEvent("addItem", {detail : this.#adat}));
    }

    #isValidDatas() {
        for (const key in this.#adat) {
            let elem = this.#adat[key];
            if (elem == "" || elem == null) {
                return false;
            }
        }

        return true;
    }

}

export default Urlap;