using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace task2.models
{
    public class InvoiceDetails
    {
        [Key]
        public int Linenumber { get; set; }
        [Required ]
        [MinLength(3)]
        [MaxLength(20)]
        public string ProductName { get; set; }
        [Required]
        public decimal Price { get; set; }
        [Required]

        public decimal Quantity { get; set; }
        [Required]
        public DateTime ExpireDate { get; set; }

        public int UnitNo { get; set; }

        [ForeignKey("UnitNo")]

        public Unit Unit { get; set; } =new Unit(); 

    }
}
