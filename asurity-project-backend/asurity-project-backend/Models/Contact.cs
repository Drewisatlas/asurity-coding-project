using System;
namespace AsurityProjectBackend.Models
{
    public class Contact
    {
        public Guid Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string StreetAddress { get; set; }
        public string City { get; set; }
        public string State { get; set; } //stores abbreviation
        public string Zipcode { get; set; }
        public ContactFrequency ContactFrequency { get; set; }
        public ContactMethod ContactMethod { get; set; }
    }
}
