import Megjelenit from "./Megjelenit.js";
import { TODOLIST, TODOLIST2 } from "./adatok.js";

$(function() {
    const SZULO_ELEM = $(".tarolo");
    let megjelenites = new Megjelenit(TODOLIST2, SZULO_ELEM);
});