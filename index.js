function superbowlWin(objArray){
    const found = objArray.find(gameObj => gameObj.result == "W")
    if (found === undefined){
        return undefined;
    }
    else return found.year;
}