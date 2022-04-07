# Congress Stock Tracker

## Description
Congress Stock Tracker is an app that displays recent stock transactions of the United States Congress members and allows users to add members of congress that they choose to follow to their list.

## Visit The Live Site
### How It Works 
Simply visit https://peppy-alfajores-5631c4.netlify.app/ and begin viewing stock transactions.

NOTE: If you'd like to follow any of the politicians listed, click the 'LOGIN' link in the navigation bar, enter your name to login, and then click back to the 'HOME' page to view transactions and click the 'FOLLOW' button under each of the transaction details to add that politician to your list.

![Congress Stock Tracker. Gif](./src/media/readme/video%20walkthrough.gif)

## Running the Project Locally - Project Setup Details
### Frontend Setup
Start by forking the frontend of the project

![Fork The Project](./src/media/readme/ph2%20-%20forkproject.jpg)

Next, grab your SSH key. (Make sure you see your user name where the red text is)

![Grab SSH Key](./src/media/readme/ph2%20-%20grabssh.jpg)

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

Once VS Code is open, click " Ctrl + ` " to open the VS Code terminal, then type in the following command to install the project dependencies:

```
npm install
```

Leave the frontend project files open in VSCode as we'll return to it in just a minute.

### Backend Setup
Next, fork the backend of the project. The backend can be found at the link below:
https://github.com/taylor-huffman/json-server-template

![Fork The Project](./src/media/readme/ph2%20-%20forkproject%20-%20backend.jpg)

Next, grab your SSH key. (Make sure you see your user name where the red text is)

![Grab SSH Key](./src/media/readme/ph2%20-%20grabssh%20-%20backend.jpg)

Next, navigate to your desired folder in Ubuntu and type in the following command to clone your newly created repo, making sure your username is taking place of 'your-user-name' in the url:

```
git clone git@github.com:your-user-name/json-server-template.git
```

Then, navigate to the root folder of the project:

```
cd json-server-template/
```

Once in the root folder, copy and paste the following command to open VS Code:

```
code .
```

Once VS Code is open, click " Ctrl + ` " to open the VS Code terminal, then type in the following command to install the project dependencies:

```
npm install && npm run dev
```

Leave backend files open in VSCode.

### Return to the frontend project files in VSCode
In your terminal, type in the following command:
```
npm start
```
And there you have it, the Congress Stock Tracker app should now be open in your browser and you should have both the frontend and backend files open in VSCode, ready to modify as you see fit!

## Media and Data Credits
Illustrations by Cristina Byvik and http://clipart-library.com

Stock transaction data provided by https://housestockwatcher.com/api

## Contact Me For Questions
Have any questions? Feel free to shoot me an email: [taylor@crucialartists.com](mailto:taylor@crucialartists.com)

## Known Bugs/Deficiencies
Current Deficiencies:
There isn't currently a 'LOGOUT' button. If you're wanting to test this software with multiple users, you will need to delete the Local Storage item 'currentUserName' in your browers dev tools in order to 'log out' the current user.

## MIT License
[Click to view license information](./MIT-LICENSE)