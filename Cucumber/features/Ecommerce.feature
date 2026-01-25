Feature: Ecommerce Validation
	#npx cucumber-js --tags "@correct"

	@correct
	Scenario: Placing the order
		Given a login to Ecommerce application with "qatest123@gmail.com" and "Learning@123"
		When Add "ZARA COAT 3" to Cart
		Then Verify "ZARA COAT 3" is displayed in the Cart
		When Enter valid details and Place the Order
		Then Verify order is present in the OrderHistory

	@incorrect
	Scenario: incorrect login
		Given a login to Ecommerce application with "QA@gmail.com" and "Learning@123"
		When Add "ZARA COAT 3" to Cart

    @qa
	Scenario Outline: Placing the order
		Given a login to Ecommerce application with "<username>" and "<password>"
		When Add "ZARA COAT 3" to Cart
		Then Verify "ZARA COAT 3" is displayed in the Cart
		When Enter valid details and Place the Order
		Then Verify order is present in the OrderHistory

		Examples:
			| username            | password     |
			| qatest123@gmail.com | Learning@123 |
			| wrongmail@gmail.com | Learning@123 |



