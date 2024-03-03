using System.Linq.Expressions;
using Business.Services.interfaces;
using Core.Pagination;
using Core.Services;
using DataAccess.interfaces;
using Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Query;

namespace Business.Services;

public class EpisodeService :  BaseService<Episode, long> , IEpisodeService
{
    private readonly IEpisodeRepository _episodeRepository;
    
    public EpisodeService(IEpisodeRepository episodeRepository)
        : base(episodeRepository)
    {
        _episodeRepository = episodeRepository;
    }

    public Episode? Get(Expression<Func<Episode, bool>> predicate, Func<IQueryable<Episode>, IIncludableQueryable<Episode, object>>? include = null)
    {
        var res = _episodeRepository.Get(predicate, (c) => c.Include(c => c.Characters));
        return res;
    }

    public PagedResult<Episode> GetAll(Func<IQueryable<Episode>, IIncludableQueryable<Episode, object>>? include = null, int pageNumber = 1, int pageSize = 10)
    {
        var res = _episodeRepository.GetAll((c) => c.Include(c => c.Characters));
        return res;
    }
}