describe('my function drinkAbout()', function() {

	it('should exist', function() {
		expect(drinkAbout).toBeDefined();
	});

	it('should return a string', function() {
		var result = drinkAbout();
		var typeResult = typeof(result);

		expect(typeResult).toEqual("string");
	});

	it('should return "drink toddy" when called drinkAbout(13)', 
    function() {
    	var result = drinkAbout(13);
    	expect(result).toEqual("drink toddy");

	});

	it('should return "drink coke" when called drinkAbout(17)',
		function() {
			var result = drinkAbout(17);
			expect(result).toEqual('drink coke');
		});

	it('should return "drink beer" when called drinkAbout(21)',
		function() {
			var result = drinkAbout(21);
			expect(result).toEqual('drink beer');
		});

	it('should return "drink whiskey" when called aboutDrink(30)',
		function() {
			var result  = drinkAbout(30);
			expect(result).toEqual("drink whiskey");
		});


});
