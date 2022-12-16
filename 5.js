function countOnline(usersObj) {
    // Only change code below this line
    let numOfUser = 0;
    for (let user in usersObj) {
        if(usersObj[user].online){
            numOfUser++;
        }
    }
    return numOfUser;
    // Only change code above this line
}