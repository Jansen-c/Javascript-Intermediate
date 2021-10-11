// dibawah ini merupakan history transasksi yang telah kalian lakukan
const items = [
    {
      btc: { buy: 10, sell: 9 },
      eth: { buy: 8, sell: 7.5 },
      doge: { buy: 7, sell: 6.5 },
      day: 1,
    },
    {
      btc: { buy: 9, sell: 5 },
      eth: { buy: 7, sell: 4 },
      doge: { buy: 6, sell: 3 },
      day: 2,
    },
    {
      btc: { buy: 5, sell: 10 },
      eth: { buy: 4, sell: 6 },
      doge: { buy: 3, sell: 4 },
      day: 3,
    },
  ];
  
  const calculateIncome = (items) => {
    /// EDIT DOWN HERE
    // console.log(items.length)
  // console.log(items[0].btc.buy)
  let bitcoinBuy =[],bitcoinSell =[], ethBuy =[], ethSell = [], dogeBuy = [], dogeSell = []
  let k = 0, l = 0, k1 = 0, l1=0, k2 = 0, l2 = 0
  for(let i=0; i<items.length; i++){
  
    bitcoinBuy.push(items[i].btc.buy)
    bitcoinSell.push(items[i].btc.sell)
  
    ethBuy.push(items[i].eth.buy)
    ethSell.push(items[i].eth.sell)
  
    dogeBuy.push(items[i].doge.buy)
    dogeSell.push(items[i].doge.sell)
  
    // k += items[i].btc.buy
    // l += items[i].btc.sell
  
    // k1 += items[i].eth.buy
    // l1 += items[i].eth.sell
  
    // k2 += items[i].doge.buy
    // l2 += items[i].doge.sell
  }
  
  // console.log(bitcoinBuy,bitcoinSell)
  // console.log(ethBuy,ethSell)
  // console.log(dogeBuy,dogeSell)
  
  let arrAngka = [1, 2, 3, 4, 5];
  
  let bitcoinBeli  = bitcoinBuy.reduce((total, value) => {
    return total + value;
  },); 
  let bitcoinJual  = bitcoinSell.reduce((total, value) => {
    return total + value;
  },); 
  
  let ethBeli  = ethBuy.reduce((total, value) => {
    return total + value;
  },);
  let ethJual  = ethSell.reduce((total, value) => {
    return total + value;
  },); 
  
  let dogeBeli  = dogeBuy.reduce((total, value) => {
    return total + value;
  },);
  let dogeJual  = dogeSell.reduce((total, value) => {
    return total + value;
  },); 
  
  
  // console.log(bitcoinBeli);
  // console.log(bitcoinJual);
  let xx = bitcoinJual - bitcoinBeli
  
  // console.log(ethBeli);
  // console.log(ethJual);
  let yy = ethJual - ethBeli 
  
  // console.log(dogeBeli);
  // console.log(dogeJual);
  let zz = dogeJual - dogeBeli
  
  const cuan = new Object();
  cuan.btc = xx ;
  cuan.eth = yy;
  cuan.doge = zz;
  // console.log(cuan)
  
  
  // console.log(k,l)
  // console.log(l-k)
  // console.log(k1,l1)
  // console.log(l1-k1)
  // console.log(k2,l2)
  // console.log(l2-k2)
  
  return cuan
  }
  
  
  console.log(calculateIncome(items))
  