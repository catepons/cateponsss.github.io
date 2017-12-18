function askQuestions () {

	var firstName = prompt('What is your first name?');
	var lastName = prompt('What is your last name?');

	var fullName = firstName + ' ' + lastName;
	console.log(fullName);

	var age = prompt('How old are you?');

	age = parseInt(age);
	console.log('You are ' + age + 'years old');

	if (age>=18)
	{
	console.log('You\'re an adult');
	} else if (age>=13) {
		console.log('You are a teenager');
	} else {
		console.log('You are a child');
	}

	/*
		If the user's first name is "General" and their last name is NOT "Assembly", then greet the general!
		(Hint: Use console.log)
		*/

	if (firstName.toLowerCase() === 'general' && lastName.toLowerCase !== 'assembly') {
		console.log('Greetings General');
	}

}

// when the page is loaded
$( function () {

	// Whe the user clicks the image ask questions
	$('img').on('click', askQuestions);

	// when the user clicks an h3 
	$('h3'). on('click', function () {

		// toggle the next element
		$(this).next().slideToggle(50);

/* this is also a comment */
	}); 
}); 