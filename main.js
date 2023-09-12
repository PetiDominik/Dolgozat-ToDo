import Megjelenit from "./Megjelenit.js";
import { TODOLIST, TODOLIST2 } from "./adatok.js";

$(function() {
    const SZULO_ELEM = $(".tarolo");
    /* let todo = window.localStorage.getItem("todo");;

    if (! todo) {
        todo = TODOLIST2;
        window.localStorage.setItem("todo", );
    } */
    
    let megjelenites = new Megjelenit(TODOLIST2, SZULO_ELEM);
});