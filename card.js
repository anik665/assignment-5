let cardCount = 0
let copyCount = 0
function card() {
    document.getElementById('card-items').addEventListener('click', function (e) {
        if (e.target.tagName == 'BUTTON') {
            const button = e.target;
            //    const callBtn= button.parentNode.parentNode.children[5].children[1].innerText; 
            let coinElement=document.getElementById('coin')
            let coin = Number(coinElement.innerText)


            const callBtn = e.target.innerText.trim()
            if (callBtn == 'Call') {
                if(coin>=20){
                  coin=  coin-20
                  coinElement.innerText=coin

                    
                const call = button.parentNode.parentNode.children[3].innerText
                if (call) {
                    alert(`Calling ${call}`
                    
                    )
                    cardCount++  //Number(call) for add the value
                    const callCount = document.getElementById('call-count').innerText = cardCount
                }
                }
                else{
                    alert('You have not enough coin')
                }


            }
            else if (callBtn == 'Copy') {
                copyCount++
                document.getElementById('copy').innerText = copyCount

            }
            console.log(callBtn)
        }
    })
}
card()


// for copy   button functionality
// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const copyBtns = document.querySelectorAll('.copy-btn'); 
    // select all copy buttons

    copyBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            const card = btn.closest('.card-item'); 
            // find the closest card
            const textEl = card.querySelector('.copy-text'); 
            // get the number
            const text = textEl.innerText.trim();

            // Copy to clipboard
            navigator.clipboard.writeText(text)
        });
    });
});
