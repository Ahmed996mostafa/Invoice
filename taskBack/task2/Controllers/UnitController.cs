using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using task2.models;

namespace task2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UnitController : ControllerBase
    {

        private readonly TaskDB  db;
        public UnitController(TaskDB _db)
        {
            db = _db;
        }

        [HttpGet]
        public List<Unit> getall()
        {
            return db.Units.ToList();
        }

        [HttpGet("{id:int}")]
        public ActionResult<Unit> getbyid(int id)
        {
            Unit s = db.Units.Find(id);
            if (s == null)
                return NotFound();
            else
                return s;
        }

        [HttpPost]
        public ActionResult add(Unit s)
        {
            if (s == null) return BadRequest();
            if (!ModelState.IsValid)
                return BadRequest();
            else
            {
                db.Units.Add(s);
                db.SaveChanges();
                return CreatedAtAction("getbyid", new { id = s.unitNO }, s);
            }

        }

        [HttpGet("{id}")]
        public IActionResult getUnitName(int id)
        {
            string Unitname = db.Units.FirstOrDefault(a => a.unitNO == id).unitName;
            return Ok(Unitname);
        }
    }
}
