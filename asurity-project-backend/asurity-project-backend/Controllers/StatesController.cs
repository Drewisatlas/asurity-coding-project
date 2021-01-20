using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using AsurityProjectBackend.Models;
using AsurityProjectBackend.Repository;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace asurityProjectBackend.Controllers
{
    [Route("api/states")]
    [ApiController]
    public class StatesController : ControllerBase
    {
        private readonly ApplicationDbContext _applicationDbContext;

        public StatesController(ApplicationDbContext applicationDbContext)
        {
            if (applicationDbContext == null)
            {
                throw new ArgumentNullException("Application Db Context");
            }

            _applicationDbContext = applicationDbContext;
        }

        // GET: api/States
        [HttpGet]
        public async Task<ActionResult<IEnumerable<State>>> GetStates()
        {
            return await _applicationDbContext.States.ToListAsync();
        }

        // GET: api/States/5
        [HttpGet("{id}")]
        public async Task<ActionResult<State>> GetState(long id)
        {
            var state = await _applicationDbContext.States.FindAsync(id);

            if (state == null)
            {
                return NotFound();
            }

            return state;
        }
        
    }
}
