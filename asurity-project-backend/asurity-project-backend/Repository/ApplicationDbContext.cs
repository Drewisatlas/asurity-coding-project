using AsurityProjectBackend.Models;
using Microsoft.EntityFrameworkCore;
using Faker;
using System;
using asurityProjectBackend.Repository;

namespace AsurityProjectBackend.Repository
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
            Database.EnsureCreated();
        }

        public DbSet<Contact> Contacts { get; set; }
        public DbSet<ContactFrequency> ContactFrequencies { get; set; }
        public DbSet<ContactMethod> ContactMethods { get; set; }
        public DbSet<State> States { get; set; }

        //In memory data seeding
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //Populate Contact Frequencies
            modelBuilder.Entity<ContactFrequency>().HasData(new ContactFrequency() { Id = 1, Frequency = "Contact only about account information" });
            modelBuilder.Entity<ContactFrequency>().HasData(new ContactFrequency() { Id = 2, Frequency = "Ok to contact with marketing information" });
            modelBuilder.Entity<ContactFrequency>().HasData(new ContactFrequency() { Id = 3, Frequency = "OK to contact with third-party marketing information" });

            //Populate Contact Methods
            modelBuilder.Entity<ContactMethod>().HasData(new ContactMethod() { Id = 1, Method = "Text" });
            modelBuilder.Entity<ContactMethod>().HasData(new ContactMethod() { Id = 2, Method = "Email" });
            modelBuilder.Entity<ContactMethod>().HasData(new ContactMethod() { Id = 3, Method = "Phone" });

            //populate initial contacts
            Random rnd = new Random();

            for (int i = 1; i <= 10; i++)
            {
                modelBuilder.Entity<Contact>().HasData(new Contact()
                {
                    Id = i,
                    FirstName = Faker.Name.First(),
                    LastName = Faker.Name.Last(),
                    Email = Faker.Internet.Email(),
                    PhoneNumber = Faker.Phone.Number(),
                    StreetAddress = Faker.Address.StreetAddress(),
                    City = Faker.Address.City(),
                    State = Faker.Address.UsStateAbbr(),
                    Zipcode = Faker.Address.ZipCode(),
                    ContactFrequency = rnd.Next(1, 4),
                    ContactMethod = rnd.Next(1, 4)
                }) ;
            }

            //populate states
            var stateArray = StateArray.States();
            for (int i = 0; i < stateArray.Length; i++)
            {
                modelBuilder.Entity<State>().HasData(new State() { Id = i + 1, FullName = stateArray[i].Name, Abbreviation = stateArray[i].Abbreviations });
            }
        }
    }
}
