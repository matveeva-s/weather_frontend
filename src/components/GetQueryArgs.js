function GetQueryArgs(id) {
    let row;
    switch (id) {
        case 0:
            row = "Moscow,RU";
            break;
        case 1:
            row = "London,UK";
            break;
        case 2:
            row = "Paris,FR";
            break;
        default:
            row = "Moscow,RU";
    }
    return row;
}

export default GetQueryArgs;