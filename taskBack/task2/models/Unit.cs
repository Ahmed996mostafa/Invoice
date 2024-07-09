using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace task2.models
{
    public class Unit
    {
        [Key] 
        public int unitNO { get; set; }
        [Required]
        [MinLength(3)]
        [MaxLength(20)]
        public string unitName { get; set; }
        [JsonIgnore]
        public InvoiceDetails invoiceDetails { get; set; }
    }
}
