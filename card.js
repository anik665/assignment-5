let cardCount = 0
let copyCount = 0
let history = []
function card() {
    document.getElementById('card-items').addEventListener('click', function (e) {
        if (e.target.tagName == 'BUTTON') {
            const button = e.target;
            //    const callBtn= button.parentNode.parentNode.children[5].children[1].innerText; 
            let coinElement = document.getElementById('coin')
            let coin = Number(coinElement.innerText)


            const callBtn = e.target.innerText.trim()
            if (callBtn == 'Call') {
                if (coin >= 20) {
                    coin = coin - 20
                    coinElement.innerText = coin
                    const headname = button.parentNode.parentNode.children[1].innerText
                    console.log(headname)
                    const name = button.parentNode.parentNode.children[2].innerText
                    console.log(name)
                    const call = button.parentNode.parentNode.children[3].innerText
                    const callIcon =document.getElementById('call-icon').innerHTML




                    if (call) {
                        alert(`${headname}  Calling ${call} ${name}`

                        )

                        
                        //Number(call) for add the value
                      

                        const data = {
                            name: name,
                            number: call,

                            date: new Date().toLocaleTimeString()
                        }
                        history.push(data)
                        const historyCointainer = document.getElementById('history')
                        const div = document.createElement('div')
                        div.innerHTML = `
                         <div
                            class="w-[350px] h-[105px] bg-[#fafafa] p-3 mt-5 rounded-sm flex justify-start gap-3 items-center border border-gray-300">
                            <div class="flex flex-col justify-start">
                                <h4 class="p-2 text-black font-bold">${data.name}</h4>
                                <p class="text-gray-500 p-2">${data.number}</p>
                            </div>
                            <p>${data.date}</p>
                        </div>


                        `
                        historyCointainer.appendChild(div)
                    }
                }
                else {
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
document.addEventListener('DOMContentLoaded', function () {
    const copyBtns = document.querySelectorAll('.copy-btn');
    // select all copy buttons

    copyBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
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

let historyCointainers = document.getElementById('history')
document.getElementById('history-btn').addEventListener('click', function () {
    console.log('history')

    history = []
    historyCointainers.innerHTML = ''
})
const heart = document.querySelectorAll('.fa-heart')
heart.forEach(function (hbtn) {
    hbtn.addEventListener('click', function () {
        cardCount++
          const callCount = document.getElementById('call-count').innerText = cardCount
        console.log('click heart')
    })

})
 const callIcon =document.getElementById('call-icon').innerText 
 console.log(callIcon)
function customAlert(call, name) {
  const icon = document.getElementById("call-icon").innerHTML;

  // custom popup বানানো
  const popup = document.createElement("div");
  popup.innerHTML = `
    <div style="padding:20px; background:#fff; border-radius:10px; box-shadow:0 2px 10px rgba(0,0,0,0.3); text-align:center;">
      ${icon}
      <p style="margin-top:10px; font-size:18px;">Calling ${call} ${name}</p>
      <button onclick="this.parentElement.remove()" style="margin-top:10px; padding:5px 10px; border:none; background:#00a63e; color:#fff; border-radius:5px;">OK</button>
    </div>
  `;

  // body তে যোগ করা
  document.body.appendChild(popup);
}
