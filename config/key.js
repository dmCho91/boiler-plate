if(process.env.NODE_ENV === 'production')
    module.exports = require('./prod') // 배포 후
else
    module.exports = require('./dev') // 개발단계