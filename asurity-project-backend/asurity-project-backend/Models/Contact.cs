using System.ComponentModel.DataAnnotations;

namespace AsurityProjectBackend.Models
{
    public class Contact
    {
        [Key]
        public long Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public string StreetAddress { get; set; }
        public string City { get; set; }
        public string State { get; set; } //stores abbreviation
        public string Zipcode { get; set; }
        public long ContactFrequency { get; set; }
        public long ContactMethod { get; set; }
    }
}
