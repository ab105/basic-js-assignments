//problem 1
function seerToMon(seers){
    //input error check
    if(typeof seers != 'number'){
        return 'this input is not acceptable';
    }
    let mon = seers/40;
    return mon;
}
let seer = 160;
let mon = seerToMon(seer);
console.log(mon);


//problem 2
function totalSales(shirt, pant, shoe){

    //input error check
    if(typeof shirt != 'number' || typeof pant != 'number' || typeof shoe != 'number' || shirt<0 || pant<0 || shoe<0){
        return 'it is not acceptable input';
    }

    const perShirtPrice = 100;
    const perPantPrice = 200;
    const perShoePrice = 500;

    //Products calculation
    const shirtsQuantityPrice = shirt*perShirtPrice;
    const pantsQuantityPrice = pant*perPantPrice;
    const shoesQuantityPrice = shoe*perShoePrice;

    //adding all products quantity price

    const totalProductSale = shirtsQuantityPrice + pantsQuantityPrice + shoesQuantityPrice;

    return totalProductSale;
}

const firstSale = totalSales(1,-1,1);
console.log(firstSale);


//problem 3
function deliveryCost(shipment){
    
    //input error check
    if(typeof shipment != 'number' || shipment<0){
        return 'input is not acceptable';
    }

    const deliveryCostForFirst100 = 100;
    const deliveryCostForSecond100 = 80;
    const deliveryCostForRestShipment = 50;
    if(shipment <= 100){ 
        const cost = shipment*deliveryCostForFirst100;
        return cost;
    }
    else if(shipment <= 200){
        const first100DeliveryCost = 100*deliveryCostForFirst100;
        const restShipment = shipment - 100;
        const second100DeliveryCost = restShipment * deliveryCostForSecond100;
        const total = first100DeliveryCost +  second100DeliveryCost ; 
        return total;
    }
    else{
        const firstDeliveryCost = 100 * deliveryCostForFirst100;
        const secondDeliveryCost = 100 * deliveryCostForSecond100;
        const restDelivery = shipment - 200;
        const restShipmentCost = restDelivery * deliveryCostForRestShipment;
        const totalCost = firstDeliveryCost + secondDeliveryCost + restShipmentCost;
        return totalCost;
    }
    
}
const shipmentsCost = deliveryCost(-11);
console.log(shipmentsCost);


//problem 4

function perfectFriend(myfriends){
     
    //input error check
    if(typeof myfriends != 'object' ){
        return 'input is not acceptable';
    }

    let desireFriend = myfriends[0];
    for(let i=0; i<myfriends.length; i++){
       const friend = myfriends[i];
       if(friend.length == 5){
           desireFriend = friend;
           break;
       } 
    }
    return desireFriend;
}
const friends = perfectFriend(['karima', 'rahim ali', 'karim', 'rahim', 'anika']);
console.log(friends);
