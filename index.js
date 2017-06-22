window.addEventListener('load', function(){
  if(typeof web3 === 'undefined'){
    web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io'));
    // alert('Please Download Metamask')
    //disable everything
  }else{

    contractAddress = '0x22e29edf0979b25d3ec3baaf8b16dd92ea44b004';
    abi = [{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"}]

    schruteBucks = web3.eth.contract(abi).at(contractAddress);
    // setTimeout(getAddresses, 500); //why do I need this?
    // getAddresses() //instead of this? Which returns the array with only first element! WTF
    // getAccount()
    getBalance()
    // web3.version.getNetwork(function(e,r){
    //   if(r == 1){
    //     console.log("MAINNET");
    //   }else{
    //     alert("Please Connect Metamask to Ethereum Main Net");
    //   }
    // })
  }
})
getBalance = function(){
  web3.eth.getAccounts(function(e, accounts){
      if(accounts && accounts.length > 0){
        console.log('ACCOUNT: ', accounts[0])
        // var userAddress = accounts[0];
        schruteBucks.balanceOf.call(accounts[0],function(e,balance){
          if(balance){ 
            console.log('BALANCE: ', balance)
            document.getElementById('balance').innerHTML = balance.toNumber();

          }else{
            console.log(e)
          }
        })
      }else{
        console.log(e)
        alert("Please open metamask")
      }
    })
}
