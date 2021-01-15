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
    [Route("api/contactMethods")]
    [ApiController]
    public class ContactMethodsController : ControllerBase
    {
        private readonly ContactMethodContext _contactMethodContext;

        public ContactMethodsController(ContactMethodContext contactMethodContext)
        {
            _contactMethodContext = contactMethodContext;
        }

        // GET: api/ContactMethod
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ContactMethod>>> GetContactMethods()
        {
            return await _contactMethodContext.ContactMethods.ToListAsync();
        }

        // GET: api/ContactMethod/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ContactMethod>> GetContactMethod(long id)
        {
            var contactMethod = await _contactMethodContext.ContactMethods.FindAsync(id);

            if (contactMethod == null)
            {
                return NotFound();
            }

            return contactMethod;
        }
    }
}
