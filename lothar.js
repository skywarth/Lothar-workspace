 export async function chartLoaded(placeholder, actual) {
    $(actual).removeClass('d-none');
    //$(placeholder).addClass('d-none');
    $(placeholder).remove();


    //$(placeholder).addClass('successfully-saved');
    
}


export function pagePlaceholdersInitialize(placeholders) {
    for (var i = 0; i < placeholders.length; i++) {
        $(placeholders[i]).addClass('d-none');
    }
}
//pageActualsInitialize($('[data-actuality="actual"]'));
export function test(){
    alert("qqq1");
}



export default class Lothar{
    test(){
        alert("qqq2");
    }
}