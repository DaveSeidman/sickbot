# sickbot
slackbot that generates excuses for being late or taking the day off.

1) goto https:/[your-company-name].slack.com/apps/manage/custom-integrations and click on bots
2) click on "add configuration" and name your bot
3) Create a secret.json file in the root and set it's token to the string slack provides you: { "token":"your-secret-token" }
4) Host the bot somewhere it will stay online and running
5) Invite bot to channels and start feeding it inspiration (@sickbot throat, nose, dog, fire)

Full slack bot users documentation: https://api.slack.com/bot-users
