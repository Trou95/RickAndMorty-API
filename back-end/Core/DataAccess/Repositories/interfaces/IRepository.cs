using System.Linq.Expressions;
using Core.Entities;
using Core.Pagination;
using Microsoft.EntityFrameworkCore.Query;


namespace Core.DataAccess.Repositories.interfaces;

public interface IRepository<TEntity, TEntityId>
    where TEntity : BaseEntity<TEntityId>, new()
{
    TEntity Add(TEntity entity);
    
    TEntity Update(TEntity entity);
    
    void Delete(TEntity entity);

    TEntity? Get(Expression<Func<TEntity, bool>> predicate, Func<IQueryable<TEntity>, IIncludableQueryable<TEntity, object>>? include = null);
    
    TEntity?  Filter(Expression<Func<TEntity, bool>>[] filters, Func<IQueryable<TEntity>, IIncludableQueryable<TEntity, object>>? include = null);
    
    PagedResult<TEntity> GetAll(Func<IQueryable<TEntity>, IIncludableQueryable<TEntity, object>>? include = null, int pageNumber = 1, int pageSize = 10);
    
}