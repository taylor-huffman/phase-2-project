# Congress Stock Tracker

## Description
Congress Stock Tracker is an app that displays recent stock transactions of the United States Congress members and allows users to add members of congress that they choose to follow to their list.

## Visit The Live Site
### How It Works 
Simply visit https://peppy-alfajores-5631c4.netlify.app/ and begin viewing stock transactions.

NOTE: If you'd like to follow any of the politicians listed, click the 'LOGIN' link in the navigation bar, enter your name to login, and then click back to the 'HOME' page to view transactions and click the 'FOLLOW' button under each of the transaction details to add that politician to your list.

![Congress Stock Tracker. Gif](./src/media/readme/video%20walkthrough.gif)

## Project Setup
Start by forking the project

![Fork The Project](./media/readme/forkproject.jpg)

Next, grab your SSH key. (Make sure you see your user name where the red text is)

![Grab SSH Key](./media/readme/grabssh.jpg)

Next, navigate to your desired folder in Ubuntu and type in the following command to clone your newly created repo, making sure your username is taking place of 'your-user-name' in the url:

```
git clone git@github.com:your-user-name/phase-2-project.git
```

Then, navigate to the root folder of the project:

```
cd phase-2-project/
```

Once in the root folder, copy and paste the following command to open VS Code:

```
code .
```

Once VS Code is open, click " Ctrl + ` " to open the VS Code terminal. Then click the icon shown in the picture to split the terminal.

![Split Terminal Icon Location](./media/readme/split.jpg)

On either side of the split terminal, type in the following command. This will open a node terminal and display the json server:

```
json-server --watch db.json
```

It Should look something like this:

![Split Terminal with Json Server](./media/readme/jsonserver.png)

Once the server is running, open the index.html file with the following command in the terminal

```
explorer.exe index.html
```

Excellent! You did it! You're now ready to operate the app! Please proceed to the operation instructions.

## Media and Data Credits
Illustrations from [Openpeeps.com](https://www.openpeeps.com/) and created by Pablo Stanley

## Contact Me For Questions
Have any questions? Feel free to shoot me an email: [taylor@crucialartists.com](mailto:taylor@crucialartists.com)

## Known Bugs/Deficiencies
Current Deficiencies:
There isn't currently a 'LOGOUT' button. If you're wanting to test this software with multiple users, you will need to delete the Local Storage item 'currentUserName' in your browers dev tools in order to 'log out' the current user.

## MIT License
[Click to view license information](./MIT-LICENSE)