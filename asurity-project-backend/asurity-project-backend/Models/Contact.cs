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
        //public string State { get; set; } //not sure how to best represent the dropdowns, maybe a state enum or class
        public string Zipcode { get; set; }
        //public string ContactFrequency { get; set; }
        //public string ContactMethod { get; set; }
    }
}
