//Game States
// "WIN" - Player robot has defeated all enemy-robots
//  *Fight all enemy-robots
//  *Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
    // Alert players that they are starting the round
    while(playerHealth > 0 && enemyHealth > 0) {
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Entier 'FIGHT' or 'SKIP' to chooose.");
       // if player picks "skip" confirm and then stop the loop
       if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    
        // if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip the fight. Goodbye!");
                // subtract money from playerMoney for skipping
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break;
            } 
        }
    // if player choses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
        //remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;

    // Log a resulting message to the console so we know that it worked.
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );
    // check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");

            // award player money for winning
            playerMoney = playerMoney + 20;

            // leave while loop since enemy is dead
            break;
        } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }
    // Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable
        playerHealth = playerHealth - enemyAttack;
    // Log a resulting message to the console so that we know that it worked.
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );

    // check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
        }
        // leave while() loop if player is dead
        break;
     } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }
};
//if no (false), ask question by running fight () again
    // else {
    //     fight();
    //     window.alert("You need to choose a valid option. Try again!");
    // }
for(var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50
    fight(pickedEnemyName);
}
