using System.ComponentModel.DataAnnotations.Schema;
using task2.models;

namespace task2.DTO
{
    public class InnoviceDTO
    {
        public int linenumber { set; get; }
        public string productName { set; get; }
        public decimal price { set; get; }
        public decimal quantity { set; get; }
        public DateTime expireDate { set; get; }

        public string UnitName { set; get; }

        public int unitno { set; get; }
    }


    public class InsertedInnoviceDTO
    {
        //public int linenumber { set; get; }
        public string productName { set; get; }
        public decimal price { set; get; }
        public decimal quantity { set; get; }
        public DateTime expireDate { set; get; }

        public string UnitName { set; get; }

        public int unitno { set; get; }
    }
}
