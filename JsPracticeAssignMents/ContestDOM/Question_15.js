function debounce(func,delay){
    let timeoutId;
    return function(){
        clearTimeout(timeoutId)
        timeoutId = setTimeout(func,delay);
    };
}

function longMessage(){
    console.log("Debounce function called");
}

const debounceFun = debounce(longMessage,200);
debounceFun();
debounceFun();
debounceFun();
