//Example:
//A candy store has 6 boxes of chocolates. Each box has 500 pieces. How many pieces are there altogether in the 6 boxes?

function getChoc() {
	var boxChoc = 6;
	return boxChoc * 500;
}

example.textContent = "There are a total of " + getChoc() + " pieces of chocolate.";

//1. The Ferris wheel in Paradise Park has 14 seats. Each seat can hold 6 people. How many people can ride the Ferris wheel at the same time?

function getPeople() {
	var seats = 14;
	var peoplePerSeat = 6;
	return seats * peoplePerSeat;
}

prob1.textContent = "The Ferris wheel can hold " + getPeople() + " people at the same time.";

//2. A garden has 52 rows and 15 columns of bean plants. How many plants are there in all?

function getPlants() {
	var rows = 52;
	var columns = 15;
	return rows * columns;
}

prob2.textContent = "The garden has " + getPlants() + " bean plants in all.";

//3. Julian is writing a comic book. His story has 143 frames in all. If he wants to put exactly 11 frames on each page, how many pages would he have?

function getPages() {
	var frames = 143;
	var framesPerPage = 11;
	return Math.ceil(frames / framesPerPage); // use Math.ceil to round up to the nearest integer
}

prob3.textContent = "Julian would have " + getPages() + " pages for his comic book.";

//4. It takes 4 feet of cotton to make a tee-shirt. How many tee-shirts can be made with 60 feet of material?

function getShirts() {
	var cotton = 60;
	var cottonPerShirt = 4;
	return Math.floor(cotton / cottonPerShirt); // use Math.floor to round down to the nearest integer
}

prob4.textContent = "With 60 feet of material, " + getShirts() + " tee-shirts can be made.";

//5. The Razorback T-shirt Shop makes $9 dollars off each t-shirt sold. During the Arkansas and Texas Tech game they sold 200 t-shirts. How much money did they make from selling the t-shirts?

function getMoney() {
	var profitPerShirt = 9;
	var shirtsSold = 200;
	return profitPerShirt * shirtsSold;
}

prob5.textContent = "The Razorback T-shirt Shop made $" + getMoney() + " from selling the t-shirts.";

//6. Warren has 248 guests coming to his party. Each table will hold 4 guests. How many tables will he need? If each table has 2 candles, how many candles will he need?

function getTables() {
	var guests = 248;
	var guestsPerTable = 4;
	return Math.ceil(guests / guestsPerTable); // use Math.ceil to round up to the nearest integer
}

function getCandles() {
	var candlesPerTable = 2;
	return getTables() * candlesPerTable; // use the previous function to get the number of tables
}

prob6.textContent = "Warren will need " + getTables() + " tables and " + getCandles() + " candles for his party.";

//7. Beth has 4 packs of Crayons. Each pack has 10 crayons in it. She also has 6 extra Crayons. How many Crayons does Beth have altogether?

function getCrayons() {
	var packs = 4;
	var crayonsPerPack = 10;
	var extraCrayons = 6;
	return (packs * crayonsPerPack) + extraCrayons; // use parentheses to group the multiplication before the addition
}

prob7.textContent = "Beth has " + getCrayons() + " crayons altogether.";
