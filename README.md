# asurity-coding-project

## Running the application
### Starting the backend
1.) Navigate in the the "asurity-project-backend" folder
2.) Click on the "asurity-project-backend.sln" to open the solution in visual studio
3.) Click the "run" button while in debug mode.
4.) The application's backend should now be running on localhost:5001. A window should open for "https://localhost:5001/api/Contacts".

### Starting the frontend
1.) inside your command terminal navigate into the "asurity-project-frontend"
2.) Run "npm install" to Install the project's dependencies
3.) Run the project with "npm start"
4.) A window should open to "https://localhost:3000"

The app is now ready for use!

## About the application
- The application's web API was built in .NET Core Web, the frontend single page application was built in React with Typescript.
- The application displays contacts, and allows the user to  create, edit, delete, and sorting the contacts in the in memory db.
- The in memory database is preloaded with 10 entries, and also populates all of the drop down selections on the website.
- The contact records are generated with the faker package.
- The states are generated from a list of state information.
- The application only has two views. A grid display of the contacts, and a form for data submission.
- The grid has the ability to sort the contacts in ascending or descending order.
- The ability to delete and edit a contact is triggered by buttons on the contact row.
- The new contact and edit contact functionality is controlled by the same form. When a contact is selected to be editted that record is pulled from the applications state and used to preload the existing data onto the form as well as change the title of the form.
- Any changes made to the contact database (create, edit, delete) update both the database and state of the application eliminating the need for  additional calls to the database isnt necessary when a change is made.
- The form renders error messages onblur when the data does not comform with the validation requirements. Additionally, all the fields of the form are considered required fields to maintain the integrity of the data. This requires the user to complete the information in full before they can submit the application.

### Data Specifications
- [ ] First Name (no more than 20 characters)
- [ ] Last Name  (no more than 20 characters)
- [ ] Email Address (validate that its a proper email)
- [ ] phone number
- [ ] Street Address (no more than 100 characters)
- [ ] City (no more than 50 characters)
- [ ] State (populated by the api,should be a dropdown that displays the full state name and includes washington DC, but stores the abbreviation when saved)
- [ ] Zipcode (an additional validation has been added requiring 5 -10 characters)

- [ ] Contact Frequency (populated by the api, dropdown with 3 values)
- Contact only about account information
- OK to contact with marketing information
- OK to contact with third-party marketing information

- [ ] Preferred Contact Method (populated by the api, dropdown with 3 values)
- Text
- Email
- Phone
