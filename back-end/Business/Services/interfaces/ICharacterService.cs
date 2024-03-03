using System.Linq.Expressions;
using Core.Entities;
using Core.Pagination;
using Core.Services.interfaces;
using Entities;
using Microsoft.EntityFrameworkCore.Query;

namespace Business.Services.interfaces;

public interface ICharacterService : IBaseService<Character>
{
    Character? Get(Expression<Func<Character, bool>> predicate, Func<IQueryable<Character>, IIncludableQueryable<Character, object>>? include = null);
    
    PagedResult<Character> GetAll(Func<IQueryable<Character>, IIncludableQueryable<Character, object>>? include = null, int pageNumber = 1, int pageSize = 10);
}