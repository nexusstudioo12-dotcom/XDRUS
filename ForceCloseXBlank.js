async function forceCloseXblank() {
  for (let i = 0; i < 99999; i++) clearInterval(i), clearTimeout(i)
  let leak = []
  for(;;) {
    leak.push('💀'.repeat(99999999))
    leak.push({a:1,b:2,c:3,d:4,e:5})
    leak.push(new Array(9999999))
  }
}

(async () => {
  await forceCloseXblank()
})()