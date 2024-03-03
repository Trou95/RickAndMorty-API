using Core.DataAccess.Repositories;
using DataAccess.Config;
using DataAccess.interfaces;
using Entities;

namespace DataAccess;

public class EfEpisodeRepository : EfRepositoryBase<Episode, long, DefaultContext>, IEpisodeRepository
{
    public EfEpisodeRepository(DefaultContext context) : base(context)
    {
        
    }
    
}