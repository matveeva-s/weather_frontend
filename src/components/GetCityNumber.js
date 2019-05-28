function GetCityNumber(name) {
    let id;
    switch (name) {
        case "Moscow":
            id = 0;
            break;
        case "London":
            id = 1;
            break;
        case "Paris":
            id = 2;
            break;
        default:
            id = 0;
    }
    return id;
}

export default GetCityNumber;