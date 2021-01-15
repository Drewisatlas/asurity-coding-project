using AsurityProjectBackend.Models;
using Microsoft.EntityFrameworkCore;

namespace AsurityProjectBackend.Repository
{
    public class StateContext : DbContext
    {
        public StateContext(DbContextOptions<StateContext> options) : base(options)
        {
        }

        public DbSet<State> States { get; set; }
    }
}
