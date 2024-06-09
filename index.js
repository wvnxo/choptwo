const config = {

    token: "",//  توكن بوتك

    Admin: "",//ايدي رتبه الصلاحيات

    

    line: "",//  رابط الخط

prefix:"ˑ∾「🛒」",//بدايه اسم المتاجر
    log: "",//لوق كلمات مو مشفره
    tax: "",// روم ضريبه لو ما تبي خليه فاضي
commandlog:  "",//ايدي روم لوق الأوامر
words: [
    'بيع',

    'شراء',

    'سعر',

    'عرض',

    'هاك',

    'فيزا',

    'مطلوب',

    'كرديت',

    'متوفر',

    'حساب',

    'شوب',

    'خاص',

    'مقابل'

],// الكلمات الي تجي بلوق التشفير (تقدر تزود او تشيل او تعدل لو تبي) 
    button1 : "",//اسم نوع المتجر الأول
    button2: "",//اسم نوع المتجر الثاني
    button3:"",//اسم نوع المتجر الثالث
button4:"",//اسم نوع المتجر الرابع
  button5:"",//اسم نوع المتجر الخامس
     
bank: "",//البنك الي يتحوله
    probot: ""  ,//ايدي بروبوت
    
 catagory: ""  , // ايدي كاتاغوري تكتات بيع المتاجر
info:  "", //رابط صوره انفو تكت شراء المتاجر لو ما عندك لا تحط شي
shop1 :"",//ايدي كاتاغوري نوع المتجر الأول
    shop2:"",//ايدي كاتاغوري نوع المتجر الثاني
    shop3:"",//ايدي كاتاغوري نوع المتجر الثالث
    shop4:"",//ايدي كاتاغوري نوع المتجر الرابع
    shop5:"", //ايدي كاتاغوري نوع المتجر الخامس
here:"",//سعر منشن الهير
    every:"" //سعر منشن افري 
};
const transfer = config.bank
const { QuickDB, JSONDriver } = require("quick.db");
const jsonDriver = new JSONDriver();
const db = new QuickDB({ driver: jsonDriver });
const fs = require('fs')
const {Client, REST, Routes, Collection, PermissionsBitField} = require('discord.js')
const {EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, ApplicationCommandOptionType, ChannelType, ActivityType, InteractionResponseType, TextInputStyle, ModalBuilder,TextInputBuilder,ComponentType,
 PermissionOverwriteFlags, permissionOverwrites, StringSelectMenuBuilder, Events, TextChannel} = require("discord.js");
const {PermissionFlagsBits} = require("discord.js")
const { google } = require('googleapis');
const axios = require('axios');
const express = require('express')
const app = express()
let shrole = `1121776569929707610`
app.get('/', (req, res) => res.send('hi'))
app.listen(4000, () => console.log('app is ready'))
const { QuantumDB } = require('qd.db');
const ms = require('ms');






const dbb = new QuantumDB('index.json');//Specify a file to be the database 
const client = new Client({
    intents: 3276799
})
const types = require('./types.js')
client.types = types
function choices() {
  const ch = []
  for (const t of types) {
    ch.push({
      name: t.name,
      value: t.id
    })
  }
  return ch;  
}
const chsd = choices();
client.commands1 = new Collection();
client.on('channelCreate', async ch => {
  if (ch.type == ChannelType.GuildText) {
    if (ch.parentId) {
      const type = await types.find(x => x.id === ch.parentId)
      if (type) {
        await db.set(`shop_${ch.id}`, {
          id: ch.id,
          type: type.id,
      shop: type.shop, 
            here: type.here,
          every: type.every
        })
      }
    }
  }
})





            
               
                

                        
           
                    
                                    
                                    
                                       
                                        
                            
        
   
                                    
                     const prefixs = '!';
const TICKET_CATEGORY_ID = '1240719874100301898'; // استبدل بأيدي الكاتيجوري المراد إنشاء التذاكر فيه

const BOT_ID = '1174351872186912908'; // استبدل بأيدي البوت الذي تريد التحقق من رسائله
const REQUIRED_ROLE_ID = '1240719862138146917'; // استبدل بأيدي الرتبة المطلوبة

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});


                

    
                
                        
                                    
                            
                        
        
const j = '-'
    
            client.on('messageCreate', async message => {
    if (!message.guild) return;
    if (message.author.bot) return;

    if (!message.content.startsWith('-')) return;

    const args = message.content.slice(j.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    switch (command) {
        case 'منشنات': {
            let shop = message.channel;
            try {
                const shopData = await db.get(`shop_${shop.id}`);
                if (shopData) {
        
    const rowz = new ActionRowBuilder()

          .addComponents(new ButtonBuilder()

            .setCustomId('mention')

            .setLabel('شراء منشنات')

            .setStyle(ButtonStyle.Primary)

     //       .setEmoji('<:emoji_6:1210577098339516436>')

          )

        

                          
                    
                    message.reply({

    content: `**<a:1_:1245788601799934013> \`•\` everyone: ${shopData.every || 0}\n<a:1_:1245788601799934013> \`•\` here: ${shopData.here || 0}\n<a:1_:1245788601799934013> \`•\` shop: ${shopData.shop || 0}  **`,

    files: [config.line], 
                  components: [rowz]      

});
                } 
                if (!shopData) {
                    return; 
                }
            } catch (error) {
                console.error(error);
                message.reply("حدثت مشكلة ما.");
            }
            break;
        }
        // يمكنك إضافة حالات إضافية هنا للأوامر الأخرى
        default:
            break;
    }
});



 

            // إرسال رسالة إذا تضمنت الرسالة أي من الكلمات

           



const path = 'index.json'; 
let dataaa = JSON.parse(fs.readFileSync(path, 'utf8'));

const dataa = fs.readFileSync('index.json');

const keywords = config.words;

// قراءة بيانات القنوات من ملف index.json



client.on('messageCreate', async (message) => {
    if (message.author.bot) return;
const shoppp  = await db.get(`shop_${message.channel.id}`) 
    if (shoppp) {
        const foundKeywords = keywords.filter(word => message.content.includes(word));
        if (foundKeywords.length > 0) {
            const embed = new EmbedBuilder()
                .setTitle('تم العثور على كلمة غير مشفره')
                .setColor('#FF0000')
                .addFields(
                    { name: 'الكلمات غير مشفره:', value: foundKeywords.join(', ') },
                    { name: 'صاحب الرسالة:', value: `<@${await message.author.id}>` },
                    { name: ':الرسالة', value: message.url },
                    { name: 'الروم:', value: message.channel.url }
                );

            const actionRow = new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                        .setCustomId('admin_button')
                        .setLabel('اضغط لاستلام التحذير')
                        .setStyle(ButtonStyle.Primary)
                );

            const channelToSendId = config.log;
            const channelToSend = await message.guild.channels.fetch(channelToSendId);
            channelToSend.send({ content: '@everyone', embeds: [embed], components: [actionRow] }).then(sentMessage => {
                const filter = (interaction) => interaction.customId === 'admin_button' && interaction.message.id === sentMessage.id;
                const collector = sentMessage.createMessageComponentCollector({ filter, componentType: ComponentType.Button });

                collector.on('collect', async interaction => {
                    const newEmbed = new EmbedBuilder()
                        .setTitle('تم استلام التحذير')
                        .setColor('#00FF00')
                        .setDescription(`تم استلام التحذير بواسطه  <@${await interaction.user.id}>`);

                    const newActionRow = new ActionRowBuilder()
                        .addComponents(
                            new ButtonBuilder()
                                .setCustomId('admin_button')
                                .setLabel(`تم استلام التحذير بواسطة ${ await interaction.user.username}`)
                                .setStyle(ButtonStyle.Primary)
                                .setDisabled(true)
                        );

                    await interaction.update({ embeds: [newEmbed], components: [newActionRow] });
                    db.add(`shop_${message.channel.id}.warns` , 1)
                    const emb = {

      title: `تـم تـحـذيـر الـمـتـجـر `,

      description: `${message.channel.url} `,

      fields: [

     {

          name: 'الـسـبـب: ',

          value: `عـدم تـشـفـيـر الـكـلـمـات الٱتـيـه  :  ${foundKeywords.join(', ')} `,

          inline: true

        }

          
        

      ],

      

      footer: {

        text: `Dev By : itadori & ra3d`,

      },

      timestamp: new Date(),

    };
const owner = await db.get(`shop_${message.channel.id}`) 
 message.channel.send({embeds:[emb]}) 
     const shopDatta = await db.get(`shop_${message.channel.id}`);
               
               

    
                });
            }).catch(console.error);
        }
    }
});





 

   

const prefix = "!"; 

const replace = [
  { word: "متوفر", replace: "مـ.ـتوفر" },
  { word: "بيع", replace: " بــيـ,ــع " },
  { word: "شوب", replace: "شـ,ــوب" },
  { word: "ديسكورد", replace: "ديس_ورد" },
  { word: "تبادل", replace: "تبا1دل" },
  { word: "توكن", replace: "ت9كن" },
  { word: "بوست", replace: "ب9ست" },
  { word: "توكنات", replace: "ت9كنات" },
  { word: "بوستات", replace: "ب9ستات" },
  { word: "حساب", replace: "حسـ,ــاب" },
  { word: "حسابات", replace: "حس1ب1ت" },
  { word: "نتفيلكس", replace: "ن$$فيلكس" },
  { word: "اون", replace: "ا9ن" },
  { word: "متجر", replace: "متجr" },
  { word: "حساب", replace: "7ساب" },
  { word: "سعر", replace: "سـعـ,ــر" },
  { word: "مطلوب", replace: "مـ.ـطلوب" },
  { word: "دولار", replace: "دولاr" },
  { word: "سيرفر", replace: "سيرفr" },
  { word: "روبوكس", replace: "ر9بوكس" },
  { word: "نيترو", replace: "نيتر9" },
{ word: "خاص", replace: " خـ,ــاص" }  
];

client.on("messageCreate", async message => {
  if (message.content.startsWith(prefix + "تشفير")) {
    if (!message.member.permissions.has(PermissionsBitField.Flags.Administrator)) return;

    const embed = new EmbedBuilder()
      .setTitle("تشفير")
      .setDescription("**أضـغـط عـلـي الـزر بـالأسـفـل 👇 لـتـشـفـيـر مـنـشـورك**")
      .setThumbnail(message.guild.iconURL());

    const row = new ActionRowBuilder()
      .addComponents(
        new ButtonBuilder()
          .setStyle(ButtonStyle.Secondary)
          .setLabel("تـشـفـيـر")
          .setCustomId('replace')
      );

    message.channel.send({ embeds: [embed], components: [row] });
  }
});

client.on("interactionCreate", async i => {
  if (!i.isButton()) return;
  if (i.customId === "replace") {
    const modal = new ModalBuilder()
      .setTitle('تشفير')
      .setCustomId('rep');

    const replacer = new TextInputBuilder()
      .setCustomId('replacetext')
      .setLabel('الـمـنـشـور')
      .setMaxLength(2000)
      .setRequired(true)
      .setStyle(TextInputStyle.Paragraph);

    const rows = [replacer].map(component => new ActionRowBuilder().addComponents(component));
    modal.addComponents(...rows);
    await i.showModal(modal);
  }
});

client.on("interactionCreate", async i => {
  if (!i.isModalSubmit()) return;
  if (i.customId === "rep") {
    let text = i.fields.getTextInputValue('replacetext');
    let replaced = false;

    replace.forEach(t => {
      const regex = new RegExp(t.word, 'g');
      if (regex.test(text)) {
        text = text.replace(regex, t.replace);
        replaced = true;
      }
    });

    if (replaced) {
      await i.reply({ content: '**تم بنجاح تشفير منشورك**:```' +  text + '```', ephemeral: true });
      
    } else {
      await i.reply({ content: "**يـوجـد خـطـأ(قـد يـكـون مـنـشـورك مـشـفر)**", ephemeral: true });
    }
  }
});


 
  




  


client.on('messageCreate', async m => {
  if (!m.guild) return;
  if (m.author.bot) return;
       let data = await db.get(`shop_${m.channel.id}`)
       if (data) {
         if (m.content.includes('@everyone')) {
           if (data.every <= 0) {
             m.reply(`**تم قفل المتجر**`)
             await m.channel.permissionOverwrites.edit(m.guild.roles.everyone, {
               ViewChannel: false,
             })
           } else {
             data.every = data.every - 1;
             await db.set(`shop_${m.channel.id}`,data)
           }
         }
         if (m.content.includes('@here')) {
           if (data.here <= 0) {
             m.reply(`**تم قفل المتجر**`)
              await m.channel.permissionOverwrites.edit(m.guild.roles.everyone, {
                ViewChannel: false,
              })
            } else {
              data.here = data.here - 1;
           //  console.log(data)
             await db.set(`shop_${m.channel.id}`,data)
}
          }
         if (m.content.includes(config.role)) {
           if (data.shop <= 0) {
             m.reply(`**تم قفل المتجر**`)
              await m.channel.permissionOverwrites.edit(m.guild.roles.everyone, {
                ViewChannel: false,
              })
            } else {
              data.shop = data.shop - 1;
             await db.set(`shop_${m.channel.id}`,data)
            }
          }
      } 
}) 

    
            

          
    
            
                

          

        

      
        


client.on("interactionCreate", async (i) => {
    if (i.isChatInputCommand()) {
    switch (i.commandName) {
  
            

  


case "buyticket":{
    await i.deferReply({ ephemeral: true });
const chann = i.options.getChannel('channel')
    
const {member,guild}  = i; 
if (!member.roles.cache.has(config.Admin)) {

        await i.editReply(`لـيـس لـديـك صـلاحـيـة لإسـتـخـدام هـذا الأمـر تـحـتـاج رتـبـه <@&${config.Admin}>`);

        return;

    }
    const embed = new EmbedBuilder()
          .setTitle('شراء متجر')
          .setDescription('**__قم بالضغط على الزر في الاسفل لشراء متجر__**')
          .setImage(config.info)
          .setColor('#000100');

        const row = new ActionRowBuilder()
          .addComponents(new ButtonBuilder()
            .setCustomId('buy_shop_ticket')
            .setLabel('شراء متجر')
            .setStyle(ButtonStyle.Primary)
            
          );

        if (chann)  {
            
            const uio = i.guild.channels.fetch(chann.id);
 
   if (!uio){
       
   i.editReply('**الـروم غـيـر مـوجـود داخـل الـسـيـرفـر او لـم أسـتـطـع إيـجـاده**')    
       
       } 
        if (uio) {
 chann.send({ embeds: [embed], components: [row] }); 
  i.editReply('**تـم إرسـال الـرسـالـه بـنـجـاح**')   
        }     
        } 
    if (!chann)  {
        
        i.channel.send({ embeds: [embed], components: [row] }) 
        i.editReply('**تـم إرسـال الـرسـالـه بـنـجـاح**') 
        } 
    }break; 


         case "tax": {
    await i.deferReply({ ephemeral: false });

    const option = i.options.get('number');

    if (!option) {
        return i.editReply('**يـجـب ان تـضـع رقـم بـخـيـار number.**');
    }

    let number = option.value;
    const regex = /^[0-9]+([kKmMbB])?$/;

    if (!regex.test(number)) {
        return i.editReply('**يـجـب ان تـحـتـوي الـرسـالـة عـلـى رقـم.**');
    }

    if (number.endsWith('m') || number.endsWith('M')) {
        number = parseFloat(number.slice(0, -1)) * 1000000;
    } else if (number.endsWith('k') || number.endsWith('K')) {
        number = parseFloat(number.slice(0, -1)) * 1000;
    } else if (number.endsWith('b') || number.endsWith('B')) {
        number = parseFloat(number.slice(0, -1)) * 1000000000;
    } else {
        number = parseFloat(number);
    }

    if (isNaN(number)) {
        return i.editReply('**يـجـب ان تـضـع رقـم صـحـيـح بـخـيـار number.**');
    }
         if (number  < 1) {
             
             i.editReply('**يـجـب أن يـكـون الـرقـم اكـبـر مـن او يـسـاوي الـواحـد**') 
 return;         
         } 
let taxwi = Math.floor(number * 20 / 19 + 1);
             let tax2 = Math.floor(number * (20) / (19) + (1) - (number))

let tax3 = Math.floor(tax2 * (20) / (19) + (1))

let tax4 = Math.floor(tax2 + tax3 + number );
            let num = taxwi - number
    return i.editReply(`** 💳 الـمـبـلـغ **  :  **__${number}__** \n ** 💰  الـضـريـبـة **  :  **__${num}__** \n ** 💵 الـمـبـلـغ مـع   الـضـريـبـة**  :  **__${taxwi}__** \n ** 💵 الـمـبـلـغ مـع ضـريـبـة الـوسـيـط **  : **__${tax4}__**`);
} break;

        
        
       case "add-mentions": {
    await i.deferReply({ ephemeral: true });
    let shop8 = i.options.getChannel('shop');
    let data8 = await db.get(`shop_${shop8.id}`);
    let everyone = i.options.getNumber('everyone'); // للحصول على القيمة كرقم
    let here = i.options.getNumber('here'); // للحصول على القيمة كرقم
    // 
           let shopm = i.options.getNumber('shop_mentions');
    const { guild, member } = i;

    if (!member.roles.cache.has(config.Admin)) {
        await i.editReply(`لـيـس لـديـك صـلاحـيـة لإسـتـخـدام هـذا الأمـر تـحـتـاج رتـبـه <@&${config.Admin}>`);
        return;
    }

    if (!data8) {
        await i.editReply({ content: `** هـذة الـروم لـيـسـت مـتـجـرا **` });
        return;
    }

    if (data8) {
        db.add(`shop_${shop8.id}.every`, everyone || 0);  // تأكد من أن everyone رقم وليس undefined
        db.add(`shop_${shop8.id}.here`, here || 0);  // تأكد من أن here رقم وليس undefined
     db.add(`shop_${shop8.id}.shop`,shopm || 0)   
        i.editReply({ content: `** تـم اضـافـه الـمـنـشـنـات بـنـجـاح **` });
const logg = i.guild.channels.cache.get(config.commandlog)
 const embedlog = {

      title: `تـم إضـافـه مـنـشـنـات`,

      description: `الـمـسـؤول : <@${i.user.id}> `,

      fields: [

   {

          name: 'الـمـتـجـر  : ',

          value: `<#${shop8.id}>`,

          inline: true

        },
          
          {

          name: 'عـدد مـنـشـنـات everyone المـضـافـه',

          value: everyone,

          inline: true

        },
          {

          name: 'عـدد مـنـشـنـات here الـمـضـافـه',

          value: here,

          inline: true

        }, 

        
{
      
    name: "عـدد مـنـشـنـات الـمـتـجـر الـمـضـافـه",
 
    value:shopm, 
  
    inline:true
          
    
          
          
          } 
        

      ],

      

      footer: {

        text: `Dev By : itadori&ra3d`,

      },

      timestamp: new Date(),

    };


client.channels.fetch(shop8.id)
            .then(channelc => {
                channelc.send(`**تـم إضـافـه مـنـشـنـات لـلـمـتـجـر ** \n **__${everyone}__** أفـري ون \n **__${here}__** هـيـر \n **__${shopm}__** مـنـشـن مـتـجـر`);
            });
  logg.send({embeds:[embedlog]}) 
    }
} break;

        
   
    
        
        
        case "warn": {
      await i.deferReply({ephemeral : true})
   let reason = i.options.getString('reason')   
          let amount = i.options.getNumber('amount');
      if(amount === 0) return i.editReply({content: `كيف بتزود 0 تحذيرات يعني غبي انت`})
    const proof = i.options.getAttachment('proof');
          let shop = i.options.getChannel('shop')
      shop = i.guild.channels.cache.get(shop.id)
      let data9 = await db.get(`shop_${shop.id}`)
  const shopData = await db.get(`shop_${shop.id}`);
      const { warns }  = shopData
     
      const {guild, member } = i;

             if (!member.roles.cache.has(config.Admin)) {

                await i.editReply(`لـيـس لـديـك صـلاحـيـة لإسـتـخـدام  هـذا الأمـر تـحـتـاج رتـبـه <@&${config.Admin}>`);

                return;

            }
            
      if(!data9){
    await i.editReply({content : `** هـذة الـروم لـيـسـت مـتـجـرا  **`});
    return;
  }
   const embed99 = {

      title: `تـم تـحـذيـر الـمـتـجـر `,

      description: `الـمـسـؤول: <@${i.user.id}>`,

      fields: [

     {

          name: 'عـدد الـتـحـذيـرات',

          value: amount,

          inline: true

        },
          {

          name: 'الـسـبـب:',

          value: reason,

          inline: true

        },

        {

          name: 'الـدلـيـل:',

          value: 'بـالـصـوره',

          inline: true

        }

        

      ],

      image: proof, 

      footer: {

        text: `Dev By : itadori & ra3d`,

      },

      timestamp: new Date(),

    };
            
const embedlog = {

      title: `تـم تـحـذيـر مـتـجـر`,

      description: `الـمـسـؤول : <@${i.user.id}> `,

      fields: [
{

          name: 'المـتـجـر  : ',

          value: `<#${shop.id}>`,

          inline: true

        },
          
     {

          name: 'عـدد الـتـحـذيـرات',

          value: amount,

          inline: true

        },
          {

          name: 'سـبـب الـتـحـذيـر',

          value: reason,

          inline: true

        },

        {

          name: 'الـدلـيـل : ',

          value: "بـالـصـوره",
inline: true
}

        

      ],

      
image: proof, 
      footer: {

        text: `Dev By : itadori & ra3d`,

      },

      timestamp: new Date(),

    };
  if(shop && data9){
    await db.add(`shop_${shop.id}.warns` , amount)
    await i.editReply({content : `**تـم تـحـذيـر الـمـتـجـر ${shop} بـنـجـاح**`})
    await shop.send({embeds :[embed99]} )
  const logg = i.guild.channels.cache.get(config.commandlog)
  logg.send({embeds:[embedlog]}) 
  }
  } break;
      case "unwarn": {
      await i.deferReply({ephemeral : true})
      let amount = i.options.getNumber('amount')
      let shop = i.options.getChannel('shop')
      shop = i.guild.channels.cache.get(shop.id)
      let data = await db.get(`shop_${shop.id}`)
  const {guild, member } = i;

             if (!member.roles.cache.has(config.Admin)) {

                await i.editReply(`لـيـس لـديـك صـلاحـيـة لإسـتـخـدام  هـذا الأمـر تـحـتـاج رتـبـه <@&${config.Admin}>`);

                return;

            }
      if(!data){
    await i.editReply({content : `** هـذة الـروم لـيـسـت مـتـجـرا  **`});
    return;
  }
    if (!data.warns) {
      
   data.warns = "0"     
        } 
          if (data.warns - amount < 0){
    await i.editReply({content : `** بـتـشـيـل ${amount} كـيـف و عـدد تـحـذيـرات المـتـجـر ${data.warns} اصـلا **`});
    return;
}
   const embedlog = {

      title: `تـم إزالـه تـحـذيـر مـتـجـر`,

      description: ` الـمـسـؤول : <@${i.user.id}> `,

      fields: [
{

          name: 'المـتـجـر',

          value: `<#${shop.id}>`,

          inline: true

        },       
     {

          name: ' عـدد التـحـذيـر الـتـي تـم حـذفـهـا',

          value: amount,

          inline: true

        }        

      ],

      

      footer: {

        text: `Dev By : itadori & ra3d`,

      },

      timestamp: new Date(),

    };
          if(shop && data){
   const logg = i.guild.channels.cache.get(config.commandlog)

  logg.send({embeds:[embedlog]}) 
              await db.sub(`shop_${shop.id}.warns` , amount);
    await i.editReply({content : `**تـم ازالـة ${amount} تـحـذيـرات مـن مـتـجـر بـ نـجـاح ${shop}\n عـدد تـحـذيـرات المـتـجـر : ${data.warns}**`})
    await shop.send({content : `**تـم ازالـة ${amount} تـحـذيـرات مـن المـتـجـر \n عـدد تـحـذيـرات المـتـجـر : ${data.warns}**`})
  logg.send({embeds:[embedlog]}) 
    }
  } break;
      case "shop": {
      let type = i.options.get('type').value
      let name = i.options.getString('name')
      let owner = i.options.getUser('owner')
      name = name.replaceAll(' ', '・')
      type = types.find(x => x.id === type) 
      let par = await i.guild.channels.cache.get(type.id)
      owner = i.guild.members.cache.get(owner.id)
    const {guild, member } = i;

             if (!member.roles.cache.has(config.Admin)) {

                await i.reply(`لـيـس لـديـك صـلاحـيـة لإسـتـخـدام  هـذا الأمـر تـحـتـاج رتـبـه <@&${config.Admin}>`);

                return;

            }
          if (!owner) return i.reply({content: '**لـم يـتـم العـثـور عـلـى هـذا الشـخـص**', ephemeral: true})
      let admins = i.guild.roles.cache.get(config.Admin) 
      let role = i.guild.roles.cache.get(type.role)
      if (role) {
        try {
        owner.roles.add(role)
      } catch {}
    }
      if (!par) return i.reply({content:'**لم اتمكن من العثور على كاتقوري هذا النوع**', ephemeral: true})
      await i.deferReply({})
   const {ChannelType} = require('discord.js') 
          const ch = await i.guild.channels.create({
      name: `${config.prefix}${name}`,
      type:ChannelType.GuildText ,
      parent: par,
      permissionOverwrites: [
        { 
          id: owner.id,
          allow: ['SendMessages','MentionEveryone','EmbedLinks','AttachFiles','ViewChannel']
        },
        {
          id: i.guild.roles.everyone,
          deny: ['SendMessages'],
          allow: ['ViewChannel']
        },
        {
          id: admins.id,
          allow: ['SendMessages','MentionEveryone','EmbedLinks','AttachFiles','ViewChannel']
        }
      ]
    })
 let datee = parseInt(Date.now() / 1000) 
      let datecreated = `<t:${datee}:R>`;
    await db.set(`shop_${ch.id}`, {
      owner: owner.id,
      type: type.role,
    shop: type.shop, 
        every: type.every,
      here: type.here,
      date: datecreated
    })
    let data = db.get(`shop_${ch.id}`)
 
    const em5 = {
            title: ` **مـعـلـومـات مـتـجـر : ** `,
            description: `**__ - المـنـشـنـات :__\n\`•\` everyone: ${type.every} \n \`•\` here: ${type.here} \n \`•\` shop: ${type.shop}**`,
            author: {
                name: `${i.guild.name}`,
                icon_url: i.guild.iconURL({ size: 1024 }),
            },
            footer: {
                text: `Dev By : Itadori & ra3d`,
            },
            fields: [
                {
                    name: 'صـاحب المتـجـر',
                    value: `<@${owner.id}>`,
                    inline: true
                },
                {
                    name: 'نـوع المـتـجـر',
                    value: `<@&${type.role}>`,
                    inline: true
                },
                {
                    name: 'مـوعـد انـشـاء المـتـجـر',
                    value: `<t:${datee}:R>`,
                    inline: true
                },
            ],
            timestamp: new Date(),
        };
          const embedlog = {

      title: `تـم إنـشـاء مـتـجـر`,

      description: `الـمـسـؤول : <@${i.user.id}>`,

      fields: [

     {

          name: 'الـمـتـجـر الـذي تـم إنـشـائـه',

          value:  `<#${ch.id}>`,

          inline: true

        },
          {

          name: 'نـوع الـمـتـجـر',

          value:  `<@&${type.role}>`,

          inline: true

        },

        {

          name: 'مـالـك الـمـتـجـر',

          value: `<@${owner.id}>`,
inline: true
}

        

      ],

      

      footer: {

        text: `Dev By : itadori & ra3d`,

      },

      timestamp: new Date(),

    };
    const logg = i.guild.channels.cache.get(config.commandlog)

  
          await ch.send({embeds: [em5]})
    await i.editReply({content : `**تـم انـشـاء المـتـجـر بـ نـجـاح** ${ch}` , embeds : [em5]})
         logg.send({embeds:[embedlog]}) 
          dbb.push('shops',ch.id);
 } break;
      case "mentions": {
    let shop = i.channel
  try {
    const rowzz = new ActionRowBuilder()

          .addComponents(new ButtonBuilder()

            .setCustomId('mention')

            .setLabel('شراء منشنات')

            .setStyle(ButtonStyle.Primary)

     //       .setEmoji('<:emoji_6:1210577098339516436>')

          )

    const shopData = await db.get(`shop_${shop.id}`);
      if (shopData) {
        i.reply({content: `**\`-\`every  \`:\` ${shopData.every || 0}
\`-\` here \`:\` ${shopData.here || 0}
\`shop  \`:\` ${shopData.shop || 0}**`, files: [config.line],components: [rowzz]      });
      }
      if (!shopData) {
        i.reply({content: `**هذا الشات ليس متجرا**`, ephemeral: true , files: [config.line]});
      }
  } catch (error) {
    console.error(error);
    i.reply("حدثت مشكلة ما.");
  }
} break;
      case "shop-data": {
      try {
    
    const shopData = await db.get(`shop_${i.channel.id}`);
    const {every , here , shop , owner , type , date , warns} = shopData
    const em5 = {
            title: ` **مـعـلـومـات مـتـجـر : ${i.channel.name}** `,
            description: `**__ - المـنـشـنـات :__\n\`•\` everyone: ${every} \n \`•\` here: ${here}**`,
            author: {
                name: `${i.guild.name}`,
                icon_url: i.guild.iconURL({ size: 1024 }),
            },
            footer: {
                text: `Dev By : itadori& ra3f`,
            },
            fields: [
                {
                    name: 'صـاحب المتـجـر',
                    value: `<@${owner}>`,
                    inline: true
                },
                {
                    name: 'نـوع المـتـجـر',
                    value: `<@&${type}>`,
                    inline: true
                },
                {
                    name: 'تـحـذيـرات المـتـجـر',
                    value: `${warns || 0}`,
                    inline: true
                },
                {
                    name: 'مـوعـد انـشـاء المـتـجـر',
                    value: `${date}`,
                    inline: true
                },
            ],
            timestamp: new Date(),
        };
    if (shopData) {
        i.reply({content: `مـعـلـومـات مـتـجـر : ${i.channel}`, embeds : [em5]});
      }
    if (shopData === null) {
        i.reply({content: `**هذا الشات ليس متجرا**`, ephemeral: true , files: [config.line]});
      }
  } 
      catch (error) {
        console.error(error);
        i.editReply("حدثت مشكلة ما.");
  }
} break;
      case "warns": {
      try {
    
    const shopData = await db.get(`shop_${i.channel.id}`);
    const {warns} = shopData
    const em5 = {
            author: {
                name: `${i.guild.name}`,
                icon_url: i.guild.iconURL({ size: 1024 }),
            },
            footer: {
                text: `Dev By : itadori&ra3d`,
            },
            fields: [
                {
                    name: 'تـحـذيـرات المـتـجـر',
                    value: `${warns || 0}`,
                    inline: true
                },
            ],
            timestamp: new Date(),
        };
    if (shopData) {
        i.reply({embeds : [em5]});
      }
    if (!shopData) {
        i.reply({content: `**هذا الشات ليس متجرا**`, ephemeral: true , files: [config.line]});
      }
  } 
      catch (error) {
        console.error(error);
        i.editReply("حدثت مشكلة ما.");
  }
    } break;
      case "remove-helper": {
    const { options } = i;
   
          const part = options.getUser("helper");
    const shop = options.getChannel("shop");
    await i.deferReply();
    try {
        const data = await db.get(`shop_${shop.id}`);
        if (!data) return i.editReply("** هـذة الروم لـيـس مسجل كـ مـتـجـر **");
        const existingPartners = data.partners || [];
    const {guild, member } = i;

             if (!member.roles.cache.has(config.Admin)) {

                await i.editReply(`لـيـس لـديـك صـلاحـيـة لإسـتـخـدام  هـذا الأمـر تـحـتـاج رتـبـه <@&${config.Admin}>`);

                return;

            }
        if (!existingPartners.includes(part.id)) {
   let role = i.guild.roles.cache.get("1245778690755919952")   
            return i.editReply(" **هـذا العـضـو لـيـس عـمـيـل فـي هـذا المـتـجـر.** ");
        }
        const shopChannel = await i.guild.channels.fetch(shop.id);
        await shopChannel.permissionOverwrites.delete(part.id);
     const embedlog = {

      title: `تـم إزالـه مـسـاعـد مـن مـتـجـر`,

      description: `الـمـسـؤول : <@${i.user.id}> `,
               fields: [

     {

          name:  "الـمـتـجـر  : ",

          value: `${shop} `,

          inline: true

        },

          {

          name: 'الـمـسـاعـد الـذي تـم إزالـتـه',

          value: `${part}`,

          inline: true

        }

        

        

      ],

      

      footer: {

        text: `Dev By : itadori & ra3d`,

      },

      timestamp: new Date(),

    };
        const updatedPartners = existingPartners.filter(partnerId => partnerId !== part.id);
        const logg = i.guild.channels.cache.get(config.commandlog)

  
        await db.set(`shop_${shop.id}.partners`, updatedPartners);
        await i.editReply(`** الـمـسـاعـد <@${part.id}> تـم ازالـتـه مـن المـتـجـر <#${shop.id}> بـ نـجـاح.**`);
        await shopChannel.send({content: `** تـم ازالـة : <@${part.id}> \n كـ مـسـاعـد مـن المـتـجـر **`});
  logg.send({embeds:[embedlog]}) 
   part.roles.remove(role) 
    } 
  catch (error) {
        console.error(error);
        return i.editReply("وجدت مشكلة اثناء ازاله العميل من المتجر.");
    }
   } break;
      case 'add-helper': {
    const { options } = i;
    const part = options.getUser("helper");
    const shop = options.getChannel("shop");
    const shopChannel = await client.channels.fetch(shop.id);  
    await i.deferReply();
    try {
        const data = await db.get(`shop_${shop.id}`);
        
        const {guild, member } = i;

             if (!member.roles.cache.has(config.Admin)) {

                await i.editReply(`لـيـس لـديـك صـلاحـيـة لإسـتـخـدام  هـذا الأمـر تـحـتـاج رتـبـه <@&${config.Admin}>`);

                return;

            }
        
        if (!data) return i.editReply("** هـذة الـروم لـيـست مسجله كـ مـتـجـر **");
        const existingPartners = data.partners || [];
        if (existingPartners.includes(part.id)) {
            return i.editReply(" **هـذا العـضـو عـمـيـل بـ الفـعـل فـي هـذا المـتـجـر.** ");
        }
        if (data.sellerId === part.id) {
            return 
            i.channel.send(" **هـذا العـضـو هـو صـاحـب المـتـجـر و لا يـمـكـنـك اضـافـتـه كـ عـمـيـل.** ");
        }
      
        const embedlog = {

      title: `تـم إضـافـه مـسـاعـد لـمـتـجـر`,

      description: `الـمـسـؤول : <@${i.user.id}> `,

      fields: [

     {

          name:  "الـمـتـجـر  : ",

          value: `${shop} `,

          inline: true

        },
          {

          name: 'الـمـسـاعـد الـذي تـم إضـافـتـه',

          value: `${part}`,

          inline: true

        }

        

        

      ],

      

      footer: {

        text: `Dev By : itadori & ra3d`,

      },

      timestamp: new Date(),

    };
        
        
        const shopChannel = await i.guild.channels.fetch(shop.id);
        await shopChannel.permissionOverwrites.edit(part.id, {
            ViewChannel: true,
            SendMessages: true,
            EmbedLinks: true,
            MentionEveryone: true,
            AttachFiles: true
        });
        existingPartners.push(part.id);
        await db.set(`shop_${shop.id}.partners`, existingPartners);
        const logg = i.guild.channels.cache.get(config.commandlog)

  let role = i.guild.roles.cache.get('1245778690755919952') 
        
        await i.editReply(`**تـم اضـافـة العـمـيـل <@${part.id}> لـ المـتـجـر <#${shop.id}> بـ نـجـاح.**`);
        await i.editReply({content: `** تـم اضـافـة : <@${part.id}> \n كـ عـمـيـل فـ المـتـجـر ${shopChannel}**`});
shopChannel.send(`تـم إضـافـه ${part} كـ مـسـاعـد بالـمـتـجـر`)
        part.roles.add(role) 
        logg.send({embeds:[embedlog]}) 
    } catch (error) {
        console.error(error);
        return i.editReply("وجدت مشكلة اثناء اتمام العملية.");
    }
      } break;
      case 'r-mentions': {
  const channelssend = i.options.getChannel('channel') ?? i.channel; 
  const imageembed = i.options.getString('image');
 const { member } = i;

             if (!member.roles.cache.has(config.Admin)) {

                await i.editReply(`لـيـس لـديـك صـلاحـيـة لإسـتـخـدام  هـذا الأمـر تـحـتـاج رتـبـه <@&${config.Admin}>`);

                return;

            }
    const channels = await i.guild.channels.fetch();
    await i.reply('**بدات عملية اعادة تعيين المنشنات**');
          

    for (const type of types) {
      for (const [ch,channel] of channels) {
        if (channel.parentId && channel.parentId === type.id) {
          await db.set(`shop_${ch}.every`, type.every)
          await db.set(`shop_${ch}.here`, type.here)
          
        }
      }
    }
     
 const guild = i.guild;
const serverName = guild.name;
const serverIcon = guild.iconURL();
 const roleMention = `@everyone`;

    await channelssend.send({ content:`${roleMention}` , embeds: [new EmbedBuilder()
.setDescription(`**رسـتـرنـا الـمـنـشـنـات كـل يـوم و أنـتـم بـخـيـر**`)
        .setTitle(`** ${serverName} - رسـتـرنـا الـمـنـشـنـات**`)
        .setThumbnail(serverIcon)
        .setImage(imageembed)                                                       
        .setColor('#2196F3')
        .setTimestamp()]

});     
  } break;
      case 'owner': {
    await i.deferReply()
    const interaction = i;
    const shop = interaction.options.getChannel('shop');
    let newOwner = interaction.options.getMember('new-owner');
    try {
        const shopData = await db.get(`shop_${shop.id}`);
     const {guild, member } = i;

             if (!member.roles.cache.has(config.Admin)) {

                await i.editReply(`لـيـس لـديـك صـلاحـيـة لإسـتـخـدام  هـذا الأمـر تـحـتـاج رتـبـه <@&${config.Admin}>`);

                return;

            }
        if (!shopData) {
            return interaction.editReply({ content: 'هـذة الـروم لـيـست مـتـجـرا.', ephemeral: true });
        }
        const oldOwnerId = shopData.owner;
        const oldOwner = interaction.guild.members.cache.get(oldOwnerId);
        if (!newOwner) {
            return interaction.editReply({ content: 'المـالـك الجـديـد غـيـر صـحـيـح.', ephemeral: true });
        }
        if (oldOwnerId === newOwner.id) {
    return interaction.editReply({ content: `هـذا الشـخـص : <@${newOwner.id}> هـو مـالـك المـتـجـر بـالفـعـل.`, ephemeral: true });
}
      const embedlog = {

      title: `تـم تـغـيـيـر مـلـكـيـة مـتـجـر`,

      description: `الـمـسـؤول : <@${i.user.id}> `,

                 fields: [

     {

          name:  "الـمـتـجـر  : ",

          value: `${shop} `,

          inline: true

        },

          {

          name: 'المالـك الـقـديـم',
              value: `<@${oldOwnerId}>`,

          inline: true

        }, 

                     

                     {

          name: 'المالـك الـجـديـد',

          value: `<@${newOwner.id}>`,

          inline: true

        }

        

        

      ],

      

      footer: {

        text: `Dev By : itadori & ra3d`,

      },

      timestamp: new Date(),

    };
        
        const shopp = i.guild.channels.cache.get(shop.id)
        
        await shop.permissionOverwrites.delete(oldOwner.id);
        await shop.permissionOverwrites.edit(newOwner.id, {
            ViewChannel: true,
            SendMessages: true,
            EmbedLinks: true,
            MentionEveryone: true,
            AttachFiles: true
        });
        await db.set(`shop_${shop.id}.owner`, newOwner.id);
        await interaction.editReply({
            content: `تـم نـقـل مـلـكـيـة المـتـجـر :${shop} الـي : ${newOwner}`
        });
   
    const logg = i.guild.channels.cache.get(config.commandlog)
shopp.send(`تـم نـقل مـلـكـيـة الـمـتـجـر \n مـن <@${oldOwner.id}>  \n  إلـي <@${newOwner.id}>`) 

    
  logg.send({embeds:[embedlog]}) 
  
    } 
    catch (error) {
        console.error('Error transferring ownership:', error);
        await interaction.editReply({ content: 'حـدثـت مـشـكـلـة مـا.', ephemeral: true });
    }
} break;
    }
  }
  else if (i.isButton()) {
const member = i.member;
    switch (i.customId) {
  }
  }
});
const commands = [
    {
      name: 'mentions',
      description: 'عـرض مـنـشـنـات مـتـجـر مـعـيـن',
      dm_permission: false,
      default_member_permissions: 1,
    },
    {
      name: 'r-mentions',
      description: 'اعادة تـعـيـيـن مـنـشـنـات المـتـاجـر ',
      dm_permission: false,
      default_member_permissions: 8,
        
        options:[
            {
          name: 'channel',
      description: 'الروم التي تريد ارسال فيها الاشعار',
      type: ApplicationCommandOptionType.Channel,
      required: false,
     channel_types: [ChannelType.GuildText]

            },
              {
                  name: `image`,
                  description: `صورة الأميبد`,
                  type: ApplicationCommandOptionType.String,
                  required: false,
              },
        ]
    },
    {
      name: 'shop-data',
      description: 'عـرض مـعـلـومـات مـتـجـر مـعـيـن',
      dm_permission: false,
      default_member_permissions: 1,
    },
        {
      name: 'warns',
      description: 'عـرض تـحـذيـرات مـتـجـر مـعـيـن',
      dm_permission: false,
      default_member_permissions: 8,
    },
    {
    name: 'owner',
    description: 'change owner of a shop',
    dm_permission: false,
    default_member_permissions: 8,
    options: [
    {
      name: 'shop',
      description: 'المـتـجـر',
      type: ApplicationCommandOptionType.Channel,
      required: true,
    },
    {
      name: 'new-owner',
      description: 'صـاحـب المـتـجـر الجـديـد',
      type: ApplicationCommandOptionType.User,
      required: true,
    }
    ]
    },
    {
    name: 'warn',
    description: 'warn a shop',
    dm_permission: false,
    default_member_permissions: 8,
    options: [
    {
      name: 'shop',
      description: 'المـتـجـر',
      type: ApplicationCommandOptionType.Channel,
      required: true,
    },
    {
      name: 'amount',
      description: 'عـدد التـحـذيـرات',
      type: ApplicationCommandOptionType.Number,
      required: true,
    },
        {

      name: 'reason',

      description:'السبب',

      type: ApplicationCommandOptionType.String,

      required: true,

      

    },
        {

  name: 'proof',

  description: 'دلـيـل الـمـخـالـفـه',

  type: ApplicationCommandOptionType.Attachment,

  required: true,

}
    ]
    },
    {
    name: 'unwarn',
    description: 'unwarn a shop',
    dm_permission: false,
    default_member_permissions: 8,
    options: [
    {
      name: 'shop',
      description: 'المـتـجـر',
      type: ApplicationCommandOptionType.Channel,
      required: true,
    },
    {
      name: 'amount',
      description: 'عـدد التـحـذيـرات',
      type: ApplicationCommandOptionType.Number,
      required: true,
    },
    ]
    },
    {
      name: 'add-helper',
      description: ' اضـافـة مساعد للمـتـجـر ',
      dm_permission: false,
      default_member_permissions: 8,
      options: [
        {
          name: `helper`,
          description: `المـساعد.`,
          type: ApplicationCommandOptionType.User,
          required: true,
        },
        {
          name: `shop`,
          description: ` المـتـجـر.`,
          type: ApplicationCommandOptionType.Channel,
          required: true,
          channel_types: [ChannelType.GuildText]
         }
      ]
    },
    {
      name: 'remove-helper',
      description: ' ازالة مساعد مـن مـتـجـر مـعـيـن ',
      dm_permission: false,
      default_member_permissions: 8,
      options: [
        {
          name: `helper`,
          description: `المساعد.`,
          type: ApplicationCommandOptionType.User,
          required: true,
        },
        {
          name: `shop`,
          description: ` المـتـجـر.`,
          type: ApplicationCommandOptionType.Channel,
          required: true,
          channel_types: [ChannelType.GuildText]
         }
      ]
    }, 
    { 
    name: 'shop',
    description: 'create a shop',
    dm_permission: false,
    admin: true,
    options: [
    {
      name: 'type',
      description: 'نوع المتجر',
      type: ApplicationCommandOptionType.String,
      required: true,
      choices: chsd
    },
    {
      name: 'name',
      description: 'اسم المتجر',
      type: ApplicationCommandOptionType.String,
      required: true,
     // choices: choices()
    },
    {
      name: 'owner',
      description: 'مالك المتجر',
      type: ApplicationCommandOptionType.User,
      required: true,
      //choices: choices()
    } 
    ]
    }, 
{ 
    name: 'add-mentions',

    description: 'إضـافـه مـنـشـنـات لـمـتـجـر',

    dm_permission: false,

    default_member_permissions: 8,

    options:[
    
    {

      name: 'shop',

      description: 'الـمـتـجـر',

      type: ApplicationCommandOptionType.Channel,

      required: true,

      //choices: choices()

    }, 
   {

      name: 'everyone',

      description: 'عـدد مـنـشـنـات everyone',

      type: ApplicationCommandOptionType.Number,

      required: true,

      //choices: choices()

    }, 
{

      name: 'here',

      description: 'عـدد مـنـشـنـات here',

      type: ApplicationCommandOptionType.Number,

      required: true,

      //choices: choices()

    }, 
        {

      name: 'shop_mentions',

      description: 'عـدد مـنـشـنـات الـمـتـجـر',

      type: ApplicationCommandOptionType.Number,

      required: true,

      //choices: choices()

    }
        
] 
}, 
  { 

    name: 'tax', 

    description: 'لـمـعـرفـه الـضـريـبـه لـعـدد مـا',

    dm_permission: false,

    admin: false,

    options: [
        
      {

      name: 'number',

      description:  'الـعـدد',

      type: ApplicationCommandOptionType.String, 

      required: true

      //choices: choices()

    } 
    
    ] 

      }, 
    
     
    { 

    name: 'buyticket',

    description: 'لإرسـال بـنـل (تـكـت)  شـراء مـتـاجـر',

    dm_permission: false,

    default_member_permissions: 8,

    options:[
    
    {

      name: 'channel',

      description: 'الـروم',

      type: ApplicationCommandOptionType.Channel,

      required: false,

      //choices: choices()

    }
    
      ]
           
} 
]; 





client.on('messageCreate', async (message) => {
    if (message.author.bot) return;
     // ضع هنا معرف القناة التي ترغب في تحديدها
    let args = message.content.trim();
    
    if (args.endsWith('m') || args.endsWith('M')) args = args.slice(0, -1) * 1000000;
    else if (args.endsWith('k') || args.endsWith('K')) args = args.slice(0, -1) * 1000;
    else if (args.endsWith('b') || args.endsWith('B')) args = args.slice(0, -1) * 1000000000;
    
    
if (message.channel.id == config.tax) 
    {
    let args2 = parseInt(args);
    if (!args2 || isNaN(args2) || args2 < 1) {
       
        return message.channel.send({
            content: '**يـجـب أن تـحـتـوي الـرسـالـه عـلـي رقـم و ان يـكـون أكـبـر مـن أو يـسـاوي الـواحـد**',
            files: [config.line]
        });
    }
    
    let tax = Math.floor(args2 * 20 / 19 + 1);
        let num = tax  - args2
    let tax2 = Math.floor(args2 * 20 / 19 + 1 - args2);
    let tax3 = Math.floor(tax2 * 20 / 19 + 1);
    let tax4 = Math.floor(tax2 + tax3 + args2);
   
            

    
    await message.reply({
        content: `** 💳 الـمـبـلـغ **  :  **__${args2}__** \n ** 💰  الـضـريـبـة **  :  **__${num}__** \n ** 💵 الـمـبـلـغ مـع   الـضـريـبـة**  :  **__${tax}__** \n ** 💵 الـمـبـلـغ مـع ضـريـبـة الـوسـيـط **  : **__${tax4}__**`,
        files: [config.line]
        
    })
  } 
    });




client.on('ready', async() => {
const rest = new REST().setToken(config.token);
  try {
    console.log(`Started refreshing ${commands.length} application (/) commands.`);


    const data = await rest.put(
      Routes.applicationCommands(client.user.id),
      { body: commands },
    );

    console.log(`Successfully reloaded ${data.length} application (/) commands.`);
  } catch (error) {

    console.error(error);
  }

  
 console.log('logged in as ' + client.user.tag)
})
client.login(config.token)

process.on("unhandledRejection", async e => {

  console.log(e)

})

process.on("uncaughtException", async e => {

  console.log(e)

})

process.on("uncaughtExceptionMonitor", async e => {

  console.log(e)

})

    

    
     

    
    


    



      

    
      
      

          
 

        
        
       
            


    
    
    
        
          


    
    
        

        
        
            

            

              



        

            
        

    
                    
                   
            
                    
            
                    
                
                   

                    

                    

                    



            
     

//______________________________//



  

client.on('interactionCreate', async i => {

  
  const sellerId = await db.get(`shop_${i.channel.id}.owner`)
    
  if (i.isButton()) {
    if (i.customId === 'mention') {
     if (i.user.id === sellerId) {
      
      const modal = new ModalBuilder()
        .setCustomId('mention_modal')
        .setTitle('شراء منشنات');
      const mentionStyle = new TextInputBuilder()
        .setCustomId('amount')
        .setLabel('اكتب عدد المنشنات التي تريد شرائها')
        .setStyle(TextInputStyle.Short)
        .setRequired(true);
      
      const firstActionRow = new ActionRowBuilder().addComponents(mentionStyle);
      modal.addComponents(firstActionRow);
      await i.showModal(modal);
      } 
        if (i.user.id !=sellerId ){
       const embed = new EmbedBuilder()
       .setColor('Red')
      .setTitle('Not Shop Owner')
       .setDescription(`You are not the owner of the shop. the owner is <@${sellerId || 'Not found in the database'}>` )
       await i.reply({ embeds: [embed], ephemeral: true });
    }
    }
  }
  });
client.on('interactionCreate', async i => {
if (i.isModalSubmit()) {
if (i.customId === 'mention_modal') {
const amount = i.fields.getTextInputValue('amount');
if (isNaN(amount)) {
return i.reply({
content: ' **العدد المدخل يجب ان يكون ارقام فقط**',
ephemeral: true
});
}
const embed = new EmbedBuilder()
.setTitle('شراء منشنات')
.setDescription(`**- عزيزي التاجر لقد طلبت شراء منشنات\n- عدد المنشنات : \`${amount}\`\nاختار ادناه نوع المنشنات التي تريد شرائها.**`)
.setImage('https://media.discordapp.net/attachments/1214467003390099498/1214613853988458596/New_girl-02-27_20-57-37-495.png?ex=65f9c04d&is=65e74b4d&hm=0579e7623809e974b4f0b2acf095c43957b6f7117e3d26e5471956c925740479&')
.setFooter({ text: 'Dev by : itadori & ra3d ' })
.setTimestamp();
const row = new ActionRowBuilder()
.addComponents(new ButtonBuilder()
.setCustomId('here'+amount)
.setLabel('منشن هير')
.setStyle(ButtonStyle.Primary))  .addComponents(new ButtonBuilder()
.setCustomId('everyone'+amount)
.setLabel('منشن افري')
.setStyle(ButtonStyle.Primary))
.addComponents(new ButtonBuilder()
.setCustomId('cancel')
.setLabel('الغاء')
.setStyle(ButtonStyle.Danger));
await i.reply({ embeds: [embed], components: [row] });
 

    }
  }
  });
client.on('interactionCreate', async i => {
  const sellerId = await db.get(`shop_${i.channel.id}.owner`)
  
  if (i.isButton()) {
    
if (i.user.id === sellerId) {
  
 if (i.customId.startsWith('here')) {
const amount = i.customId.slice("here".length)      
const price = config.here 
const result = amount * price; 
const tax = Math.floor(result * (20 / 19) + 1);
const embed = new EmbedBuilder()
.setDescription(`لقد اخترت منشنات هير\nالعدد : \`${amount}\`\nالسعر : \`${result}\`
\`\`\`#credit ${transfer} ${tax}\`\`\``)

.setFooter({ text: 'Dev by : itadori & ra3d' })
.setTimestamp();
 const row = new ActionRowBuilder()
.addComponents(new ButtonBuilder()
.setCustomId('here')
.setLabel('منشن هير')
.setStyle(ButtonStyle.Primary)
.setDisabled(true))              .addComponents(new ButtonBuilder()
.setCustomId('everyone')
.setLabel('منشن افري')
.setStyle(ButtonStyle.Danger)
 .setDisabled(true));
await i.update({ embeds: [embed], components: [row],ephemeral:false});
await i.followUp({
  content: `#credit ${transfer} ${tax}`,
ephemeral: false
});
  const filter = ({ content, author: { id } }) => {
        return (
            content.startsWith(`**:moneybag: | ${i.user.username}, has transferred `) &&
            content.includes(`${transfer}`) &&
            id === config.probot &&
            (Number(content.slice(content.lastIndexOf("`") - String(tax).length, content.lastIndexOf("`"))) >= result)
        );
    };
const collector = i.channel.createMessageCollector({ 

      filter,               

      max: 1,

      time: 60000,

    });
    

let iscollected = false;
collector.on("collect", async (collected) => {
  iscollected = true;
  const data = await db.get(`shop_${i.channel.id}`);
  if (data) {
    await db.add(`shop_${i.channel.id}.here`, amount);
    const embedv = new EmbedBuilder()
      .setTitle("تمت عملية الشراء بنجاح")
      .setDescription(
        `تم شراء منشنات هير بنجاح\nالعدد : \`${amount}\`\nالعدد الان : \`${data.here}\``
      )
      .setFooter({ text: "Dev by : itadori & ra3d  " })
      .setTimestamp();
    await i.channel.send({ embeds: [embedv] });
  }
});

collector.on("end", (collected) => {
  if (iscollected) return;
  const embedf = new EmbedBuilder()
    .setTitle("انتهاء الوقت")
    .setDescription("انتهى الوقت لم يتم تحويل المبلغ")
    .setFooter({ text: "Dev by : itadori & ra3d " })
    .setTimestamp();

  i.channel.send({ embeds: [embedf] });
  console.log(`non`);
}); 
}
}
}
});

client.on('interactionCreate', async i => {
  const sellerId = await db.get(`shop_${i.channel.id}.owner`)
  
  if (i.isButton()) {
    
  if (i.user.id === sellerId) {
    
 if (i.customId.startsWith('everyone')) {
const amount = i.customId.slice("everyone".length)      
const price = config.every; 
const result = amount * price; 
const tax = Math.floor(result * (20 / 19) + 1);
const embed = new EmbedBuilder()
.setDescription(`لقد اخترت منشنات افري\nالعدد : \`${amount}\`\nالسعر : \`${result}\`
\`\`\`#credit ${transfer} ${tax}\`\`\``)
.setImage('https://media.discordapp.net/attachments/1214467003390099498/1214613843259560006/New_girl-02-27_20-57-55-614.png?ex=65f9c04a&is=65e74b4a&hm=8e320f6bbf2525da534fa0985b82315b2e2a3b086aa140cecea52e8a170e3caa&')
.setFooter({ text: 'Dev by : itadori & ra3d ' })
.setTimestamp();
 const row = new ActionRowBuilder()
.addComponents(new ButtonBuilder()
.setCustomId('here')
.setLabel('منشن هير')
.setStyle(ButtonStyle.Primary)
.setDisabled(true))              .addComponents(new ButtonBuilder()
.setCustomId('everyone')
.setLabel('منشن افري')
.setStyle(ButtonStyle.Danger)
 .setDisabled(true));
await i.update({ embeds: [embed], components: [row] });
await i.channel.send({
  content: `#credit ${transfer} ${tax}`,
ephemeral: true
});
  const filter = ({ content, author: { id } }) => {
        return (
            content.startsWith(`**:moneybag: | ${i.user.username}, has transferred `) &&
            content.includes(`${transfer}`) &&
            id === config.probot &&
            (Number(content.slice(content.lastIndexOf("`") - String(tax).length, content.lastIndexOf("`"))) >= result)
        );
    };

    
const collector = i.channel.createMessageCollector({ 

      filter,               

      max: 1,

      time: 60000,

    });
let iscollected = false;
collector.on("collect", async (collected) => {
  iscollected = true;
  const data = await db.get(`shop_${i.channel.id}`);
  if (data) {
    await db.add(`shop_${i.channel.id}.every`, amount);
    const embedv = new EmbedBuilder()
      .setTitle("تمت عملية الشراء بنجاح")
      .setDescription(
        `تم شراء منشنات افري بنجاح\nالعدد : \`${amount}\`\nالعدد الان : \`${data.every}\``
      )
      .setFooter({ text: "Dev by : itadori & ra3d " })
      .setTimestamp();
    await i.channel.send({ embeds: [embedv] });
  }
});

collector.on("end", (collected) => {
  if (iscollected) return;
  const embedf = new EmbedBuilder()
    .setTitle("انتهاء الوقت")
    .setDescription("انتهى الوقت لم يتم تحويل المبلغ")
    .setFooter({ text: "Dev by : ra3d & itadori" })
    .setTimestamp();

  i.channel.send({ embeds: [embedf] });
  console.log(`non`);
}); 
}
}
}
});

        
  
    
  



      
            
            
        
            
  



const proTax = require('probot-taxs'); // تأكد من استبدال 'probot-taxs' بالمكتبة الفعلية الخاصة بك





client.on('interactionCreate', async (i) => {
  if (i.isButton()) {
    if (i.customId === 'buy_shop_ticket') {
      const data = await db.get(`buy_shop_ticket_${i.member.id}`);
      if (data) return await i.reply({ content: `**من فضلك عندك تذكره لا يمكنك فتح تذكره اخره - <#${data.channelId}>**`, ephemeral: true });

      await i.deferReply({ ephemeral: true }).catch(() => {});
      await i.editReply({ content: `Please wait ....` });

      const channel = await i.guild.channels.create({
        name: `buy shop ${i.user.tag}`,
        type: ChannelType.GuildText,
        parent: config.catagory,
     topic: "تـكـت شـراء مـتـجـر", 
          permissionOverwrites: [
          {
            id: i.user.id,
            allow: [
              PermissionFlagsBits.AttachFiles,
              PermissionFlagsBits.SendMessages,
              PermissionFlagsBits.ViewChannel,
            ],
          },
          {
            id: i.guild.id,
            deny: [
              PermissionFlagsBits.AttachFiles,
              PermissionFlagsBits.SendMessages,
              PermissionFlagsBits.ViewChannel,
            ],
          },
        ],
      });

      await db.set(`buy_shop_ticket_${i.member.id}`, { userId: i.member.id, channelId: channel.id });

      const embedAboveButtons = new EmbedBuilder()
        .setColor('#000100')
        .setDescription(`**قـم بـإخـتـيـار نـوع الـمـتـجـر مـن الأزرار أدنـاه**`)
        .setFooter({ text: `${i.guild.name}`, iconURL: i.guild.iconURL() })
        .setTimestamp()
        .setAuthor({ name: `${i.guild.name}`, iconURL: i.guild.iconURL() })
        .setImage(config.info);

      const row = new ActionRowBuilder()
        .addComponents(
          new ButtonBuilder()
            .setCustomId('1b')
            .setLabel(config.button1)
            .setStyle(ButtonStyle.Primary)
            .setEmoji('<a:3FA2:1155528950173405204>'),
          new ButtonBuilder()
            .setCustomId('2b')
            .setLabel(config.button2)
            .setStyle(ButtonStyle.Primary)
            .setEmoji('<a:3FA2:1155528950173405204>'),
          new ButtonBuilder()
            .setCustomId('3b')
            .setLabel(config.button3)
            .setStyle(ButtonStyle.Primary)
            .setEmoji('<a:3FA2:1155528950173405204>'),
          new ButtonBuilder()
            .setCustomId('4b')
            .setLabel(config.button4)
            .setStyle(ButtonStyle.Primary)
            .setEmoji('<a:3FA2:1155528950173405204>'),
          new ButtonBuilder()
            .setCustomId('5b')
            .setLabel(config.button5)
            .setStyle(ButtonStyle.Primary)
            .setEmoji('<a:3FA2:1155528950173405204>')
        );

      await channel.send({ content:`<@${i.user.id}>`, embeds: [embedAboveButtons],components:[row]}) 
    
       
        

      await i.editReply({ content: `**-  ..تـم انـشـاء تـذكرتـك بنـجـاح.. 
            - روم التـذكـرة : <#${channel.id}>**`, ephemeral: true });
    } else {
      // Handling shop button clicks with different data
      let data;
      switch (i.customId) {
        case '1b':
          data = { categoryID: config.shop1 };
          break;
        case '2b':
          data = {  categoryID: config.shop2 };
          break;
        case '3b':
          data = {categoryID:  config.shop3 };
          break;
        case '4b':
          data = { categoryID: config.shop4 };
          break;
        case '5b':
          data = { categoryID : config.shop5 };
          break;
           
              
        default:
          return;
      }
      await createShopFromTicket(i, data);
    }
  }
});

async function createShopFromTicket(i, data) {
  const userData = await db.get(`shop_credit_${i.member.id}`);
  if (userData) return await i.reply({ content: `**لا يمكنك شراء متجرين في نفس الوقت.**`, ephemeral: true });
const typei = types.find(t => t.id === data.categoryID);
  const price = typei.price
  const categoryID = data.categoryID;
  const taxs = Math.floor(price * 20 / 19 + 1);

  const choosedShop = i.message.components[0].components.find(c => c.customId === i.customId).label;
  const embed = new EmbedBuilder()
    .setAuthor({ name: i.guild.name, iconURL: i.guild.iconURL() })
    .setTitle(`Choosed Shop: ${choosedShop}\nprice: ${price}`)
    .setDescription(`- <@${i.member.id}>\n\`\`\`ملاحظة: انسخ الرسالة ادناء للتحويل بسرعة لديك 60 ثانية\`\`\``)
    .setTimestamp();

  await i.deferUpdate();
  await i.channel.send({ embeds: [embed] });
  await i.channel.send({ content: `#credit ${transfer} ${taxs}` });
  await db.set(`shop_credit_${i.member.id}`, i.member.id);

  const collectorFilter = m => m.author.bot === true;
  const collector = i.channel.createMessageCollector({ filter: collectorFilter, time: 60000 });

  collector.on('collect', async c => {
    if (c.content.includes(`**:moneybag: | ${i.user.username}, has transferred \`$${price}\` to <@!${config.bank}> **`)) {
      collector.stop('DONE');
    }
  });

  collector.on('end', async (collected, reason) => {
    if (reason === 'DONE') {
      const msg = await i.channel.send({ content: `\`-\` **<@${i.member.id}>\nرجاء قم بكتابة اسم المتجر.**\n\`-\` **__لا يمكنك تغيير الاسم بعد كتابته.__**` });

      const nameCollector = i.channel.createMessageCollector({ filter: m => m.author.id === i.user.id, max: 1, time: 300000 });

      nameCollector.on('collect', async m => {
        
        await db.delete(`buy_shop_ticket_${i.member.id}`);
        await db.delete(`shop_credit_${i.member.id}`);
        setTimeout(() => {
          i.channel.delete();
        }, 5000);
let adminss = i.guild.roles.cache.get(config.Admin) 
   const typeo = types.find(t => t.id === categoryID );
const are = m.content;
          const naee = are.replaceAll(' ', '・');
const newChannel = await i.guild.channels.create({

      name: `${config.prefix}${naee}`,

      type:ChannelType.GuildText ,

      parent: typeo.id,

      permissionOverwrites: [

        { 

          id: i.user.id,

          allow: ['SendMessages','MentionEveryone','EmbedLinks','AttachFiles','ViewChannel']

        },

        {

          id: i.guild.roles.everyone,

          deny: ['SendMessages'],

          allow: ['ViewChannel']

        },

        {

          id: adminss.id,

          allow: ['SendMessages','MentionEveryone','EmbedLinks','AttachFiles','ViewChannel']

        }

      ]

    })
const dy = parseInt(Date.now() / 1000) 
        const em5 = {
            title: ` **مـعـلـومـات مـتـجـر : ** `,
            description: `**__ - المـنـشـنـات :__\n\`•\` everyone: ${typeo.every} \n \`•\` here: ${typeo.here} \n \`•\` shop: ${typeo.shop}**`,
            author: {
                name: `${i.guild.name}`,
                icon_url: i.guild.iconURL({ size: 1024 }),
            },
            footer: {
                text: `Dev By : Itadori & ra3d`,
            },
            fields: [
                {
                    name: 'صـاحب المتـجـر',
                    value: `<@${i.user.id}>`,
                    inline: true
                },
                {
                    name: 'نـوع المـتـجـر',
                    value: `<@&${typeo.role}>`,
                    inline: true
                },
                {
                    name: 'مـوعـد انـشـاء المـتـجـر',
                    value: `<t:${dy}:R>`,
                    inline: true
                },
            ],
            timestamp: new Date(),
        };
          const embedlog = {

      title: `تـم إنـشـاء مـتـجـر`,

      description: `الـمـسـؤول : شـراء تـلـقـائـي (الـبـوت) `,

      fields: [

     {

          name: 'الـمـتـجـر الـذي تـم إنـشـائـه',

          value:  `<#${newChannel.id}>`,

          inline: true

        },
          {

          name: 'نـوع الـمـتـجـر',

          value:  `<@&${typei.role}>`,

          inline: true

        },

        {

          name: 'مـالـك الـمـتـجـر',

          value: `<@${i.user.id}>`,
inline: true
}

        

      ],

      

      footer: {

        text: `Dev By : itadori & ra3d`,

      },

      timestamp: new Date(),

    };
    const logg = i.guild.channels.cache.get(config.commandlog)

  
          await newChannel.send({embeds: [em5]})
    await i.channel.send({content : `**تـم انـشـاء المـتـجـر بـ نـجـاح** ${newChannel}` , embeds : [em5]})
         logg.send({embeds:[embedlog]}) 
      
        let dateed = parseInt(Date.now() / 1000) 

      let datecreatedd = `<t:${dateed}:R>`;
await db.set(`shop_${newChannel.id}`, {

      owner: i.user.id,

      type: typei.role,

    shop: typei.shop, 

        every: typei.every,

      here: typei.here,

      date: datecreatedd

    })
          }); 
      nameCollector.on('end', async collected => {
        if (collected.size === 0) {
          await msg.edit({ content: 'انتهى وقت تسمية المتجر. قم بإنشاء تذكرة جديدة لإعادة المحاولة.' });
          await db.delete(`buy_shop_ticket_${i.member.id}`);
          await db.delete(`shop_credit_${i.member.id}`);
          setTimeout(() => {
            i.channel.delete();
          }, 5000);
        }
      });
    } else {
      await i.channel.send({ content: `انتهى الوقت. قم بإنشاء تذكرة جديدة لإعادة المحاولة.` });
      await db.delete(`buy_shop_ticket_${i.member.id}`);
      await db.delete(`shop_credit_${i.member.id}`);
      setTimeout(() => {
        i.channel.delete();
      }, 5000);
    }
  });
}

          
        
      
     