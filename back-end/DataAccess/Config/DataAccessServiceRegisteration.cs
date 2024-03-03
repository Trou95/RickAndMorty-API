using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

namespace DataAccess.Config;

public static class DataAccessServiceRegisteration
{
    public static void AddDataAccessServices(this IServiceCollection services, IConfiguration configuration)
    {
        services.AddDbContext<DefaultContext>(options =>
        {
            options.UseSqlServer(configuration.GetConnectionString("DefaultConnection"));
        });
    }
}