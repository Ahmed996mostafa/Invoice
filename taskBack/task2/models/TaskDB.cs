using Microsoft.EntityFrameworkCore;

namespace task2.models
{
    public class TaskDB : DbContext
    {
        public DbSet<InvoiceDetails> InvoicesDetails { get; set; }
        public DbSet<Unit> Units { get; set; }

        public TaskDB(DbContextOptions<TaskDB> options)
            : base(options)
        {
        }
    }
}
