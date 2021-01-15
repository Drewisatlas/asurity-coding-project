using AsurityProjectBackend.Models;
using Microsoft.EntityFrameworkCore;


namespace AsurityProjectBackend.Repository
{
    public class ContactContext: DbContext
    {
        public ContactContext(DbContextOptions<ContactContext> options) : base(options)
        {
        }

        public DbSet<Contact> Contacts { get; set; }
    }
}
