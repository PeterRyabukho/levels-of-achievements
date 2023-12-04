export function parseNumberToMoney(money: number) {
    if (money >= 1000 && money < 1000000) {
      return (money / 1000).toFixed(0) + " тыс. ₽";
    } else if (money >= 1000000) {
      return (money / 1000000).toFixed(0) + " млн ₽";
    } else {
      return money.toString() + " ₽";
    }
}