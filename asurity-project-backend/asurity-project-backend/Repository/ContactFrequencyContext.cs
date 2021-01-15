using AsurityProjectBackend.Models;
using Microsoft.EntityFrameworkCore;

namespace AsurityProjectBackend.Repository
{
    public class ContactFrequencyContext: DbContext
    {
        public ContactFrequencyContext(DbContextOptions<ContactFrequencyContext> options) : base(options)
        {
        }

        public DbSet<ContactFrequency> ContactFrequencies { get; set; }
    }
}
