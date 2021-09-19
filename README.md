# Developer Node Skills Test

This practical test will require you to complete two NodeJS code tasks.

## Setup

This task will require the following:

- A Bitbucket account
- The latest version of NodeJS
- Git

Please fork the repository in Bitbucket. You can do this by clicking the *+* button on the side, and then select *Fork this repository*. Include your full name as part of your form, so we can identify your work.

After forking the project, clone the project to your computer using Git (see the instructions given by the *Clone* button in the repository).

In order to complete the tasks in this test, you will need to install the latest version of NodeJS from from <https://nodejs.org>. Before beginning work, please make sure to install the dependencies for this project with the command `npm ci`.

## Test Information

There are two tasks that you must complete. You will be required to edit the provided **task1.js** and **task2.js** scripts. You can test the scripts using the command `node task1` and `node task2`.

An example script, **demo.js** has been provided. It makes use of all the libraries that should be needed for the tasks. You can see it work by using the command `node demo`. This can be used as a guide for solving the problems in the tasks.

The libraries used are:

- **jsonfile** (<https://www.npmjs.com/package/jsonfile>): Used for loading and saving of JSON documents.
- **got** (<https://www.npmjs.com/package/got>): Used for loading of JSON data over HTTP.
- **randomstring** (<https://www.npmjs.com/package/randomstring>): Used for generating random strings.

Google and other resources such as StackOverflow may be used in completing the task, however the demo script should contain examples of everything that is needed to complete the tasks.

Both tests should not take longer than an hour to complete together.

## Task 1

In **task1.js**, you will need to create the entire functionality yourself.

Inside the script, load the `names` array from the JSON file **input2.json**. For each name, reverse it, append 5 random characters plus "@gmail.com". The end result should be an array of fake email addresses.

Save the array as the property `emails` into a JSON file called **output2.json**.

## Task 2

In **task2.js**, you will need to modify the existing functionality provided.

The script is supposed to:

- Generate 10 random 3 letter acronyms, e.g. USA, AUD, ABC.
- For each acronym, load a list of definitions from <http://www.nactem.ac.uk/software/acromine/dictionary.py?sf=XYZ> (where `XYZ` is the generated acronym).
- Output a json file **output3.json** with the array property `definitions`, which contains each downloaded JSON objects.

However, if you run the script, you will notice that the created JSON file always contains an empty `definitions` property, even though the console reports downloading the acronym data.

Fix the code to match the listed functionality.
