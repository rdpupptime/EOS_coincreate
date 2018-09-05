
function pushAction1()  
{
   
      try {
      	var contract = 'eosio.token';
      	var to = $('#inp1').val();
      	var quantity= '3.0000 EOS'
      	var memo = '1-'+ $('#inp1').val() + '-' + $('#inp2').val() + '-' + $('#inp3').val();
        const { contract, to, quantity, memo } = values
        const res = await window.client.transfer(contract, to, quantity, memo)
        alert('Transfer: ' + res)
      } catch (error) {
        alert('Error: ' + error)
      }
    
  }
