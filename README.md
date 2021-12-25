# Card-Memory-Game

**Tier:** 2-Intermediate

Card memory is a game where you have to click on a card to see what image is underneath it and try to find the matching image underneath the other cards.

## User Stories

- [x] User can see a grid with n x n cards (`n` is an integer). All the cards are faced down initially (`hidden` state)
- [x] User can click a button to start the game. When this button is clicked, a timer will start
- [x] User can click on any card to unveil the image that is underneath it (change it to `visible` state). The image will be displayed until the user clicks on a 2nd card

When the User clicks on the 2nd card:

- [x] If there is a match, the 2 cards will be eliminated from the game (either hide/remove them or leave them in the `visible` state)
- [x] If there isn't a match, the 2 cards will flip back to their original state (`hidden` state)
- [x] When all the matches have been found, the User can see a dialog box showing a Congratulations message with a counter displaying the time it took to finish the game

## Bonus features

- [x] User can choose between multiple levels of difficulty (Easy, Medium, Hard). Increased difficulty means: decreasing the time available to complete and/or increasing the number of cards
- [x] User can see the game statistics (nr. of times he won / he lost, best time for each level)

## Result of project

When user start game:

https://user-images.githubusercontent.com/64330605/147393565-6797cfaa-10c8-4764-bf81-269a8e672a98.mp4

User can choose between multiple levels of difficulty:

https://user-images.githubusercontent.com/64330605/147393568-644cdd81-6620-41ed-b0b0-7902d4d99957.mp4

When user lose game:

https://user-images.githubusercontent.com/64330605/147393567-82fb4358-97c9-4252-8b95-37967c7a0229.mp4
