function booWho(bool) {

    // What is the new fad diet for ghost developers? The Boolean.
    if (bool <= 0 | bool === -0 | bool === null | bool === false, isNaN(bool) | bool=== undefined | bool === "" | typeof bool === "number"){
        return false;
    }
    else{
        return true;
    }
}

booWho(1);