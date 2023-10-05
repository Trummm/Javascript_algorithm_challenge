const areEquallyStrong = (
  yourLeft: number,
  yourRight: number,
  friendLeft: number,
  friendRight: number
) => {
  const sumPowerYou = yourLeft + yourRight
  const sumPowerFriend = friendLeft + friendRight

  sumPowerYou === sumPowerFriend ? true : false
}
