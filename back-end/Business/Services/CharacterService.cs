using System.Linq.Expressions;
using Business.Services.interfaces;
using Core.Pagination;
using Core.Services;
using DataAccess.interfaces;
using Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Query;

namespace Business.Services;

public class CharacterService :  BaseService<Character, long> , ICharacterService
{
    private readonly ICharacterRepository _characterRepository;
    
    public CharacterService(ICharacterRepository characterRepository)
        : base(characterRepository)
    {
        _characterRepository = characterRepository;
    }

    public Character? Get(Expression<Func<Character, bool>> predicate, Func<IQueryable<Character>, IIncludableQueryable<Character, object>>? include = null)
    {
        var res = _characterRepository.Get(predicate, (c) => c.Include(c => c.Episodes)
            .Include(c => c.Location)
            .Include(c => c.Origin));
        return res;
    }

    public PagedResult<Character> GetAll(Func<IQueryable<Character>, IIncludableQueryable<Character, object>>? include = null, int pageNumber = 1, int pageSize = 10)
    {
        var res = _characterRepository.GetAll((c) => c.Include(c => c.Episodes)
            .Include(c => c.Location)
            .Include(c => c.Origin), pageNumber, pageSize);
        return res;
    }
}