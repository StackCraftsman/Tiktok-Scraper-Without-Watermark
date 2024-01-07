const tiktok = require('.')
const url = 'https://www.tiktok.com/@njrshadow/video/7271270744624008453?is_from_webapp=1&sender_device=pc&web_id=7296098139957216774'
const slider_url = 'https://vt.tiktok.com/ZS8e1HeEs/'

tiktok.tiklydown(url)
     .then(result => {
          console.log(result)
     })
     .catch(e => console.log(e))

tiktok.dlpanda(slider_url)
     .then(result => {
          console.log(result)
     })
     .catch(e => console.log(e))