
function totalPriceUber(serviceType, distance )   {
    let price = 0;
    let totalPrice = 0;

    if (serviceType === "UberX")
    {
        price = 5;
        totalPrice = distance * price;
        return totalPrice;
    } else if (serviceType === "UberY") {
        price = 10;
        totalPrice = distance * price;
        return totalPrice;
    } else if (serviceType === "UberQ") {
        price = 15;
        totalPrice = distance * price;
        return totalPrice;
    } else {
        return "this is not a valid choise";
    }
}

console.log(totalPriceUber("UberX", 100));

let price = 0;
let totalPrice = 0;
const serviceType = "Uber";
const distance = 100;

switch (serviceType)    {
    case "UberX":
        price = 5;
        totalPrice = distance * price;
        break;
    case "UberY":
        price = 15;
        totalPrice = distance * price;
        break;
    case "UberZ":
        price = 25;
        totalPrice = distance * price;
        break;
    default: "This is not a valid entry";
}

console.log("Your taxi ride with Uber amounts to euro " + totalPrice);

function totalCostUberRide((service, distance)  {

    let price = 0;
    let totalPrice = 0;

    switch (service)  {
        case "UberX":
            price = 5;
            break;
        case "UberY":
            price = 15;
            break;
        case "UberZ":
            price = 25;
            break;
        default:
            price = "not a service";
    }
    return totalPrice = price * distance;

});

console.log(totalCostUberRide("UberX", 100));






