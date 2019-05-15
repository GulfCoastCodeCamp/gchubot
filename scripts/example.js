// # Description:
// #   Example scripts for you to examine and try out.
// #
// # Notes:
// #   They are commented out by default, because most of them are pretty silly and
// #   wouldn't be useful and amusing enough for day to day huboting.
// #   Uncomment the ones you want to try and experiment with.
// #
// #   These are from the scripting documentation: https://github.com/github/hubot/blob/master/docs/scripting.md

module.exports = (robot) =>{

  robot.respond( /add link (.*)/i, (res) =>{
    doorType = res.match[1]

      res.send (`adding link #${doorType}`)
       var data = {
         link:doorType
       }
      robot
        .http(process.env.HUBBOT_HEROKU_AZURE_FUNCTION_URL)
        .headers('Content-Type','application/json')
        .post(JSON.stringify(data))((err,response,body)=>{
          console.log(err);
          if(err||response.statusCode !==200){
            return res.send('Opps')
          }
          res.send('Got it')
        })
  });

}
