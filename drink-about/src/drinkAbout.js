function drinkAbout(age) {
	
	if (age<14) {
		return "drink toddy";
	}
	else if (age<18) {
		return "drink coke";
	} 
	else if (age<30) {
		return "drink beer";
	}
	else {
		return "drink whiskey";
	}
}