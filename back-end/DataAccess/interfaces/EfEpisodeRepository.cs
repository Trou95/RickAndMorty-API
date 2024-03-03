using Core.DataAccess.Repositories;
using DataAccess.Config;
using Entities;

namespace DataAccess.interfaces;

public class EfEpisodeRepository : EfRepositoryBase<Episode, long, DefaultContext>
{
    public EfEpisodeRepository(DefaultContext context) : base(context)
    {
        
    }
}