import Urlap from "../view/Urlap.js";
import Model from "../model/Model.js";
import Megjelenit from "../view/Megjelenit.js";

class Controller {
    constructor() {
        const MEGJELENIT_CONTAINER = $(".tarolo");
        const NEW_ITEM_CONTAINER = $(".ujadat");
        /* let todo = window.localStorage.getItem("todo");;

        if (! todo) {
            todo = TODOLIST2;
            window.localStorage.setItem("todo", );
        } */
        const MODEL = new Model();
        new Megjelenit(MODEL.getItems(), MEGJELENIT_CONTAINER);
        new Urlap([{dataName: "tevekenyseg", type : "text"},{dataName : "hatarido", type : "date"}], NEW_ITEM_CONTAINER);

        $(window).on("isDoneListItem", (event) => {
            const id = event.detail;

            let item = MODEL.getItem(id);
            item.kesz = ! item.kesz;
            MODEL.updateItem(id, item);
            new Megjelenit(MODEL.getItems(), MEGJELENIT_CONTAINER);
        });

        $(window).on("removeListItem", (event) => {
            const id = event.detail;

            MODEL.removeItem(id);

            new Megjelenit(MODEL.getItems(), MEGJELENIT_CONTAINER);
        });

        $(window).on("addItem", (event) => {
            const DATAS = event.detail;
            MODEL.addItem(DATAS);
            
            new Megjelenit(MODEL.getItems(), MEGJELENIT_CONTAINER);
        })
    }
}

export default Controller;