"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1477],{10:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"welcome","metadata":{"permalink":"/blog/welcome","source":"@site/blog/12-11-2023-welcome.md","title":"Welcome","description":"A welcome post for the Modular Software blog.","date":"2024-01-02T21:12:51.000Z","formattedDate":"January 2, 2024","tags":[],"readingTime":1.57,"hasTruncateMarker":false,"authors":[{"name":"Ben Robson","title":"Founder & Developer at Modular Software","url":"https://github.com/benrobson","image_url":"https://github.com/benrobson.png","imageURL":"https://github.com/benrobson.png"}],"frontMatter":{"title":"Welcome","description":"A welcome post for the Modular Software blog.","slug":"welcome","authors":[{"name":"Ben Robson","title":"Founder & Developer at Modular Software","url":"https://github.com/benrobson","image_url":"https://github.com/benrobson.png","imageURL":"https://github.com/benrobson.png"}],"hide_table_of_contents":false},"unlisted":false,"nextItem":{"title":"Zander v1.1.0 Patch Notes","permalink":"/blog/zander-1.1.0"}},"content":"Greetings Everyone,\\n\\nWe extend a warm welcome to Modular Software, a dynamic collective of dedicated developers passionately engaged in crafting an array of diverse applications. Our talented team specializes in a broad spectrum of software development, from creating Minecraft Plugins and Datapacks to building extensive web-scale applications.\\n\\nAt Modular Software, we\'re committed to pushing the boundaries of innovation and crafting software that enhances various facets of your digital experience. Currently, our application portfolio includes:\\n\\n* [Craftify](../docs/products/craftify/): Dive into the enchanting world of Minecraft with Craftify, a Minecraft datapack that elevates the gameplay experience. Craftify brings a new level of excitement and creativity to your adventures in the blocky realm, making every moment more engaging and immersive.\\n* [DevoteMe](../docs/products/devoteMe/): For those seeking spiritual growth and reflection, we\'ve designed DevoteMe, an application suite intended to foster Bible reading and contemplation. This powerful tool empowers users on their spiritual journey by encouraging and facilitating a deeper connection with their faith.\\n* [PlayerHeadHunt](../docs/products/playerHeadHunt/): If you\'re a fan of in-game challenges and treasure hunts, PlayerHeadHunt is the Minecraft plugin you\'ve been searching for. Unleash your inner adventurer with this versatile tool, which can be used for anything from scavenger hunts to Easter egg quests. Get ready for endless fun and excitement as you hunt for prizes and hidden treasures!\\n\\nThese are just a few of the applications that we\'ve brought to life, and we\'re not stopping there. Our team is hard at work on many more exciting projects that will continue to push the boundaries of what software can do. We\'re dedicated to creating solutions that make a meaningful impact in the gaming and digital world.\\n\\nStay tuned for updates on our current projects and be part of our exciting journey as we continue to innovate and develop cutting-edge software solutions. Thank you for joining us at Modular Software, where the possibilities are limitless, and the future is boundless!"},{"id":"zander-1.1.0","metadata":{"permalink":"/blog/zander-1.1.0","source":"@site/blog/zander/03-01-2024-zander-v1.1.0-release.md","title":"Zander v1.1.0 Patch Notes","description":"Zander release notes and changes for version 1.1.0.","date":"2024-01-02T21:12:51.000Z","formattedDate":"January 2, 2024","tags":[],"readingTime":2.21,"hasTruncateMarker":false,"authors":[{"name":"Ben Robson","title":"Founder & Developer at Modular Software","url":"https://github.com/benrobson","image_url":"https://github.com/benrobson.png","imageURL":"https://github.com/benrobson.png"}],"frontMatter":{"title":"Zander v1.1.0 Patch Notes","description":"Zander release notes and changes for version 1.1.0.","slug":"zander-1.1.0","authors":[{"name":"Ben Robson","title":"Founder & Developer at Modular Software","url":"https://github.com/benrobson","image_url":"https://github.com/benrobson.png","imageURL":"https://github.com/benrobson.png"}],"hide_table_of_contents":false},"unlisted":false,"prevItem":{"title":"Welcome","permalink":"/blog/welcome"},"nextItem":{"title":"Zander v1.0.0 Patch Notes","permalink":"/blog/zander-1.0.0"}},"content":"Hello Everyone,\\n\\nI hope you\'re all having a good 2024, I am releasing a new update which introduces Ranks, some modification to configuration and some bug fixes.\\n\\n## Notes & Configuration Changes\\nI would like to note that in this update we have migrated some configuration and added additional configuration options.\\n\\n### `config.json`\\n* A new `keywords` field has been added for SEO configuration.\\n* The `discord.channels` is now `discord.webhooks` and now requires a webhook URL for (`welcome`, `networkChatLog`, `adminLog`) to operate.\\n* Added a Discord webhook for `staffChannel` for the `staffhelp` command.\\n\\n## Features\\n* [Ranks](/docs/products/zander/features/ranks) - Ranks is a feature that allows Administration to modify configuration file to display ranks, perks and have linked in to external URLs to support the server.\\n\\n## Patch Notes\\n\\n### Hub\\n> No changes for this update.\\n\\n### Proxy\\n* Implemented a Command Spy Event which sends command data to API.\\n* Implemented a Social Spy Event which sends direct message (dm) data to API.\\n\\n### Web\\n* **Made urgent change to hasPermission, allowing non-logged in users to view administration panel.**\\n* **Change node engine to support Node 18.**\\n* Logs: Make usernames more presentable in logs.\\n* Add page descriptions to headers.\\n* Added keywords and SEO option to configuration.\\n* Add documentation badges for dashboard list and editors.\\n* Made changes for view and session page changes to be more mobile friendly.\\n* Resolved mobile styling issues with dashboard views.\\n* Resolve issues with cookie banner not showing on `/register`.\\n* Added a staffChannel config option with the addition of the `/staffhelp` command.\\n* Reformat all project files using Prettier.\\n* Resolve issue with logout causing the application to crash.\\n* Separate redirect route into own file, add config option for kb and added issue tracker route.\\n* Added `keywords` to `config.json` for SEO configuration.\\n* Added `ranks.json` for rank configuration.\\n* Added following front-facing routes:\\n  * Ranks /ranks\\n  * Added /issues redirect.\\n\\n#### API\\n\\n> Have a look at our API documentation for information on routes functionality.\\n\\n* Implement Command & Social Spy API Functionality.\\n* Discord\\n  * Implemented /spy/command\\n  * Implemented /spy/directMessage\\n\\n#### Discord\\n* Filter: Patched delete message after filtering prohibited content.\\n* Filter: Fixed issue where filter errors after response is sent.\\n* Network Log: Fixed spacing messages.\\n* Network Log: Remove deleted channel field from being mentioned twice.\\n* Migrate all discord channel-based functions to webhooks.\\n* Implemented the following commands:\\n  * `poll` - Ask everyone a question or something to vote on!\\n  * `staffhelp` - Sends a message to our Staff for help or assistance.\\n  * `ranks` - Display link to view rank perks and donate."},{"id":"zander-1.0.0","metadata":{"permalink":"/blog/zander-1.0.0","source":"@site/blog/zander/12-11-2023-zander-v1.0.0-release.md","title":"Zander v1.0.0 Patch Notes","description":"Zander release notes and changes for version 1.0.0.","date":"2024-01-02T21:12:51.000Z","formattedDate":"January 2, 2024","tags":[],"readingTime":6.22,"hasTruncateMarker":false,"authors":[{"name":"Ben Robson","title":"Founder & Developer at Modular Software","url":"https://github.com/benrobson","image_url":"https://github.com/benrobson.png","imageURL":"https://github.com/benrobson.png"},{"name":"Jaedan","title":"Developer at Modular Software","url":"https://github.com/JaedanC","image_url":"https://github.com/JaedanC.png","imageURL":"https://github.com/JaedanC.png"},{"name":"Aron","title":"Developer at Modular Software","url":"https://github.com/birdwing","image_url":"https://github.com/birdwing.png","imageURL":"https://github.com/birdwing.png"}],"frontMatter":{"title":"Zander v1.0.0 Patch Notes","description":"Zander release notes and changes for version 1.0.0.","slug":"zander-1.0.0","authors":[{"name":"Ben Robson","title":"Founder & Developer at Modular Software","url":"https://github.com/benrobson","image_url":"https://github.com/benrobson.png","imageURL":"https://github.com/benrobson.png"},{"name":"Jaedan","title":"Developer at Modular Software","url":"https://github.com/JaedanC","image_url":"https://github.com/JaedanC.png","imageURL":"https://github.com/JaedanC.png"},{"name":"Aron","title":"Developer at Modular Software","url":"https://github.com/birdwing","image_url":"https://github.com/birdwing.png","imageURL":"https://github.com/birdwing.png"}],"hide_table_of_contents":false},"unlisted":false,"prevItem":{"title":"Zander v1.1.0 Patch Notes","permalink":"/blog/zander-1.1.0"}},"content":"Hello Everyone,\\n\\nWe\'re releasing our first of many patch notes for Zander, a multi-platform Minecraft Server management tool. We have only implemented most of the basics but we are working towards implementing a full suite of features which will allow you to manage your Minecraft Server with ease.\\n\\n## Features\\n* [Announcements](/docs/products/zander/features/announcement) - Announcements is a feature that allows Administration to broadcast messages across your Server and Website and have linked in to external URLs if required.\\n* [Applications](/docs/products/zander/features/application) - Allows administrative users to create, edit and delete applications. Applications are used for things like Server Position applications and other Server roles.\\n* [Discord](/docs/products/zander/features/discord) - The Discord feature allows for moderation, community interaction and much more.\\n* [Discord](/docs/products/zander/features/server) - Allows administrative users to add, edit and remove Servers. Adding a server will list the server on the `/play` page and also list the server on the `/play` command on Discord.\\n\\n## Patch Notes\\n\\n### Hub\\n* Added `/fly` command which can be applied to users via `zander.hub.fly`.\\n* Added a Hub Booster which can be placed as a Light Weighted Pressure plate which will allow players to be launched in the direction they\'re looking at with the configuration options set in the `config.yml` file.\\n* Added a player join event which: \\n  * Cleared player\'s inventory of miscellaneous items upon joining.\\n  * Teleports the player to the Hub spawn point, if configured in the `config.yml`.\\n  * Gives the player a navigation compass and set the player\'s current slot to the navigation compass.\\n  * Sets off a celebratory firework and separate Message of the Day (MOTD) sent for new players as specified in `welcome.yml`.\\n  * Plays a random sound to the player upon joining.\\n  * Broadcasts a message announcing the player\'s join, if they are not vanished.\\n* Added `welcome.yml` to configure MOTD for players.\\n* Added a variant player join event which alters the Message of the Day (MOTD) for Christmas time between 24th and 25th of December.\\n* Add check to avoid players from infinite falling in void.\\n* Added a compass item to navigate to set Servers.\\n* Implemented Creature, Interaction and Hub prevention to stop Hub being damaged by players.\\n\\n### Proxy\\n* Implemented /discord command which redirects player to Network discord.\\n* Implemented /ping command to test players connection to Proxy.\\n* Implemented /rules command which redirects player to Network discord.\\n* Implemented /website command which redirects player to Network website.\\n* Implemented a proxy-side connection for link and word filtering.\\n* Implemented Chat Event which checks chat messages for blocked content, sends a request to a filtering API, blocks messages containing restricted content and notify the player, and sends approved messages to a Discord channel for Network Log monitoring.\\n* Implemented User Disconnection Event which checks if the player is still connected, sends a request to the API to destroy the player\'s session and sends a request to the API to notify Discord channel for Network Log monitoring of the leave event.\\n* Implemented User Login event which retrieves the player logging in, sends a request to the API to create a new user if they\'re new, sends a request to the API to start a session, including the player\'s unique ID and IP address and then sends a request to the API to notify Discord channel for Network Log monitoring of the join event.\\n* Implemented a Proxy Ping event which is displayed when players ping the server. It retrieves the MOTD from an API, applies formatting, and sets it as the server\'s description. If an error occurs, it falls back to a default MOTD specified in the `config.yml`.\\n* Implemented User Switch event which sends a request to the API to switch the player\'s session to the new server and sends a request to the API to notify Discord of the server switch for the Network log monitoring.\\n* Added a `config.yml` file for MOTD fallback and API connection.\\n\\n### Web\\n* Implemented framework for website, Discord and API.\\n* Implemented Feature toggling to be able to enable or disable a feature via `features.json`\\n* Implemented filter of words and links and the ability to control via `filter.json`\\n* Implemented ability to have random join messages for Discord which can be added to via `joinMessages.json`\\n* Implemented a small language file to expand on for translatability in `lang.json`\\n* Added following front-facing routes:\\n  * Home /\\n  * Play /play\\n  * Apply /apply\\n  * Terms Of Service /terms\\n  * Rules /rules\\n  * Privacy /privacy\\n  * Refund /refund\\n  * Login /login\\n  * Register /register (which is currently toggleable)\\n  * Logout /logout\\n  * Added /discord redirect.\\n  * Added /webstore redirect.\\n  * Added /knowledgebase redirect.\\n* Implemented administration dashboard and routes:\\n  * Added /dashboard.\\n  * Added /dashboard/announcements with the Announcement Editor to allow creation, deletion and ability to edit.\\n  * Added /dashboard/applications with the Applications Editor to allow creation, deletion and ability to edit.\\n  * Added /dashboard/servers with the Servers Editor to allow creation, deletion and ability to edit.\\n  * Added /dashboard/logs to view application logs an actions.\\n\\n#### API\\n\\n> Have a look at our API documentation for information on routes functionality.\\n\\n* Announcement\\n  * Implemented /get\\n  * Implemented /create\\n  * Implemented /edit\\n  * Implemented /delete\\n* Application\\n  * Implemented /get\\n  * Implemented /create\\n  * Implemented /edit\\n  * Implemented /delete\\n* Server\\n  * Implemented /get\\n  * Implemented /get/users\\n  * Implemented /create\\n  * Implemented /edit\\n  * Implemented /delete\\n* Session\\n  * Implemented /create\\n  * Implemented /destroy\\n  * Implemented /switch\\n* Discord\\n  * Implemented /switch\\n  * Implemented /chat\\n  * Implemented /join\\n  * Implemented /leave\\n* Web\\n  * Implemented /register/create\\n  * Implemented /configuration\\n  * Implemented /statistics\\n  * Implemented /logs/get\\n* User\\n  * Implemented /create\\n  * Implemented /get\\n* Implemented /heartbeat\\n* Implemented /filter\\n* Added function to verify token against API.\\n\\n#### Discord\\n* Implemented the following commands:\\n  * `legoflip` - A simple lego flip which generates 2 different avatar heads, a unique command for the community.\\n  * `play` - Display all Network servers to play on.\\n  * `policy` - Display Network policy (Rules, Terms, Privacy, and Refund).\\n  * `rules` - Display link to the Network Rules.\\n  * `website` - Display link to the Network Website.\\n* Implemented a filter listener connected to the filter API which checks incoming messages for prohibited content, using filters for links or phrases if enabled. If such content is detected, it sends a warning to the message sender. If an error occurs during this process, it is logged.\\n* Implemented a jokingly General Kenobi listener which checks if the message content includes the phrase \\"hello there\\" and if the condition is met, sent a message to the same channel saying \'General Kenobi\'.\\n* Implemented a Guild Boosting event which find the premium status of the user, and sends a message to the specified welcome channel about thanking them for the boost.\\n* Implemented a welcome user event which checks for a Verified user, and sends a welcome message specified in `joinMessages.json` with a random HEX code to the welcome channel.\\n* Implemented a message deletion event which checks for when a user deletes a message it creates an embed with details about the deleted message, including the author, channel, and content and sends to the specified admin log channel.\\n* Implemented a message edit event which checks for when a user edits a message it creates an embed with details about the edited message, including the author, channel, and content and sends to the specified admin log channel."}]}')}}]);