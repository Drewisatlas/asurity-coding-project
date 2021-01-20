using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AsurityProjectBackend.Models;
using AsurityProjectBackend.Repository;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace asurityProjectBackend.Controllers
{
    [Route("api/contacts")]
    [ApiController]
    public class ContactsController : ControllerBase
    {
        private readonly ApplicationDbContext _applicationDbContext;

        public ContactsController(ApplicationDbContext applicationDbContext)
        {
            if (applicationDbContext == null)
            {
                throw new ArgumentNullException("Application Db Context");
            }
            //maybe add logging if there is time
            _applicationDbContext = applicationDbContext;
        }

        // GET: api/Contacts
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Contact>>> GetContacts()
        {
            return await _applicationDbContext.Contacts.ToListAsync();
        }

        // GET: api/Contacts/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Contact>> GetContact(long id)
        {
            var contact = await _applicationDbContext.Contacts.FindAsync(id);

            if (contact == null)
            {
                return NotFound();
            }

            return contact;
        }

        // PUT: api/Contacts/5
        [HttpPut("{id}")]
        public async Task<ActionResult<Contact>> PutContact(long id, Contact contact)
        {
            if (id != contact.Id)
            {
                return BadRequest();
            }

            _applicationDbContext.Entry(contact).State = EntityState.Modified;

            try
            {
                await _applicationDbContext.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ContactExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return contact;
        }

        // POST: api/Contacts
        [HttpPost]
        public async Task<ActionResult<Contact>> PostContact(Contact contact)
        {
            _applicationDbContext.Contacts.Add(contact);
            await _applicationDbContext.SaveChangesAsync();

            return CreatedAtAction(nameof(GetContact), new { id = contact.Id }, contact);
        }

        // DELETE: api/Contacts/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteContact(long id)
        {
            var contact = await _applicationDbContext.Contacts.FindAsync(id);
            if (contact == null)
            {
                return NotFound();
            }

            _applicationDbContext.Contacts.Remove(contact);
            await _applicationDbContext.SaveChangesAsync();

            return NoContent();
        }

        private bool ContactExists(long id)
        {
            return _applicationDbContext.Contacts.Any(e => e.Id == id);
        }
    }
}
