using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AsurityProjectBackend.Models;
using AsurityProjectBackend.Repository;

namespace asurityProjectBackend.Controllers
{
    [Route("api/contactFrequencies")]
    [ApiController]
    public class ContactFrequenciesController : ControllerBase
    {
        private readonly ContactFrequencyContext _contactFrequencyContext;

        public ContactFrequenciesController(ContactFrequencyContext contactFrequencyContext)
        {
            _contactFrequencyContext = contactFrequencyContext;
        }

        // GET: api/ContactFrequencies
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ContactFrequency>>> GetContactFrequencies()
        {
            return await _contactFrequencyContext.ContactFrequencies.ToListAsync();
        }

        // GET: api/ContactFrequencies/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ContactFrequency>> GetContactFrequency(long id)
        {
            var contactFrequency = await _contactFrequencyContext.ContactFrequencies.FindAsync(id);

            if (contactFrequency == null)
            {
                return NotFound();
            }

            return contactFrequency;
        }
    }
}