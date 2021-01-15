using AsurityProjectBackend.Models;
using Microsoft.EntityFrameworkCore;

namespace AsurityProjectBackend.Repository
{
    public class ContactMethodContext : DbContext
    {
        public ContactMethodContext( DbContextOptions<ContactMethodContext> options) : base(options)
        {
        }

        public DbSet<ContactMethod> ContactMethods { get; set; }
    }
}
