using Core.DataAccess.Repositories;
using DataAccess.Config;
using DataAccess.interfaces;
using Entities;


namespace DataAccess;

public class EfCharacterRepository : EfRepositoryBase<Character, long, DefaultContext>, ICharacterRepository
{
    public EfCharacterRepository(DefaultContext context) : base(context)
    {
        
    }
}