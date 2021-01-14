# asurity-coding-project

## Backend Requirements
- [ ] .NET Core Web Api
- [ ] Stores contacts: create, edit, delete, and sorted.
- [ ] in memory database with 10 entries pre loaded.
- [ ] Set up so that controllers and database access can be easily unit tested. **It is not necessary to write any unit tests**
- [ ] All three dropdowns should pull all their values from the API—both database values and display values.
- [ ] Include a readme with instructions on how to run the application(s) and any other notable implementation considerations.

### Contact Data Points: 
- [ ] First Name
- [ ] Last Name
- [ ] City
- [ ] State
- [ ] Phone Number

## Front end Requirements
Must use Type Script and a framework of my choice (react).
Single page application
two views: a Grid that lists all contacts, a create/edit page for the contact information.
Create/ edit page should display error messages when data doesnt conform to the below specifications.

### Data Specifications
First Name (no more than 20 characters)
Last Name  (no more than 20 characters)
Email Address (validate that its a proper email, contains @ and .)

Street Address (no more than 100 characters)
City (no more than 50 characters)
State (populated by the api,should be a dropdown that displays the full state name and includes washington DC, but stores the abbreviation when saved)
Zipcode (no letters? not specified, 5 digits or greater)

Contact Frequency (populated by the api, dropdown with 3 values)
- Contact only about account information
- OK to contact with marketing information
- OK to contact with third-party marketing information

Preferred Contact Method (populated by the api, 
 -dropdown with 3 values)
- Text
- Email
- Phone







