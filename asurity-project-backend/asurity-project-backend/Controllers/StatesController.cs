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
    [Route("api/states")]
    [ApiController]
    public class StatesController : ControllerBase
    {
        private readonly ApplicationDbContext _applicationDbContext;

        public StatesController(ApplicationDbContext applicationDbContext)
        {
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
