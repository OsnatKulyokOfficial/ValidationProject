🏠 HOME TEST ⚔


About this project
Assignment for a qa position 



Part one:
Create a single page form that will include the next fields:

    	Full name 

    	Email

    	Phone number

    	Mount to pay

    	Payment description

    	Payment number

     Submit button to collect all the user’s details.

![image](https://github.com/OsnatKulyokOfficial/ValidationProject/assets/129261751/2680f693-592f-4619-9501-da875635f564)
 
 

By clicking the "Payment" button, an API call must be made from the client side to create a payment form (attached file Postman containing the reading, the file must be imported into Postman and thus the reading can be viewed)
The answer to the callback will be a link to the payment form, the payment form must be displayed in the iframe under the form. 




Part two: 

Carry out UI tests for the interface you created, specify what the necessary validations are.





Summary of the validations performed in the PaymentForm component:

	Full Name Validation:

    o	Field is required.

    o	Name should not contain numbers.


	Phone Validation:

    o	Field is required.

    o	Should contain numbers only.

    o	Should have at least 9 digits.

    o	Should not exceed 10 digits.


	Email Validation:

    o	Field is required.
    
    o	Should be in a valid email format.


	Payment Number Validation:

    o	Field is required.

    o	Should be a positive number.



	Amount Validation:

    o	Field is required.

    o	Should be a positive number.



	Description Validation:

    o	Field is required.
    
    o	Should be a positive number.



If any of the validations fail, an error message is displayed next to the corresponding input field.
These validations ensure that the user enters valid and complete information before submitting the form.










The screen before clicking the button:

 ![image](https://github.com/OsnatKulyokOfficial/ValidationProject/assets/129261751/808292bf-e97f-4296-9563-0fe0c327e044)







The screen after clicking the button:


 ![image](https://github.com/OsnatKulyokOfficial/ValidationProject/assets/129261751/808292bf-e97f-4296-9563-0fe0c327e044)
 
 ![image](https://github.com/OsnatKulyokOfficial/ValidationProject/assets/129261751/72b7c2c0-b1e4-4fcf-80fb-317e37c51148)

 

