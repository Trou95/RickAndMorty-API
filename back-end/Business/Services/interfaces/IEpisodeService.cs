using System.Linq.Expressions;
using Core.Entities;
using Core.Pagination;
using Core.Services.interfaces;
using Entities;
using Microsoft.EntityFrameworkCore.Query;

namespace Business.Services.interfaces;

public interface IEpisodeService : IBaseService<Episode>
{
    Episode? Get(Expression<Func<Episode, bool>> predicate, Func<IQueryable<Episode>, IIncludableQueryable<Episode, object>>? include = null);
    
    PagedResult<Episode> GetAll(Func<IQueryable<Episode>, IIncludableQueryable<Episode, object>>? include = null, int pageNumber = 1, int pageSize = 10);
}