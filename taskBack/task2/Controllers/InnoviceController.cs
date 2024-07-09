using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using task2.DTO;
using task2.models;

namespace task2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InnoviceController : ControllerBase
    {
        private readonly TaskDB db;

        public InnoviceController(TaskDB context)
        {
            db = context;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            var items = db.InvoicesDetails.Include(a => a.Unit).ToList();
            var invoiceDTOs = new List<InnoviceDTO>();

            foreach (var item in items)
            {
                invoiceDTOs.Add(new InnoviceDTO()
                {
                    linenumber=item.Linenumber,
                    expireDate = item.ExpireDate,
                    productName = item.ProductName,
                    price = item.Price,
                    quantity = item.Quantity,
                    UnitName = item.Unit.unitName,
                    unitno=item.UnitNo
                });
            }

            return Ok(invoiceDTOs);
        }

        [HttpGet("{id:int}")]
        public ActionResult<InnoviceDTO> getbyid(int id)
        {
            InvoiceDetails invo = db.InvoicesDetails.Include(a=>a.Unit).FirstOrDefault(a=>a.Linenumber==id);
            if (invo == null)
                return NotFound();
            else
            {
                InnoviceDTO invoDTO = new InnoviceDTO();
                invoDTO.price = invo.Price;
                invoDTO.linenumber = invo.Linenumber;
                invoDTO.expireDate=invo.ExpireDate;
                invoDTO.quantity=invo.Quantity;
                invoDTO.UnitName=invo.Unit.unitName;
                invoDTO.unitno=invo.Unit.unitNO;
                invoDTO.productName = invo.ProductName;


                return Ok(invoDTO);
            }
               
        }

        [HttpPost]
        public ActionResult add(InsertedInnoviceDTO innoviceDTO)
        {
            if (innoviceDTO == null) return BadRequest();
            if (!ModelState.IsValid)
                return BadRequest();
            else
            {
                InvoiceDetails invo = new InvoiceDetails();
                  invo.Price= innoviceDTO.price;
                invo.ProductName= innoviceDTO.productName ;   
              //  innoviceDTO.linenumber = invo.Linenumber;
                 invo.ExpireDate= innoviceDTO.expireDate ;
                invo.Quantity= innoviceDTO.quantity  ;
                 invo.Unit.unitName=innoviceDTO.UnitName ;
                 
                db.InvoicesDetails.Add(invo);
                db.SaveChanges();
                return CreatedAtAction("getbyid", new { id = invo.Linenumber }, invo);
            }

        }

        [HttpDelete("{id}")]
        public ActionResult delete(int id)
        {
            InvoiceDetails invo = db.InvoicesDetails.Find(id);
            if (invo == null) return NotFound();
            else
            {
                db.InvoicesDetails.Remove(invo);
                db.SaveChanges();
                return Ok(invo);
            }
        }

        [HttpPut("{id}")]
       
        public ActionResult edit(InsertedInnoviceDTO s, int id)
        {
            if (s == null) return BadRequest();

          
            var existingInvoice = db.InvoicesDetails.Include(i => i.Unit).FirstOrDefault(i => i.Linenumber == id);
            if (existingInvoice == null) return NotFound();

           
            existingInvoice.ProductName = s.productName;
            existingInvoice.Price = s.price;
            existingInvoice.Quantity = s.quantity;
            existingInvoice.ExpireDate = s.expireDate;
            existingInvoice.Unit.unitName = s.UnitName;
            existingInvoice.UnitNo = s.unitno;

            db.Entry(existingInvoice).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            db.SaveChanges();

            return NoContent();
        }
    }
}
