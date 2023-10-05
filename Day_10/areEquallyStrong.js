var areEquallyStrong = function (yourLeft, yourRight, friendLeft, friendRight) {
    var sumPowerYou = yourLeft + yourRight;
    var sumPowerFriend = friendLeft + friendRight;
    sumPowerYou === sumPowerFriend ? true : false;
};
console.log(areEquallyStrong(10, 15, 15, 10));
