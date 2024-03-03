using Entities;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace DataAccess.Config;

public class DefaultContext : IdentityDbContext
{
    public DefaultContext(DbContextOptions<DefaultContext> options) : base(options)
    {
        
    }
    
    public DbSet<Character> Characters { get; set; }
    public DbSet<Episode> Episodes { get; set; }
}